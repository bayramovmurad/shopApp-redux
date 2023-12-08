import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
// import CartItem from "../components/CartItem";
import { openModal } from "../redux/cartModal";
import Modal from "../components/Modal";
import { comeBackData } from "../redux/cartSlice";
import Search from "../components/Search";


const CartContainer = () => {
    const { amount, total } = useSelector((store) => (store.cart));
    const { isOpenModal } = useSelector((store) => (store.modal));
    const dispatch = useDispatch()

    if (amount < 1) {
        return (
            <div className="flex justify-center items-center flex-col mt-10">
                <h2 className="font-bold text-3xl my-4">Your cart is empty. Would you like to refresh?</h2>
                <button className="px-6 py-2 bg-red-500 text-white rounded-md" onClick={()=>dispatch(comeBackData())}>Refresh</button>
            </div>
        )
    }
    return (
        <div>
            
            <Navbar />
            
            {isOpenModal && <Modal />}
            <Search />
            {/* <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
                {
                    cartItems.map((item) =>
                        <CartItem key={item.id} {...item} />
                    )
                }
            </div> */}
            <hr className="mt-12"/>
            <footer className="flex items-center justify-around my-4">
                <h3 className="font-semibold"> Total: {total.toFixed(2)} AZN</h3>
                
                    <button className="bg-red-500 px-10 py-2 rounded-sm text-white font-semibold" onClick={() => dispatch(openModal())}>CLEAR</button>
           
            </footer>
           
        </div>
    )
}
export default CartContainer 