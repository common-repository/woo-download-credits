jQuery(document).ready(function($){
    $('#product-type').on('change',function(){
        var valch = $(this).val();     
        if(valch == 'simple'){
              $('.options_group.woo-credit-price').removeClass('wdc-hide');
        }else{
            $('.options_group.woo-credit-price').addClass('wdc-hide');
        }
    });
 });