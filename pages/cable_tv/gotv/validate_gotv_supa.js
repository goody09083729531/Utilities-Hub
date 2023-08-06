import React, { useState } from 'react';
import Link from 'next/link';
import { NoNavbarLayout } from '../../../components';

const GotvSupa = () => {
  const [proceed, setProceed] = useState('');
  const [message, setMessage] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state variable

  const handleValidation = async (e) => {
    e.preventDefault();
    const customer = e.target.elements.customer.value;

    try {
      setLoading(true); // Set loading state to true when the button is clicked

      const response = await fetch('../../api/gotv_api/validateGotvSupa', {
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
    } finally {
      setLoading(false); // Set loading state back to false after the fetch and processing are done (whether success or error)
    }
  };

  function formatNumberWithCommas(number) {
    return Number(number).toLocaleString();
  }

  return (
    <NoNavbarLayout>
      <div className="electric">
        <form onSubmit={handleValidation}>
          <h1>Utilities Hub</h1>
          <div className="row">
            <div className="col">
              <div className="inputBox">
                <span>IUC Number: </span>
                <input name="customer" type="number" placeholder="Your IUC Number" />
              </div>

              <p className="api-message"><span className="api-message-heading">Status:</span><span className="api-amount"> {message}</span></p>
              <p className="api-message"><span className="api-message-heading">Customer:</span><span className="api-amount"> {ownerName}</span></p>
              <p className="api-message"><span className="api-message-heading">IUC Number:</span><span className="api-amount"> {meterNumber}</span></p>

              {proceed}
              <input
                name="validate"
                type="submit"
                value={loading ? 'Loading...' : 'Perform Validation'} // Show "Loading..." when loading state is true
                className="home-btn"
                disabled={loading} // Disable the button while loading is true to prevent multiple clicks
              />
            </div>
          </div>
          <Link href="/">
            <input type="button" value="Back to Home" className="home-btn" />
          </Link>
        </form>
      </div>
    </NoNavbarLayout>
  );
};

export default GotvSupa;