import './App.css'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Body from './components/Body'

function App(){
  return(
    <div className='w-full h-auto'>
      <TopBar></TopBar>
      <Hero></Hero>
      <Body></Body>
    </div>
  )
} 



export default App