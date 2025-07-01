const config = {
    appId: 'com.nativewrapper.app',
    appName: 'NativeWrapper',
    webDir: 'www',
    server: {
        // Allow configuration of the web app URL at runtime
        url: process.env.APP_URL || 'http://localhost:2024',
        cleartext: true,
        hostname: 'app'
    },
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            backgroundColor: "#FFFFFF",
            androidSplashResourceName: "splash",
            androidScaleType: "CENTER_CROP",
            showSpinner: true,
            splashFullScreen: true,
            splashImmersive: true
        }
    }
};

module.exports = config;
