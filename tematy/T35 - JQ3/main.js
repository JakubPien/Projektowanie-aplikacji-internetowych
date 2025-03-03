$(function() {
        $('#zdjecie').click(function () {
                $('.zawartosc').animate( {
                        width: '1400px',
                    }
                )
                $(this).animate({
                        bottom: '0',
                        right: '0',
                        width: '1400px',
                        height: '600px',
                }, 500);
        });
});