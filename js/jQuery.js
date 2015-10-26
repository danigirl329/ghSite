$(document).ready(function () {
  $("#bottlenose").hide();
  $("#circadia").hide();
  $("#thinkingcap").hide();
  $("#northstar").hide();
  $("#accordion").hide();
  $("#about").hide();
  $("#media").hide();
  $(".ui-loader h1").hide();

  $(".backToMap").on("click", function () {
    $(this).parent().toggle("slide", {
      direction: ("left")
    }, 1000);
    $(".infoContainer").toggle();
    $("#infoLinks").toggleClass("height", 1500);
    $(".humanMap").delay(500).toggle("slide", {
      direction: ("right")
    }, 1000);

  });

  $(function () {
    $("section.project").on("swipe", swipeHandler);

    function swipeHandler(event) {
      $(this).toggle("slide", {
        direction: ("left")
      }, 1000);
      $(".infoContainer").toggle();
      $(".humanMap").delay(500).toggle("slide", {
        direction: ("right")
      }, 1000);
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
      $(".project:visible").each(function () {
        $(this).toggle("slide", {
          direction: ("left")
        }, 1000);
        $(".infoContainer").toggle();
        $(".humanMap").delay(500).toggle("slide", {
          direction: ("right")
        }, 1000);
      });
    }
  });

  $("#bnLink").on("click", function () {
    $(".humanMap").toggle("slide", {
      direction: ("right")
    }, 1000);
    $("#bottlenose").delay(500).toggle("slide", {
      direction: ("left")
    }, 1000);
    $(".infoContainer").toggle();
    $("#infoLinks").toggleClass("height");
  });
  $("#cirLink").on("click", function () {
    $("#circadia").delay(500).toggle("slide", {
      direction: ("left")
    }, 1000);
    $(".humanMap").toggle("slide", {
      direction: ("right")
    }, 1000);
    $(".infoContainer").toggle();
    $("#infoLinks").toggleClass("height");
  });
  $("#tcLink").on("click", function () {
    $("#thinkingcap").delay(500).toggle("slide", {
      direction: ("left")
    }, 1000);
    $(".humanMap").toggle("slide", {
      direction: ("right")
    }, 1000);
    $(".infoContainer").toggle();
    $("#infoLinks").toggleClass("height");
  });
  $("#nsLink").on("click", function () {
    $("#northstar").delay(500).toggle("slide", {
      direction: ("left")
    }, 1000);
    $(".humanMap").toggle("slide", {
      direction: ("right")
    }, 1000);
    $(".infoContainer").toggle();
    $("#infoLinks").toggleClass("height");
  });

  $("#faq").on("click", function () {
    $("#media").hide("slow");
    $("#about").hide("slow");
    $("#accordion").toggle("slow");
  });

  $("#mlink").on("click", function () {
    $("#about").hide("slow");
    $("#accordion").hide("slow");
    $("#media").toggle("slow");
  });

  $("#alink").on("click", function () {
    $("#accprdion").hide("slow");
    $("#media").hide("slow");
    $("#about").toggle("slow");
  });

  $(function () {
    $("#accordion").accordion({
      active: false,
      heightStyle: "content",
      collapsible: true
    });
  });
  var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
  };
  $(function () {
    $(".social-icon").hover(sourceSwap, sourceSwap);
  });


  //overlay and modal popup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1500) {
      $("#overlay").fadeIn();
      $("#modal").fadeIn();
    }
  });
  //no thanks
  $("#cancel").on("click", function () {
    $("#overlay").fadeOut().remove();
    $("#modal").fadeOut(1000).remove();
  });

  $(".submit").on("click", function () {
    //check valid field
    var email = $("#email").val();
    var dataString = "email=" + email;
    if (email === '') {
      alert('Please enter a valid email address');
    } else {
      //submit form
      $.ajax({
        type: "POST",
        url: "emailSubmit.php",
        data: dataString,
        cache: false,
        success: function (result) {
          $("#modal").fadeOut(2000).remove();
          $("#thanks").fadeIn();
          setTimeout(function () {
            $("#thanks").fadeOut();
            $("#overlay").fadeOut().remove();
          }, 2000);
        }
      });
    }
    return false;
  });
});