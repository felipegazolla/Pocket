import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summarty'
import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      {summary?.summary.total > 0 ? <Summary /> : <EmptyGoals />}
      
      <CreateGoal />
    </Dialog>
  )
}
