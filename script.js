gsap.from(".page1 .circle",{
  scale:0,
  duration:2,
  rotate:720,
  scrollTrigger:{
    trigger:".page1 .circle",
    scroller:"body",
    markers:true,
    start:"top 20%",
    end:"top 20%",
    scrub:2
  }
})

gsap.from(".page2 #circle",{
  scale:0,
  duration:2,
  rotate:720,
  scrollTrigger:{
    trigger:".page2 #circle",
    scroller:"body",
    markers:true,
    start:"top 70%",
    end:"top 20%",
    scrub:2
  }
})

gsap.from(".page3 .circle",{
  scale:0,
  duration:2,
  rotate:720,
  scrollTrigger:{
    trigger:".page3 .circle",
    scroller:"body",
    markers:true,
    start:"top 70%",
    end:"top 60%",
    scrub:2
  }
})