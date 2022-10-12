/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
// function sayHello() {
//   console.log("hello world")
  
// }
// sayHello();

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
// const print = message => {
//    console.log(message);
// }
// print('Spooky season has started!!');

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
// const printMessage = message =>{
//   console.log("Today's message is: "+ message);
// }
// printMessage('Arrays are so cool LOL');

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// function multiplyNums(a) {
//     return a *=2;
//   }
//   console.log(multiplyNums(15));
  
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
  // const words=['Hocus', 'Pocus', '2', 'was', 'a', 'good',' movie'];
  // const reverseMessage= message =>{
  //   return message.reverse();

  // }
  // console.log(reverseMessage(words));
  
  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
  // const multiply = (a,b=2)=>a*b;
  // console.log(multiply(2));
  
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
  //function makePerson(firstname, lastname) {
    
  //   let person={
  //   firstname: firstname,
  //   lastnameInitial: lastname
  //   }
  //   return person;
  // }
  
  //  const zakk = makePerson('Zakk', 'F');
  //  console.log(zakk);
  //  const jimmy = makePerson('Jimmy', 'B');
  // console.log(jimmy);
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
    // const favMovies = (title, year)=>{
    //   let movie={
    //     title: title,
    //     year: year
    //   }
    //   return movie;
    // }
    // let newMov=favMovies('Harry Potte and the prisoner of Azkaban', '2004');
    // console.log(newMov);
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
  // const numbers = [1,2,3,4,5,6,7];
  // const returnArray =arrayElements=>{
  //   numbers.push(arrayElements);
  //   return numbers;
  // }
  // console.log(returnArray(8));

  
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
  // let sum = 0;
  // const addNumber=(num)=>{
  //   return sum+=num;
  // }
  // addNumber(24);
  // addNumber(24);
  // console.log(sum)
  
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
  // const nums = [1,2,3,4,5];
  // const sumNums = array =>{
  //   let sum=0;
  //   for (let i = 0; i < array.length; i++) {
  //    sum+=array[i];
  //   }
  //   return sum;
  // }
  // console.log(sumNums(nums));
  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
  //let str = "hello";

  
  
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  // const testFunc=()=>console.log('this work!');
  // testFunc();
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  // function add(a, b) {
  //   return a + b;
  // }
  // const invokeAdd = func =>{
  //   return func;
  // }
  // console.log(invokeAdd(add(2,4)));
  
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
  */
