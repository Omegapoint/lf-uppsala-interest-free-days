import React, { useMemo, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import {
  I18n,
  InputState,
  InputType,
  isValidInterestFreeDays,
  translations,
  trimLeadingZeros, trimSpacesAndZeros
} from './InterestFreeDays.helper';
import './InterestFreeDays.css';

interface Props {
  /** Defaults to 365 */
  mortgagePeriodInDays?: number;
  /** Defaults to 365 */
  maximumInterestFreeDays?: number;
  /** Defaults to 2 */
  periodInYear?: number;
  /** Translation values */
  i18n?: I18n;
}

const InterestFreeDays = (props: Props) => {
  const { periodInYear = 2, mortgagePeriodInDays = 365, maximumInterestFreeDays = 365, i18n } = props;
  const labels = { ...translations, ...i18n };

  const [inputs, setInputs] = useState<InputState>({ savings: '', mortgage: '' });

  const interestFreeDays = useMemo(() => {
    const { savings, mortgage } = inputs;
    if (savings === '' || mortgage === '') {
      return 0;
    }

    const savingsTrimmed = trimSpacesAndZeros(savings);
    const mortgageTrimmed = trimSpacesAndZeros(mortgage);
    const days = Number(savingsTrimmed) / Number(mortgageTrimmed) * mortgagePeriodInDays / periodInYear;
    if (days > maximumInterestFreeDays) {
      return maximumInterestFreeDays;
    } else {
      return Math.round(days);
    }

  }, [inputs.savings, inputs.mortgage, mortgagePeriodInDays, periodInYear, maximumInterestFreeDays]);

  const formatInput = (type: InputType, event) => {
    event.preventDefault();
    const inputValue = event.target.value.toString().replace(/\s+/g, '');
    const trimmedInputValue = trimLeadingZeros(inputValue);
    const inputFormatted = trimmedInputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    setInputs((prevState) => ({
        ...prevState,
        [type]: inputFormatted,
      })
    );
  }

  const clearFormat = (type: InputType, event) => {
    event.preventDefault();
    const inputValue = event.target.value.toString();
    const inputFormattedCleared = trimSpacesAndZeros(inputValue);
    setInputs((prevState) => ({
        ...prevState,
        [type]: inputFormattedCleared
      })
    );
  }

  const input = (id: string, inputType: InputType) => {
    return <TextField
      id={id}
      className='Input'
      variant='standard'
      required={true}
      slotProps={{
        input: {
          endAdornment:
            <InputAdornment
              aria-hidden="true"
              variant='filled' position='end'
              className='InputAdornment'
            >
              {labels.kr}
            </InputAdornment>
        }
      }}
      value={inputs[inputType]}
      onBlur={(e) => formatInput(inputType, e)}
      onFocus={(e) => clearFormat(inputType, e)}
      onChange={(event) => {
        event.preventDefault();
        const value = event.target.value.trim().toString();
        if (isValidInterestFreeDays(value)) {
          setInputs((prevState) => ({ ...prevState, [inputType]: value }));
        }
      }}
    />
  }

  return (
    <form className='Wrapper'>
      <div className='InputWrapper'>
        <label htmlFor='mortgage' className='Label' aria-label={labels.mortgageInSek}>{labels.mortgage}
        </label>
        {input('mortgage', InputType.MORTGAGE)}
      </div>
      <div className='InputWrapper'>
        <label htmlFor='savings' className='Label' aria-label={labels.savingsInSek}>{labels.savings}</label>
        {input('savings', InputType.SAVINGS)}
      </div>
      {inputs.savings.length > 0 && inputs.mortgage.length > 0 &&
        <div>
          <div className='Label'>{labels.interestFreeDays}</div>
          <p id='interest-free-days' className='InterestFreeDays'>
            {interestFreeDays === 1 ? labels.day(interestFreeDays) : labels.days(interestFreeDays)}
          </p>
        </div>
      }
    </form>
  )
}

export default InterestFreeDays
