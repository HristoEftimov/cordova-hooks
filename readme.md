#Sample Cordova Hooks

A sample list of cordova hooks that you can use in every project.

The cordova hooks are helpful piece of code that can save you a lot of time when you are joining in a project or have to reinstall a platform.

You can read more about the hooks [here](https://cordova.apache.org/docs/en/dev/guide/appdev/hooks/)

#How to use

All that you have to do is to create `hooks` and `config` folders in the root directory.
- in `config` folder you have to store all configuration files, icons, splashscreens and etc.
- in `hooks` folder you have to create different subfolders based on the statement that you need. In these subfolders you will store you hook scripts.

Here is an example structure of cordova project.
```
├── config/
│   │
│   ├── android/
│   │   ├── AndroidManifest.xml
│   │   ├── libs/
│   │   ├── res/
│   │
│   ├── ios/
│   │   ├── icons/
│   │   ├── splash/
│
├── hooks/
│   │
│   ├── after_platform_add/
│   │   ├── 001_install_plugins.js
│   │   ├── 002_modify_plist.sh
│   │
│   ├── after_prepare/
│   │   ├── 030_resource_files.js
│
├── www/
│
├── plugins/
│
├── platforms/
│
```

#Plugins
- *001_install_plugins.js* - automatically download and install a plugin
- *002_modify_plist.sh* - modify the Info.plist file ( used only in iOS platform )
- *003_resource_files.js* - copy all resource and configuration files

#Sources
- [devgirl.org](http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/)
- [stackoverflow](http://stackoverflow.com/)
