var w = document.querySelector("canvas").offsetWidth
var h = document.querySelector("canvas").offsetHeight
inp = document.createElement("input")
inp.style.outline="none"
inp.style.position="fixed"
inp.style.top="0px"
inp.style.left="0px"
inp.style.width=w+"px"
inp.style.zIndex="9999999"
inp.style.height="24px"
inp.style.fontSize="24px"
document.body.appendChild(inp)
inp.onkeydown=function(e){
  if(e.keyCode==13){
    var val = inp.value;
    ifr.src=val
  }
}
inp.value="https://www.google.com/?igu=1"
ifr = document.createElement("iframe")
ifr.style.border="none"
ifr.style.position="fixed"
ifr.style.top="24px"
ifr.style.left="0px"
ifr.style.width=(w)+"px"
ifr.style.zIndex="99999"
ifr.style.height=(h-24)+"px"
ifr.src="https://www.google.com/?igu=1"
document.body.appendChild(ifr)





