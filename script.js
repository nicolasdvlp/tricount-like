if ("serviceWorker" in navigator) {
  // On essaye d'enregistrer le service
  // worker
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(registration => {
      // Le Service Worker a fini d'être
      // téléchargé.
      console.log(
        "App: Téléchargement fini."
      );

      // (1) A chaque fois qu'il y a une
      // mise à jour des Service Workers
      registration.addEventListener(
        "updatefound",
        () => {
          // (1) On récupère le Service
          // Worker en cours
          // d'installation
          const newWorker =
            registration.installing;
          // `registration` a aussi
          // les clés `active` et 
          // `waiting` qui permettent
          // de récupérer les Service
          // Workers correspondant

          // (2) A chaque fois que le
          // Service Worker en cours
          // d'installation change
          // de statut
          newWorker.addEventListener(
            "statechange",
            () => {
              // (2) On affiche son
              // nouveau statut
              console.log(
                "App: Nouvel état :",
                newWorker.state
              );
            }
          );
        }
      );
    })
    .catch(err => {
      console.error(
        "App: Crash de Service Worker",
        err
      );
    });
}