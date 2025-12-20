'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b5205e06a1fa28febef8df2574757199",
"version.json": "d53740b7abf2a600a27a239fd9867800",
"index.html": "d1578bfa01e94227cf9971c1a47050bc",
"/": "d1578bfa01e94227cf9971c1a47050bc",
"main.dart.js": "a555753554ba30403cdc618d4b2c6f1c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"jamesostergaard.com/flutter_bootstrap.js": "c48b5a19d73b82e65cf12c9f95492c8f",
"jamesostergaard.com/version.json": "d53740b7abf2a600a27a239fd9867800",
"jamesostergaard.com/index.html": "75c5bb07e4eec1e7321c86bf97e8f5c8",
"jamesostergaard.com/CNAME": "33c08fabc9ff5b9ef234476ba3507530",
"jamesostergaard.com/main.dart.js": "a5360f671340f2087002ddcd9b171ae9",
"jamesostergaard.com/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"jamesostergaard.com/favicon.png": "a25323e6ba04aec268c92156f5b72cb4",
"jamesostergaard.com/icons/Icon-192.png": "230849d6f3823dbba39f3147f543487f",
"jamesostergaard.com/icons/Icon-maskable-192.png": "230849d6f3823dbba39f3147f543487f",
"jamesostergaard.com/icons/Icon-maskable-512.png": "60033688a38b6b79dc781f6667592db7",
"jamesostergaard.com/icons/Icon-512.png": "60033688a38b6b79dc781f6667592db7",
"jamesostergaard.com/manifest.json": "8b04606275da4aa0dbbd403ce61bdc08",
"jamesostergaard.com/.git/config": "9c725de4d64d05c79f9d67a2ec6b929c",
"jamesostergaard.com/.git/objects/pack/pack-5c76d946e969c20b35d8c3ce8b50c470f24c7535.pack": "ecffcff45f16c6d79bde3476721927ee",
"jamesostergaard.com/.git/objects/pack/pack-5c76d946e969c20b35d8c3ce8b50c470f24c7535.rev": "97bcfdd93ae874a46488ed32d5bb0ea5",
"jamesostergaard.com/.git/objects/pack/pack-5c76d946e969c20b35d8c3ce8b50c470f24c7535.idx": "fe8fc2df88ba96f3482346e2db657bd2",
"jamesostergaard.com/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"jamesostergaard.com/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jamesostergaard.com/.git/logs/HEAD": "be40f58c5324beecd543220d25e92b2c",
"jamesostergaard.com/.git/logs/refs/heads/master": "be40f58c5324beecd543220d25e92b2c",
"jamesostergaard.com/.git/logs/refs/remotes/origin/HEAD": "629c55115739589ee432005d28d42f19",
"jamesostergaard.com/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"jamesostergaard.com/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"jamesostergaard.com/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"jamesostergaard.com/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"jamesostergaard.com/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"jamesostergaard.com/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"jamesostergaard.com/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"jamesostergaard.com/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"jamesostergaard.com/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"jamesostergaard.com/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"jamesostergaard.com/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"jamesostergaard.com/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"jamesostergaard.com/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"jamesostergaard.com/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"jamesostergaard.com/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"jamesostergaard.com/.git/refs/heads/master": "7bf8e3e4d3b4be0e613f09393c2bff4c",
"jamesostergaard.com/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"jamesostergaard.com/.git/index": "fa5d38cdfb5d5490845d7b27c0f94eb6",
"jamesostergaard.com/.git/packed-refs": "b34242162aef8976deb057a0bc573cc3",
"jamesostergaard.com/.git/FETCH_HEAD": "37382e039161d588f10356ab74782bfa",
"jamesostergaard.com/assets/AssetManifest.json": "11a375c0bea42e9304792abbfc9ea0dd",
"jamesostergaard.com/assets/NOTICES": "41728f483c3fe2b6f8660e47a8765ad2",
"jamesostergaard.com/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"jamesostergaard.com/assets/AssetManifest.bin.json": "5aeb927234ffa31f626d08124c629bdd",
"jamesostergaard.com/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"jamesostergaard.com/assets/AssetManifest.bin": "0159b9cab2f7efe3c99d2bdf101314a5",
"jamesostergaard.com/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"jamesostergaard.com/assets/assets/omni_test_viz.png": "b647c9f792e7c1ee8a27dfda9463c962",
"jamesostergaard.com/assets/assets/image4.png": "1ed53f32cbd6b905bb58e66b9680c7ab",
"jamesostergaard.com/assets/assets/image5.png": "01bbbcc2a02581858cd0778dffa6d5e0",
"jamesostergaard.com/assets/assets/image1.png": "68e51557909f2efec08a9466ff59438f",
"jamesostergaard.com/assets/assets/image2.png": "638c5b702fdb7d88a31388e51fe8475b",
"jamesostergaard.com/assets/assets/image3.png": "c7d5868d024dc97fb0bc6dd67de93041",
"jamesostergaard.com/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"jamesostergaard.com/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"jamesostergaard.com/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"jamesostergaard.com/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"jamesostergaard.com/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"jamesostergaard.com/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"jamesostergaard.com/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"jamesostergaard.com/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"jamesostergaard.com/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"jamesostergaard.com/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a25323e6ba04aec268c92156f5b72cb4",
"icons/Icon-192.png": "230849d6f3823dbba39f3147f543487f",
"icons/Icon-maskable-192.png": "230849d6f3823dbba39f3147f543487f",
"icons/Icon-maskable-512.png": "60033688a38b6b79dc781f6667592db7",
"icons/Icon-512.png": "60033688a38b6b79dc781f6667592db7",
"manifest.json": "4a43843c8b68189f03f73aece22c682e",
"assets/AssetManifest.json": "11a375c0bea42e9304792abbfc9ea0dd",
"assets/NOTICES": "aaaff9daca5700248c05021468ea6c57",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "5aeb927234ffa31f626d08124c629bdd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "0159b9cab2f7efe3c99d2bdf101314a5",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/omni_test_viz.png": "b647c9f792e7c1ee8a27dfda9463c962",
"assets/assets/image4.png": "1ed53f32cbd6b905bb58e66b9680c7ab",
"assets/assets/image5.png": "01bbbcc2a02581858cd0778dffa6d5e0",
"assets/assets/image1.png": "68e51557909f2efec08a9466ff59438f",
"assets/assets/image2.png": "638c5b702fdb7d88a31388e51fe8475b",
"assets/assets/image3.png": "c7d5868d024dc97fb0bc6dd67de93041",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
