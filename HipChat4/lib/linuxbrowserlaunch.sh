#!/bin/bash

launchUrl () {
        if command -v $1
        then
            echo "launching $1 $2"
            $1 $2
            return 0
        else
            return 200
        fi
}

export LD_LIBRARY_PATH=$HIPCHAT_LD_LIBRARY_PATH
export QT_PLUGIN_PATH=$HIPCHAT_QT_PLUGIN_PATH

launchUrl xdg-open $1 || launchUrl firefox $1 || launchUrl google-chrome $1 || launchUrl opera $1 || launchUrl rekonq $1 || launchUrl konqueror $1 || launchUrl epiphany $1
