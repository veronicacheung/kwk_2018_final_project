// function sleep(miliseconds) {
//     //sleep function
//     //https://stackoverflow.com/questions/16623852/how-to-pause-javascript-code-execution-for-2-seconds
//   var currentTime = new Date().getTime();

//   while (currentTime + miliseconds >= new Date().getTime()) {
//   }
// }
function changePage(){
    console.log("changed page to vr.html")
    document.location.href = "/vr.html"
}
/*put whatever inside*/
// Set the date we're counting down to
// var countDownDate = new Date(document.getElementById('timertime').val().getTime())
console.log(countDownDate)

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

 /* // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
*/

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
console.log("in the timer.js")

  // If the count down is finished, write some text 
  if (distance < 0) {
      console.log("If statement was reached")
    clearInterval(x);
    //document.getElementById("timertime").innerHTML = "EXPIRED";
    console.log("sleep for 30 seconds: enter")
    sleep(30)
    console.log("sleep for 30 seconds: exit")
     document.location.href="/vr.html";
  } 
}, 1000);

// function myFunction() {
//     setTimeout(function(){ alert("Hello"); }, 'timertime');
// }

