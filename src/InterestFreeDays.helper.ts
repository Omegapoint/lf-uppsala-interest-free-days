export interface I18n {
  mortgage?: string;
  savings?: string;
  interestFreeDays?: string;
  day?: (d: number) => string;
  days?: (d: number) => string;
}

export const translations: I18n = {
  mortgage: 'Bolån',
  savings: 'Sparande att flytta till LF Uppsala',
  interestFreeDays: 'Antal räntefria dagar',
  day: (d: number) => `${d} dag`,
  days: (d: number) => `${d} dagar`,
}

export const isNumberOrEmpty = (value: string) => /^\d+$/.test(value) || value === '';
