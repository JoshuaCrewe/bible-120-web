# Bible 120

Bible 120 is a reading plan that takes you through the whole Bible in 120 days.

Each day the app shows you the passages to read for that day. When you start, it
remembers your start date, so every time you open it you see what is next up to
read. The idea is to not worry too much about catching up but instead just read.
If you do miss a day you can pick any day to set it as today and carry on from
there. The plan came from a spreadsheet, and the full plan is also available as
a [PDF](public/pdf/bible-120.pdf).

## Install it

**As a web app (PWA):** the site is a Progressive Web App. Open it in your
browser and use "Add to Home Screen" / "Install app" to keep it on your device.

**As a native Android app:** download the latest `app-debug.apk` from the
[Releases](../../releases) page and sideload it. (The APK is signed with a debug
key, so you may need to allow installs from unknown sources.)

## How it works

- Built with [Nuxt](https://nuxt.com) as a static single-page app (`ssr: false`).
- Bible passages are fetched at runtime from
  [helloao.org](https://bible.helloao.org) API. The reading plan and book list
  are bundled into the app, so no build-time API calls are made.
- Wrapped for Android with [Capacitor](https://capacitorjs.com), which loads the
  same static site in a native WebView.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run generate   # static site -> .output/public
```

## Make a new Android release

1. Build the web assets, generate the app icon/splash, and sync into the Android
   project:

   ```bash
   npm run build:android
   ```

2. Build the debug APK. The Android Gradle Plugin needs JDK 17 or 21 (not 24+),
   so point it at Android Studio's bundled JBR:

   ```bash
   cd android
   JAVA_HOME=/opt/android-studio/jbr ./gradlew assembleDebug
   ```

   The APK is written to
   `android/app/build/outputs/apk/debug/app-debug.apk`.

3. Publish it as a release (tag + attached APK). See
   [`fj`](https://codeberg.org/forgejo-contrib/forgejo-cli) or the web UI:

   ```bash
   fj release create --tag v0.1.0 \
     --attach android/app/build/outputs/apk/debug/app-debug.apk
   ```

## Icon and splash assets

Source images live in `assets/` (`icon.png`, `splash.png`, `splash-dark.png`).
`npm run build:android` regenerates every Android density from them via
`@capacitor/assets`. If a fresh `npm install` breaks asset generation with a
`sharp` error, remove the nested copy and rerun:

```bash
rm -rf node_modules/@capacitor/assets/node_modules/sharp
```
