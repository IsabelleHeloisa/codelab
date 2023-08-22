import './App.css'
import Router from './Router'
import { PreferenceProvider } from './contexts/PreferenceContext'

function App() {
  return (
    <PreferenceProvider>
      <Router />
    </PreferenceProvider>
  )
}

export default App
