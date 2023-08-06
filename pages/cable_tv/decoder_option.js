import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NoNavbarLayout } from '../../components';

const DecoderOption = () => {
  const router = useRouter();
  const [selectedDecoder, setSelectedDecoder] = useState('DSTV');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleDecoderChange = (event) => {
    setSelectedDecoder(event.target.value);
    setSelectedPackage('');
  };

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const packageOptions = {
    DSTV: ['Premium', 'Compact Plus', 'Compact', 'Family'],
    GOTV: ['Supa Plus', 'Supa', 'Max', 'Jolli', 'Jinja', 'Smallie'],
    STARTIMES: ['Classic', 'Super', 'Basic'],
  };

  const options = packageOptions[selectedDecoder];

  const handleNextButtonClick = () => {
    if (selectedPackage) {
      switch (selectedPackage) {
        case 'Max':
          router.push('./gotv/validate_gotv_max');
          break;
        case 'Supa':
          router.push('./gotv/validate_gotv_supa');
          break;
        case 'Supa Plus':
          router.push('/premium-page');
          break;
        case 'Jinja':
          router.push('./gotv/validate_gotv_jinja');
          break;
        case 'Jolli':
          router.push('./gotv/validate_gotv_jolli');
          break;
        case 'Smallie':
          router.push('./gotv/validate_gotv_smallie');
          break;
        // Add more cases for other package options and their corresponding pages
        default:
          // If the selected package doesn't have a specific page, do something else
          break;
      }
    } else {
      // Handle the case when the user clicks "Next" without selecting a package
      // For example, you could show an error message or disable the "Next" button.
    }
  };

  return (
    <NoNavbarLayout>
      <div className="electric">
        <form>
          <h1>Utilities Hub</h1>
          <div className="row">
            <div className="col">
              <div className="inputBox">
                <span>Decoder Type: </span>
                <select value={selectedDecoder} onChange={handleDecoderChange}>
                  <option value="DSTV">DSTV</option>
                  <option value="GOTV">GOTV</option>
                  <option value="STARTIMES">STARTIMES</option>
                </select>
              </div>
              <div className="inputBox">
                <span>Package: </span>
                <select value={selectedPackage} onChange={handlePackageChange}>
                  <option value="">Select a package</option>
                  {options &&
                    options.map((packageOption) => (
                      <option key={packageOption} value={packageOption}>
                        {packageOption}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <input
            type="button"
            value="Move to Validation Page"
            className="home-btn"
            onClick={handleNextButtonClick}
          />
          <Link href="/">
            <input type="button" value="Back to Home" className="home-btn" />
          </Link>
        </form>
      </div>
    </NoNavbarLayout>
  );
};

export default DecoderOption;
