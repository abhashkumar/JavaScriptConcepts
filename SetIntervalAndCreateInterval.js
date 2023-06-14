/*
setInterval sets up a recurring timer. It returns a handle that you can pass into clearInterval to stop it from firing:

var handle = setInterval(drawAll, 20);

// When you want to cancel it:
clearInterval(handle);
handle = 0; // I just do this so I know I've cleared the interval
On browsers, the handle is guaranteed to be a number that isn't equal to 0; therefore, 0 makes a handy flag value for "no timer set". (Other platforms may return other values; Node.js's timer functions return an object, for instance.)

To schedule a function to only fire once, use setTimeout instead. It won't keep firing. (It also returns a handle you can use to cancel it via clearTimeout before it fires that one time if appropriate.)
setTimeout(drawAll, 20);

*/

var counter = 0

var interval = setInterval(doStuff, 2000); // 2000 ms = start after 2sec 

function doStuff() 
{
    if(counter >= 5)
    {
        clearInterval(interval);
        console.log('interval cleared');
    }
    else
    {
        counter++;
        console.log(`this is a 2 second warning ${counter}`);
    }   
}
