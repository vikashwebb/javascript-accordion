let acc = document.getElementsByClassName('accHeading');

for(i = 0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('accActive');
        
    })
}
