#!/bin/bash

PLIST=platforms/ios/*/*-Info.plist

cat << EOF |
# Add hidden property for the iOS status bar
Add :UIStatusBarHidden bool YES
Add :UIViewControllerBasedStatusBarAppearance bool NO

EOF
while read line
do
    /usr/libexec/PlistBuddy -c "$line" $PLIST
done

true