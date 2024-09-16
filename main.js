$(document).ready(function() {
    // alert('Olá mundo!')
    //console.log(document.querySelector('header button'))
    //console.log($('#botao-cancelar'))

    /* document.querySelector('header button').addEventListener('click', function(e) {
        alert('Expandir formulário')
    })  isso é o mesmo que fazer esse de baixo ↓↓↓ */ 

    $('header button').click(function() {
        //alert('Expandir formulário')
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        //console.log('submit');
        e.preventDefault()
        
        const enderecoDaNovaImg = $('#endereco-nova-img').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImg}">
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImg}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-nova-img').val('')
    })
})