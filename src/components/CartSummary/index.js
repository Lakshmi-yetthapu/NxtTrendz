// Write your code here
import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const CartSummary = ({cartData}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const total = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  const count = cartData.length

  // Handle Confirm Order
  const handleConfirmOrder = closePopup => {
    setIsOrderPlaced(true)
    setTimeout(() => {
      alert('Your order has been placed successfully!')
      setIsOrderPlaced(false)
      closePopup()
    }, 500)
  }

  return (
    <div>
      <h1>Order Total: RS {total}</h1>
      <p>{count} items in cart</p>
      <Popup
        trigger={
          <button type="button" className="checkout-button">
            Checkout
          </button>
        }
        modal
        closeOnDocumentClick
      >
        {close => (
          <div className="popup-content">
            <h2>Payment Details</h2>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  value="Card"
                  disabled
                  checked={selectedPaymentMethod === 'Card'}
                  onChange={e => setSelectedPaymentMethod(e.target.value)}
                />
                Card
              </label>
              <label>
                <input
                  type="radio"
                  value="Net Banking"
                  disabled
                  checked={selectedPaymentMethod === 'Net Banking'}
                  onChange={e => setSelectedPaymentMethod(e.target.value)}
                />
                Net Banking
              </label>
              <label>
                <input
                  type="radio"
                  value="UPI"
                  disabled
                  checked={selectedPaymentMethod === 'UPI'}
                  onChange={e => setSelectedPaymentMethod(e.target.value)}
                />
                UPI
              </label>
              <label>
                <input
                  type="radio"
                  value="Wallet"
                  disabled
                  checked={selectedPaymentMethod === 'Wallet'}
                  onChange={e => setSelectedPaymentMethod(e.target.value)}
                />
                Wallet
              </label>
              <label>
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={selectedPaymentMethod === 'Cash on Delivery'}
                  onChange={e => setSelectedPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>
            <div className="summary">
              <p>Number of items: {count}</p>
              <p>Total Price: RS {total}</p>
            </div>
            <button
              type="button"
              className="confirm-button"
              onClick={() => handleConfirmOrder(close)}
              disabled={selectedPaymentMethod !== 'Cash on Delivery'}
            >
              Confirm Order
            </button>
            <button type="button" className="cancel-button" onClick={close}>
              Cancel
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default CartSummary
