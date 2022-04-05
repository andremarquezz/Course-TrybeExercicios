import Image from './Image';
import './App.css';
import imageCat from './imageCat.jpg'; // Só consigo renderizar na pasta src

function App() {
  return (
    <main>
      <Image source={imageCat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
