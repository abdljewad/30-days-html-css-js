const text= document.getElementById('text');
let index=1;
const animation='THIS IS A BEAUTIFUL TEXT EFFECT MADE BY ABDU'
writeText()

function writeText(){
    text.innerText=animation.slice(0,index)
    index++;
    if(index>animation.length){
        index=1;
    }
    setTimeout(writeText,300) ;
        
    
}