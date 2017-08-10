# Music App

React Native application listing music bands. Using [last.fm REST API](https://www.last.fm/api/rest).

### Installation

Perhaps you gonna need [facebook/watchman](https://facebook.github.io/watchman/docs/install.html).

#### Android
1. `git clone https://github.com/antonkulyk/music-app.git`
2. `cd ./music-app`
3. `npm install`
4. Connect Android device to your computer or launch AVD
5. Check you have `react-native-cli` installed globally (`npm i -g react-native-cli`)
6. `npm run start`
7. `react-native run-android`

If you have some troubles use [debug APK](https://github.com/antonkulyk/music-app/blob/master/music-app-debug.apk) from root directory.

#### iOS
1. `git clone https://github.com/antonkulyk/music-app.git`
2. `cd ./music-app`
3. `npm install`
4. Open `music-app/ios/MusicApp.xcodeproj` in XCode
3. Select device emulator, build the app

### Access
[Existing users](https://github.com/antonkulyk/music-app/blob/master/src/config/auth.js) (email - password):
* ozzy@blacksabbath.com - Paranoid
* plant@ledzeppelin.org - Immigrant
* barret@pinkfloyd.com - CrazyDiamond