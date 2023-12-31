// TODO: Error Handling
// JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

try {
  let firstName = "Khalid";
  console.log(firstName);
} catch (err) {
  console.error(err);
} finally {
  console.log("I will be excluded");
}
