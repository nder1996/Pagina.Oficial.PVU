$(document).ready(function() {

  var ruleta = ['Web development', 'Mobile development', 'UX/UI design', 'Software development', 'Responsive web design']
  var ruleta_esp = ['desarrollo web', 'desarrollo móvil', 'Experiencia de usuario UX / Diseño de interfaz de usuario UI', 'Desarrollo de software', 'Diseño web adaptable']

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
        //console.log('LocalStorage verificar : ',localStorage)
        //console.log('Este es el localStorage',localStorage.getItem('lang','es'))
        for (let i = 1; i <= 5; i++) {
            //console.log('contador : ', contador = contador + 1)
            setTimeout(function() {
                if(localStorage.getItem('lang','es')!='es'){
                      $(".Ruleta").append(`<p class='text_ruleta' id='ruleta_${i}'>${ruleta[random_vector[i-1]]}</p>`)
                }else{
                      $(".Ruleta").append(`<p class='text_ruleta' id='ruleta_${i}'>${ruleta_esp[random_vector[i-1]]}</p>`)
                }

            },
            `${i}000`);
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
