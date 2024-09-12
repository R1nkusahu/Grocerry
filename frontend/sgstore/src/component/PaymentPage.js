
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentPage.css'; // Import the CSS file for styling

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (location.state && location.state.totalPrice) {
      setTotalPrice(location.state.totalPrice);
    }
  }, [location.state]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_u7pnqOtOeC2KTz', 
      amount: totalPrice * 100, 
      currency: 'INR',
      name: 'SG Store',
      description: 'Test Transaction',
      handler: (response) => {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        navigate('/'); 
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Some Address',
      },
      theme: {
        color: '#F37254',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="payment-page">
      <p>Total amount: ₹{totalPrice.toFixed(2)}</p>
      <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
}

export default PaymentPage;
