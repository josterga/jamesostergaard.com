'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5d958e0055a449a251f3036ed3eaa308",
"version.json": "d53740b7abf2a600a27a239fd9867800",
"index.html": "d1578bfa01e94227cf9971c1a47050bc",
"/": "d1578bfa01e94227cf9971c1a47050bc",
"main.dart.js": "2e056eab333337e83f1b3c846307bc77",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"jamesostergaard.com/flutter_bootstrap.js": "b5205e06a1fa28febef8df2574757199",
"jamesostergaard.com/version.json": "d53740b7abf2a600a27a239fd9867800",
"jamesostergaard.com/index.html": "d1578bfa01e94227cf9971c1a47050bc",
"jamesostergaard.com/CNAME": "33c08fabc9ff5b9ef234476ba3507530",
"jamesostergaard.com/main.dart.js": "a555753554ba30403cdc618d4b2c6f1c",
"jamesostergaard.com/flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"jamesostergaard.com/favicon.png": "a25323e6ba04aec268c92156f5b72cb4",
"jamesostergaard.com/icons/Icon-192.png": "230849d6f3823dbba39f3147f543487f",
"jamesostergaard.com/icons/Icon-maskable-192.png": "230849d6f3823dbba39f3147f543487f",
"jamesostergaard.com/icons/Icon-maskable-512.png": "60033688a38b6b79dc781f6667592db7",
"jamesostergaard.com/icons/Icon-512.png": "60033688a38b6b79dc781f6667592db7",
"jamesostergaard.com/manifest.json": "4a43843c8b68189f03f73aece22c682e",
"jamesostergaard.com/.git/config": "9c725de4d64d05c79f9d67a2ec6b929c",
"jamesostergaard.com/.git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
"jamesostergaard.com/.git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
"jamesostergaard.com/.git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
"jamesostergaard.com/.git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
"jamesostergaard.com/.git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
"jamesostergaard.com/.git/objects/5a/a965f1a3a5bac1d10385c9a194b45f20f433a1": "f5d27b9ee330877320b0529c140fd0f9",
"jamesostergaard.com/.git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
"jamesostergaard.com/.git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
"jamesostergaard.com/.git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
"jamesostergaard.com/.git/objects/c9/d7635667d298cf30ff5f1aa3174810decce976": "50a2b67bf48b4735175a3acc4e9d5132",
"jamesostergaard.com/.git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
"jamesostergaard.com/.git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
"jamesostergaard.com/.git/objects/pack/pack-5c76d946e969c20b35d8c3ce8b50c470f24c7535.pack": "ecffcff45f16c6d79bde3476721927ee",
"jamesostergaard.com/.git/objects/pack/pack-5c76d946e969c20b35d8c3ce8b50c470f24c7535.rev": "97bcfdd93ae874a46488ed32d5bb0ea5",
"jamesostergaard.com/.git/objects/pack/pack-5c76d946e969c20b35d8c3ce8b50c470f24c7535.idx": "fe8fc2df88ba96f3482346e2db657bd2",
"jamesostergaard.com/.git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
"jamesostergaard.com/.git/objects/73/9af1ac3a73060f361c99c17e6f54cab1a3ad5d": "0c8748066828e08b417099eafcb6dd7b",
"jamesostergaard.com/.git/objects/17/ba484a01be1d486d459e326b98a588430bcf9b": "61f7b469be5e48ae82be32eb5e8d9df7",
"jamesostergaard.com/.git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
"jamesostergaard.com/.git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
"jamesostergaard.com/.git/objects/d5/d3a7e85cffb84eed519fa8dfbad113b0f68103": "492a0086e79fd96ca65240b7f2fce615",
"jamesostergaard.com/.git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
"jamesostergaard.com/.git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
"jamesostergaard.com/.git/objects/e8/a44cfbb53ce18775f17724c6f1daae0713d91d": "2605b4d25dee752a2bcabcf2f47da80e",
"jamesostergaard.com/.git/objects/ff/47e827f72dbe43573b90b3d698254e09f8bfc3": "9694a5ffdd0450ab63861b6f7af7de52",
"jamesostergaard.com/.git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
"jamesostergaard.com/.git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
"jamesostergaard.com/.git/objects/41/5fa0defa7b0841039dd22a00c3f87bd03dfdaa": "8f6c085a8699e543eea25dee4aeeda76",
"jamesostergaard.com/.git/objects/8d/b74502c3312242f39dc87332b2a6420b33271d": "62cd0939ed06d77ed4a61e29509109d2",
"jamesostergaard.com/.git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
"jamesostergaard.com/.git/objects/40/089c7849c0f762dbbc1baa46b0e344a68c8331": "32bf90f587cb7851b5fb8cb6630d06e8",
"jamesostergaard.com/.git/objects/7f/90f882fb4b898e0b6bc1a872eddd9c1ada5e7d": "b5aef06db2d1acde987f0896cfa95b5b",
"jamesostergaard.com/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"jamesostergaard.com/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jamesostergaard.com/.git/logs/HEAD": "e16a04e9cd445e0bffe0e67dcd76dfd8",
"jamesostergaard.com/.git/logs/refs/heads/master": "e16a04e9cd445e0bffe0e67dcd76dfd8",
"jamesostergaard.com/.git/logs/refs/remotes/origin/HEAD": "3dfb6e40db4e492b8fe10cd889279e14",
"jamesostergaard.com/.git/logs/refs/remotes/origin/master": "e9eb27ebd1b42fe41af6f55766d30029",
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
"jamesostergaard.com/.git/refs/heads/master": "32ef11000fda04633d4b1993cf7303f4",
"jamesostergaard.com/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"jamesostergaard.com/.git/refs/remotes/origin/master": "32ef11000fda04633d4b1993cf7303f4",
"jamesostergaard.com/.git/index": "51e74eb5879f9f5aab831309d34c35c2",
"jamesostergaard.com/.git/packed-refs": "b34242162aef8976deb057a0bc573cc3",
"jamesostergaard.com/.git/COMMIT_EDITMSG": "329ab04bcda84ea265655b60e7515ffd",
"jamesostergaard.com/.git/FETCH_HEAD": "958be15976fc1a9dd408af86f91e2ea4",
"jamesostergaard.com/assets/AssetManifest.json": "11a375c0bea42e9304792abbfc9ea0dd",
"jamesostergaard.com/assets/NOTICES": "aaaff9daca5700248c05021468ea6c57",
"jamesostergaard.com/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"jamesostergaard.com/assets/AssetManifest.bin.json": "5aeb927234ffa31f626d08124c629bdd",
"jamesostergaard.com/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"jamesostergaard.com/assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"jamesostergaard.com/assets/AssetManifest.bin": "0159b9cab2f7efe3c99d2bdf101314a5",
"jamesostergaard.com/assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"jamesostergaard.com/assets/assets/omni_test_viz.png": "b647c9f792e7c1ee8a27dfda9463c962",
"jamesostergaard.com/assets/assets/image4.png": "1ed53f32cbd6b905bb58e66b9680c7ab",
"jamesostergaard.com/assets/assets/image5.png": "01bbbcc2a02581858cd0778dffa6d5e0",
"jamesostergaard.com/assets/assets/image1.png": "68e51557909f2efec08a9466ff59438f",
"jamesostergaard.com/assets/assets/image2.png": "638c5b702fdb7d88a31388e51fe8475b",
"jamesostergaard.com/assets/assets/image3.png": "c7d5868d024dc97fb0bc6dd67de93041",
"jamesostergaard.com/canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"jamesostergaard.com/canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"jamesostergaard.com/canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"jamesostergaard.com/canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"jamesostergaard.com/canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"jamesostergaard.com/canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"jamesostergaard.com/canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"jamesostergaard.com/canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"jamesostergaard.com/canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"jamesostergaard.com/canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"jamesostergaard.com/canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"jamesostergaard.com/canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"jamesostergaard.com/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a25323e6ba04aec268c92156f5b72cb4",
"icons/Icon-192.png": "230849d6f3823dbba39f3147f543487f",
"icons/Icon-maskable-192.png": "230849d6f3823dbba39f3147f543487f",
"icons/Icon-maskable-512.png": "60033688a38b6b79dc781f6667592db7",
"icons/Icon-512.png": "60033688a38b6b79dc781f6667592db7",
"manifest.json": "4a43843c8b68189f03f73aece22c682e",
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
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
