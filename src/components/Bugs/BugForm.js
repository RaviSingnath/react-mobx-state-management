import { useContext, useState } from 'react';
import { StoreContext } from "../../App"

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

export default BugForm
