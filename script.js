gsap.from(".page1 h1",{
  x:200,
  opacity:0,
  duration:1.5,
  delay:1.2
})



gsap.to(".page2 img",{
  width:"100%",
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    // markers:true,
    start:"top 0%",
    end:"bottom -100%",
    scrub:2,
    pin:true
  }
})

gsap.to(".page4 h1",{
  transform: "translateX(-260%)",
  scrollTrigger:{
    trigger:".page4",
    scroller:"body",
    // markers:true,
    start:"top 0%",
    end:"bottom -100%",
    scrub:2,
    pin:true
  }
})


