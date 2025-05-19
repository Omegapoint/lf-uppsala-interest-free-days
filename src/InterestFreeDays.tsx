import './App.css'
import React, { useMemo, useState } from 'react';

const labels = {
  mortgage: 'Bolån',
  savings: 'Sparande att flytta till LF Uppsala',
  interestFreeDays: 'Antal räntefria dagar'
}

const InterestFreeDays = () => {
  const [savings, setSavings] = useState<string>('');
  const [mortgage, setMortgage] = useState<string>('');

  // Sparande att flytta till LF Uppsala (i kronor) / Bolån (i kronor) * 365 / 2 = Antal räntefri dagar (avrunda till heltal)
  const interestFreeDays = useMemo(() => {
    if (savings === '' || mortgage === '') {
      return '0 dagar';
    }

    const days = Number(savings) / Number(mortgage) * 365 / 2;
    const daysRounded = Math.round(days);
    const daysInText = daysRounded > 1 ? `${daysRounded} dagar` : `${daysRounded} dag`;

    return daysInText;
  }, [mortgage, savings]);


  return (
    <div className='Wrapper'>
      <label htmlFor='mortage' className='Label'>{labels.mortgage}</label>
      <input
        type='text'
        className='Input'
        id='mortage'
        name="mortage"
        required={true}
        value={mortgage}
        onChange={(event) => {
          event.preventDefault();
          setMortgage(event.target.value);
        }}
      />
      <label htmlFor='savings' className='Label'>{labels.savings}</label>
      <input
        type='text'
        className='Input'
        id='savings'
        name="savings"
        required={true}
        value={savings}
        onChange={(event) => {
          event.preventDefault();
          setSavings(event.target.value);
        }}
      />
      <div>
        <label htmlFor='interest-free-days' className='Label'>{labels.interestFreeDays}</label>
        <p id='interest-free-days' className='InterestFreeDays'>{interestFreeDays}</p>
      </div>
    </div>
  )
}

export default InterestFreeDays
