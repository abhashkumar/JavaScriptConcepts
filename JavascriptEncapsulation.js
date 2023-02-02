//function inside function and closure

function messageFunc(){
    const message = "Hey there!"
    // Method hiding
    const displayMessage = function(){
        console.log(message);
    }
    displayMessage();
}

// Calling the function which internally defines the message
messageFunc()

const obj = new messageFunc()
// this will through error message is hidden
//obj.displayMessage()

// Trying to access message from outside the function which defines it, error 
//console.log("Message from outside: ",message);
