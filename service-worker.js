self.addEventListener('install', event => {
  console.log('Service Worker instalado.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado.');
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : 'Sem mensagem';
  console.log("Meu data: ", data);
  event.waitUntil(
    self.registration.showNotification('Notificação Push', {
      body: `Nova mensagem: ${data}`,
      icon: 'assets/icons/icon-72x72.png'
    })
  );
});