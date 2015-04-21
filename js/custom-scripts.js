/* Centering modals */
function centerModals(){
  $('.modal').each(function(i){
    var $clone = $(this).clone().css('display', 'block').appendTo('body');
    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
    top = top > 0 ? top : 0;
    $clone.remove();
    $(this).find('.modal-content').css("margin-top", top);
  });
}
$('.modal').on('show.bs.modal', centerModals);
$(window).on('resize', centerModals);

/* autofill blank space (on the bottom of page)  */
$(document).ready(function(){
	getHeight= $(window).innerHeight()+"px";
	$('section.container').css('min-height', getHeight);
});

/* Custom number spinner (x-pcs) */
jQuery(document).ready(function(){
    $('#qtyplus').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#qtyfield').val());
        if (!isNaN(currentVal)) {
            $('#qtyfield').val(currentVal + 1);
        } else {
            $('#qtyfield').val(0);
        }
    });
    
    $("#qtyminus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('#qtyfield').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $('#qtyfield').val(currentVal - 1);
        } else {
            $('#qtyfield').val(0);
        }
    });

});

function addslashes( str ) {
            return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function selected_product( val ) {
         localStorage.selected_product = val;
         window.location=('products.html');
}

function loadcartbubble(){   
     if(localStorage.cartnum != null){
           if(parseInt(localStorage.cartnum)>0){
              $('#bublecart').show();
              $('#cartnum').html(parseInt(localStorage.cartnum));
           }else{
               localStorage.cartnum = 0;
               $('#bublecart').hide();
               $('#cartnum').html(0);
           }
     }

}

function loadpendbubble(){   
     if(localStorage.pendnum != null){
           if(parseInt(localStorage.pendnum)>0){
              $('#bublepending').show();
              $('#pendnum').html(parseInt(localStorage.pendnum));
           }else{
               localStorage.pendnum = 0;
               $('#bublepending').hide();
               $('#pendnum').html(0);
           }
     }

}

function logout(){
            localStorage.removeItem('userid');
            localStorage.removeItem('name');
            localStorage.removeItem('company');
            localStorage.removeItem('address');
            localStorage.removeItem('billing');
            localStorage.removeItem('phone');
            localStorage.removeItem('officephone');
            localStorage.removeItem('email');
            localStorage.removeItem('branch');
         window.location=('login.html');
}

function set_language(selang){
         localStorage.lang = selang;
}



// config & Startup
//localStorage.cartnum = 0;
var base_url = 'http://demo.wishbonetech.com/inventorymod';
//var base_url = 'http://localhost/inventory';

loadcartbubble();
loadpendbubble();
// end config 
