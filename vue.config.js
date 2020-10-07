module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: "Comics Heroes",
        themeColor: "#4DBA87",
        msTileColor: "#000000",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",

        // configure the workbox plugin
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: "./src/registerServiceWorker.js"
            // ...other Workbox options...
        }
    }
};
