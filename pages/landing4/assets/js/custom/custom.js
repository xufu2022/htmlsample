$(document).ready(function () {
  // // start animations
  gsap.to(".loader", 0.5, {
    delay: 3,
    opacity: 0,
  });
  $(".loader").css("pointer-events", "none");
  function menu(menuIcon) {
    menuIcon.toggleClass("close");
    $(".starta-mobile-nav").toggleClass("menu-active");
  }
  $(".menuIcon").on("click", function () {
    menu((menuIcon = $(".menuIcon")));
  });

  // Smoth-scroll
  const ScrollArea = document.getElementById("scroll-content");
  const options = {
    damping: 0.1,
    speed: 1,
    renderByPixel: true,
    continuousScrolling: true,
    syncCallbacks: true,
    alwaysShowTracks: true,
  };
  var scrollbar = Scrollbar.init(ScrollArea, options);

  $(".starta-nav").addClass("transitionNav");
  $(".menuIcon").addClass("transitionNav");
  $("body").append(
    '<div class="backToTop"><i class="fa-solid fa-arrow-up"></i></div>'
  );
  scrollbar.addListener((status) => {
    const offset = status.offset;

    if (offset.y >= 500) {
      $(".starta-nav").addClass("sticky");
      $(".menuIcon").css("top", offset.y + 38 + "px");
      $(".sticky").css("top", offset.y + "px");
      $(".backToTop").css({ opacity: "1", transform: "translateY(0px)" });
      setTimeout(() => {
        $(".starta-nav").removeClass("transitionNav");
        $(".menuIcon").removeClass("transitionNav");
      }, 1000);
    } else {
      $(".starta-nav").css("top", 0 + "px");
      $(".starta-nav").removeClass("sticky");
      $(".menuIcon").css("top", 0 + 38 + "px");
      $(".backToTop").css({ opacity: "0", transform: "translateY(100%)" });
      $(".starta-nav").addClass("transitionNav");
      $(".menuIcon").addClass("transitionNav");
    }

    $(".starta-mobile-nav").css("top", offset.y + "px");
  });

  $(".backToTop").on("click", function (e) {
    const target = $("#top");
    const targetEl = $(target);
    const targetRect = targetEl.offset();
    e.preventDefault();
    gsap.to(scrollbar, {
      scrollTo: targetRect.top,
      duration: 2.5,
      ease: "power4.inOut",
      onCompleteParams: [targetRect.top],
    });

    $(".starta-menu li a").removeClass("active");
    $(this).addClass("active");
  });

  // Menu Hover
  $(".menu-animation").on("mouseover", function () {
    $(this).addClass("hover");
  });
  $(".menu-animation").on("mouseleave", function () {
    $(this).removeClass("hover");
  });

  // button animations hover
  $(".starta-button").on("mouseover", function (e) {
    var relX = e.pageX - $(this).offset().left;
    var relY = e.pageY - $(this).offset().top;
    $(this).find(".starta-button-hover").css({ left: relX, top: relY });
    $(this).find(".starta-button-hover").removeClass("desplode-circle");
    $(this).find(".starta-button-hover").addClass("explode-circle");
  });

  $(".starta-button").on("mouseleave", function (e) {
    var relX = e.pageX - $(this).offset().left;
    var relY = e.pageY - $(this).offset().top;
    $(this).find(".starta-button-hover").css({ left: relX, top: relY });
    $(this).find(".starta-button-hover").removeClass("explode-circle");
    $(this).find(".starta-button-hover").addClass("desplode-circle");
  });

  // gsap register Scroll Trigger & Smooth-scroll
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  scrollbar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: ScrollArea });

  ScrollTrigger.scrollerProxy("#scroll-content", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbar.scrollTop = value;
      }
      return scrollbar.scrollTop;
    },
  });

  scrollbar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: ScrollArea });

  let imgrotate = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });
  imgrotate.from(".heroAnalytics img:nth-child(2)", { rotation: 0 });
  imgrotate.to(".heroAnalytics img:nth-child(2)", {
    rotation: 20,
    duration: 1,
  });
  imgrotate.from(".heroAnalytics img:nth-child(3)", { rotation: 0 });
  imgrotate.to(".heroAnalytics img:nth-child(3)", {
    rotation: -20,
    duration: 1,
  });

  let imgBLock = gsap.timeline({
    scrollTrigger: {
      trigger: ".animate-img",
      // pin: true,
      // scrub: true,
      start: "center 80%",
      end: "bottom 10%",
      // markers: true,
    },
  });
  imgBLock.from(".animate-img", {
    x: -500,
    duration: 0.7,
    opacity: 0,
  });
  imgBLock.to(".animate-img", {
    x: 0,
    duration: 0.7,
    opacity: 1,
  });
  imgBLock.from(".fill", {
    width: 0,
  });
  imgBLock.to(".fill", {
    width: "75%",
  });

  let imgBLock2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".imgBlock2",
      // pin: true,
      // scrub: true,
      start: "top 80%",
      end: "bottom 10%",
      // markers: true,
    },
  });
  imgBLock2.from(".imgBlock2", {
    x: -500,
    duration: 0.7,
    opacity: 0,
  });
  imgBLock2.to(".imgBlock2", {
    x: 0,
    duration: 0.7,
    opacity: 1,
  });
  let imgBLock3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".imgBlock3",
      // pin: true,
      // scrub: true,
      start: "top 80%",
      end: "bottom 10%",
      // markers: true,
    },
  });
  imgBLock3.from(".imgBlock3", {
    x: 500,
    duration: 0.7,
    opacity: 0,
  });
  imgBLock3.to(".imgBlock3", {
    x: 0,
    duration: 0.7,
    opacity: 1,
  });
  let iconbg = ["rgb(--primary-color)", "rgb(255,202,96)", "rgb(63,223,254)"];

  $(".starta-icon").each(function (i) {
    let colorIndex = i % iconbg.length;
    $(this).css("background-color", iconbg[colorIndex]);
  });

  // testimonials Slide

  const swiper2 = new Swiper(".testimonialsSlides", {
    slidesPerView: 1,
    loop: true,
  });

  var testimonialHeight = $(".testimonialSingle").outerHeight();
  console.log(testimonialHeight);
  $(".testimonialsSlides").css("height", testimonialHeight + "px");

  // insta feed SLides
  const swiper = new Swiper(".swiper", {
    modules: [EffectMaterial],

    effect: "material",
    slidesPerView: 7,
    spaceBetween: 20,
  });
  const rClass = ["bottomSlide", "topSlide"];
  $(".swiper-material-content").each(function (index) {
    $(this).addClass(rClass[Math.floor(Math.random() * rClass.length)]);
    console.log(index);
  });

  // scroll to
  $(".starta-menu li a").each(function (e) {
    const target = $(this).attr("href");
    const targetEl = $(target);
    const targetRect = targetEl.offset();

    $(this).on("click", function (e) {
      menu((menuIcon = $(".menuIcon")));
      e.preventDefault();
      gsap.to(scrollbar, {
        scrollTo: targetRect.top - 120,
        duration: 2.5,
        ease: "power4.inOut",
        onCompleteParams: [targetRect.top],
      });

      $(".starta-menu li a").removeClass("active");
      $(this).addClass("active");
    });
  });

  $(".startplay").on("click", function () {
    const getParent = $(this).closest(".video-block");
    const getVideo = getParent.find("iframe");
    getVideo.css("display", "block");
    getParent.find(".close").css("display", "block");
    var symbol = getVideo[0].src.indexOf("?") > -1 ? "&" : "?";

    // Check if autoplay parameter already exists
    if (getVideo[0].src.indexOf("autoplay") === -1) {
      getVideo[0].src += symbol + "autoplay=1";
    } else {
      getVideo[0].src = getVideo[0].src.replace(/autoplay=0/, "autoplay=1");
    }
  });

  $(".close").on("click", function () {
    const getParent = $(this).closest(".video-block");
    const getVideo = getParent.find("iframe");
    getVideo.css("display", "none");

    var symbol = getVideo[0].src.indexOf("?") > -1 ? "&" : "?";

    // Check if autoplay parameter already exists
    if (getVideo[0].src.indexOf("autoplay") === -1) {
      getVideo[0].src += symbol + "autoplay=0";
    } else {
      getVideo[0].src = getVideo[0].src.replace(/autoplay=1/, "autoplay=0");
    }

    $(this).css("display", "none");
  });

  $(".testimonialCircle").each(function () {
    $(this).css({
      width: $(this).parent().outerHeight() + "px",
      height: $(this).parent().outerHeight() + "px",
    });
  });
});
