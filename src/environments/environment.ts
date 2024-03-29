// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA6d58nCk3fSbii_80OITWdKsGqVYvoNxE',
    authDomain: 'zus-us-app.firebaseapp.com',
    databaseURL: 'https://zus-us-app-default-rtdb.firebaseio.com',
    projectId: 'zus-us-app',
    storageBucket: 'zus-us-app.appspot.com',
    messagingSenderId: '897021068794'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
