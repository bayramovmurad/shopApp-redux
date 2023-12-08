import { useDispatch } from "react-redux"
import { remove, dec, inc, more } from '../redux/cartSlice'


const CartItem = ({ id, img, title, price, amount, showMore }) => {
    const dispatch = useDispatch()

    return (




        <div className="w-[300px] h-[400px] border rounded-md flex items-center justify-center flex-col text-center p-4">
            <div>
                <center><img width={150} src={img} alt={title} /></center>
                <h3 className="font-bold my-2" onClick={() => dispatch(more(id))}>
                    {showMore ? title + " Show less" : title.length > 30 ? title.slice(0, 30) + " Read more" : title}
                </h3>
            </div>
            <p className="font-semibold">{price} AZN</p>
            <div className="flex gap-x-1 my-2">
                <button className="border border-red-500 px-3 rounded-md" onClick={() => dispatch(inc({ id }))}>+</button>
                <span className="font-semibold ">{amount}</span>
                <button className="border border-red-500 px-3 rounded-md" onClick={() => dispatch(dec({ id }))}>-</button>
            </div>
            <button className="text-sm font-medium" onClick={() => dispatch(remove(id))}>REMOVE</button>
        </div>

    )
}
export default CartItem