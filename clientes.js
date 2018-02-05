jQuery(function(){

    const getCostumersError = function(){
        
    }

    const getCostumersSuccess = function(costumers){


        let line = $('#line').html();    //// pegando a tag line dentro do da teg script
        $.each(costumers, function(index,costumer){
      

            $(line).find('.id').text(costumer.id).end()
            .find('.nome').text(costumer.nome).end()
            .find('.email').text(costumer.email).end()
            .find('.telefone').text(costumer.telefone).end()
            .find('.pais').text(costumer.pais).end().appendTo('table');
            
        })

    }

    
        $.ajax({
            url: `http://www.mocky.io/v2/5a725adf2f00006d1477665d`,
            dataType: 'jsonp',       //mudar o cors do servidor acces control
            error: getCostumersError,
            success: getCostumersSuccess
        })
    

})