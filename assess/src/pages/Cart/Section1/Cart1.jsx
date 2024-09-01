import "./Cart1.css";
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart,clearCart } from '../../../Redux/cartSlice.js';

export default function Cart1() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleIncrement = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(addToCart(item));
    }
  };

  const handleDecrement = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotalPrice = (price, quantity) => {
    if (price && quantity) {
      return (Math.ceil(price * quantity * 100) / 100).toFixed(2);
    }
    return 'N/A';
  };

  // Function to calculate the total price of all items in the cart
  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart1 container mt-4">
      <div className="cart1-table p-sm-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Restaurant Name</th>
              <th>Restaurant Address</th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Food Quantity</th>
              <th>Food Prices</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">No items in cart</td>
              </tr>
            ) : (
              cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.restaurantName || 'N/A'}</td>
                  <td>{item.restaurantAddress || 'N/A'}</td>
                  <td>
                    <div className="cartPro-img">
                      <img src={item.image} alt={item.title} className="food-image" />
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <div className="btns d-flex gap-3">
                      <button className="btn btn-danger" onClick={() => handleDecrement(item.id)}>-</button>
                      {item.quantity}
                      <button className="btn btn-danger" onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                  </td>
                  <td>{item.price ? calculateTotalPrice(item.price, item.quantity) : 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6" className="text-end"><strong>Total Price:</strong></td>
              <td>{calculateCartTotal()}</td>
            </tr>
          </tfoot>
        </Table>
      </div>
      <div className="mt-5  d-flex gap-4">
        <button className="btn btn-primary"> Proceed to Checkout</button>
        <button onClick = {handleEmptyCart} className="proceed">Empty Cart</button>
      </div>
    </div>
  );
}
