export interface I18n {
  mortgage?: string;
  savings?: string;
  interestFreeDays?: string;
  day?: (d: number) => string;
  days?: (d: number) => string;
  kr?: string;
}

export const translations: I18n = {
  mortgage: 'Bolån',
  savings: 'Sparande att flytta till LF Uppsala',
  interestFreeDays: 'Antal räntefria dagar (avrundat till heltal)',
  day: (d: number) => `${d} dag`,
  days: (d: number) => `${d} dagar`,
  kr: 'kr',
}

export const isNumberOrEmpty = (value: string) => /^\d+$/.test(value) || value === '';
