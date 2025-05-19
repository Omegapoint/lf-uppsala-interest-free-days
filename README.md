# LF Uppsala

## Description
Calculating number of interest free days with current mortgage and savings in LF Uppsala

## Params
* `savings` - Savings to be moved to LF Uppsala in SEK 
* `mortgage` - Mortgage in sek

`savings / mortgage * 365 / 2` - Interest free days (rounded up)

Example
```
200 000 / 1 000 000 * 365 / 2 = 37 days
```
