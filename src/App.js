import './App.css'
import Room from './Room.js'
import Header from './Header.js'

export default function App() {
  return (
    <main className="App">
      <Header>🧼 Happy Cleaning!</Header>
      <Room text="Küche" isClean />
      <Room text="Wohnzimmer" />
      <Room text="Bad" />
    </main>
  )
}
