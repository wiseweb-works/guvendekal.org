window.onload = function () {
  // Tüm sayfa yüklendikten sonra
  const prefetchLightCSS = document.createElement('link'); // Aydınlık Tema için
  prefetchLightCSS.rel = 'prefetch';
  prefetchLightCSS.href =
    'https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css';
  prefetchLightCSS.as = 'style';
  document.head.appendChild(prefetchLightCSS);

  const prefetchDarkCSS = document.createElement('link'); // Karanlık Tema için
  prefetchDarkCSS.rel = 'prefetch';
  prefetchDarkCSS.href =
    'https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css';
  prefetchDarkCSS.as = 'style';
  document.head.appendChild(prefetchDarkCSS);
};
