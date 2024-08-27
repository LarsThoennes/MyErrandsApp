import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"errandsapp-6648a","appId":"1:528550597047:web:6cf7fc0134d5f71bdd9832","storageBucket":"errandsapp-6648a.appspot.com","apiKey":"AIzaSyA-zIWm9CVIxypwWBxjPW9QfgF39l9jiCc","authDomain":"errandsapp-6648a.firebaseapp.com","messagingSenderId":"528550597047"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
