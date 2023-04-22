import Card from './Card';
import axios from 'axios';
import {useEffect, useState} from 'react'; 
import '../Styles/LandingPage.css'


function LandingPage(){

    const [Information,setInformation]=useState([])
  
    function GetData(){
        axios.get('http://localhost:5000/getproduct').then((response)=>{
            console.log(response.data.result);
            setInformation(response.data.result);
            console.log(Information,'information')
    }).catch(error=>console.log(error))
    }
        
   useEffect(()=>{
    GetData()
   },[])

  

    // useEffect(() => {
    //     console.log('Information updated:', Information);
    // }, [Information]);

    return<>
    <h1 className='heading'>Video Games</h1>
    <div className='mainbox'>
         {Information.map((val,i)=>{
            return        <Card val={val} key={i}/>
        })}
    </div>
    </>
}

export default LandingPage