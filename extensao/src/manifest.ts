import pkg from "../package.json";

const manifest = {
  action: {
    default_icon: {
      16: "icons/16x16.png",
      32: "icons/32x32.png",
      38: "icons/64x64.png",
    },
    default_popup: "src/entries/popup/index.html",
  },
  // background: {
  //   service_worker: "src/entries/background/main.ts",
  // },
  permissions: ['webNavigation', 'declarativeContent'],
  content_scripts: [
    {
      js: ["src/entries/contentScript/primary/main.ts"],
      matches: ["*://*/*"],
    },
  ],
  host_permissions: ["*://*/*"],
  icons: {
    16: "icons/16x16.png",
    32: "icons/32x32.png",
    48: "icons/48x48.png",
    64: "icons/64x64.png",
    128: "icons/128x128.png",
    256: "icons/256x256.png",
    512: "icons/512x512.png",
  },
  // options_ui: {
  //   page: "src/entries/options/index.html",
  //   open_in_tab: true,
  // },
} as Partial<chrome.runtime.ManifestV3>;

export function getManifest(): chrome.runtime.ManifestV3 {
  return {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 3,
    ...manifest,
  };
}
