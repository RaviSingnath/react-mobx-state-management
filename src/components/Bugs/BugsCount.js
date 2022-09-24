import { useContext } from 'react';
import { observer } from 'mobx-react'
import { BugsContext } from "../../App"

const BugsCount = () => {
  const store = useContext(BugsContext)

  return (
    <h1>Bugs: {store.bugsCount}</h1>
  )
}

export default observer(BugsCount)
