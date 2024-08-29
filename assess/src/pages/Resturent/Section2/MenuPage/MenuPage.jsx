import "./MenuPage.css";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Redux/cartSlice.js';

export default function MenuPage() {
    const location = useLocation();
    const { menu, restaurantName, address } = location.state || {}; // Get passed data

    if (!menu) {
        return <p>No menu data available.</p>;
    }

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart({
          ...item,
          restaurantName: restaurantName || 'N/A',
          restaurantAddress: address || 'N/A',
        }));
      };
      

    return (
        <div className="menu pb-4">
            <div className="menu-header">
                <h2>Discover Our Incredible </h2>
                <h2>Selection of Delicious Food </h2>
                <h2>At {restaurantName}</h2>
                <div className="menu-para mt-4">
                    <p>
                        Explore our mouthwatering variety of dishes, crafted to satisfy every craving with rich flavors
                    </p>
                </div>
            </div>

            {/* Food Card Map */}
            <div className="food-card-main d-flex flex-wrap justify-content-center mt-5 gap-4">
            {menu.map((item, index) => (
                <div className="food-card" key={index}>
                    <div className="food-cardImg">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="food-card-header p-2">
                        <h4>{item.title}</h4>
                        <div className="food-card-para">
                            <p>{item.description}</p>
                        </div>
                        <div className="food-card-price">
                            <h6>
                                {item.price}
                            </h6>
                        </div>
                    </div>
                    <div className="food-card-btn ms-3 mb-3">
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
