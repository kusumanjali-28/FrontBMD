import React from 'react';
import './Navbar.css'
import { useState } from 'react';
import Navbar from './Navbar';
import StripeCheckout from 'react-stripe-checkout';

function Donate() {
    const [donationAmount, setDonationAmount] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleToken = (token) => {
    
    console.log(token);
    setShowSuccessMessage(true);
  };
  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

return (
    <div >
<Navbar></Navbar>
  <meta charset="UTF-8"></meta>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap"
    rel="stylesheet"></link>

 <div className='pp3' >
  <link rel="stylesheet" type="text/css" href="dcodes/payment_icons/dc_payment_icons.css" />
  <link rel="stylesheet" type="text/css" href="http://cdn.dcodes.net/2/payment_icons/dc_payment_icons.css" />
  <div class="cards" style={{height:'350px', position: 'relative', top: '180px',color:'black',fontSize:'20px'}}>
  <div style={{marginTop:'50px'}}>
  <h3 style={{textAlign:'center'}}><br /><b>CONFIRM YOUR PAYMENT</b></h3><br/>

     <div style={{marginLeft: '150px'}}>
      <label>
        Donation amount:
        <input
          type="number"
          min="0"
          step="1"
          value={donationAmount}
          onChange={handleDonationAmountChange}
        />
      </label>
      <br />
      <StripeCheckout
        name="My Charity"
        description={`Donation of $${donationAmount}`}
        amount={donationAmount * 100} // Stripe amount is in cents
        currency="INR"
        stripeKey="pk_test_51N0PeKSHLc1GsPu4OWeiZhfOUH1tz46Vcv0poIMUclXyfdY5IMUjyr9DT6TBXQP5iro5cQOcOQ73fMvYUQZml03F007eaDFofc"
        token={handleToken}
      >
 
      <span class="dc_payment_icons_glossy_75 dc_visa_glossy" title="Visa" style={{ display: 'inline-block',width: '50px',height:'30px',marginTop:'50px'}}></span>
      <span class="dc_payment_icons_glossy_75 dc_mastercard_glossy" title="Mastercard" style={{ display: 'inline-block',width: '50px',height:'30px',marginTop:'50px'}}></span><br />
   
      <button type="submit" style={{marginTop:'0px'}}  name="submit" id="submit" className='ppx' size="100" >Donate with Card</button>

      </StripeCheckout>
      {showSuccessMessage && <p>Thank you for your donation!</p>}
    </div>
      <br /><br /> 
</div>
</div>
</div>

</div>
)}

export default Donate