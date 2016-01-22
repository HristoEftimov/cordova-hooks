#!/usr/bin/env node

//List of the plugins that have to install
var pluginlist = [
    "cordova-plugin-inappbrowser",
    "cordova-plugin-whitelist",
    "cordova-plugin-device",
];

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});
