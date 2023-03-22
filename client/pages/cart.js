import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import privateUserRoute from "../routes/privateUserRoute";
import { handlePayment } from "../action/payment.js";
import Script from "next/script";
import Layout from "../Components/Layout";
import PaymentForm from "../Components/PaymentForm";
import SectionHeading from "../Components/SectionHeading";
import { deleteFromCart, getEventFromCart } from "../action/cart";
import { toast } from "react-toastify";

const CartPage = () => {
  const [cart, setCart] = useState([])
  const [visible,setVisible] = useState(false);
  function open() {
    setVisible(!visible);
  }
  
  useEffect(()=> {
    (
      async () => {
        try {
          const res = await getEventFromCart();
          if(res?.error) {
            return;
          }
          setCart(res.events)
        } catch (e) {
          console.log(e)
        }
      }
    )();
  },[])

  let total = 0;
  cart.forEach((item) => {
    total += item.price
  })

  return (
    <Layout>
      <div className="">
        <h1 className="mt-[50px] text-3xl font-black text-center uppercase sm:text-4xl md:text-5xl text-sky-400 list-none">
          <SectionHeading>Events Cart</SectionHeading>
        </h1>
        <div className="flex flex-col h-full mt-4 list-none sm:flex sm:flex-row sm:gap-2">
          <ul className="m-5 p-4 sm:w-[70%] divide-y"
            style={{
              backgroundColor: "rgba(23, 41, 71, 0.73)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            {cart.length != 0 ?
            cart.map((product) => ( 
              <li>
                {/* {total.push(product.price)} */}
                {console.log("Id ",product.id)}
                <div className="grid grid-cols-4 gap-8 sm:p-10">
                  <div>
                    <img
                      // src={product.logo}
                      alt="{product.imageAlt}"
                      className="w-24 h-12 rounded-lg sm:w-40 sm:h-32"
                    />
                  </div>
                  <div className="text-white">{product.name}</div>
                  <div className="text-white sm:float-right">₹ {product.price}</div>
                  <div className="text-white">
                    <button
                      type="button"
                      className="ml-0 text-xs text-white sm:text-sm sm:font-medium hover:text-sky-400 sm:ml-0"
                      onClick={async () => {
                        const data = await deleteFromCart(product.id);
                        if(data?.error) {
                          toast.error(data.error)
                          return;
                        }
                        let item = cart.filter(item => item.id != product.id)
                        setCart(item)
                      }}
                    >
                      {/* <span>Remove</span> */}
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            )): <p className="relative top-[30%] text-white text-4xl text-center">Your Cart Is Empty</p>}
          </ul>

          <div
            className="sm:w-[50%] sm:h-[30%] sm:p-4 sm:m-5 text-white mr-5 ml-[40%]"
            style={{
              backgroundColor: "rgba(23, 41, 71, 0.73)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)"
            }}
          >
            <div className="flex flex-col text-sm divide-y divide-gray-200">
              <h2 className="p-4 text-center"> Order Summary</h2>
              <div className="p-4">
                <div className="flex flex-row w-full gap-4 sm:gap-[65%]">
                  <div className="w-[40%]">Order Total</div>
                  <div className="">
                    {total}
                  </div>
                </div>
              </div>

              <div className="p-4 mt-10">
                <Script src="https://checkout.razorpay.com/v1/checkout.js" />
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-base font-medium text-white bg-[#0c4a6e] border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  onClick={()=> {
                    open();
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <PaymentForm
          open={visible}
          close={open}
          cart={cart}
          setCart={setCart}
          amount={total}
         /> 
       </div> 
    </Layout>
  );
};

export default privateUserRoute(CartPage);
