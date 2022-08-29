import React, { createContext, useContext, useState } from 'react'
import { useLocalStore, useObserver } from 'mobx-react'
import './App.css';

const StoreContext = createContext()

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

const BugsCount = () => {
  const store = useContext(StoreContext)

  return useObserver(() => (
    <h1>Bugs: {store.bugCount}</h1>
  ))
}

const BugList = () => {
  const store = useContext(StoreContext)

  return useObserver(() => (
    <ul>
      {store.bugs.map(bug => <li key={bug}>{bug}</li>)}
    </ul>
  ))
}

const BugForm = () => {
  const store = useContext(StoreContext)
  const [bug , setBug] = useState('')

  return (
    <form onSubmit={(e) => {
      store.addBug(bug)
      setBug('')
      e.preventDefault()
    }}>
      <input type='text' value={bug} onChange={(e) => setBug(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  )
}

function App() {
  return (
    <StoreProvider>
      <main>
        <BugsCount />
        <BugList />
        <BugForm />
      </main>
    </StoreProvider>
  );
}

export default App;
