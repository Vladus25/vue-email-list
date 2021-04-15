// V.AJAX


// Generare un email dal API
function emailGenerator() {

  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/random/mail',
    method: 'GET',
    success: function(data) {
      const res = data.response;
      generateEmail(res);
    },
    error: function() {
      console.log('error');
    }
  });

}

// Stampare nella pagina email generato
function generateEmail(email) {

  const target = $('#target');
  target.append('<li>'+ email +'</li>');

}

// Lancio di funzioni
function init() {
  
  for (var i = 0; i < 10; i++) {
    emailGenerator();
  }
}

document.addEventListener('DOMContentLoaded', init);
