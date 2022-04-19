const getConfigByAppVariant = () => {
  const appVariant = process.env.APP_VARIANT;

  if (appVariant === 'prod') {
    return {
      name: 'My App',
      identifier: 'com.mendesbarreto.expoproblem',
      slug: 'mobileapp',
    };
  }

  if (appVariant === 'staging') {
    return {
      name: 'My App Staging',
      identifier: 'com.mendesbarreto.expoproblem.staging',
      slug: 'mobileapp-staging',
    };
  }

  return {
    name: 'My App Dev',
    identifier: 'com.mendesbarreto.expoproblem.dev',
    slug: 'mobileapp-dev',
  };
};

const expoAppConfig = getConfigByAppVariant();

console.log(expoAppConfig);

export default {
  expo: {
    name: expoAppConfig.name,
    owner: 'douglas',
    description: 'My App',
    slug: expoAppConfig.slug,
    sdkVersion: '44.0.6',
    version: '2.0.0',
    platforms: ['web', 'ios', 'android'],
    entryPoint: './index.js',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: false,
    },
    android: {
      package: expoAppConfig.identifier,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
};
