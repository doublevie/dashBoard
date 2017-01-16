


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
