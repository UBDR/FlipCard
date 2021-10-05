let flip = document.getElementById('cardfl');
let isClicked = false;
flip.addEventListener('click',function(){
    if(isClicked===false){
        flip.style.transform = 'rotateY(180deg)';
        isClicked =true;
    }
    else if(isClicked===true){
        flip.style.transform = 'rotateY(0deg)';
        isClicked=false;
    }
})