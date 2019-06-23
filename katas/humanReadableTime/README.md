# Human readable time

### Description
Write a function, which takes a non-negative integer (`seconds`) as input and returns the time in a human-readable format (`HH:MM:SS`)

`HH` = hours, padded to 2 digits, range: 00 - 99
`MM` = minutes, padded to 2 digits, range: 00 - 59
`SS` = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds `359999` (`99:59:59`)

### Examples
```javascript
humanReadableTime(0); // '00:00:00'
humanReadableTime(90); // '00:01:30'
```

### Link to kata on codewars.com
https://www.codewars.com/kata/52685f7382004e774f0001f7/
