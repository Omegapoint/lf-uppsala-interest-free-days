export interface I18n {
  mortgage?: string;
  mortgageInSek?: string;
  savings?: string;
  savingsInSek?: string;
  interestFreeDays?: string;
  day?: (d: number) => string;
  days?: (d: number) => string;
  kr?: string;
}

export const translations: I18n = {
  mortgage: 'Bolån',
  mortgageInSek: 'Bolån, i kronor',
  savings: 'Sparande att flytta till LF Uppsala',
  savingsInSek: 'Sparande att flytta till LF Uppsala, i kronor',
  interestFreeDays: 'Antal räntefria dagar (avrundat till heltal)',
  day: (d: number) => `${d} dag`,
  days: (d: number) => `${d} dagar`,
  kr: 'kr',
}

export interface InputState {
  savings: string;
  mortgage: string;
}

export enum InputType {
  SAVINGS = 'savings',
  MORTGAGE = 'mortgage',
}

const MAX_INPUT_LENGTH = 9;
const isLessThanMaximumLength = (value: string) => value.length <= MAX_INPUT_LENGTH;
const isNumberOrEmpty = (value: string) => /^\d+$/.test(value) || value === '';

export const trimLeadingZeros = (value: string) => value.replace(/^0+(?!$)/, '');
export const trimSpacesAndZeros = (value: string) => value.replace(/^[0\s]+/, '').replace(/\s+/g, '');
export const isValidInterestFreeDays = (value: string) => isNumberOrEmpty(value) && isLessThanMaximumLength(value);
