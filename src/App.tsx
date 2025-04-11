import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterOutlet,
} from '@ionic/react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-2xl font-bold text-blue-500">
            My Ionic App
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default App;
