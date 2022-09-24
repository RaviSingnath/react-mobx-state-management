import { useContext } from 'react';
import { observer } from 'mobx-react'
import { BugsContext } from "../../App"

const BugList = () => {
  const store = useContext(BugsContext)

  return (
    <ul>
      {store.getBugsList().map((bug, i) => <li key={i}>{bug}</li>)}
    </ul>
  )
}

export default observer(BugList)
