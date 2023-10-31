import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price , 0));
  },[cart])
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
  return (
    <div>
{
  cart.length > 0 ?
  (
    <div className="flex justify-center p-4 ">


      <div>
        {
          cart.map((item,index)=>{
            return <CartItem key={item.id} item={item} itemIndex={index}/>
          })
        }
      </div>

      <div className="flex flex-col content-between justify-between ml-16">
        
        <div className="mr-5">
          <div className="text-green-600 font-semibold text-lg uppercase ">Your Cart</div>
          <div className="text-green-600 font-semibold text-5xl font uppercase">Summary</div>
          <p className="mt-10">
            <span>Total Items : {cart.length}</span>
          </p>
          <p className="mb-7">Total Amount : <span className="font-bold">${totalAmount}</span></p>
          <button onClick={navigateHome} className="bg-green-600 text-white font-semibold p-4 w-[40vh]  items-center mb-10">
            CheckOut Now
          </button>
        </div>

        <div >
         
        </div>

      </div>

    </div>
  ):
  (
    <div className="flex flex-col items-center justify place-content-center  my-auto text-center">
    <h1 className="text-[40px] font-extrabold">Cart Empty</h1>
    
        <button onClick={navigateHome}  className="border p-4 w-[40vh]  bg-green-600 text-white mt-6">
          Shop Now
        </button>
      
    </div>
  ) 
}
    </div>
  );
};

export default Cart;
