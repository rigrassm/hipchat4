// http://blog.powdahound.com/post/132559120/focus-first-empty-input-element-using-jquery
function focusFirstInput(node, includeSelect) {
  var input = null;
  var selector = ":input[value='']:not(.nofocus):visible:enabled, .error :input:not(.nofocus):visible:enabled";
  if (includeSelect) {
    selector += ", select:not(.nofocus):visible:enabled";
  }

  if (!node) {
    input = $(selector)[0];
  } else {
    input = $(node).find(selector)[0];
  }

  // If we found something, focus and select text within it
  if (input) {
    input.focus();
    if (typeof input.select == 'function') {
      input.select();
    }
  }

}

// Focus first input on load
$(function() {
  focusFirstInput();
});

// Setup any default text in input fields
$(function() {
    $(".defaultText").focus(function(srcc) {
        if ($(this).val() == $(this)[0].title) {
            $(this).removeClass("defaultTextActive");
            $(this).val("");
        }
    });

    $(".defaultText").blur(function() {
        if ($(this).val() == "") {
            $(this).addClass("defaultTextActive");
            $(this).val($(this)[0].title);
        }
    });

    $(".defaultText").blur();

    // Remove default text on form submit
    $("form").submit(function() {
      $(".defaultText").each(function() {
        if($(this).val() == this.title) {
          $(this).val("");
        }
      });
    });

});

$(document).bind('hipchat.load', function() {
  // setup lightboxes once page (and lightbox extension) are loaded
  var lbs = $('a[rel="lightbox"]');
  if (lbs.length > 0) {
    lbs.nyroModal();
  }
});

// retina image replacement
$(document).ready(function() {
  if (window.devicePixelRatio > 1) {
    $("img.2x-available").each(function(i, elem) {
      elem = $(elem);
      elem.attr('src', elem.attr('src').replace(".png", "@2x.png"));
    });
  }
});

function addFormError(inputElem, text) {
  inputElem = $(inputElem);
  parentCell = inputElem.parents('td');
  parentRow = parentCell.parent();
  parentRow.addClass('error');
  parentCell.children('.error').remove();
  parentCell.append('<span class="error">'+text+'</span>');
  inputElem.focus();
}

function removeFormError(inputElem) {
  inputElem = $(inputElem);
  parentCell = inputElem.parents('td');
  parentRow = parentCell.parent();
  parentRow.removeClass('error');
  parentCell.children('.error').remove();
}

function addFormSuccess(inputElem, text) {
  inputElem = $(inputElem);
  parentCell = inputElem.parents('td');
  parentRow = parentCell.parent();
  parentRow.addClass('success');
  parentCell.children('.success').remove();
  parentCell.append('<span class="success">'+text+'</span>');
  inputElem.focus();
}

function removeFormSuccess(inputElem) {
  inputElem = $(inputElem);
  parentCell = inputElem.parents('td');
  parentRow = parentCell.parent();
  parentRow.removeClass('success');
  parentCell.children('.success').remove();
}

function show_flash(msg) {
  $('p.flash').html(msg);
}

function show_flash_notice(msg) {
  $('p.flash_notice').html(msg);
}

function show_flash_err(msg) {
  $('p.flash_err').html(msg);
}

function escape_html(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

/**
 * Prevent this form from being submitted multiple times.
 *
 * Use by setting form's onsubmit="return single_form_submit(this);"
 */
function single_form_submit(form_elem) {
  form_elem = $(form_elem);
  if (form_elem.attr('was_submitted') !== undefined) {
    return false;
  }
  form_elem.attr('was_submitted', true);
  return true;
}

function only_show_if_selected_match(selector, value, thing_to_show) {
  selector.change(function() {
    if (selector.val() == value) {
      thing_to_show.removeClass("hidden");
    } else {
      thing_to_show.addClass("hidden");
    }
  });
  selector.change();
}

$('.editable').attr('title','Click to edit').click(handleInlineEdit);

/*
* Inline edit component
*
* Usage: a span or div with the "editable" class will become an inline-editable
* field when the user clicks on the content. The data-editable attribute should contain
* a json with the following:
*
*   {
*     "name": "name of the field used when submitted" (required),
*     "x-hidden_field_1": "somevalue... example: x-xsrf_token, x-client_id, etc.",
*     "type": "text" (defaults to "text"),
*     "errorTitle": "Error notification title used when request fails",
*     "method": "GET, POST, etc." (defaults to "POST"),
*     "action": "URI to send the request to" (defaults to location.pathname),
*   }
*
* */
function handleInlineEdit() {
  var $this = $(this);
  var data = $this.data('editable');
  data.value = $this.text();
  data.type = data.type || 'text';
  data.action = data.action || location.pathname;
  data.method = data.method || 'POST';
  data.classes = data.classes || '';

  data['buttons:html'] = AJS.template.load('inline-edit-form-submit');
  data['hidden:html'] = '';
  for (item in data){
    if(/^x\-/.test(item)) {
      var name = item.substr(2);
      data['hidden:html'] += AJS.template.load('inline-edit-form-text').fill({type:'hidden', classes:'', name: name, value: data[item]});
    }
  }
  switch (data.type) {
    case 'text':
    default:
      data['fields:html'] = AJS.template.load('inline-edit-form-text').fill(data);

  }
  var tform = AJS.template.load('inline-edit-form').fill(data);

  $this.hide();
  var inlineEdit = $(tform.toString()).insertAfter($this);
  $('input',inlineEdit).select();

  function restoreState(){
    inlineEdit.remove();
    $this.show();
    return false;
  }

  $('.cancel',inlineEdit).click(restoreState);

  $(inlineEdit).on('submit',function(e){
    var oldVal = $this.text();
    var newVal = $('input[name="'+data.name+'"]', inlineEdit).val();
    if (newVal == oldVal) return restoreState();
    $this.html(newVal);
    var $form = $(this);
    var fparms = $form.serializeArray();
    var payload = {};
    for (var parm in fparms) {
      var obj = fparms[parm];
      payload[obj.name] = obj.value;
    }
    $.ajax({
      type: data.method,
      dataType: 'json',
      data: payload
    }).fail(function(e) {
      if (e.status == 200) return restoreState();
      AJS.messages.error('.aui-page-panel-content',{
        title: data.errorTitle,
        body: /^</.test(e.responseText) ? '': e.responseText,
        insert: 'prepend'
      });
      $this.html(oldVal);
    }).success(function(){
      e.preventDefault();
      return restoreState();
    });
    return false;
  });
}

function replaceImageWithRetina(img) {
  var src = img.getAttribute('src'),
      ext = src.split('.').pop(),
      resolution = window.devicePixelRatio;
  if (resolution && resolution > 1) {
    var image = new Image();
    image.onload = function() {
      img.src = src.replace('.' + ext, '@' + resolution + 'x.' + ext);
    };
    image.src = src.replace('.' + ext, '@' + resolution + 'x.' + ext);
  }
}

$(document).on('ready', function (e) {
  $('.emoticon-block img').each(function (i, img) {
    replaceImageWithRetina(img);
  });
});

// Sliding nav
(function() {
    function toggleMenuDisplay() {
        if ($(".sliding-nav").hasClass("nav-open")) {
            $('.sliding-nav').removeClass("nav-open");
            $(".sliding-nav-trigger").find(".aui-icon").removeClass("aui-iconfont-close-dialog").addClass("aui-iconfont-appswitcher");
        } else {
            $('.sliding-nav').addClass("nav-open");
            $(".sliding-nav-trigger").find(".aui-icon").removeClass("aui-iconfont-appswitcher").addClass("aui-iconfont-close-dialog");
        }
    }

    $(document).ready(function () {
        $(".sliding-nav-trigger").click(function () {
            toggleMenuDisplay();
        });
    });
})();
