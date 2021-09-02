let toggle = document.querySelector(".toggle");
let mobileMenu = document.querySelector(".mobileMenu");
let line = document.querySelectorAll(".line")
let sira = true;
toggle.addEventListener("click",function () {
    if(sira){
        mobileMenu.classList.add("active");
        line[0].classList.add("rotleft");
        line[1].classList.add("none");
        line[2].classList.add("rotright");
        $("body").css("overflow","hidden");
        sira = false
    }else{
        mobileMenu.classList.remove("active")
        line[0].classList.remove("rotleft");
        line[1].classList.remove("none");
        line[2].classList.remove("rotright");
        $("body").css("overflow","scroll");
        sira = true
    }
})

$("#searchbtn").click(function () {
    $(".searchmodal").addClass("active2");
})
$(".btn-outline-danger").click(function () {
    $(".searchmodal").removeClass("active2");
})

$("#searchbtn2").click(function () {
    $(".searchmodal").addClass("active2");
})
$(".btn-outline-danger").click(function () {
    $(".searchmodal").removeClass("active2");
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    mouseDrag:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1223:{
            items:3
        }
    }
})
let heard = true;
$(".heard1").click(function () {
    if(heard)
    {
        $(this).attr("src","images/Vector (7).svg");
        heard = false;
    }
    else{
        $(this).attr("src","images/Vector (6).svg")
        heard = true;
    }
    
})
$(".heard2").click(function () {
    if(heard)
    {
        $(this).attr("src","images/Vector (6).svg");
        heard = false;
    }
    else{
        $(this).attr("src","images/Vector (7).svg")
        heard = true;
    }
    
})

// $("#lstbtn").blur(function () {
//     $("#hidebtnimg").hide();
// })


AOS.init();