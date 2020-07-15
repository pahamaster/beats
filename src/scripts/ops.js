const sections = $("section");
const display = $(".maincontent");
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile=mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");
//console.log(sections.first().index());

const performTransition = sectionEq => {
  if (!inScroll && allowScroll) {
    inScroll = true;
    //console.log(sectionEq);
    const position = sectionEq * -100;

    display.css({
      transform: `translateY(${position}%)`
    });

    const sideMenu=$(".fixed-menu");
    sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("active").siblings().removeClass("active");

    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
    setTimeout(() => {
      inScroll = false;
    }, 1300);
  }
}

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  //console.log(activeSection.index());
  //console.log(nextSection.index());
  //console.log(prevSection.index());

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
}

$(window).on("wheel", e => {

  const deltaY = e.originalEvent.deltaY;
  //console.log(deltaY);

  if (deltaY > 0) {
    scrollViewport("next");
  }

  if (deltaY < 0) {
    scrollViewport("prev");
  }
})

$(window).on("keydown", e => {
  //console.log(e.key);
  const tagName = e.target.tagName.toLowerCase();

  if (tagName !== "input" && tagName !== "textarea") {
    switch (e.key) {
      case "ArrowUp":
        scrollViewport("prev");
        break;
      case "ArrowDown":
        scrollViewport("next");
    }
  }

})

$("[data-scroll-to]").click(e=>{
  

  e.preventDefault();
  const $this=$(e.currentTarget);
  const target=$this.attr("data-scroll-to");
  const reqSection=$(`[data-section-id=${target}]`);

  allowScroll=true;
  performTransition(reqSection.index());

  const overlay=$(".overlay");
  overlay.css({"display": "none"});
  
})

//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

$(".wrapper").on("touchmove", e=>e.preventDefault());

if (isMobile){
  $("body").swipe( {
    //Generic swipe handler for all directions
    swipe: function(event, direction){
      //const scroller=scrollViewport();
      let scrollDirection="";

      if (direction==="up") scrollDirection="next";
      if (direction==="down") scrollDirection="prev";
      scrollViewport(scrollDirection);
      //scroller[scrollDirection]();
      //console.log(scrollDirection); 
    } 
  });
}

