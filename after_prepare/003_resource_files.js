#!/usr/bin/env node

//Set project folders
var iOSProjectFolder = 'Hello World';

//Set path to the file what you want to copy and the destination folder
var filestocopy = [

    //Config files and libraries
    { "config/android/res/xml/config.xml": "platforms/android/res/xml/config.xml" },
    { "config/android/AndroidManifest.xml": "platforms/android/AndroidManifest.xml" },

    // Android Icons and Splashscreens
    { "config/android/res/drawable/icon.png": "platforms/android/res/drawable/icon.png" },
    { "config/android/res/drawable-hdpi/icon.png": "platforms/android/res/drawable-hdpi/icon.png" },
    { "config/android/res/drawable-land-hdpi/screen.png": "platforms/android/res/drawable-land-hdpi/screen.png" },
    { "config/android/res/drawable-land-ldpi/screen.png": "platforms/android/res/drawable-land-ldpi/screen.png" },
    { "config/android/res/drawable-land-mdpi/screen.png": "platforms/android/res/drawable-land-mdpi/screen.png" },
    { "config/android/res/drawable-land-xhdpi/screen.png": "platforms/android/res/drawable-land-xhdpi/screen.png" },
    { "config/android/res/drawable-ldpi/icon.png": "platforms/android/res/drawable-ldpi/icon.png" },
    { "config/android/res/drawable-mdpi/icon.png": "platforms/android/res/drawable-mdpi/icon.png" },
    { "config/android/res/drawable-port-hdpi/screen.png": "platforms/android/res/drawable-port-hdpi/screen.png" },
    { "config/android/res/drawable-port-ldpi/screen.png": "platforms/android/res/drawable-port-ldpi/screen.png" },
    { "config/android/res/drawable-port-mdpi/screen.png": "platforms/android/res/drawable-port-mdpi/screen.png" },
    { "config/android/res/drawable-port-xhdpi/screen.png": "platforms/android/res/drawable-port-xhdpi/screen.png" },
    { "config/android/res/drawable-xhdpi/icon.png": "platforms/android/res/drawable-xhdpi/icon.png" },
    { "config/android/res/drawable-xxhdpi/icon.png": "platforms/android/res/drawable-xxhdpi/icon.png" },

    // iOS Icons
    { "config/ios/icons/icon-40.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-40.png" },
    { "config/ios/icons/icon-40@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-40@2x.png" },
    { "config/ios/icons/Icon-40@3x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/Icon-40@3x.png" },
    { "config/ios/icons/icon-50.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-50.png" },
    { "config/ios/icons/icon-50@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-50@2x.png" },
    { "config/ios/icons/icon-60.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-60.png" },
    { "config/ios/icons/icon-60@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-60@2x.png" },
    { "config/ios/icons/Icon-60@3x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/Icon-60@3x.png" },
    { "config/ios/icons/icon-72.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-72.png" },
    { "config/ios/icons/icon-72@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-72@2x.png" },
    { "config/ios/icons/icon-76.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-76.png" },
    { "config/ios/icons/icon-76@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon-76@2x.png" },
    { "config/ios/icons/Icon-83.5@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/Icon-83.5@2x.png" },
    { "config/ios/icons/Icon-Small.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/Icon-Small.png" },
    { "config/ios/icons/Icon-Small@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/Icon-Small@2x.png" },
    { "config/ios/icons/Icon-Small@3x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/Icon-Small@3x.png" },
    { "config/ios/icons/icon.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon.png" },
    { "config/ios/icons/icon@2x.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/icons/icon@2x.png" },

    // iOS Splashscreens
    { "config/ios/splash/Default-568h@2x~iphone.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-568h@2x~iphone.png" },
    { "config/ios/splash/Default-667h.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-667h.png" },
    { "config/ios/splash/Default-736h.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-736h.png" },
    { "config/ios/splash/Default-Landscape-736h.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-Landscape-736h.png" },
    { "config/ios/splash/Default-Landscape@2x~ipad.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-Landscape@2x~ipad.png" },
    { "config/ios/splash/Default-Landscape~ipad.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-Landscape~ipad.png" },
    { "config/ios/splash/Default-Portrait@2x~ipad.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-Portrait@2x~ipad.png" },
    { "config/ios/splash/Default-Portrait~ipad.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default-Portrait~ipad.png" },
    { "config/ios/splash/Default@2x~iphone.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default@2x~iphone.png" },
    { "config/ios/splash/Default~iphone.png": "platforms/ios/"+ iOSProjectFolder + "/Resources/splash/Default~iphone.png" },
];

var fs = require('fs');
var path = require('path');
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
        }
    });
});
