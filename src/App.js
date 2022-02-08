import './App.css'
import Room from './Room.js'
import Header from './Header.js'

export default function App() {
  return (
    <main className="App">
      <Header>🧼 Happy Cleaning!</Header>
      <Room
        text="Küche"
        description="alle Oberflächen abwischen"
        isDescriptionVisible
        isClean
      />
      <Room text="Wohnzimmer" description="Staubwischen" />
      <Room
        text="Bad"
        description="eigener Lappen für das Klo"
        isDescriptionVisible
      />
    </main>
  )
}
