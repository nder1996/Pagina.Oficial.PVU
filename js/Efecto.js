$(document).ready(function() {

  $('.nav-link').click(function() {
     var active = $(this).attr("id");
     if(active=='pills-contacts-tab'){
        $('.title_modal_contact').html('<h5 class="title_modal_contact modal-title" id="exampleModalLabel">Contact Us</h5>')
     }else{
       $('.title_modal_contact').html('<h5 class="title_modal_contact modal-title" id="exampleModalLabel">Collaborations</h5>')
     }
  })

});
