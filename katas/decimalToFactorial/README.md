# Decimal to factorial

### Description
Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

In this system, the last digit is always 0 and is in base 0!.
The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!.

More generally, the nth-to-last digit is always `0, 1, 2, ..., or n` and is in base `n!`.

[Read more on wikipedia](http://en.wikipedia.org/wiki/Factorial_number_system)

#### Notes
* I've separate both functions from this kata to two separate tasks for my convenience.

### Examples
```javascript
decimalToFactorial(463); // "341010"
```

### Link to kata on codewars.com
https://www.codewars.com/kata/54e320dcebe1e583250008fd/