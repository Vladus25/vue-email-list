// V.AXIOS

function initVue() {

  new Vue({

    el: '#app',
    data: {

      'email': null,
      'error': '',
      'emails': [],
    },
    mounted: function() {

      for (var i = 0; i < 10; i++) {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
          this.email = response.data.response;
          this.emails.push(this.email);
          console.log(this.emails);
        })
        .catch(function(e){
          this.error = e;
        });
        
      }
    },

  });

}

function init() {

  initVue();
}

document.addEventListener('DOMContentLoaded', init);
