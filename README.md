# Javascript katas
My solutions of katas available on codewars.com gathered in one place - Javascript Edition.
[![CodeWars](https://www.codewars.com/users/Wojcirej/badges/large)](https://www.codewars.com/users/Wojcirej/badges/large "My Honor Badge")
# Launch tests
`npm test`
# Solution generator
`node generator.js <kataName> [params]`
### Example of solution generator usage
node generator.js testKata arg1 arg2 will generate template for kata with testKata name in /katas/ directory.

In this case, file within `katas/testKata/` directory named testKata.js will contain template for function named testKata taking two arguments: arg1 and arg2.

There will be also file template for tests in `/spec/katas/`, named `testKataSpec.js`.
