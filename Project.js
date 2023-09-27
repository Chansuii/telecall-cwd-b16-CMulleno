

//<!-- Get Random String Number -->
    document.getElementById('string_inner_container').innerHTML=create_random_string(24)

    function create_random_string(string_length){
        var random_string="";
        var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
        for(var i,  i=0; i<string_length; i++){
            random_string += characters.charAt(Math.floor(Math.random()*characters.length))
        }
        return random_string
    }
        
           
//<!-- Get Random Number -->
    function random(){
    document.getElementById("number").innerHTML = Math.floor(Math.random()*20);
    }

//<!-- Parallax -->
  $(document).ready(function(){
    $('.parallax').parallax();
  });

//<!-- sidenav -->
      $(document).ready(function(){
        $('.sidenav').sidenav()
      });

        $(".dropdown-trigger").dropdown();

//    <!-- toolbarAction -->
          document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  });

  // Or with jQuery

  $('.fixed-action-btn').floatingActionButton({
    toolbarEnabled: true
  });

//<!-- Media Function -->
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

//<!-- Parallax -->
$(document).ready(function(){
    $('.parallax').parallax();
  });
     
//<!-- Slider -->
 $(document).ready(function(){
    $('.slider').slider();
  });


//<!-- Carousel -->
  $(document).ready(function(){
    $('.carousel').carousel();
  });

//<!-- Carousel Full Widhth Slider-->
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });


//<!-- Datepicker & Timepicker-->
  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
  
  $(document).ready(function(){
    $('.timepicker').timepicker();
  });
