$(function() {
        $('#tekst_1').click(function() {
                $('#tekst1').toggle("slow");
                $('#tekst2').hide("slow");
                $('#tekst3').hide("slow");
                $('#tekst4').hide("slow");
        });
        $('#tekst_2').click(function() {
                $('#tekst1').hidePopover("slow");
                $('#tekst2').toggle("slow");
                $('#tekst3').hidePopover("slow");
                $('#tekst4').hidePopover("slow");
        });
        $('#tekst_3').click(function() {
                $('#tekst1').hidePopover("slow");
                $('#tekst2').hidePopover("slow");
                $('#tekst3').toggle("slow");
                $('#tekst4').hidePopover("slow");
        });
        $('#tekst_4').click(function() {
                $('#tekst1').hidePopover("slow");
                $('#tekst2').hidePopover("slow");
                $('#tekst3').hidePopover("slow");
                $('#tekst4').toggle("slow");
        });
});