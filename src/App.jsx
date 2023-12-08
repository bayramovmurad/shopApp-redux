import { useEffect } from "react";
import CartContainer from "./Pages/CartContainer"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotals } from "./redux/cartSlice";




const App = () => {
  const dispatch = useDispatch();
  
  const { cartItems } = useSelector((store) => (store.cart))
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (

    <div >
      <CartContainer />
    </div>
   
  )
}
export default App