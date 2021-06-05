// fichier : /service-worker.js
console.log("SW: Téléchargement fini.");

// (1) Installation
self.addEventListener("install", event => {
  console.log("SW: Installation en cours.");

  // Un Service Worker a fini d'être
  // installé quand la promesse dans
  // `event.waitUntil` est résolue
  event.waitUntil(
    // Création d'une promesse
    // factice qui est résolue au
    // bout d'une seconde.
    // Nous verrons dans l'article
    // suivant par quoi remplacer
    // cette promesse
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("SW: Installé.");
        resolve();
      }, 1000);
    })
  );
});

// (2) Activation
self.addEventListener("activate", event => {
  console.log("SW: Activation en cours.");

  // Un Service Worker a fini d'être
  // activé quand la promesse dans
  // `event.waitUntil` est résolue
  event.waitUntil(
    // Création d'une promesse
    // factice qui est résolue au
    // bout d'une seconde.
    // Nous verrons dans l'article
    // suivant par quoi remplacer
    // cette promesse
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("SW: Activé.");
        resolve();
      }, 1000);
    })
  );
});