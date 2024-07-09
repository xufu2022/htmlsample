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

  var descHeight = $(".serviceButton .starta-desc").outerHeight();
  $(".serviceSingle")
    .mouseenter(function () {
      console.log(descHeight);
      $(this)
        .find(".serviceContent")
        .css("padding-bottom", descHeight + "px");
    })
    .mouseleave(function () {
      $(this).find(".serviceContent").css("padding-bottom", 0);
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

  //gsap timelines
  let shapes = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  shapes.to(".shapes img", {
    y: 80,
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
      trigger: ".darkHeading-block",
      // pin: true,
      // scrub: true,
      start: "center 80%",
      end: "bottom 10%",
    },
  });

  imgBLock2.from(".animate-img2", {
    y: 500,
    duration: 1,
  });
  imgBLock2.to(".animate-img2", {
    y: 0,
    duration: 1,
  });

  let imgBLock3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".animate-img3",
      // pin: true,
      // scrub: true,
      start: "top center",
      end: "bottom 10%",
      // markers: true,
    },
  });

  imgBLock3.from(".animate-img3", {
    x: 500,
    duration: 1,
    opacity: 0,
  });
  imgBLock3.to(".animate-img3", {
    x: 0,
    duration: 1,
    opacity: 1,
  });

  let iconbg = ["rgb(--primary-color)", "rgb(255,202,96)", "rgb(63,223,254)"];

  $(".starta-icon").each(function (i) {
    let colorIndex = i % iconbg.length;
    $(this).css("background-color", iconbg[colorIndex]);
  });

  $(".marquee").marquee({
    speed: 200,
    gap: 100,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    pauseOnHover: false,
  });

  // testimonials Slide

  const swiper2 = new Swiper(".testimonialsSlides", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".starta-pagination",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  var testimonialHeight = $(".testimonialSingle").outerHeight();
  console.log(testimonialHeight);
  $(".testimonialsSlides").css("height", testimonialHeight + "px");

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

  let counterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".starta-progress",
      start: "center center",
    },
  });
  // counter animations
  const progressCounter = $(".progress-text span");

  counterTimeline.from(progressCounter, {
    textContent: 0,
    duration: 4,
    snap: { textContent: 1 },
    // stagger: 1,
  });
});
