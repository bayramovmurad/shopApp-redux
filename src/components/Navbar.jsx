import { useSelector } from "react-redux"
import { CiShoppingBasket } from "react-icons/ci";




const Navbar = () => {
  const { amount } = useSelector((store) => (store.cart))
  return (
    <div className="h-16 bg-red-500 mb-14 flex items-center px-4">
      <h2 className="font-extrabold text-3xl text-white animate-pulse">SHOP</h2>
    <div className="relative ml-auto">
        <span className="absolute text-center top-0 right-0 rounded-full w-6 h-6 bg-white" >{
          amount
        }</span>
        <CiShoppingBasket className="text-5xl text-white" />
    </div>
    </div>
  )
}
export default Navbar