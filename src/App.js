import './App.css'
import Room from './Room.js'

export default function App() {
  return (
    <main className="App">
      <Room text="Küche" isClean />
      <Room text="Wohnzimmer" />
      <Room text="Bad" />
    </main>
  )
}
