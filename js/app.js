$(document).ready(function(){

$('.ytInput').on('keyup',function (){
  id = $('#ytID').val();
  ytPic = "https://i.ytimg.com/vi" + id + "/mqdefault.jpg";
  link = "http://youtube.com/watch?v=" + id;
  shape = "square";
  color = "red";
  buttonstyle= "width: 70px; position: absolute; top: -20px; left: 165px;"
  var go = $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
   $('.hideMe').removeClass('hideMe');
});
//CHANGE THE SHAPES
$('#square').on('click',function(){
  shape="square";
  buttonstyle= "width: 65px; position: absolute; top: -20px; left: 165px;"
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#circle').on('click',function(){
  shape="circle";
  buttonstyle= "width: 70px; position: absolute; top: -35px; left: 165px;"
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});
//CHANGE THE COLORS
$('#red').on('click',function(){
  color="red";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#blue').on('click',function(){
  color="blue";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#black').on('click',function(){
  color="black";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#green').on('click',function(){
  color="green";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#orange').on('click',function(){
  color="orange";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#pink').on('click',function(){
  color="pink";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#purple').on('click',function(){
  color="purple";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#yellow').on('click',function(){
  color="yellow";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});

$('#darkerGrey').on('click',function(){
  color="darkerGrey";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});
$('#darkGrey').on('click',function(){
  color="darkGrey";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});
$('#grey').on('click',function(){
  color="grey";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});
$('#lightGrey').on('click',function(){
  color="lightGrey";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});
$('#lighterGrey').on('click',function(){
  color="lighterGrey";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});
$('#white').on('click',function(){
  color="white";
  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img class="ytpic" style="min-width: 400px; width:400px;" src="' + ytPic + '"/><img class="ytplay" style="' + buttonstyle + '" src="http://kgwebsites.com/images/playbuttons/' + shape + '/' + color + '.png"></a>');
  var code = $('.videoLink').html();
   $('.videoCode').text(code);
});


/* VIMEO
$('.vimeoInput').on('keyup',function(){
  id = $('#vimeoID').val();
  vimeoPic = "http://ts.vimeo.com.s3.amazonaws.com/235/662/" + id + "_640.jpg";
  link = "https://vimeo.com/" + id;

  $('.videoLink').html('<a style="position:relative;" target="_window"href="' + link + '"><img style="min-width: 400px; width:400px;"class="vimeopic" src="' + vimeoPic + '"/><img class="vimeoplay" style="' + buttonstyle + '" src="https://intelligentdownloads.s3.amazonaws.com/siteimages/youtube-play-button-1.png"></a>');
  var code = $('.videoLink').html();
  $('.videoCode').text(code);
  $('.hideMe').removeClass('hideMe');

});
*/

});
