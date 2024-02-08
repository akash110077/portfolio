$(document).ready(function() {
  $("#newscard").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x orange' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x orange' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      768: {
        items: 2
      },

      1024: {
        items: 3
      },

      1170: {
        items: 3
      },

      1500: {
        items: 3
      }
    }
  });

//for organisation carousel
  $("#organisationcard").owlCarousel({
    loop: true,
    center: false,
    margin: 0,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x orange' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x orange' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 2,
        loop: true,
      },

      500:{
        items: 3
      },

      768: {
        items: 3
      },

      1024: {
        items: 3
      },

      1170: {
        items: 3
      },

      1500: {
        items: 3
      }
    }
  });

// research news carousel
  $("#researchnews").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x green' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x green' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      768: {
        items: 2
      },

      1170: {
        items: 3
      },

      1500: {
        items: 3
      }
    }
  });

  // practice-unsign news owlCarousel
  $("#researchnews1").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x blue-text' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x blue-text' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      768: {
        items: 2
      },

      1170: {
        items: 3
      },

      1500: {
        items: 3
      }
    }
  });

  // customercard carousel
  $("#customercard").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x orange' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x orange' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true

      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      },
      1500: {
        items: 1
      }
    }
  });

// researchcustomer carosuel
  $("#researchcustomer").owlCarousel({
    loop: true,
    center: false,
    margin: 0,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x green' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x green' aria-hidden='true'></i>"],

    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true

      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      },
      1500: {
        items: 1
      }
    }
  });

  // practice-unsign researchcustomer carosuel
    $("#researchcustomer1").owlCarousel({
      loop: true,
      center: false,
      margin: 0,
      autoplay: false,
      dots: true,
      nav: true,
      navText: ["<i class='fa fa-angle-left fa-2x blue-text' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x blue-text' aria-hidden='true'></i>"],

      responsive: {
        0: {
          items: 1,
          loop: true,
          center: true

        },
        768: {
          items: 1
        },
        1170: {
          items: 1
        },
        1500: {
          items: 1
        }
      }
    });

// opinioncard carousel
  $("#opinioncard").owlCarousel({
    loop: true,
    center: false,
    margin: 0,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x green' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x green' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      768: {
        items: 2
      },

      1170: {
        items: 2
      },

      1500: {
        items: 2
      }
    }
  });

// offercards carousel
  $("#offercards").owlCarousel({
    loop: true,
    center: false,
    margin: 0,
    autoplay: false,
    dots: true,
    navText: ["<i class='fa fa-angle-left fa-2x green' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x green' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      768: {
        items: 4
      },

      1170: {
        items: 4
      },

      1500: {
        items: 4
      }
    }
  });

  // mob books carousel
  $("#mobBooks").owlCarousel({
    loop: true,
    center: false,
    margin: 0,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<img src='img/researchpage/side1.png'></img>", "<img src='img/researchpage/side2.png'></img>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      768: {
        items: 1
      },

      1170: {
        items: 1
      },

      1500: {
        items: 1
      }
    }
  });

/************** bookstore *********************/

// code for owl-carousel for bookstore banner

  $("#bookstorebanner").owlCarousel({
    loop: true,
    center: false,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
   autoplayTimeout:2600,
   autoplaySpeed:1000,
    navText: ["<i class='fa fa-angle-left fa-2x orange' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x orange' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      },
      1500: {
        items: 1
      }
    }
  });

// code for owl-carousel for suggested books

  $("#suggestedbooks").owlCarousel({
    loop: true,
    center: false,
    margin: 0,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left fa-2x orange' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-2x orange' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },
      768: {
        items: 3
      },
      1170: {
        items: 3
      },
      1500: {
        items: 3
      },
      1700: {
        items: 3
      },
      1800: {
        items: 4
      }
    }
  });
  // end
});

/*********** code for index page ******************/
$(document).ready(function(){
  /********* code for sign-up starts ***********/
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  var signupActiveProgress = 0;
  $(".next-up").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $('#msform-up').find('fieldset:eq(' + signupActiveProgress + ')');

    signupActiveProgress++;
    next_fs = current_fs.next();


    //activate next step on progressbar using the index of next_fs
    $("#progressbar-up li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
      opacity: 0
    }, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50) + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale(' + scale + ')',
          'position': 'absolute'
        });
        next_fs.css({
          'left': left,
          'opacity': opacity,
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      //    easing: 'easeInOutBack'(commented this as it is not working on IE)
    });
  });

  $(".previous-up").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $('#msform-up').find('fieldset:eq(' + signupActiveProgress + ')');
    console.log(current_fs);
    signupActiveProgress--;
    previous_fs = current_fs.prev();
    console.log(previous_fs);

    //de-activate current step on progressbar
    $("#progressbar-up li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
      opacity: 0
    }, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = ((1 - now) * 50) + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'left': left
        });
        previous_fs.css({
          'transform': 'scale(' + scale + ')',
          'opacity': opacity
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      //    easing: 'easeInOutBack'(commented this as it is not working on IE)
    });
  });

  $(".submit-up").click(function() {
    return false;
  })
  /********* code for sign-up ends ***********/

    /********* code for sign-in starts ***********/
      var current_fs, next_fs, previous_fs; //fieldsets
      var left, opacity, scale; //fieldset properties which we will animate
      var animating; //flag to prevent quick multi-click glitches

      var signupActiveProgress = 0;
      $(".next-in").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $('#msform-in').find('fieldset:eq(' + signupActiveProgress + ')');
        signupActiveProgress++;
        next_fs = current_fs.next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar-in li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
          opacity: 0
        }, {
          step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              'transform': 'scale(' + scale + ')',
              'position': 'absolute'
            });
            next_fs.css({
              'left': left,
              'opacity': opacity,
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
        //    easing: 'easeInOutBack'(commented this as it is not working on IE)
        });
      });

      $(".previous-in").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $('#msform-in').find('fieldset:eq(' + signupActiveProgress + ')');
        signupActiveProgress--;
        previous_fs = current_fs.prev();

        //de-activate current step on progressbar
        $("#progressbar-in li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
          opacity: 0
        }, {
          step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              'left': left
            });
            previous_fs.css({
              'transform': 'scale(' + scale + ')',
              'opacity': opacity
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          //    easing: 'easeInOutBack'(commented this as it is not working on IE)
        });
      });

      $(".submit-in").click(function() {
        return false;
      })
        /********* code for sign-in ends ***********/

        $(".navbar-toggler").click(function() {
          $(this).toggleClass("active");
          $("body").toggleClass("nav-open");
        });

        $(".news-content h2").text(function(index, currentText) {
          var maxLength = $(this).parent().attr('data-maxlength');
          if (currentText.length >= maxLength) {
            return currentText.substr(0, maxLength) + "...";
          } else {
            return currentText
          }
        });

        // code for dropdown in sign-up page
        $(' .mob-profession .dropdown-menu').on("click.bs.dropdown", function(e) {
          e.stopPropagation();
        });
        // code for dropdown in sign-up page ends

        // code for data-list in sign-up page
        $(".js-example-placeholder-single").select2({
          placeholder: "Select a state",
          allowClear: true
        });
  // end
});



$(document).ready(function(){
  function myFunction(y) {
    if (y.matches){
    $(".mob-sidebar-hidden").addClass("sidebar-hidden");

// code for navabr onscroll hide and show
     var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('header').outerHeight();

     $(window).scroll(function(event){
        didScroll = true;
        console.log("yesss");
     });

     setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
     }, 250);

     function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
            $('header').removeClass('nav-down').addClass('nav-up');
            console.log("hey");
        }
        else
         {
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
              //  console.log("hey1111111");
            }
        }
        lastScrollTop = st;
     }
    // end of code for navbar onscroll hide and show
    }
  }
  var y = window.matchMedia("(max-width: 991px)")
  myFunction(y) // Call listener function at run time
  y.addListener(myFunction) // Attach listener function on state changes
});


// read more & read less effect starts
$(document).ready(function(){
  $(document).on("click", ".readmore", function() {
    if ($(this).text() == "Read More") {
      $(this).text("Read Less");
      $(this).parent().children(".more").slideDown();
    }
    else {
      $(this).text("Read More");
      $(this).parent().children(".more").slideUp();
    }
  });
});
// read more & read less effect ends

// code for navbar fixed for mobile when side navbar opens
$(document).ready(function() {
  $('.btn-expand-collapse').click(function() {
    $('body').toggleClass('sidebar-hidden');
    $('header').toggleClass('quicknav');
  });
});

//  code for right navbar
$(document).ready(function(){
  function sidebarHeightUpdate() {
    document.getElementById("menu").style.height = (window.innerHeight + 34) + "px";
  }
  sidebarHeightUpdate();
  window.addEventListener("resize", function() {
    sidebarHeightUpdate();
  });

  $(document).ready(function() {
    var sidebar = {
      isEnabled: false,
      enable: function() {
        if (this.isEnabled) {
          return;
        }
        $('body').addClass('nav-open');
        $('.navbar-toggler-2').addClass("active");
        $('#menu').addClass("active");
        $('header').removeClass("sticky-top");
        this.isEnabled = true;
      },
      disable: function() {
        if (!this.isEnabled) {
          return;
        }
        $('body').removeClass('nav-open');
        $('.navbar-toggler-2').removeClass("active");
        $('#menu').removeClass("active");
        $('header').addClass("sticky-top");
        this.isEnabled = false;
      }
    };

    $('.navbar-toggler-2').click(function() {
      if (sidebar.isEnabled) {
        sidebar.disable();
      } else {
        sidebar.enable();
      }
    });

    $('#menu a li, .body-bg').click(function() {
      if (sidebar.isEnabled) {
        sidebar.disable();
      }
    });
  });

  // review-start
  $(".review-star").children("i").click(function() {
    $(this).css({
      "color": "#F8C51C"
    }).removeClass('fa-star-o').addClass('fa-star');
  });


  // code for view-more desription
  $(".view_more").click(function() {
    $(".all-text").css("display", "block");
    $(".view_less").css("display", "inline-block");
    $(this).css("display", "none");

  });

  $(".view_less").click(function() {
    $(".all-text").css("display", "none");
    $(".view_more").css("display", "inline-block");
    $(this).css("display", "none");
  });

  $(".added-filter").children("i").click(function() {
    $(this).parent(".added-filter").css("display", "none");
  });


/******** code for filter section ****************/
  $(".openNav").click(function(){
    document.getElementById("mySidenav").style.width = "100%";
  });
  $(".closeNav").click(function(){
    document.getElementById("mySidenav").style.width = "0px";
  });


  // code for kindle starts
    $(".kindle-text").click(function(){
      document.getElementById('kindle').style.display = 'block';
    });
// code for kindle ends

});


$(document).ready(function(){

  /*************************** code for bookstore section starts *****************************************/

    $(".toast").click(function(){
    var snackbar = document.getElementById("snackbar")
    snackbar.className = "show";
    setTimeout(function() {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
    });

/*************************** code for bookstore section ends *****************************************/

  /*************************** code for cart page *****************************************/
  $(".del").click(function() {
    $(this).parent().parent(".product-details").css("display", "none");
  });

  /*************************** code for cart page ends*****************************************/


  /*************************** code for checkout page *****************************************/

  /*************** code for custom dropdown starts ***********************/
  $('.dropdown-el').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.dropdown-el').removeClass('expanded');
  });
    /*************** code for custom dropdown ends ***********************/

      /*************** code for payment tabs starts ***********************/
      $('#r11').on('click', function() {
        $(this).parent().find('a').trigger('click')
      });

      $('#r12').on('click', function() {
        $(this).parent().find('a').trigger('click')
      });

      $('#r13').on('click', function() {
        $(this).parent().find('a').trigger('click')
      });

      $('#r14').on('click', function() {
        $(this).parent().find('a').trigger('click')
      });

      $('#r15').on('click', function() {
        $(this).parent().find('a').trigger('click')
      });

      $('#r16').on('click', function() {
        $(this).parent().find('a').trigger('click')
      });
    /*************** code for payment tabs ends ***********************/

    /*************** code for create address starts ***********************/
          $(".new-add").click(function() {
            $("#create-add").css("display", "block");
          });
    /*************** code for create address ends ***********************/

    /*************** code for edit gst starts ***********************/
    $(".edit-gst").click(function() {
      $("#gst-details").css("display", "block");
    });
      /*************** code for edit gst ends ***********************/

      /*************** code for mobile tabs on click starts ***********************/
      $(".mob-payment").click(function() {
        $(".card-header").removeClass("active");
        $(this).children().addClass("active");
      });
        /*************** code for mobile tabs on click ends ***********************/


       /*************** code for adding background red on radio buttons starts ***********************/
        $('.shipping-add').click(function() {
          $('.shipping-add').parent().parent(".shipping-cart").removeClass("bg-red");
          $(this).parent().parent(".shipping-cart").addClass("bg-red");
        });
        /*************** code for adding background red on radio buttons ends ***********************/

        /*************** code for adding background red on radio buttons starts ***********************/
        $('.billing-add').click(function() {
          $('.billing-add').parent().parent(".shipping-cart").removeClass("bg-red");
          $(this).parent().parent(".shipping-cart").addClass("bg-red");
        });
        /*************** code for adding background red on radio buttons ends ***********************/

        /*************** code for tooltip starts ***********************/
        $('[data-toggle="tooltip"]').tooltip({
          'placement': 'top'
        });
        $('[data-toggle="popover"]').popover({
          trigger: 'hover',
          'placement': 'bottom'
        });
        /*************** code for tooltip ends ***********************/

        /*************** code for animation with js starts ***********************/

        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        var signupActiveProgress = 0;
        $(".next-check").click(function() {
          if (animating) return false;
          animating = true;

          current_fs = $('#msform-check').find('fieldset:eq(' + signupActiveProgress + ')');
          signupActiveProgress++;
          next_fs = current_fs.next();

          $("#progressbar-check li").eq($("fieldset").index(next_fs)).addClass("active");

          next_fs.show();
          current_fs.animate({
            opacity: 0
          }, {
            step: function(now, mx) {

              scale = 1 - (1 - now) * 0.2;

              left = (now * 50) + "%";

              opacity = 1 - now;
              current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
              });
              next_fs.css({
                'left': left,
                'opacity': opacity,
              });
            },
            duration: 800,
            complete: function() {
              current_fs.hide();
              animating = false;
            },

        //    easing: 'easeInOutBack'(commented this as it is not working on IE)
          });
        });

        $(".previous-in").click(function() {
          if (animating) return false;
          animating = true;

          current_fs = $('#msform-check').find('fieldset:eq(' + signupActiveProgress + ')');
          signupActiveProgress--;
          previous_fs = current_fs.prev();


          $("#progressbar-check li").eq($("fieldset").index(current_fs)).removeClass("active");


          previous_fs.show();

          current_fs.animate({
            opacity: 0
          }, {
            step: function(now, mx) {

              scale = 0.8 + (1 - now) * 0.2;

              left = ((1 - now) * 50) + "%";

              opacity = 1 - now;
              current_fs.css({
                'left': left
              });
              previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
              });
            },
            duration: 800,
            complete: function() {
              current_fs.hide();
              animating = false;
            },
            //this comes from the custom easing plugin
        //    easing: 'easeInOutBack' (commented this as it is not working on IE)
          });
        });

        $(".submit-check").click(function() {
          return false;
        })
        /*************** code for animation with js ends ***********************/

        /*************** code for vertical tabs starts ***********************/
        $('#vertical_tab_nav > ul > li > a').eq(0).addClass("selected");
        $('#vertical_tab_nav > div > article').eq(0).css('display', 'block');

        $('#vertical_tab_nav > ul').click(function(e) {

          if ($(e.target).is("a")) {

            /*Handle Tab Nav*/
            $('#vertical_tab_nav > ul > li > a').removeClass("selected");
            $(e.target).addClass("selected");

            /*Handles Tab Content*/
            var clicked_index = $("a", this).index(e.target);
            $('#vertical_tab_nav > div > article').css('display', 'none');
            $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();
          }

          $(this).blur();
          return false;
        });
        /*************** code for vertical tabs ends ***********************/
        /*************************** code for checkout page ends*****************************************/

  /*************************** code for author page starts *****************************************/

// code to add and remove active class on author page for author listing starts
        $(".authors-list li a").click(function() {
          $(".authors-list li a").removeClass("active");
          $(this).addClass("active");
        });
// code to add and remove active class on author page for author listing ends

// code to toggle author-row class on author page for author listing starts
        $(".filter-icon").click(function() {
          $(".author-row").toggleClass("listing-row");
        });
// code to toggle class on author page for author listing starts

    /*************************** code for author page ends *****************************************/


});
