moment.locale('fr');


 /* --------------------------------------------- UPDATING FUNCTIONS   --------------------------- */
 var em = {
   version : 200,
   branche : 'master',
 }
function connectForUpdate() {
  $.ajax({
     url:"http://frequency-dz.com/api/em/updates/check.php?t="+em.version+"&b="+em.branche,
     dataType: 'jsonp',
     success:function(json){
       var btn

         console.log(json);
         if (json.status == 'ok') {
           btn = '<h3>version '+json.version + ' est disponible ! </h3></br> <a link="'+json.link+'" class="btn btn-danger btn-lg" style="width:200px;" name="button" onclick="updateEm(this)"> Installer</a><br><br><br>';
          btn += '<div class="container updateprogress" style="opacity:0"><div class="progress"><div class="progress-bar progress-bar-warning progress-update" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 1%"><span class="sr-only">60% Complete (warning)</span></div></div></div>';
         } else {
           btn = 'Em  est a jour';
         }
         if (document.querySelector('.updatefield')) document.querySelector('.updatefield').innerHTML = btn;
     },
     error:function(e){
         btn = 'Echeck';
         if (document.querySelector('.updatefield')) document.querySelector('.updatefield').innerHTML = btn;

     }
});
}


function updateEm(updatebtn) {
var link = updatebtn.getAttribute('link');
updatebtn.outerHTML = '<h3>Téléchargement ..</h3>';
document.querySelector('.updateprogress').style.opacity = '1';
animatePrgressBar(300);
}

var pbp = 0;
function animatePrgressBar(timer) {
  pbp++;
  var pourc = (pbp % 100);
  document.querySelector('.progress-update').style.width = pourc + '%';
  window.setTimeout(function(){
animatePrgressBar(timer);
  },timer);
}
 /* ---------------------------------------------  END UPDATING FUNCTIONS   END --------------------------- */



var global;

function filter() {
global = {
stock : [
  {ID:'1',REF:'ABC',PRODUCT:'ISIS',BARCODE :'0123456',BC2 :'321',BC3 :'321',BC4 :'321',BC5 :'321',BC6 :'321',BC7 :'321',BC8 :'321',FAM :'321',LOC :'150',QT :'150',QTMIN :'150',PRIVE_A :'150',PRICE_V :'150',PVR :'150',PVG :'150',FADATE :'WP',PDATE :'WP',} ,
  {ID:'2',REF:'D2',PRODUCT:'BONAL',BARCODE :'5479',BC2 :'',BC3 :'',BC4 :'',BC5 :'',BC6 :'',BC7 :'',BC8 :'',FAM :'',LOC :'1',QT :'1',QTMIN :'1',PRIVE_A :'150',PRICE_V :'350',PVR :'150',PVG :'150',FADATE :'WP',PDATE :'WP',} ,
] ,
clients : [{ID:'1',NAME:'FARES ABADOU',TEL:'0550300558'}],
}
}

filter();

window.onkeyup = function(z) {
if(document.activeElement == document.body) document.querySelector('[name="search"]').focus();
}

function toggleLyout(){
  document.querySelector('.layout').classList.toggle('button');
  if (document.querySelector('.layout.button') == null ) document.querySelector('[name="search"]').focus();

}

window.onload = function(){
window.setTimeout(function(){toggleLyout();},800);
}


var ul = document.querySelector('ul.control').innerHTML ,
  data = {
    defaultUl : document.querySelector('ul.control').innerHTML ,
  clients : global.clients ,
  stock : global.stock ,
  search : function(term){
    var i , List = '' , term = term.toLowerCase() ;
    if (term !== '') {
    for ( i = 0; i < this.clients.length; i++) {
        if (~this.clients[i].NAME.toLowerCase().indexOf(term) || ~this.clients[i].TEL.toLowerCase().indexOf(term) )  List+= '<li onclick="showClient('+i+')">'+this.clients[i].NAME+'</li>' ;
    }
    for ( i = 0; i < this.stock.length; i++) {
  if (~this.stock[i].PRODUCT.toLowerCase().indexOf(term) || (~this.stock[i].BARCODE.toLowerCase().indexOf(term)))     List+= '<li onclick="showProduct('+i+')">'+this.stock[i].PRODUCT+'<span class="pull-right text-right">'+this.stock[i].PRICE_V+'</span></li>' ;
    }
  } else {
  List = this.defaultUl ;
  }
    document.querySelector('ul.control').innerHTML = List ;
  }
}

function buildStock(search) {
  document.getElementById('stockres').innerHTML = 'chargement..';

var sttbl = '', list = global.stock;

if (list && list.length) {
for (var i = 0; i < list.length; i++) {
  console.log(list[i].PRODUCT.toLowerCase().indexOf(search));
if (search == '' || (list[i].PRODUCT.toLowerCase().indexOf(search) !== -1 || list[i].BARCODE.toLowerCase().indexOf(search) !== -1 || list[i].PRICE_V.toLowerCase().indexOf(search) !== -1)) sttbl += '<tr onclick="showProduct('+i+')"><td>'+global.stock[i].REF+'</td><td>'+global.stock[i].PRODUCT+'</td><td>'+global.stock[i].PRICE_V+'</td><td>'+global.stock[i].QT+'</td><td></td><td></td><td></td></tr>'  ;

}
}

document.getElementById('stockres').innerHTML = sttbl;
}



var divs = {
  dashPop : document.querySelector('.pop'),
}




function showSection(string , callback) {

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


function showProduct (i) {
      document.querySelector('.pop').setAttribute('theme','lightblue');
var prod = global.stock[i],
html2 = '<h1 align="center">'+prod.PRODUCT+'</h1>';
document.querySelector('.pop').innerHTML = showPop.close +html2;


  ramjet.transform( document.querySelector('.navbar'), document.querySelector('.pop') , {
  done: function () {
   document.querySelector('.pop').classList.remove('hidd');
  }
  });



};

function showClient (i) {
      document.querySelector('.pop').setAttribute('theme','yellow');
var cl = global.clients[i],
html2 = '<h1 align="center">'+cl.NAME+'</h1>';
document.querySelector('.pop').innerHTML = showPop.close +html2;
ramjet.transform( document.querySelector('.well'), document.querySelector('.pop') , {
done: function () {
   document.querySelector('.pop').classList.remove('hidd');
}
});
};





var showPop =   {
  datetime : {
    time : function(){return moment().format('HH')+'<span class="clockpoint">:</span>'+moment().format('mm') } ,
    date : function(){return moment().format('dddd DD MMMM YYYY').toUpperCase()} ,
  },

  close : '<span  class="close glyphicon glyphicon-remove" onclick="showPop.closeEl()"></span>' ,

  el : document.querySelector('.pop'),

  closeEl :  function(){this.el.classList.add('hidd')},

  recette : function () {
var inH = '<h2 align="center">Recette</h2>';
 inH += '<h1 align="center">0.00</h1>';
document.querySelector('.pop').setAttribute('theme','blue');
document.querySelector('.pop').innerHTML = showPop.close +inH;
  } ,

  dateandtime : function(){
document.querySelector('.pop').innerHTML = showPop.close +'<h1 align="center" class="timeText" timeNow2>'+showPop.datetime.time()+'</h1><h2 align="center" class="dateText">'+showPop.datetime.date()+'</h2>';
document.querySelector('.pop').setAttribute('theme','cyan');
  } ,


  checkForUpdate :function(){
    document.querySelector('.pop').setAttribute('theme','yellow');
    document.querySelector('.pop').innerHTML = showPop.close +'<br><br><br><br><br><h2 align="center">Recherche des mises à jour</h2><div align="center" class="updatefield"><h1 align="center">Chargement..</h1></div> ';
window.setTimeout(function(){connectForUpdate()},1000);
  } ,

  frequency : function(){
    document.querySelector('.pop').setAttribute('theme','lightblue');
var htlm = '  <div align="center"><img src="img/frequency.png" style="height:8vh"></div> <div class="row">';
 htlm += ' <div class="col-sm-6"><h1 align="center">SETIF</h1> <h4 align="center">Boulevard ouled brahem Dallas 3eme tranche , Sétif 19000</h4> <h4 align="center">TEL 036.66.98.88</h4> <h4 align="center">frequency.setif@gmail.com</h4> </div>';
 htlm += ' <div class="col-sm-6"><h1 align="center">ANNABA</h1> <h4 align="center">Adresse : Rue coloel amirouche , Annaba 23000</h4> <h4 align="center">TEL 0556.20.17.59</h4> <h4 align="center">frequency.annaba@gmail.com</h4> </div>';
  htlm += '</div>';
document.querySelector('.pop').innerHTML = showPop.close +htlm;
  } ,


}

function updateTime() {
  document.querySelector('[timeNow]').innerHTML = showPop.datetime.time();
if (document.querySelector('[timeNow2]'))  document.querySelector('[timeNow2]').innerHTML = showPop.datetime.time();
  document.querySelector('[dateNow]').innerHTML = showPop.datetime.date();
  window.setTimeout(function(){
updateTime();
  },60000);
};


updateTime();
