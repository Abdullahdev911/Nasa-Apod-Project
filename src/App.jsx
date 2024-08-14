import {useEffect, useState} from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
function App() {
  
  const [apiData,setApiData] = useState();
  const [showModal, setShowModal] = useState(false);


  function handleModalToggle(){
    setShowModal(!showModal);
  }

  useEffect(()=>{
    async function fetchData(){

      const key = import.meta.env.VITE_API_KEY
  try{
  
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    const data = await response.json()
    console.log(data);
    setApiData(data);
  
  }
  catch(e){
    console.error(e)
  }
   }
    fetchData()
  },[])



  return (
   <>
    {apiData ?<Main data={apiData}/> : (<div className='loader'>
      <i className="fa-solid fa-gear"></i>
    </div>)}
    {showModal && <SideBar data={apiData} handleModalToggle={handleModalToggle}/>}
    {apiData && <Footer data={apiData} handleModalToggle={handleModalToggle}/>}
    
   </>
  )
}

export default App
