
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { setSearchTerm } from "../redux/cartSlice";

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.cart.searchTerm);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const searchCartItems = () => {
        return cartItems.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="text-center ">
            <input
                className="border mb-12 w-[800px] h-12 outline-none p-4 font-semibold"
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
                {searchCartItems().map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Search;
