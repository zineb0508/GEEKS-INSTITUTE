import AgeDisplay from './components/AgeDisplay'
import AgeControls from './components/AgeControls'

function App() {
  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>🕒 Age Tracker</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  )
}

export default App



