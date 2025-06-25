# LF Uppsala

## Description
Calculating number of interest free days with current mortgage and savings in LF Uppsala

## Component Parameters
* `mortgagePeriodInDays` (optional)
    - Default: `365`
    - The number of days in a year to use for calculations.
* `maximumInterestFreeDays` (optional)
    - Default: `365`
    - Maximum number of interest free days
* `periodInYear` (optional)
  - Default: `2`
  - Value to divide the mortgage period by
* `i18n` (optional)
  - Enable translation/replacement of resource texts, all/any variables can be overridden

## Input field params
* `savings` - Savings to be moved to LF Uppsala in SEK 
* `mortgage` - Mortgage in sek

`savings / mortgage * 365 / 2` - Interest free days (rounded up)

Example
```
200 000 / 1 000 000 * 365 / 2 = 37 days
```
