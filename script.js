var tl = gsap.timeline()

tl.from(".nav_part1 img,.nav_part2 h3,.nav_part3 ",{
    y:-200,
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.3
})


tl.from("h1",{
    y:200,
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.5,
    yoyo:true
})


tl.from(".main>img",{
    // x:300,
    scale:10,
    opacity:0
})


tl.from(".main h5",{
    y:30,
    repeat:-1
})


