import { useContext } from 'react';
import { useObserver } from 'mobx-react'
import { StoreContext } from "../../App"

const BugList = () => {
  const store = useContext(StoreContext)

  return useObserver(() => (
    <ul>
      {store.bugs.map((bug, i) => <li key={i}>{bug}</li>)}
    </ul>
  ))
}

export default BugList
