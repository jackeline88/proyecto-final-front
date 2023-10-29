import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Card from './Card'
import User from './User'


function App() {
 const hola = "Cats"
 const description = "Conócenos"
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <User/>
      <div className='main-block'>
        <h1 className='title'>{hola}</h1>
        <p className='subtitle'>{description}</p>
        <button className='button'>Inicio</button>
      </div>
      <div className="columns">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <Routes>
      <Route></Route>
      <Route></Route>
    </Routes>


</BrowserRouter>
  )
}

export default App
