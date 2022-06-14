import './App.css';

import Physics from './Physics';
import Loader from './Loader';
import Slider from './Slider';
import HoverEffect from './HoverEffect';

function App() {
  return (
    <div className="App">
      <main>
        <HoverEffect />
        <Physics />
        <Loader />
        <Slider />
      </main>
    </div>
  );
}

export default App;
