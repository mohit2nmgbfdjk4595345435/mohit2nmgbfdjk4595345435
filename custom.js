document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         jQuery("#contents").hide();
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           jQuery("#load").hide();
           jQuery("#contents").show();
           
        },1000);
    }
}
  $('.sc-btn-call-name').click(function(){
       var first_name = $('#NameField').val();
       if(first_name == ""){
            $('.error').show(10);
            $('#NameField').focus();
            setTimeout(function(){
              $('.error').hide();
          },1500);
           return false
       }else{
        nextstep();
       }
  });
  $('.next-step-btn').click(function() {
    nextstep();
  });
  $('.sc-bcl').click(function() {
    backstep();
  });
  Webcam.set({
    width: 320,
    height: 240,
    dest_width: 320,
    dest_height: 240,
    facingMode: "environment",
    force_flash: false
  });
 $(".take-pic-left").click(function(){
    $(".camera-sec").show(10);
      Webcam.attach( '#my_camera' );  
  });
  $("#click_photo-left").click(function(e){
     e.preventDefault();
    Webcam.snap(function (data_uri){ 
      console.log(data_uri);
      jQuery('.custom-file-input-data').val(data_uri);
      if(jQuery('.custom-file-input-data').val(data_uri)){
        jQuery(".camera-sec").hide(10);
        nextstep();
        Webcam.reset();
      }
     });
   });
   $(".take-pic-right").click(function(){
    $(".camera-section").show(10);
      Webcam.attach( '#my_camera_ktp' ); 
   })
   $("#click_photo-right").click(function(e){
    e.preventDefault();
   Webcam.snap(function (data_uri){ 
     console.log(data_uri);
     jQuery('.custom-file-input-data-right-palm').val(data_uri);
     if(jQuery('.custom-file-input-data-right-palm').val(data_uri)){
       jQuery(".camera-section").hide(10);
       nextstep();
       Webcam.reset();
     }
    });
  });

 
 nextstep();
 function nextstep(){
  var $current = $('.section.active');
  if ($($current).next(".section").length > 0) {
    $('.section').removeClass('active');
    $current.next().addClass('active');
    buttonCheck();
  }
 }
 backstep();
 function backstep(){
  var $current = $('.section.active');
  if ($($current).prev(".section").length > 0) {
    $('.section').removeClass('active');
    $current.prev().addClass('active');
    buttonCheck();
  } 
 }
 buttonCheck();
  
 function buttonCheck() {
   var $current = $('.section.active');
   if ($($current).next(".section").length == 0) {
     $('.next-step-btn').show(10);
     $('.sc-bcl').show(10);
   } else if ($($current).prev(".section").length == 0) {
     
     $('.sc-bcl').hide(10);
     $('.next-step-btn').show(10);
   } else {
     $('.next-step-btn').show(10);
     $('.sc-bcl').show(10);
   }
 }
 
