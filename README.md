# Use

1. update the config.mjs with your specific values
2. `akt generate-data-template` generates datatemplate for current month
   `akt generate-data-template --month <month-number>` - generates for month number 1-12
3. fill in the data into a generated template data.mjs
4. `akt` - generates akt for data location specified in config
   if data.mjs is elsewhere then specify a path
   `akt --data-location <path-to-data.mjs>`
5. `akt generate-status` generates status update for previous working day
   working days are from monday to friday
   `akt generate-status --day <day-number>` if you want to generate status for
   specific day specify day number
