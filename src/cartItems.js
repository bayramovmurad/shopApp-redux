const cartItems = [
  {
    id: 1,
    title: 'Apple Watch Ultra 2 Case with Blue Ocean Band (MREG3RB/A)',
    price: '2199.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/138069/smart-saat-apple-watch-ultra-2-gps-cellular-49mm-titanium-case-wiht-blue-ocean-band-mreg3rba-7_429x419far_74b.png',
    amount: 1,
  },
  {
    id: 2,
    title: 'Apple Watch Series 9 Case with Blue Ocean Band (MREG3RB/A)',
    price: '499.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/138021/smart-saat-apple-watch-series-9-gps-41mm-2_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 3,
    title: 'Samsung Galaxy Watch 6 Classic 47mm silver',
    price: '699.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/136712/samsung-galaxy-watch6-classic-47mm-silver-1_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 4,
    title: 'Samsung Galaxy Watch 6',
    price: '599.99 ',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/136713/samsung-galaxy-watch6-44mm-black-3_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 5,
    title: 'Smart saat Xiaomi Watch S1 GL Black BHR5559GL (M2112W1)',
    price: '319.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/119840/fa0b219bfcb7e14fd47e9bb7b67e271532ce62f0-s200739933-3_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 6,
    title: 'Smart saat HUAWEI Band 8 Green',
    price: '129.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/135571/smart-saat-huawei-band-8-wilderness-green-1_429x419far_efe.jpg',
    amount: 1,
  },
  // ! smartfon
  {
    id: 18,
    title: 'Smartfon Apple iPhone 15 128Gb',
    price: '2399.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/137738/smartfon-apple-iphone-15-128gb-black-mtp03-2_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 17,
    title: 'Smartfon Xiaomi 13T 12GB/256GB',
    price: '1259.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/137586/xiaomi-13t-12gb256gb-meadow-green_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 16,
    title: 'Smartfon Apple iPhone 15 Pro Max 512Gb',
    price: '4299.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/137846/smartfon-apple-iphone-15-pro-max-10_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 15,
    title: 'Smartfon Samsung Galaxy S23 Ultra 12GB/256GB',
    price: '2699.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/128997/s23-ultra-black_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 14,
    title: 'Smartfon Samsung Galaxy Z Fold 5 12GB/256GB',
    price: '3699.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/135943/smartfon-samsung-galaxy-z-fold-5-12gb256gb-icy-blue-f946-8_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 13,
    title: 'Smartfon Samsung Galaxy A54 8GB/256GB Violet (A546)',
    price: '919.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/130206/Smartfon%20Samsung%20Galaxy%20A54_429x419far_efe.jpg',
    amount: 1,
  },
  // ! computer
  {
    id: 7,
    title: 'Notbuk MSI Cyborg 15 A12VE/15.6/FHD 144Hz/I7-12650H/16GB RAM DDR5/512GB SSD/RTX4050/WINDOWS 11 (9S7-15K111-655)',
    price: '3299.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/139841/notbuk-msi-cyborg-15-a12ve156fhd-144hzi7-12650h16gb-ram-ddr5512gb-ssdrtx4050windows-11-9s7-15k111-655-1_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 8,
    title: 'Notbuk Acer Nitro 5/17.3 FHD IPS 144Hz/i5-11400H/16/512/RTX™ 3070 (NH.QFCER.007)',
    price: '2299.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/139259/nhqfcer007_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 9,
    title: 'Notbuk HP Victus 15.6/Ryzen 5 7535HS/16GB/RTX 2050/512GB SSD/WiN11(845A2UA)',
    price: '2099.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/138784/notbuk-hp-victus-156ryzen-5-7535hs16gbrtx-2050512gb-ssdwin11845a2ua-1_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 10,
    title: 'Notbuk ASUS Rog Strix i9-13980HX/16GB/1TB SSD/RTX4070(90NR0D42-M003W0)',
    price: '4899.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/131475/notbuk-asus-rog-strix-g16-g614ji-n408316-i9-13980hx16gb1tb-ssdrtx-4070-8gbfreedosvolt-green-90nr0d42-m003w0-1_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id:11,
    title: 'Apple MacBook Pro 14 M3 Pro (11C CPU/14C GPU) 512 GB, Silver (MRX63RU/A)',
    price: '4899.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/139651/enc%C9%99d%C9%99n-sifari%C5%9F-apple-macbook-pro-14-m3-pro-11c-cpu14c-gpu-512-gb-silver-mrx63rua-2_429x419far_efe.jpg',
    amount: 1,
  },
  {
    id: 12,
    title: 'Apple MacBook 13.6" Air M2/8C CPU/8C GPU/8GB/256GB SSD/Space Grey (MLXW3RU/A)',
    price: '2999.99',
    img: 'https://www.bakuelectronics.az/assets/cache_image/products/111685/baku-electronics-%E2%80%94-kopiya_429x419far_efe.jpg',
    amount: 1,
  },
];
export default cartItems;
