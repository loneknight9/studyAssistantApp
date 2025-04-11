import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Home Page</h1>
          <p className="text-gray-600">Welcome to the home page!</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
