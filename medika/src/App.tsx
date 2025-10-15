import './App.css'
import TopBar from './components/TopBar'

function App(){
  return(
    <div className='w-full h-auto'>
      <div className='w-full h-[600px] bg-blue-100 flex px-20'>
        <TopBar></TopBar>
      </div>
    </div>
  )
} 



export default App