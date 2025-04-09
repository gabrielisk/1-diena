
import './App.css'
import EinaPrieLentos from './components/EinaPrieLentos'
import GeriausiasMedis from './components/GeriausiasMedis'
import Laimejimas from './components/Laimejimas'
import Sansas from './components/Sansas'
import Skaiciai from './components/Skaiciai'
import Skaiciuotuvas from './components/Skaiciuotuvas'
import Tikrinimas from './components/Tikrinimas'

function App() {


  return (
    <>
      <Laimejimas />
      <Sansas />
      <Tikrinimas />
      <GeriausiasMedis />
      <Skaiciai />
      <EinaPrieLentos />
      <Skaiciuotuvas />
    </>
  )
}

export default App
