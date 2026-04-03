//-------------------------header-sticky-js-start--------------
    $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('header').addClass('sticky-header');
        } else {
            $('header').removeClass('sticky-header');
        }
    });
//------------------------header-sticky-js-end------------------

//-----------add-active-class-header-link-js-start------------------
jQuery(function($) {
        var path = window.location.href; 
        $('header .navbar-nav li a').each(function() {
        if (this.href === path) {
        $(this).addClass('active');
          }
        });
    });
//-----------add-active-class-header-link-js-end------------------

//--------------------------toggle-btn-js------------------------
    $(".navbar-toggler").click(function(){
        $(this).toggleClass('navbar-closed');
        $("html").toggleClass("myClass");
      });
//-----------------------toggle-btn-js------------------------

// owl-js-start
  $('#hero_slider').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:true,
    nav:false,
});
$('#shop_content').owlCarousel({
    items:5,
    loop:true,
    margin:30,
    nav:true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
});
$('#review_content').owlCarousel({
    items:4,
    loop:true,
    margin:16,
    nav:true,
  navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        800:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

  $(document).ready(function() {
    var bigimage = $("#single_product");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;
  
    bigimage
      .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<img src="https://cdn.shopify.com/s/files/1/0537/7661/3550/files/Group_23771.png?v=1711090756">',
        '<img src="https://cdn.shopify.com/s/files/1/0537/7661/3550/files/Group_23770.png?v=1711090755">'
      ]
    })
      .on("changed.owl.carousel", syncPosition);
  
    thumbs
      .on("initialized.owl.carousel", function() {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      items: 4,
      dots: false,
      nav: false,
      margin:12,
      smartSpeed: 2000,
      slideSpeed: 2000,
      slideBy: 4,
      responsiveRefreshRate: 100
    })
      .on("changed.owl.carousel", syncPosition2);
  
    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;
  
      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
      var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();
  
      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }
  
    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }
  
    thumbs.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
  });
//---------------------------owl-js-end------------------------

//--------------------------counter-js-start-------------------
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });    
});
//--------------------------counter-js--------------------

//------------------------increase-decrease-button-js-start------------------
   function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
//-------------------increase-decrease-button-js-end------------------------------