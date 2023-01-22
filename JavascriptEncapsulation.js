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
obj.displayMessage()

// Trying to access message from outside the function which defines it
console.log("Message from outside: ",message);
