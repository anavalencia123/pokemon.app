import { use, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {


  useEffect(() => {
    axios.get(url)
  })
    
  return (
    <div className="App">
      <h1>pokemon</h1>
    </div>
  );
}

export default App;
