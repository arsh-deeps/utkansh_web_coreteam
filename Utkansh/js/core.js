window.addEventListener("resize", function(){
    setHeight();
});
function setHeight()
{
    for(i=0;i<3;i++)
    {
        document.getElementsByClassName("member_img")[i].style.height = "auto";
        document.getElementsByClassName("member_pic")[i].style.height = "auto";
    }    
    var height = document.getElementsByClassName("member_pic")[0].clientHeight;
    var width = document.getElementsByClassName("member_pic")[0].clientWidth;
    var icon_height = document.getElementsByClassName("social_icon")[0].clientHeight;
    var string_height = height.toString() + "px";
    var top = (-1*height).toString() + "px";
    for(i=0;i<3;i++)
    {
        document.getElementsByClassName("member_img")[i].style.height = string_height;
        document.getElementsByClassName("member")[i].style.height = string_height;
        document.getElementsByClassName("member_pic")[i].style.height = string_height;
        document.getElementsByClassName("member_desc")[i].style.height = string_height;
        document.getElementsByClassName("member_desc")[i].style.top = top;
        document.getElementsByClassName("social_icon")[i].style.top = (-1*height-icon_height).toString() + "px";
        document.getElementsByClassName("social_icon")[i].style.left = (8.5/7)*width-90+"px";
        document.getElementsByClassName("member_details")[i].style.top = (height/3).toString() + "px";
    }
}
var social = document.getElementsByClassName("social_icon");
var member_pic=document.getElementsByClassName("member_pic");
var changeOp = function(i) {
    
    document.getElementsByClassName("member_pic")[i].style.opacity = "0.3";
}
function setOpacity(){
    for (var i = 0; i < social.length; i++){ 
    (   function(){
        let j=i;
        social[i].addEventListener('mouseover'||'touchstart', function(){changeOp(j)}
        ,false);
        member_pic[i].addEventListener('mouseover'||'touchstart', function(){changeOp(j)}
        ,false);
    })();}
}
var removeOp = function(i) {
   
    document.getElementsByClassName("member_pic")[i].style.opacity = "1";
}
function removeOpacity(){
    for (var i = 0; i < social.length; i++){ 
    (   function(){
        let j=i;
        social[i].addEventListener('mouseout'||'touchend', function(){removeOp(j)}
        ,false);
        member_pic[i].addEventListener('mouseout'||'touchend', function(){removeOp(j)}
        ,false);
    })();}
}
removeOpacity();
setHeight();
setOpacity();