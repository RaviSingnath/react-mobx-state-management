import { useContext, useState } from 'react';
import { BugsContext } from "../../App"

const BugForm = () => {
  const store = useContext(BugsContext)
  const [bug , setBug] = useState('')

  return (
    <form onSubmit={(e) => {
      store.setBugsList(bug)
      setBug('')
      e.preventDefault()
    }}>
      <input type='text' value={bug} onChange={(e) => setBug(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default BugForm
