function addListeners (){
    $(".hamburger").click(e=>{
        $(".navigation").toggleClass("showNavigation")
        })
                    
    $(".home").click(e=>{
        $(".home, .hero").fadeIn(500)
        $(".bio").hide()
        $(".collection, .screenshot, .links").hide()
    })
    
    $(".who").click(e=>{
        $(".bio").show()
        $(".collection, .screenshot, .hero, .links").hide()
    })

    $(".port").click(e=>{
        $(".bio, .hero").hide()
        $(".collection, .screenshot, .links").show()
    })
}


$(addListeners)