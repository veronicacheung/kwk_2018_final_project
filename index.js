var t = 0
var value = ""
var f = false
$(document).ready(function() {
    // $("#buttonalarm").click(function(){
    //   t = $("#alarmvalue").val(String)
    // }); 
    $( "#buttonalarm" ).click(function() {
      value = $( "#alarmvalue" ).val();
      console.log(parseInt((value).substring(0, 2))
      f = tru
      while (f) {
        if ((checktime(value)) == true) {
            window.location.href = "/vr.html";
            f = false
            break
        } else {
            window.location.href = "/blank.html";
        }   
      }

    });
    $("#buttontime").click(function(){
       t = $("#timevalue").val();
    });
    function checktime(time_asked) {
        var d = new Date();
        if (((d.getHours()) == (parseInt(((time_asked).substring(0, 2))))) & ((d.getMinutes()) == (parseInt(((time_asked).substring(3)))))) {
            return true
        }
        else {
            return false
        }
    }
});


// This is all new sound code to hopefully replace the JS

// for (changeVolume = 0; changeVolume<10; changeVolume++){
//     function changeVolume(){
//      var currentVolume="box" document.getElementById("box").getAttribute("sound", "volume")
//     //  How to parse to get *just the sound value. Currently getting everything about sound
//     // var currentVolume= document.getElementById("box").getAttribute("sound","volume")
//      console.log(currentVolume.volume)
//      if (currentVolume.volume == 10){
//         //  Should 10 be a string or not?
//         document.getElementById("box").setAttribute("sound","volume","0")}
//      else {
//         document.getElementById("box").setAttribute("sound","volume","10")
//     }
// }
// }