function play(){
    var h=document.querySelectorAll("h1")[0];
    var p1=document.querySelectorAll("p")[0];
    var p2=document.querySelectorAll("p")[1];
    var i1=document.querySelectorAll("img")[0].src;
    var i2=document.querySelectorAll("img")[1].src;
    var s1=p1.innerHTML=Math.floor(Math.random()*6)+1;
    document.getElementById("d1").src='img/dice '+s1+".png";
    var s2=p2.innerHTML=Math.floor(Math.random()*6)+1;
    document.getElementById("d2").src='img/dice '+s2+".png";
    if(s1>s2){
        h.innerHTML="Player   1   wins !!"
    }
    else if(s1<s2){
        h.innerHTML="Player   2   wins !!"
    }
    else{
        h.innerHTML="Its   a   Draw !!"
    }
}

