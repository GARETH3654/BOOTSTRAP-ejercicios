console.log('Hola')
$('h1').css('color','white');
$('navbar-brand')

$('.nav-link').on('click',function(event){
  var target=event.currentTarget.getAttribute('data-ivan');
  $('html,body').animate({
    scrollTop: $(target).offSet().top
  },1000)
})

//butto interaction
$('.modal-button').on('click',function(event) {
  $('.custom-modal').toggle('not-showing');
  if($ (event.currentTarget).hasClass('skill-button')==true) {
    $('.skill1-modal').show();
    $('.skill2-modal').hide();
    $('.skill3-modal').hide();
    $('.skill4-modal').hide();
  }else if ($ (event.currentTarget).hasClass('skill2-button')==true) {
    $('.skill1-modal').hide();
    $('.skill2-modal').show();
    $('.skill3-modal').hide();
    $('.skill4-modal').hide();
  }else if ($ (event.currentTarget).hasClass('skill3-button')==true) {
    $('.skill1-modal').hide();
    $('.skill2-modal').hide();
    $('.skill3-modal').show();
    $('.skill4-modal').hide();
  } else {
    $('.skill1-modal').hide();
    $('.skill2-modal').hide();
    $('.skill3-modal').hide();
    $('.skill4-modal').show();

  }
});
$('.modal-background, .close-modal i' ).on('click',function(){
  $('.custom-modal').toggle('not-showing')
})


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles2-js', 'particlesjs-config 2.json ', function() {
  console.log('callback  particles.js config loaded');
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});


var database = firebase.database()

function saveMessage(form) {
  var name = form.name.value
  var email = form.email.value
  var numero = form.numero.value
  var message = form.message.value
  database.ref('message').update({
    name: name,
    email: email,
    numero: numero,
    message: message
  });
};
