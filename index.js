function addListeners (){
    $(".hamburger").click(e=>{
        $(".navigation").toggleClass("showNavigation")
        })
                    
    $(".home").click(e=>{
        $(".home").show()
        $(".bio").hide()
        $(".description, .screenshot, .links").hide()
    })
    
    $(".who").click(e=>{
        $(".bio").show()
        $(".description, .screenshot, .links").hide()
    })

    $(".port").click(e=>{
        $(".bio").hide()
        $(".description, .screenshot, .links").show()
    })
}


$(addListeners)