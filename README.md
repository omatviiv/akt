# Use

1. `akt init` generates ~/akt working directory and ~/akt/data.yml
2. fill in the data into a generated template ~/akt/data.yml
3. `akt` - generates akt for ~/akt/data.yml
4. `akt daily` generates status update for previous working day


# Akt working directory
```
~/akt
| data.yml
| 06-2022.yml <- data file backup for June of 2022
| 06-2022.pdf <- generated akt for June of 2022
| 05-2022.yml <- data file backup for May of 2022
| 05-2022.pdf <- generated akt for May of 2022
```


# akt init
- creates akt working directory
  if directory exists and its location is undefined in config then
  a message is displayed:
  ```
  Couldn't create working directory because it already exists.
  Pls check its content and either remove it or specify another location.
  Use --path option of `akt init` see the `akt init --help` for more info.
  ```
- saves working directory location in the application config
  if application config contains saved working directory location it means
  that application no longer attempts to create working directory on
  `akt init` run. If you would want to intentionally change working dir
  location - run `akt init -p <new_location>`
- if working directory is defined in config and exists in the file system
  then `akt init` then a message will be presented:
  ```
  Working directory in place all good.
  Trying to generate data template file.
  ```
  and after that one of these steps will be done:
  * it will generate data template file if ~/akt/data.yml doesn't exist
  * if data template file doesn't exist it will show a message:
  ```
  Couldn't generate data template because it exists.
  Pls check <data-template-yml-file-location>.
  ```

## akt init -p, --path <path>
By default akt init creates working directory in ~/akt
`akt init --path ~/gdrive/akt` creates working dir in another location
This option (-p, --path) also overrides working directory location to new
place i.e. it changes working directory location for the application.

## akt init -m, --month <month>
When running `akt init` for generating data template yml the default
behaviour is to generate it if it doesn't exist and the month it will be
generated for by default is current month if there are still working
days left or for the next month otherwise.
Working days are considered Mon-Fri, no public holidays taken into account.
`akt init --month 08-2022` allows to generate data template for any month.


# akt
- backups ~/akt/data.yml > ~/akt/07-2022.yml (removes data.yml)
- generates ~/akt/06-2022.pdf akt

## akt -y, --yml <path-to-data-yml>
Default behaviour is to generate pdf akt for <working-dir>/data.yml file.
`akt -y ~/mycompany/10-2022.yml` will generate pdf akt for a specified yml.
If yml format is unexpected an error message will be shown:
```
Couldn't read data format.
```

# akt daily
- generates daily status for previous working day
  if previous day doesn't have any work items listed it will show a message:
  *No work items at previous day. Showing daily for <day>*
  And showing daily status for a closes day in the past days with some
  work items available.
- Every daily status mentions day number and name (Mon-Sun).

## akt daily -d, --days <day-numbers>
`akt daily -d 12` shows daily status for day number 12 in current month
