import React from 'react';
import { setupIonicReact } from '@ionic/react';
import { createRoot } from 'react-dom/client';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import App from './App';
import './index.css';

setupIonicReact();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IonApp>
      <IonReactRouter>
        <App />
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>
);
