$(".tile")
      .on("mouseover", function() {
        $(this)
          .children(".photo")
          .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
      })
      .on("mouseout", function() {
        $(this).children(".photo").css({ transform: "scale(1)" });
      })
      .on("mousemove", function(e) {
        $(this)
          .children(".photo")
          .css({
            "transform-origin":
              (e.pageX - $(this).offset().left) / $(this).width() * 100 +
                "% " +
                (e.pageY - $(this).offset().top) / $(this).height() * 100 +
                "%"
          });
      })
      .each(function() {
        $(this)
          .append('<div class="photo"></div>')
          .children(".photo")
          .css({ "background-image": "url(" + $(this).attr("data-image") + ")" });
      });

    $(document).ready(function(){
        $(".size_button_a4").click(function(){
            $("#content_a4").fadeToggle();
            $("#content_a3").hide();
            $(".size_button_a4").css("border-color","black");
            $(".size_button_a3").css("border-color","#b7b5b5");
            $(".size_button_a4").css("background-color","black");
            $(".size_button_a4").css("color","white");
            $(".size_button_a3").css("background-color","white");
            $(".size_button_a3").css("color","black");
      });
    });
  
  
    $(document).ready(function(){
        $(".size_button_a3").click(function(){
            $("#content_a3").fadeToggle();
            $("#content_a4").hide();
            $(".size_button_a3").css("border-color","black");
            $(".size_button_a4").css("border-color","#b7b5b5");
            $(".size_button_a3").css("background-color","black");
            $(".size_button_a3").css("color","white");
            $(".size_button_a4").css("background-color","white");
            $(".size_button_a4").css("color","black");
        });
    });
  
    $(document).ready(function(){
        $(".size_button_a4").click(function(){
            $("#content_a4_alt").fadeToggle();
            $("#content_a3_alt").hide();
            $(".size_button_a4").css("border-color","black");
            $(".size_button_a3").css("border-color","#b7b5b5");
            $(".size_button_a4").css("background-color","black");
            $(".size_button_a4").css("color","white");
            $(".size_button_a3").css("background-color","white");
            $(".size_button_a3").css("color","black");
      });
    });
  
    $(document).ready(function(){
        $(".size_button_a3").click(function(){
            $("#content_a3_alt").fadeToggle();
            $("#content_a4_alt").hide();
            $(".size_button_a3").css("border-color","black");
            $(".size_button_a4").css("border-color","#b7b5b5");
            $(".size_button_a3").css("background-color","black");
            $(".size_button_a3").css("color","white");
            $(".size_button_a4").css("background-color","white");
            $(".size_button_a4").css("color","black");
        });
    });
  
    $(document).ready(function(){
        $(".des_button_ainfo").click(function(){
            $("#des_ainfo").fadeToggle();
            $("#des_pinfo").hide();
            $(".des_button_ainfo").css("border-bottom","4px solid black");
            $(".des_button_pinfo").css("border-bottom","2px solid black");
      });
    });
  
    $(document).ready(function(){
        $(".des_button_pinfo").click(function(){
            $("#des_pinfo").fadeToggle();
            $("#des_ainfo").hide();
            $(".des_button_pinfo").css("border-bottom","4px solid black");
            $(".des_button_ainfo").css("border-bottom","2px solid black");
      });
    });
  
    $(document).ready(function(){
        $(".des_button_ainfo").click(function(){
            $("#des_ainfo_alt").fadeToggle();
            $("#des_pinfo_alt").hide();
            $(".des_button_ainfo").css("border-bottom","4px solid black");
            $(".des_button_pinfo").css("border-bottom","2px solid black");
      });
    });
  
    $(document).ready(function(){
        $(".des_button_pinfo").click(function(){
            $("#des_pinfo_alt").fadeToggle();
            $("#des_ainfo_alt").hide();
            $(".des_button_pinfo").css("border-bottom","4px solid black");
            $(".des_button_ainfo").css("border-bottom","2px solid black");
      });
    });
  
    $(window).resize(function() {
    $(".tile_alt").css("height", (window.innerWidth)+"px");
    });
  