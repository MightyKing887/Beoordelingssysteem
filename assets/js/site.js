var state = false;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


$('.footer-container').click(function(){
    if(state === false){
        startTime();
        state = true;
    }
    
    if(state === true){
        document.getElementById('txt').innerHTML = '';
        state = false;
    }
});


$('#header-login').click(function(){
  $(".main-login-box").toggleClass('main-login-box-active');
});

