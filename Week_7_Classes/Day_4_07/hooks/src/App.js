
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import Timer from './components/Timer/Timer';
import ApartmentList from './components/ApartmentList/ApartmentList';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
    <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
    {/* {show && <Counter />} */}
   {/*  {show && <Timer />} */}
    {show && <ApartmentList />}
    </div>
  );
}

export default App;
