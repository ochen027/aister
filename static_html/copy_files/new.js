// JavaScript Document
lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin14").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}

var howwidth=screen.width;
if (howwidth<1025)
suspendcode14="<DIV id=\"lovexin14\" style='right:10px;POSITION:absolute;TOP:119px;'><a href='/isms/' target='_blank' rel='nofollow'><img border=0 src=/img/isms.gif   width='40' height='204'><br></div>"

else 
suspendcode14="<DIV id=\"lovexin14\" style='right:89px;POSITION:absolute;TOP:119px;'><a href='/isms/' target='_blank' rel='nofollow'><img border=0 src=/img/isms.gif   width='40' height='204'><br></div>"


document.write(suspendcode14); 
window.setInterval("heartBeat()",1);	