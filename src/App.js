import './App.css';

import Physics from './Physics';
import ClickToAnimate from './ClickToAnimate';
import Loader from './Loader';
import Slider from './Slider';
import HoverEffect from './HoverEffect';

function App() {
  return (
    <div className="App">
      <main>
        <ClickToAnimate />
        <HoverEffect />
        <Physics />
        <Loader />
        <Slider />
      </main>
    </div>
  );
}

export default App;
