import React, { useState } from 'react';
import Link from 'next/link';

const Electric = () => {
  const [proceed, setProceed] = useState('');
  const [message, setMessage] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState(''); 

  const handleValidation = async (e) => {
    e.preventDefault();
    const customer = e.target.elements.customer.value;

    try {
      const response = await fetch('../api/validateElectric', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from the serverless function');
      }

      const result = await response.json();
      const status = result.status;
      setMessage(result.message);

      if (status === 'success') {
        setOwnerName(result.data.name);
        setMeterNumber(result.data.customer);
        setMinAmount(result.data.minimum);
        setMaxAmount(result.data.maximum);

        setProceed(
          <a href={`/paybills?customer_id=${result.data.customer}`}>
            <input type="button" value="Proceed" className="submit-btn" />
          </a>
        );
      } else {
        setProceed('');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while processing your request.');
    };
    {console.log(typeof minAmount)}
  };

  function formatNumberWithCommas(number) {
    return Number(number).toLocaleString();
  }

  return (
    <div className="electric">
      <form onSubmit={handleValidation}>
        <h1>Utilities Hub</h1>
        <div className="row">
          <div className="col">
            <div className="inputBox">
              <span>Meter Number: </span>
              <input name="customer" type="number" placeholder="Your Meter Number" />
            </div>

            <p className="api-message"><span className="api-message-heading">Status:</span><span className="api-amount"> {message}</span></p>
            <p className="api-message"><span className="api-message-heading">Customer:</span><span className="api-amount"> {ownerName}</span></p>
            <p className="api-message"><span className="api-message-heading">Meter Number:</span><span className="api-amount"> {meterNumber}</span></p>
            <p className="api-message"><span className="api-message-heading">Min. Recharge Amount:</span><span className="api-amount"> ₦{formatNumberWithCommas(minAmount)}</span></p>
            <p className="api-message"><span className="api-message-heading">Max. Recharge Amount:</span><span className="api-amount"> ₦{formatNumberWithCommas(maxAmount)}</span></p>
          </div>
        </div>
        {proceed}
        <input name="validate" type="submit" value="Perform Validation" className="home-btn" />
        <Link href="/">
          <input type="button" value="Back to Home" className="home-btn" />
        </Link>
      </form>
    </div>
  );
};

export default Electric;