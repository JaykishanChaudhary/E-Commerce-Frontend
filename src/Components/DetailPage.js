import { useLocation } from "react-router-dom"
import '../Styles/DetailPage.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DetailPage(){
    const location = useLocation();
    const product = location.state.product;
    const [Count,setCount]=useState(0);
    const [Amount,SetAmount]=useState(0);
    // const [CartInformation,SetCartInformation]=useState({

    // })
    const nevigate=useNavigate();

    function HandleAmount(){
        setCount(Count+1);
        console.log(Count)
        SetAmount((Count+1)*product.price);
        console.log(Amount);
    }

    function GoToCart(){
        nevigate('/CartPage');
        axios.post('http://localhost:5000/CartPost',{
            data:{
                count:Count,
                amount:Amount,
                title:product.title
            }
        }).then((Response)=>{
            console.log(Response);
        }).catch((error)=>{
            throw error
        })
    }

    return <>
    <div className="headpart">
        <h1 id="headpart1">Video Games</h1>
        <img id='cartimage' onClick={GoToCart} src="https://tse2.mm.bing.net/th?id=OIP.hy2ZHgfL8xlOQUkJfe-hVQHaFs&pid=Api&P=0" alt=""/>
    </div>
    
    <div className="mainbox">
            <img id='productimage' src={product.image} alt=""/>
       
        <div className="descriptionbox">
            <h2>{product.title}</h2>
            <p id="productprice">${product.price}</p>
            <p id="productdescription">{product.description}</p>
            <button id="cartbutton" onClick={HandleAmount}>Add to Cart</button>
        </div>
    </div>
    </>
}

export default DetailPage