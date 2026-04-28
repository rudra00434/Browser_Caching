// Register the Service Worker
if ('serviceWorker' in navigator) {
  // Wait for the page to load before registering to avoid delaying the initial render
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
} else {
  console.log('Service Workers are not supported in this browser.');
}
