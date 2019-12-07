# Unique values of key

### Description
From given array of objects return array of unique values from the passed key. For the purposes of this kata, assume that such key is always present in all objects from the provided array.

This kata is not from codewars.

### Examples
```javascript
const array = [
  {
    name: "Joe",
    age: 17
  },
  {
    name: "Bob",
    age: 35
  },
  {
    name: "Frank",
    age: 17
  }
];
uniqueValuesOfKey(array, 'age'); // [17, 35]
```
