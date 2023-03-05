
**Project name: VisibleMagic**

## Setup

Below you'll find information about performing common tasks.

## Table of Contents

-   [Introduction](#introduction)
-   [Recommendation for screen folder(s) structure (not all required)](<#recommendation-for-screen-folder(s)-structure>)
-   [Assets (src/assets) – this folder contains:](#assets-src/assets–contains)
-   [Run android](#run-android)
-   [Run ios](#run-ios)
-   [Debugger](#Debugger)
-   [Environment Variables](#environment-variables)
-   [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
-   [Configuration files](#configuration-files)
-   [Create apk](#create-apk)
-   [Create ipa](#create-ipa)
-   [Clean cashe](#clean-cashe)
-   [Fix error for running debbugers](#fix-error-for-running-debbuger)
-   [folder android](#folder-android)
-   [folder ios](#folder-ios)
-   [scripts for package.json](#scripts_for_package_json)

## Introduction

This document provides our point of view on several topics regarding [React Native](https://www.reactnative.dev) application development. We consider the information here to be a set of "best practices" that we try to apply when building [React Native](https://www.reactnative.dev) apps.

Although we generally expect our engineers to follow these standards, we recognize that there are many ways to build [React Native](https://www.reactnative.dev) apps. If you have a differing opinion on some implementation, tips, ideas to share, or see something that seems incorrect, feel free to start a conversation in slack.

#### Recommendation for screen folder(s) structure (not all required)

1. _tests_
2. components
3. interface
4. redux (may content saga)
5. index.tsx
6. styles.ts

##### Assets (src/assets)–contains:

1. colors,
2. fonts,
3. icons,
4. images,

# How to:

##### Add a new reducer:

1. Register reducer in src/redux/config/store.ts

##### Add new saga:

-   Register saga in src/redux/modules/saga.ts

# Build and Test

TODO: Describe and show how to build your code and run the tests.

# Contribute

TODO: Explain how other users and developers can contribute to make your code better.

#### Run android

1. Requires an installation of Android build tools (see [React Native docs](https://reactnative.dev/docs/getting-started.html) for detailed setup).
2. Open a new terminal and write command
3. `npm install`
4. `npm run android`

#### Run ios

1. Requires an installation of IOS build tools (see [React Native docs](https://reactnative.dev/docs/getting-started.html) for detailed setup).
2. download Xcode
3. install node.js
4. Open a new terminal and write command
5. `npm install`
6. `cd ios`
7. `rm -rf ~/Library/Caches/CocoaPods Pods ~/Library/Developer/Xcode/DerivedData/*; pod deintegrate; pod setup; pod install;`
8. `in xcode open in folder ios filename extension with .xcworkspace or run command npm run ios`

### Debugger

1. Reactotron debug on Android:
2. Open a new terminal and write command
3. adb reverse tcp:9090 tcp:9090

# or

http://localhost:8081/debugger-ui/



## Customizing App Display Name and Icon

You can edit `app.json`.

To change your app's display name, set the `app.name` key in `app.json` to an appropriate string.

To set an app icon, set the `app.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

### configuration-files

1. tsconfig.json - rules for write typescript code
2. metro.config.js - Metro configuration for React Native
3. .prettierrc.js - coding style documentation
4. .eslintrc.js - static code analysis tool for identifying problematic patterns found in JavaScript and TypeScript code
5. .buckconfig - for parse configuration files.

### create apk

1. npm i
2. cd android
3. ./gradlew assembleRelease

### create ipa

1. npm i
2. cd ios
3. rm -rf ~/Library/Caches/CocoaPods Pods ~/Library/Developer/Xcode/DerivedData/\*; pod deintegrate; pod setup; pod install;
4. xcodebuild archive -scheme reconpro -workspace reconpro.xcworkspace -configuration Release -archivePath build

### clean cashe

1. npm cache verify
2. react-native start --reset-cache

### fix error for running debbuger

1. npm cache verify
2. npm run android --reset-cache or npm run android --reset-cache

### folder android

1. `build.gradle` - It consists of Groovy code, or more precisely, a Groovy-based DSL (domain specific language) for describing the builds. We can define our dependencies here and also add things like Maven repositories used for dependency resolution.
2. `gradle.properties` - gradle settings
3. `settings.gradle` - to define all included submodules and to mark the directory root of a tree of modules
4. `gradle.properties` - to automate and manage the build process, while allowing you to define flexible custom build configurations.

### android buildscript in build.gradle

1. `compileSdkVersion` is the API version of Android that you compile against.
2. `buildToolsVersion` is the version of the compilers
3. `minSdkVersion` is that defines a minimum Android version
4. `targetSdkVersion` is specifies the API Level on which the application is designed to run
5. `dependencies` section - include external binaries or other library modules to your build as dependencies` `allprojects` section is for the modules being built by Gradle

### folder ios

1. `Podfile` is a specification that describes the dependencies of the targets of one or more Xcode projects
2. `xcodeproj` a library written in Swift for parsing and working with Xcode projects
3. `xcworkspace` your app's ios folder




