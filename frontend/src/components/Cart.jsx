import {React} from 'react'


function Cart({cart, setCart}) {

    

    const cartTotal = cart.reduce((total) => total + 60, 0);

    const removeFromCart = (item) => {
        setCart((currentCart) => {
          const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);
    
          if (indexOfItemToRemove === -1) {
            return currentCart;
          }
          return [
            ...currentCart.slice(0, indexOfItemToRemove),
            ...currentCart.slice(indexOfItemToRemove + 1),
          ];
        });
      };

    const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

    const listItemsInCart = () => cart.map((item) => (
        <div key={item.id}>
          ({amountOfItems(item.id)} x 60 {`${item.name}`}
          <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
        </div>
    ));

  return (
    <>
    <div>Cart</div>
    <div>{listItemsInCart()}</div>
    <div>Total: ${cartTotal}</div>
    </>
    

  )
}

export default Cart