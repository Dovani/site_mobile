function mudarTamanho(){
    if(min-width > 768){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
function clickMenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}