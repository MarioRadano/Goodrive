
function scrollFunction(){
    if (window.innerWidth > 768) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
        {
            document.getElementById("logo").style.cssText = "transform:scale(0.5)";
            document.getElementById('header').style.height = '60px';
        }else {
            document.getElementById('logo').style.cssText = 'transform:scale(1)';
            document.getElementById('header').style.cssText= 'height:123px';
        }
    }
}
window.onscroll = function() {scrollFunction()};
