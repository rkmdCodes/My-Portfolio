window.onscroll = function()
{
    if(document.body.scrollTop >0 || document.documentElement.scrollTop >0 ){
        document.getElementById("navbar").classList.add("scrolled");

    }else
    document.getElementById("navbar").classList.remove("scrolled");

}

//animate on scrol library

AOS.init({
duration:800,
});