// Write your code here
const CartSummary = ({cartData}) => {
  let total = 0
  for (const eachItem of cartData) {
    total += eachItem.price
  }
  const count = cartData.length
  return (
    <div>
      <h1>Order Total: RS {total}</h1>
      <p>{count} items in cart</p>
      <button type="button">Checkout</button>
    </div>
  )
}

export default CartSummary
