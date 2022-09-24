import React, { createContext } from 'react'
import { useLocalStore } from 'mobx-react'
import Bugs from './pages/Bugs';
import './App.css';

export const StoreContext = createContext()

const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    bugs: ['bug 1'],
    addBug: (bug) => {
      store.bugs.push(bug)
    },
    get bugCount() {
      return store.bugs.length
    }
  }))

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function App() {
  return (
    <StoreProvider>
      <main>
        <Bugs />
      </main>
    </StoreProvider>
  );
}

export default App;
