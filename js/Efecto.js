$(document).ready(function() {

  $('.nav-link').click(function() {
    var active = $(this).attr("id");
    if (active == 'pills-contacts-tab') {
      $('.title_modal_contact').html('<h5 class="title_modal_contact modal-title" id="exampleModalLabel">Contact Us</h5>')
    } else {
      $('.title_modal_contact').html('<h5 class="title_modal_contact modal-title" id="exampleModalLabel">Collaborations</h5>')
    }
  });

  var ruleta = [
    'Web development', 'Mobile development', 'UX/UI design', 'Software development', 'Responsive web design'
  ]

  let random_vector = []
  let j = 0;

  function Aleatorio() {

    for (let i = 1; i <= 20; i++) {
      let num_aletorio = 0 + Math.floor(Math.random() * 5)
      if (random_vector.length == 0) {
        random_vector.push(num_aletorio)
      } else {
        if (random_vector.indexOf(num_aletorio) == -1) {
          if (random_vector.length <= 5) {
            random_vector.push(num_aletorio)
          }
        }
      }
    }
    return random_vector;
  }

  function Ruleta() {
    for (let i = 1; i <= 20; i++) {
      let num_aletorio = 0 + Math.floor(Math.random() * 5)
      if (random_vector.length == 0) {
        random_vector.push(num_aletorio)
      } else {
        if (random_vector.indexOf(num_aletorio) == -1) {
          if (random_vector.length <= 5) {
            random_vector.push(num_aletorio)
          }
        }
      }
    }
    let contador = 0;
    for (let i = 1; i <= 5; i++) {
      console.log('contador : ', contador = contador + 1)
      setTimeout(function() {
        $(".Ruleta").append(`<p class='text_ruleta' id='ruleta_${i}'>${ruleta[random_vector[i-1]]}</p>`)
      }, `${i}000`);
    }
    setTimeout(function() {
      $(".text_ruleta").remove()
    }, `6000`);
    setTimeout(function() {
      random_vector = []
    }, `7000`);
  }

  setInterval(Ruleta, 8000);




});
