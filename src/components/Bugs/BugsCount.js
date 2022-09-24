import { useContext } from 'react';
import { useObserver } from 'mobx-react'
import { StoreContext } from "../../App"

const BugsCount = () => {
  const store = useContext(StoreContext)

  return useObserver(() => (
    <h1>Bugs: {store.bugCount}</h1>
  ))
}

export default BugsCount
