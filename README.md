# NativeWrapper

A flexible Capacitor-based native wrapper for web applications.

# Quick Start

1. Change the web app URL: set `APP_URL` env variable or edit `capacitor.config.ts`
2. Build: `npm run build`
3. Sync: `npx cap sync android` or `npx cap sync ios`
4. Open in Android Studio/Xcode: `npx cap open android` or `npx cap open ios`
5. Build/run in Studio/Xcode

> After changing the URL, always run `npm run build` then `npx cap sync` before opening in Studio/Xcode.

## Features

- Configurable web app URL via environment variables
- Android and iOS support
- Built-in error handling and status display
- Flexible configuration system

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your web app URL:
- Set the `APP_URL` environment variable to your web app's URL
- Or modify the `capacitor.config.ts` file directly

3. Build the project:
```bash
npm run build
```

## Creating/Recreating Native Apps

### Android

1. Remove existing Android platform (if recreating):
```bash
rm -rf android
```

2. Add Android platform:
```bash
npx cap add android
```

3. Sync latest changes:
```bash
npx cap sync android
```

4. Open in Android Studio:
```bash
npx cap open android
```

5. Build and run:
- Select your target device/emulator in Android Studio
- Click the "Run" button (green play icon)
- First build might take several minutes

### iOS

1. Remove existing iOS platform (if recreating):
```bash
rm -rf ios
```

2. Add iOS platform:
```bash
npx cap add ios
```

3. Install CocoaPods dependencies:
```bash
cd ios/App
pod install
cd ../..
```

4. Sync latest changes:
```bash
npx cap sync ios
```

5. Open in Xcode:
```bash
npx cap open ios
```

6. Build and run:
- Select your target simulator/device in Xcode
- Click the "Play" button to build and run
- First build might take several minutes

## Configuration

The app can be configured in several ways:

1. Environment Variables:
   - `APP_URL`: The URL of your web application

2. capacitor.config.ts:
   - Edit the configuration file to customize native app behavior
   - Modify server settings, plugins, and other Capacitor configurations

## Development

- Use `npm run serve` to start a development server
- Use `npm run update:url` to update the web app URL at runtime
- Run `npm run sync` after making changes to sync with native projects

## Production

1. Update the `APP_URL` to point to your production web app
2. Build the native apps using Android Studio or Xcode
3. Follow standard app store deployment procedures

## Troubleshooting

### Android Issues
- If build fails, try:
  1. Clean project in Android Studio (Build > Clean Project)
  2. File > Invalidate Caches / Restart
  3. Delete `android/app/build` directory and rebuild

### iOS Issues
- If build fails, try:
  1. Clean build folder in Xcode (Product > Clean Build Folder)
  2. Delete `ios/App/Pods` directory and run `pod install` again
  3. Delete Derived Data (Xcode > Preferences > Locations > Derived Data)

## Notes

- Ensure your web app is properly configured for mobile viewing
- Test thoroughly on both platforms before deployment
- Keep Capacitor and dependencies updated for security
