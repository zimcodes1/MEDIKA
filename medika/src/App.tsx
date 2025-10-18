import './App.css'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'

function App(){
  return(
    <div className='w-full h-auto overflow-hidden'>
      <TopBar></TopBar>
      <Hero></Hero>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
} 



export default App