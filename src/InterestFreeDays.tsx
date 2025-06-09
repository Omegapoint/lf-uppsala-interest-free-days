import './App.css'
import React, { useMemo, useState } from 'react';
import { TextField } from '@mui/material';
import { I18n, isNumberOrEmpty, translations } from './InterestFreeDays.helper';

interface Props {
  /** Defaults to 2 */
  periodInYear?: number; // TODO[ma] 2025-05-23 rename
  /** Defaults to 365 */
  mortgagePeriodInDays?: number;
  /** Translation values */
  i18n?: I18n;
}

const InterestFreeDays = (props: Props) => {
  const { periodInYear = 2, mortgagePeriodInDays = 365, i18n } = props;
  const labels = { ...translations, ...i18n };

  const [savings, setSavings] = useState<string>('');
  const [mortgage, setMortgage] = useState<string>('');

  // Sparande att flytta till LF Uppsala (i kronor) / Bolån (i kronor) * 365 / 2 = Antal räntefri dagar (avrunda till heltal)
  const interestFreeDays = useMemo(() => {
    if (savings === '' || mortgage === '') {
      return 0;
    }

    const days = Number(savings) / Number(mortgage) * mortgagePeriodInDays / periodInYear;
    return Math.round(days);
  }, [mortgage, savings]);

  return (
    <form className='Wrapper'>
      <div className='InputWrapper'>
        <TextField
          id="mortgage"
          label={labels.mortgage}
          variant="filled"
          required={true}
          value={mortgage}
          onChange={(event) => {
            event.preventDefault();
            if (isNumberOrEmpty(event.target.value)) {
              setMortgage(event.target.value);
            }
          }}
          className='Input'
        />
      </div>
      <div className='InputWrapper'>
        <TextField
          id="savings"
          className='Input'
          label={labels.savings}
          variant="filled"
          required={true}
          value={savings}
          onChange={(event) => {
            event.preventDefault();
            if (isNumberOrEmpty(event.target.value)) {
              setSavings(event.target.value);
            }
          }}
        />
      </div>
      {savings.length > 0 && mortgage.length > 0 &&
        <div>
          <label htmlFor='interest-free-days' className='Label'>{labels.interestFreeDays}</label>
          <p id='interest-free-days' className='InterestFreeDays'>
            {interestFreeDays === 1 ? labels.day(interestFreeDays) : labels.days(interestFreeDays)}
          </p>
        </div>
      }
    </form>
  )
}

export default InterestFreeDays
