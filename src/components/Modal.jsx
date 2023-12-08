import { useDispatch } from "react-redux"
import {clear}  from '../redux/cartSlice'
import { closeModal } from "../redux/cartModal"


const Modal = () => {
    
    const dispatch = useDispatch()
  return (
   <div className="flex justify-center ">
          <div className="fixed border-2 border-black w-[300px] h-[150px] bg-white text-center rounded-md">
              <h3 className="font-semibold my-4">Are you sure you want to delete the entire basket?</h3>
              <div className="flex gap-x-2 justify-center">
                  <button className="bg-red-500 px-4 py-1 rounded-sm text-white font-semibold" onClick={() => {dispatch(clear()); dispatch(closeModal())}}>CONFIRM</button>
                  <button className="bg-red-500 px-4 py-1 rounded-sm text-white font-semibold" onClick={() => dispatch(closeModal())}>CANCEL</button>
              </div>
          </div>
   </div>
  )
}
export default Modal