moment.lang('fr');


function toggleLyout(){
  document.querySelector('.layout').classList.toggle('button');
  if (document.querySelector('.layout.button') == null ) document.querySelector('[name="search"]').focus();

}

window.onload = function(){
window.setTimeout(function(){toggleLyout();},800)
}


var ul = document.querySelector('ul.control').innerHTML ,
  data = {
    defaultUl : document.querySelector('ul.control').innerHTML ,
  clients : [{id:1,name:'javascript'},{id:2,name:'java'},{id:3,name:'php'},{id:4,name:'c++'},{id:5,name:'swift'},{id:6,name:'go'}] ,
  food : [{name:'pizza',price:'9.99'},{name:'hamburger',price:'2.99'},{name:'fries',price:'4.99'},{name:'cola',price:'1.99'},{name:'coffee',price:'0.99'}] ,
  search : function(term){
    var i , List = '' , term = term.toLowerCase() ;
    console.log(term);
    if (term !== '') {
    for ( i = 0; i < this.clients.length; i++) {
  if (~this.clients[i].name.toLowerCase().indexOf(term))  List+= '<li>'+this.clients[i].name+'</li>' ;
    }
    for ( i = 0; i < this.food.length; i++) {
  if (~this.food[i].name.toLowerCase().indexOf(term))     List+= '<li>'+this.food[i].name+'<span class="pull-right text-right">'+this.food[i].price+' $</span></li>' ;
    }
  } else {
  List = this.defaultUl ;
  }
    document.querySelector('ul.control').innerHTML = List ;
  }


}


var divs = {
  dashPop : document.querySelector('.pop'),
}




function showSection(string , callback) {

if (document.querySelector('.pop').classList.contains('hidd')) {
} else {
  ramjet.transform( document.querySelector('.pop'), document.querySelector('.control') , {
 done: function () {
   document.querySelector('.pop').classList.add('hidd');
 }
});
}
if (callback) callback();
document.querySelector('.inner.active').classList.remove('active');
document.querySelector('.'+string).classList.add('active');
}


function animationFull(x,y , callback) {
  if(callback) callback();
   ramjet.transform( x, y , {
  done: function () {
     y.classList.remove('hidd');
  }
});
}







var showPop =   {

  recette : function () {
var inH = '<h2 align="center">Recette</h2>';
 inH += '<h1 align="center">0.00</h1>';
document.querySelector('.pop').innerHTML = inH;
  } ,
  datetime : function(){
var clock = moment().format('HH:MM');
var time = moment().format('dddd DD MMMM YYYY');
document.querySelector('.pop').innerHTML = '<h1 align="center" class="timeText">'+clock+'</h1><h2 align="center" class="dateText">'+time+'</h2>';

  }
}
