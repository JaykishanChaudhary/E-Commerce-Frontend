import axios from "axios";
import "../Styles/CartPage.css";
// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function CartPage() {
  // const location=useLocation();
  const [CartData, SetCartData] = useState([]);
  const [Subtotal,SetSubtotal]=useState(0);
//   const [Key,Setkey]=useState('');
  // const {count,amount,title}=location.state;
  // console.log(count,amount,title);

  async function GetCartData() {
    await axios
      .get("http://localhost:5000/GetCart")
      .then((Response) => {
        SetCartData(Response.data.result);
        console.log(CartData);
      })
      .catch((error) => {
        throw error;
      });
  }

  async function HandlePay(){

     const {data:{key}}= await  axios.get('http://localhost:5000/getKey')

     const {data:{order}}=await  axios.post('http://localhost:5000/PayPost',{data:{
            amount:Subtotal
        }})



        const options = {
            key:key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp", //your business name
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:5000/PayPostVarification",
            prefill: {
                name: "Gaurav Kumar", //your customer's name
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#6699FFs"
            }
        };
        const razor= new window.Razorpay(options);
        razor.open();
        
  }

  useEffect(() => {
    GetCartData();
  }, []);

  useEffect(()=>{
    var subtotal=0;
    CartData.forEach((data)=>{
        subtotal+=data.amount;
    })
    SetSubtotal(subtotal)
  },[CartData])

  return (
    <>
        <h1>Your GamesCart</h1>
      {CartData.map((data, i) => {
        return (
          <>
            <div id="cartdetail">
              <p className="cartdescription">{data.title}</p>
              <p  className="cartdescription">Qty-{data.count}</p>
              <p  className="cartdescription">Amount-${data.amount}</p>
            </div>
          </>
        );
      })}
      <div id="buttondiv">
      <p id="subtotal">SubTotal-${Subtotal}</p>
      <button id="buybutton" onClick={HandlePay}>Buy Now</button>
      </div>
     
    </>
  );
}

export default CartPage;
