const CACHE_NAME = 'kem-app-v7';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './exam_data.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap',
  'https://unpkg.com/lucide@latest',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js',
  'assets/elsa-icon.png',
  'assets/kitty-icon.png',
  'assets/elsa-bg.png',
  'assets/bg-custom.png',
  'assets/cute_princess.png',
  'assets/cute_kitty.png',
  'assets/cute_dinosaur.png',
  'assets/diff_bg_beach.png',
  'assets/diff_bg_magic.png',
  'assets/diff_bg_room.png',
  'assets/diff_real_1.png',
  'assets/diff_real_2.png',
  'assets/me_oi_co_biet.mp3',
  'assets/bgmusic.ogg',
  'assets/ngay_dau_tien_di_hoc.mp3',
  'assets/bai_hoc_dau_tien.mp3',
  'assets/mua_xuan_tren_hcm.mp3',
  'assets/IMG_0419.heic',
  'assets/geom_tri_3.svg',
  'assets/geom_tri_multi.svg',
  'assets/geom_tri_6.svg',
  'assets/geom_house.svg'
];

// Cài đặt Service Worker và lưu trữ tài nguyên
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Đang lưu trữ tài nguyên vào cache...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Kích hoạt Service Worker và dọn dẹp cache cũ
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Đang xóa cache cũ:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Phản hồi các yêu cầu fetch từ cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Trả về từ cache nếu có, nếu không thì fetch từ mạng
      return response || fetch(event.request);
    })
  );
});
