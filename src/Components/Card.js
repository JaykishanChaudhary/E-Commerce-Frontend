import '../Styles/Card.css'
import { useNavigate} from 'react-router-dom';
// import DetailPage from './DetailPage';

function Card({val}){
    console.log(val);

    const navigate=useNavigate()

    function HandleSubmit(){
        // {<DetailPage product={val}/>}
        navigate('/DetailPage',{state:{product:val}})
        
    }

    return <>
        {/* <Link to={{pathname:'/DetailPage',state:{product:val}}}> */}
       <div className="cardcontainer">
        <p className='title'>{val.title}</p>
        <img src={val.image}  alt=""/>
        <p className='price'>${val.price}</p>
        <p className='description'>{val.description}</p>
        <button type='submit' id='submitbutton'   onClick={HandleSubmit}>Add</button>
       </div>
       {/* </Link> */}
    </>
}

export default Card