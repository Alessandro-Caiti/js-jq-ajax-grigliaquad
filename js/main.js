$(document).ready(function() {

    $(document).on('click', '.square', function() {
        var that = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var numRandom = data.response;
                // console.log(numRandom);
                cambiaColore(that, numRandom);
                scriviNumero(that, numRandom)
            },
            error: function() {
                alert('ERRORE');
            }
        });
    });

    // $(document).on('click', '.square', function() {
    //    var elementoSelezionato = $(this);
    //    console.log(elementoSelezionato);
    // });

    function cambiaColore(that, numRandom) {
        if (numRandom <= 5) {
            that.removeClass('giallo');
            that.removeClass('verde');
            that.addClass('giallo');
        } else if (numRandom > 5) {
            that.removeClass('giallo');
            that.removeClass('verde');
            that.addClass('verde');
        }
    }

    function scriviNumero(that, numRandom) {
        that.find('p').text(numRandom);
    }

});
