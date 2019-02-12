var memberObj = document.getElementsByClassName("member");

function memberReset(p,q)
{
     for(i=0;i<p;i++)
    {
        memberObj[i].classList.remove("mleft");
        memberObj[i].classList.remove("mright");
        memberObj[i].classList.remove("mshow");
    }
    for(i=q;i<memberObj.length;i++)
    {
        memberObj[i].classList.remove("mleft");
        memberObj[i].classList.remove("mright");
        memberObj[i].classList.remove("mshow");
    }
}

function memberMobAppear(p,q)
{
    for(i=p;i<q;i++)
    {
        
        if(i%2===0)
        {
            memberObj[i].classList.add("mleft");
        }
        else        
        {
            memberObj[i].classList.add("mright");
        }
        
    }
}
function memberAppear(p,q)
{
    for(i=p;i<q;i++)
    {
        memberObj[i].classList.add("mshow");
    }
}
function memberAnimation(){
        var winTopHeight = window.pageYOffset;
        var winBottomHeight = window.innerHeight + window.pageYOffset;
        var j=0;
        for(j=0;j<memberObj.length;j++)
        {
            var mHeight = memberObj[j].offsetTop + memberObj[j].clientHeight;    
            if(mHeight>winTopHeight)
                break;
        }
        var i=0;
        for(i=0;i<memberObj.length;i++)
        {
            mHeight = memberObj[i].offsetTop;   
            console.log(mHeight);
            if(mHeight>winBottomHeight)
                break;
        }
        if(window.innerHeight > window.innerWidth)
            memberMobAppear(j,i);
        else
            memberAppear(j,i);
        memberReset(j,i);
}

window.onscroll = function(){
  memberAnimation();
}
window.onload = function(){
    memberAnimation();
};
