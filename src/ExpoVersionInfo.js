import { Platform } from 'react-native';
import Constants from 'expo-constants';

const manifest = Constants.manifest || Constants.manifest2?.extra.expoClient || {};
const {
    version = null,
    android: { versionCode = null, package: androidPackageName = null } = {},
    ios: { bundleIdentifier = null, buildNumber = null } = {},
} = manifest;

const RNVersionCheck = {
    currentVersion: version,
    currentBuildNumber: Platform.select({
        android: versionCode,
        ios: buildNumber
    }),
    packageName: Platform.select({
        android: androidPackageName,
        ios: bundleIdentifier
    }),
};

const PACKAGE_NAME = RNVersionCheck.packageName;
const CURRENT_BUILD_NUMBER = RNVersionCheck.currentBuildNumber;
const CURRENT_VERSION = RNVersionCheck.currentVersion;

export default function() {
    return {
        getCountry: () => Promise.resolve("US"),
        getPackageName: () => PACKAGE_NAME,
        getCurrentBuildNumber: () => CURRENT_BUILD_NUMBER,
        getCurrentVersion: () => CURRENT_VERSION,
    };
};
