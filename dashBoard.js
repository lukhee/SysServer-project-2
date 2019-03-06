$(document).ready(function(){
      $("#on").hide();
      $("#off").show();
      $(".hidden-search").hide();
      $(".sub-list").hide();
      $(".fa-times").hide();
      $(".login-signout").hide();

    $("#off").click(function(){
        $("#on").show();
        $("#off").hide();
        $(".side-list-r").css({"display":"none"})
        $(".sub-list").hide();
        // $(".sub-list").css({"display":"none"})
        $(".sidebar").css({"width":"4%"})
        // $(".li").css({"padding":"20px"})
      });

      $("#on").click(function(){
        $("#off").show();
        $("#on").hide();
        $(".side-list-r").css({"display":"flex"})
        $(".sidebar").css({"width":"20%"})
      });

      $(".search-here").click(function(){
        $(".hidden-search").toggle();
        $(".fa-times").toggle();
        // $(".hidden-search").hide();
      });

      $(".login-name").click(function(){
        $(".login-signout").toggle();
      });

      $(".li-clicked").click(function(){
        $(".sub-list").toggle();
      });

      $(".sub-clicked").click(function(){
        $(".hidden-search").hide();
        $(this).addClass('button-clickd').siblings().removeClass('button-clickd');
      });
    
      $(".new-clicked").click(function(){
        $(this).addClass('change-color').siblings().removeClass('change-color');
      });

    

  });

//   border-left: 4px solid green;
//   background: #2a3242;