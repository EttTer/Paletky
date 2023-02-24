import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import "./palettes";
import { palettes } from './palettes';
import Palette from './components/Palette/Palette';


const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
      {palettes.map((item)=><Palette key = {item.name} paletteData = {item}/>)}   
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

