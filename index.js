function nav(){
    
 
 var tl = gsap.timeline()
 // nav animation
 
 tl.from("nav h1, nav h4, nav button",{
     y:-30,
     opacity:0,
     duration:1,
     stagger:.15,
 })
 
 
 tl.from(".center-part1 h1",{
     x:-300,
     opacity:0,
     diration:0.7
 })
 tl.from(".center-part1 p",{
     x:-200,
     opacity:0,
     diration:0.4
 })
 tl.from(".center-part1 button",{
     opacity:0,
     diration:0.4
 })
 
 tl.from(".center-part2 img", {
     opacity:0,
     duration:.5,
 
 },"-=0.5")
 
 tl.from(".section1brimg img", {
     opacity:0,
     y:30,
     stagger:.1,
     duration:.6,
 })
 
 
}

nav()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sectioncart",
        scroller:"body",
        // markers:true,
        start:"top 50%",
         end:"top 0",
        scrub:2,
    }
})

tl2.from(".services h1, .services p " ,{
    x:-100,
    duration:.5,
    opacity:0, 
})
tl2.from(".card1",{
     x:-100,
     opacity:0, 
     duration:.5,
},"anim")
tl2.from(".card2",{
     x:100,
     opacity:0, 
     duration:.5,
},"anim")
tl2.from(".card3",{
     x:-100,
     opacity:0, 
     duration:.1,
},"anim1")
tl2.from(".card4",{
     x:100,
     opacity:0, 
     duration:.1,
},"anim1")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".proposal",
        scroller:"body",
        // markers:true,
        start:"top 50%",
         end:"top 0",
        scrub:2,
    }
})

tl3.from(".proposal-text",{
    y:200,
    opacity:0,
    duration:.5,
},"anim3")
tl3.from(".proposal-img img",{
    y:-100,
    opacity:0,
    duration:.5,
},"anim3")


var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".case-study",
        scroller:"body",
        // markers:true,
        start:"top 50%",
         end:"top 0",
        scrub:2,
    }
})
