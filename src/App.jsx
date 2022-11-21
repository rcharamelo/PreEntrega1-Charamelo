import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer mensaje="Hola Mundo ItemListContainer!!!" />
    </>
  )
}

export default App;