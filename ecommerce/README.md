## Packages installation

```bash
npm i react-native-svg react-native-svg-transformer react-native-vector-icons lottie-react-native
```

```bash
npm i -D babel-plugin-module-resolver @types/react-native-vector-icons
```

```bash
npm i @homielab/react-native-auto-scroll @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack @reduxjs/toolkit axios react-native-gesture-handler react-native-mmkv react-native-razorpay react-native-reanimated react-native-responsive-fontsize react-native-reanimated-carousel react-native-rolling-bar react-native-safe-area-context react-native-screens react-redux redux redux-persist redux-saga
```

```bash
npm i -D @types/react-native-razorpay    
```

---

## Project configurations

1. Added font configuration for android inside `build.gradle` file in this object react {.... add here at end}

```ts   
 project.ext.vectoricons = [
        iconFontNames: [ "MaterialCommunityIcons.ttf", "EvilIcons.ttf", "MaterialIcons.ttf", "Ionicons.ttf", "FontAwesome.ttf", "AntDesign.ttf"  ] // Specify font files
    ]
    apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

    /* Autolinking */
    autolinkLibrariesWithApp()
```

2. Added font configuration for ios inside info.plist add inside UiAppFonts key

```xml
<string>MaterialCommunityIcons.ttf</string>
<string>EvilIcons.ttf</string>
<string>MaterialIcons.ttf</string>
<string>Ionnicons.ttf</string>
<string>AntDesign.ttf</string>
<string>FontAwesome.ttf</string>
```

3. Inside `package.json` scripts added

```json
"postinstall": "npx patch-package",
"link-fonts": "npx react-native-asset",
 "pod-install": "cd ios && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install",
"create-apk": "cd android && ./graddlew assembleRelease"
```

4. Inside ios `info.plist` permissionas added

```xml
	<key>LSApplicationQueriesSchemas</key>
	<array>
	    <string>phonepe</string>
	    <string>tez</string>
	    <string>payment</string>
	    <string>bhim</string>
	    <string>credpay</string>
	</array>
```

```xml
<key>NSCameraUsageDescription</key>
<string>The camera is needed for AR functionality<string>
```

5. Permissions, feature and tools added for android inside `AndroidManifest.xml`

```xml
xmlns:tools="http://schemas.android.com/tools"
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<!-- Other camera realted features -->
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" android:required="false" tools:replace="required" />
<!-- Specifying OpenGL version or requirements -->
<uses-feature android:glesVersion="0x00030000" android:required="false" tools:node="remove" tools:replace="required" />
<!-- Usage of accelerometer and gyroscope -->
<uses-feature android:name="android.hardware.sensor.accelerometer" android:required="false" tools:replace="required" />
<uess-feature android:name="android.hardware.sensor.gyroscope" android:required="false" tools:replace="required" />
```

6. Dont allow system font sizes

```ts

```

