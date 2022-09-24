import React, { createContext } from 'react'
import Bugs from './pages/Bugs';
import BugsStore from './components/Bugs/BugsStore';
import './App.css';

export const BugsContext = createContext()

function App() {
  return (
    <BugsContext.Provider value={BugsStore}>
      <main>
        <Bugs />
      </main>
    </BugsContext.Provider>
  );
}

export default App;
