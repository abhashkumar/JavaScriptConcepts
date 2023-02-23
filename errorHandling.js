/*
You can throw exception using throw statement and handle them using try...catch statements

throw expression;

throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};

try {
  writeMyFile(theData); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}

if the finally block retuns a value,, this value becomes the return value of the eitire try...catch block, regardless of any retunr statement in try cath block
*/


function getMonthName(mo) {
    mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw new Error("InvalidMonthNo"); // throw keyword is used here
    }
  }
  
  try {
    // statements to try
    let myMonth = 14;
    monthName = getMonthName(myMonth); // function could throw exception
  } catch (e) {
    monthName = "unknown";
    //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
    console.error(e.name);
    console.error(e.message);
  }

  //both of these work same once is a function and other is an object (constructor syntax)
console.log(typeof(new Error("hello"))) // object
console.log(typeof(Error)) // function