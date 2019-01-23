window.addEventListener("resize", function(){
    setHeight();
});
function setHeight()
{
    console.log('high5');
    document.getElementsByClassName("member_img")[0].style.height = "auto";
    document.getElementsByClassName("member_pic")[0].style.height = "auto";
    var height = document.getElementsByClassName("member_pic")[0].clientHeight;
    var width = document.getElementsByClassName("member_pic")[0].clientWidth;
    var icon_height = document.getElementsByClassName("social_icon")[0].clientHeight;
    console.log(height);
    var string_height = height.toString() + "px";
    var top = (-1*height).toString() + "px";
    console.log(string_height);
    document.getElementsByClassName("member_img")[0].style.height = string_height;
    document.getElementsByClassName("member_pic")[0].style.height = string_height;
    document.getElementsByClassName("member_desc")[0].style.height = string_height;
    document.getElementsByClassName("member_desc")[0].style.top = top;
    document.getElementsByClassName("social_icon")[0].style.top = (-1*height-icon_height).toString() + "px";
    document.getElementsByClassName("member_details")[0].style.top = (height/3).toString() + "px";
}
setHeight();
console.log("hi");