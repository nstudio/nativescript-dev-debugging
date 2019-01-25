function getPluginPreDefinedScripts(srcPath, demoFolder, demoAngularFolder, demoVueFolder, pluginPlatformFolder, pluginIosSrcFolder, pluginAndroidSrcFolder, androidLibraryName, provisioningProfile) {
    var provisioningParam = "";
    if (provisioningProfile && provisioningProfile != "none") {
        provisioningParam = " --provision " + provisioningProfile;
    }

    return [{
        key: "nd.help",
        value: "node node_modules/nativescript-dev-debugging/scripts/help.js",
        description: "Display the help section, available commands etc.",
        category: "help"
    },
    {
        key: "nd.config",
        value: "node node_modules/nativescript-dev-debugging/index.js",
        description: "Start the interactive configuration of the 'nativescript-dev-debugging' plugin",
        category: "help"
    },
    {
        key: "nd.run",
        value: "node node_modules/nativescript-dev-debugging/scripts/run.js",
        description: "Interactive run. Provided guide execution of the main commands",
        category: "main"
    },
    {
        key: "nd.build.release",
        value: "npm run nd.build.release.native.ios && npm run nd.build.release.native.android",
        description: "Executes scripts that will build your native iOS and Android source code (for release) and move it to the 'platforms' folder of your NS plugin",
        category: "build"
    },
    {
        key: "nd.build.simulator",
        value: "npm run nd.build.simulator.native.ios && npm run nd.build.native.android",
        description: "Executes scripts that will build your native iOS (for simulator) and Android source code (for debug) and move it to the 'platforms' folder of your NS plugin",
        category: "build"
    },
    {
        key: "nd.build.device",
        value: "npm run nd.build.device.native.ios && npm run nd.build.native.android",
        description: "Executes scripts that will build your native iOS (for real device) and Android source code (for debug) and move it to the 'platforms' folder of your NS plugin",
        category: "build"
    },
    {
        key: "nd.demo.android",
        value: "npm run nd.build.native.android && npm run nd.open.android.studio && npm run nd.demo.tns.run.android",
        description: "Runs your 'demo' app and opens Android Studio. After that use 'Attach debugger to Android process (demo)' to debug the native source code",
        category: "main android debugNative",
        shortCommands: ["demo android simulator attach", "demo android device attach"]
    },
    {
        key: "nd.demo.ios",
        value: "npm run nd.build.simulator.native.ios && npm run nd.open.xcode && npm run nd.demo.tns.run.ios",
        description: "Runs your 'demo' app and opens Xcode. After that use 'Attach to process by PID or Name (demo)' to debug the native source code. (for simulator)",
        category: "main ios debugNative",
        shortCommands: ["demo ios simulator attach"]
    },
    {
        key: "nd.demo.ios.device",
        value: "npm run nd.build.device.native.ios && npm run nd.open.xcode && npm run nd.demo.tns.run.ios",
        description: "Runs your 'demo' app and opens Xcode. After that use 'Attach to process by PID or Name (demo)' to debug the native source code. (for real device)",
        category: "main ios debugNative",
        shortCommands: ["demo ios device attach"]
    },
    {
        key: "nd.demo.angular.android",
        value: "npm run nd.build.native.android && npm run nd.open.android.studio && npm run nd.demo.angular.tns.run.android",
        description: "Runs your 'demo-angular' app and opens Android Studio. After that use 'Attach debugger to Android process (demo)' to debug the native source code",
        category: "main android debugNative",
        shortCommands: ["demo-angular android simulator attach", "demo-angular android device attach"]
    },
    {
        key: "nd.demo.angular.ios",
        value: "npm run nd.build.simulator.native.ios && npm run nd.open.xcode && npm run nd.demo.angular.tns.run.ios",
        description: "Runs your 'demo-angular' app and opens Xcode. After that use 'Attach to process by PID or Name (demo)' to debug the native source code. (for simulator)",
        category: "main ios debugNative",
        shortCommands: ["demo-angular ios simulator attach"]
    },
    {
        key: "nd.demo.angular.ios.device",
        value: "npm run nd.build.device.native.ios && npm run nd.open.xcode && npm run nd.demo.angular.tns.run.ios",
        description: "Runs your 'demo-angular' app and opens Xcode. After that use 'Attach to process by PID or Name (demo)' to debug the native source code. (for real device)",
        category: "main ios debugNative",
        shortCommands: ["demo-angular ios device attach"]
    },
    {
        key: "nd.demo.vue.android",
        value: "npm run nd.build.native.android && npm run nd.open.android.studio && npm run nd.demo.vue.tns.run.android",
        description: "Runs your 'demo-vue' app and opens Android Studio. After that use 'Attach debugger to Android process (demo)' to debug the native source code",
        category: "main android debugNative",
        shortCommands: ["demo-vue android simulator attach", "demo-vue android device attach"]
    },
    {
        key: "nd.demo.vue.ios",
        value: "npm run nd.build.simulator.native.ios && npm run nd.open.xcode && npm run nd.demo.vue.tns.run.ios",
        description: "Runs your 'demo-vue' app and opens Xcode. After that use 'Attach to process by PID or Name (demo)' to debug the native source code. (for simulator)",
        category: "main ios debugNative",
        shortCommands: ["demo-vue ios simulator attach"]
    },
    {
        key: "nd.demo.vue.ios.device",
        value: "npm run nd.build.device.native.ios && npm run nd.open.xcode && npm run nd.demo.vue.tns.run.ios",
        description: "Runs your 'demo-vue' app and opens Xcode. After that use 'Attach to process by PID or Name (demo)' to debug the native source code. (for real device)",
        category: "main ios debugNative",
        shortCommands: ["demo-vue ios device attach"]
    },
    {
        key: "nd.open.xcode",
        value: "cd " + pluginIosSrcFolder + " && open *.xcodeproj && cd " + srcPath,
        description: "Opens your plugin's native iOS source code in Xcode",
        category: "secondary"
    },
    {
        key: "nd.open.android.studio",
        value: "open -a /Applications/Android\\ Studio.app " + pluginAndroidSrcFolder,
        description: "Opens your plugin's native Android source code in Android Studio",
        category: "secondary"
    },
    {
        key: "nd.native.debugger.android",
        value: "npm run nd.build.native.android && npm run nd.open.android.studio",
        description: "Rebuilds the plugin's native source code and opens it in Android Studio",
        category: "secondary"
    },
    {
        key: "nd.native.debugger.ios",
        value: "npm run nd.build.simulator.native.ios && npm run nd.open.xcode && cd " + srcPath,
        description: "Rebuilds the plugin's native source code and opens it in Xcode. (for simulator)",
        category: "secondary"
    },
    {
        key: "nd.native.debugger.ios.device",
        value: "npm run nd.build.device.native.ios && npm run nd.open.xcode && cd " + srcPath,
        description: "Rebuilds the plugin's native source code and opens it in Xcode. (for real device)",
        category: "secondary"
    },
    {
        key: "nd.prepare.demo.app.ios",
        value: "cd " + demoFolder + " && tns prepare ios",
        description: "Executes 'tns prepare ios' for the 'demo' app",
        category: "secondary"
    },
    {
        key: "nd.prepare.demo.app.android",
        value: "cd " + demoFolder + " && tns prepare android",
        description: "Executes 'tns prepare android' for the 'demo' app",
        category: "secondary"
    },
    {
        key: "nd.prepare.demo.angular.app.ios",
        value: "cd " + demoAngularFolder + " && tns prepare ios",
        description: "Executes 'tns prepare ios' for the 'demo angular' app",
        category: "secondary"
    },
    {
        key: "nd.prepare.demo.angular.app.android",
        value: "cd " + demoAngularFolder + " && tns prepare android",
        description: "Executes 'tns prepare android' for the 'demo angular' app",
        category: "secondary"
    },
    {
        key: "nd.prepare.demo.vue.app.ios",
        value: "cd " + demoVueFolder + " && tns prepare ios",
        description: "Executes 'tns prepare ios' for the 'demo vue' app",
        category: "secondary"
    },
    {
        key: "nd.prepare.demo.vue.app.android",
        value: "cd " + demoVueFolder + " && tns prepare android",
        description: "Executes 'tns prepare android' for the 'demo vue' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.device.demo.app.ios",
        value: "npm run nd.build.device.native.ios" + " && npm run nd.demo.tns.run.ios",
        description: "Executes 'tns run ios' for the 'demo' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.simulator.demo.app.ios",
        value: "npm run nd.build.simulator.native.ios" + " && npm run nd.demo.tns.run.ios",
        description: "Executes 'tns run ios' for the 'demo' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.demo.app.android",
        value: "npm run nd.build.native.android" + " && npm run nd.demo.tns.run.android",
        description: "Executes 'tns run android' for the 'demo' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.demo.angular.app.ios",
        value: "npm run nd.build.device.native.ios " + " && npm run nd.demo.tns.run.ios",
        description: "Executes 'tns run ios' for the 'demo angular' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.simulator.demo.angular.app.ios",
        value: "npm run nd.build.simulator.native.ios " + " && npm run nd.demo.tns.run.ios",
        description: "Executes 'tns run ios' for the 'demo angular' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.demo.angular.app.android",
        value: "npm run nd.build.native.android " + " && npm run nd.demo.angular.tns.run.android",
        description: "Executes 'tns run android' for the 'demo angular' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.demo.vue.app.ios",
        value: "npm run nd.build.device.native.ios " + " && npm run nd.demo.vue.tns.run.ios",
        description: "Executes 'tns run ios' for the 'demo vue' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.simulator.demo.vue.app.ios",
        value: "npm run nd.build.simulator.native.ios " + " && npm run nd.demo.vue.tns.run.ios",
        description: "Executes 'tns run ios' for the 'demo vue' app",
        category: "secondary"
    },
    {
        key: "nd.build.run.demo.vue.app.android",
        value: "npm run nd.build.native.android " + " && npm run nd.demo.vue.tns.run.android",
        description: "Executes 'tns run android' for the 'demo vue' app",
        category: "secondary"
    },
    {
        key: "nd.demo.prepare.watch.ios",
        value: "npm-watch nd.prepare.demo.app.ios",
        description: "Triggers file watcher for the 'Demo' app source code, when change is detected rebuilds ('tns prepare ios') the 'demo' app for iOS",
        category: "secondary"
    },
    {
        key: "nd.demo.prepare.watch.android",
        value: "npm-watch nd.prepare.demo.app.android",
        description: "Triggers file watcher for the 'Demo' app source code, when change is detected rebuilds ('tns prepare android') the 'demo' app for android",
        category: "secondary"
    },
    {
        key: "nd.demo.prepare.angular.watch.ios",
        value: "npm-watch nd.prepare.demo.angular.app.ios",
        description: "Triggers file watcher for the 'Demo-Angular' app source code, when change is detected rebuilds ('tns prepare ios') the 'demo' app for iOS",
        category: "secondary"
    },
    {
        key: "nd.demo.prepare.angular.watch.android",
        value: "npm-watch nd.prepare.demo.angular.app.android",
        description: "Triggers file watcher for the 'Demo-Angular' app source code, when change is detected rebuilds ('tns prepare android') the 'demo' app for android",
        category: "secondary"
    },
    {
        key: "nd.demo.prepare.vue.watch.ios",
        value: "npm-watch nd.prepare.demo.vue.app.ios",
        description: "Triggers file watcher for the 'Demo-Vue' app source code, when change is detected rebuilds ('tns prepare ios') the 'demo' app for iOS",
        category: "secondary"
    },
    {
        key: "nd.demo.prepare.vue.watch.android",
        value: "npm-watch nd.prepare.demo.vue.app.android",
        description: "Triggers file watcher for the 'Demo-Vue' app source code, when change is detected rebuilds ('tns prepare android') the 'demo' app for android",
        category: "secondary"
    },
    {
        key: "nd.demo.run.watch.android",
        value: "npm run nd.open.android.studio && npm-watch nd.build.run.demo.app.android",
        description: "Triggers file watcher for the native Android source code, when change is detected the 'demo' app is build and deployed. Useful to debug and develop your plugin's Android source code",
        category: "main android developNative",
        shortCommands: ["demo android simulator attach & watch", "demo android device attach & watch"]
    },
    {
        key: "nd.demo.run.watch.ios",
        value: "npm run nd.open.xcode && npm-watch nd.build.run.simulator.demo.app.ios",
        description: "Triggers file watcher for the native iOS source code, when change is detected the 'demo' app is build and deployed. Useful to debug and develop your plugin's iOS source code",
        category: "main ios developNative",
        shortCommands: ["demo ios simulator attach & watch"]
    },
    {
        key: "nd.demo.run.watch.device.ios",
        value: "npm run nd.open.xcode && npm-watch nd.build.run.device.demo.app.ios",
        description: "Triggers file watcher for the native iOS source code, when change is detected the 'demo' app is build and deployed on real device. Useful to debug and develop your plugin's iOS source code",
        category: "main ios developNative",
        shortCommands: ["demo ios device attach & watch"]
    },
    {
        key: "nd.demo.angular.run.watch.android",
        value: "npm run nd.open.android.studio && npm-watch nd.build.run.demo.angular.app.android",
        description: "Triggers file watcher for the native Android source code, when change is detected rebuilds the 'demo' app is build and deployed. Useful to debug and develop your plugin's Android source code",
        category: "main android developNative",
        shortCommands: ["demo-angular android simulator attach & watch", "demo-angular android device attach & watch"]
    },
    {
        key: "nd.demo.angular.run.watch.ios",
        value: "npm run nd.open.xcode && npm-watch nd.build.run.simulator.demo.angular.app.ios",
        description: "Triggers file watcher for the native iOS source code, when change is detected rebuilds the 'demo-angular' app is build and deployed. Useful to debug and develop your plugin's iOS source code",
        category: "main ios developNative",
        shortCommands: ["demo-angular ios simulator attach & watch"]
    },
    {
        key: "nd.demo.angular.run.watch.device.ios",
        value: "npm run nd.open.xcode && npm-watch nd.build.run.demo.angular.app.ios",
        description: "Triggers file watcher for the native iOS source code, when change is detected rebuilds the 'demo-angular' app is build and deployed on real device. Useful to debug and develop your plugin's iOS source code",
        category: "main ios developNative",
        shortCommands: ["demo-angular ios device attach & watch"]
    },
    {
        key: "nd.demo.vue.run.watch.android",
        value: "npm run nd.open.android.studio && npm-watch nd.build.run.demo.vue.app.android",
        description: "Triggers file watcher for the native Android source code, when change is detected rebuilds the 'demo-vue' app is build and deployed. Useful to debug and develop your plugin's Android source code",
        category: "main android developNative",
        shortCommands: ["demo-vue android simulator attach & watch", "demo-vue android device attach & watch"]
    },
    {
        key: "nd.demo.vue.run.watch.ios",
        value: "npm run nd.open.xcode && npm-watch nd.build.run.simulator.demo.vue.app.ios",
        description: "Triggers file watcher for the native iOS source code, when change is detected rebuilds the 'demo-vue' app is build and deployed. Useful to debug and develop your plugin's iOS source code",
        category: "main ios developNative",
        shortCommands: ["demo-vue ios simulator attach & watch"]
    },
    {
        key: "nd.demo.vue.run.watch.device.ios",
        value: "npm run nd.open.xcode && npm-watch nd.build.run.demo.vue.app.ios",
        description: "Triggers file watcher for the native iOS source code, when change is detected rebuilds the 'demo-vue' app is build and deployed on real device. Useful to debug and develop your plugin's iOS source code",
        category: "main ios developNative",
        shortCommands: ["demo-vue ios device attach & watch"]
    },
    {
        key: "nd.demo.tns.run.android",
        value: "cd " + demoFolder + " && tns run android --syncAllFiles",
        description: "Runs the 'demo' app on Android with '--syncAllFiles' argument",
        category: "secondary"
    },
    {
        key: "nd.demo.tns.run.ios",
        value: "cd " + demoFolder + " && tns run ios --syncAllFiles" + provisioningParam,
        description: "Runs the 'demo' app on iOS with '--syncAllFiles' argument",
        category: "secondary"
    },
    {
        key: "nd.demo.angular.tns.run.android",
        value: "cd " + demoAngularFolder + " && tns run android --syncAllFiles",
        description: "Runs the 'demo-angular' app on Android with '--syncAllFiles' argument",
        category: "secondary"
    },
    {
        key: "nd.demo.angular.tns.run.ios",
        value: "cd " + demoAngularFolder + " && tns run ios --syncAllFiles" + provisioningParam,
        description: "Runs the 'demo-angular' app on iOS with '--syncAllFiles' argument",
        category: "secondary"
    },
    {
        key: "nd.demo.vue.tns.run.android",
        value: "cd " + demoVueFolder + " && tns run android --syncAllFiles",
        description: "Runs the 'demo-vue' app on Android with '--syncAllFiles' argument",
        category: "secondary"
    },
    {
        key: "nd.demo.vue.tns.run.ios",
        value: "cd " + demoVueFolder + " && tns run ios --syncAllFiles" + provisioningParam,
        description: "Runs the 'demo-vue' app on iOS with '--syncAllFiles' argument",
        category: "secondary"
    },
    {
        key: "nd.build.simulator.native.ios",
        value: "sh ./node_modules/nativescript-dev-debugging/scripts/build-ios.sh -b Release -d Simulator -t " + pluginPlatformFolder + " -n " + pluginIosSrcFolder + " pdf",
        description: "Builds the native iOS source code in debug mode for simulator. (preferably use 'nd.build.simulator')",
        category: "secondary"
    },
    {
        key: "nd.build.device.native.ios",
        value: "sh ./node_modules/nativescript-dev-debugging/scripts/build-ios.sh -b Release -d Device -t " + pluginPlatformFolder + " -n " + pluginIosSrcFolder + " pdf",
        description: "Builds the native iOS source code in debug mode for real device. (preferably use 'nd.build.simulator')",
        category: "secondary"
    },
    {
        key: "nd.build.native.android",
        value: "sh ./node_modules/nativescript-dev-debugging/scripts/build-android.sh -b Debug -t " + pluginPlatformFolder + " -n " + pluginAndroidSrcFolder + " -f " + androidLibraryName + " pdf ",
        description: "Builds the native Android source code in debug mode for simulator. (preferably 'use nd.build.simulator')",
        category: "secondary"
    },
    {
        key: "nd.build.release.native.ios",
        value: "sh ./node_modules/nativescript-dev-debugging/scripts/build-ios.sh -b Release -t " + pluginPlatformFolder + " -n " + pluginIosSrcFolder + " pdf",
        description: "Builds the native iOS source code in release mode. (preferably use 'nd.build')",
        category: "secondary"
    },
    {
        key: "nd.build.release.native.android",
        value: "sh ./node_modules/nativescript-dev-debugging/scripts/build-android.sh -b Release -t " + pluginPlatformFolder + " -n " + pluginAndroidSrcFolder + " -f " + androidLibraryName + " pdf ",
        description: "Builds the native Android source code in release mode. (preferably use 'nd.build')",
        category: "secondary"
    },
    {
        key: "nd.clean.demo",
        value: "rm -rf " + demoFolder + "/node_modules " + demoFolder + "/platforms",
        description: "Clears the node_modules and platforms folder of the Vanila NS app",
        category: "secondary"
    },
    {
        key: "nd.clean.demo.angular",
        value: "rm -rf " + demoAngularFolder + "/node_modules " + demoAngularFolder + "/platforms",
        description: "Clears the node_modules and platforms folder of the Angular NS app",
        category: "secondary"
    },
    {
        key: "nd.clean.demo.vue",
        value: "rm -rf " + demoVueFolder + "/node_modules " + demoVueFolder + "/platforms",
        description: "Clears the node_modules and platforms folder of the Angular NS app",
        category: "secondary"
    }];
}

module.exports.getPluginPreDefinedScripts = getPluginPreDefinedScripts;