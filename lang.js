// JavaScript Document

var LanguageList = {
  "EN" : "English",
  "CN" : "Chinese",
  "IT" : "Italian"
};

//languages Objects
var WORDS_EN = {
  "text1" : "Click (phone：long press), please!",
	"text2" : "Nonstop click, please!",
  "text3" : "Nonstop draw lines, please!",
  "text4" : "Open what you draw, please!",


};

var WORDS_CN = {
 "text1" : "请点击（手机：长按）！",
	"text2" : "请不停地点击！",
  "text3" : "请不停地画线！",
  "text4" : "请打开您画的东西！",

};

var WORDS_IT = {
 "text1" : "Click (cellulare: pressione lunga), per favore!",
	"text2" : "Clic continuo, per favore!",
  "text3" : "Disegna linee senza sosta, per favore!",
  "text4" : "Apri quello che disegni, per favore!",

};



window.onload = initialize;

function initialize() {
  var $dropdown = $("#country_select");    
  $.each(LanguageList, function(key, value) {
    $dropdown.
      append($("<option/>").
      val(key).
      text(value));
    });
    
  loadsLanguage("EN");
}

function loadsLanguage(lang){
  /*fills all the span tags with class=lang pattern*/ 
  $('span[class^="lang"]').each(function(){
    var LangVar = (this.className).replace('lang-','');
    var Text = window["WORDS_"+lang][LangVar];
    $(this).text(Text);        
  });
}


