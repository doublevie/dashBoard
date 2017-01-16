


function toggleLyout(){
  document.querySelector('.layout').classList.toggle('button')
}

window.onload = function(){
window.setTimeout(function(){toggleLyout();},800)  
}
