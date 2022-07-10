# Use

1. update the config.mjs with your specific values
2. `akt --generate-data-template` generates datatemplate for current month
   `akt --generate-data-template <month-number>` - generates for month number 1-12
3. fill in the data into a generated template data.mjs
4. `akt --generate-akt`
   if data.mjs is not in the same folder with the app then specify a path
   `akt --generate-akt <path-to-data.mjs>`
