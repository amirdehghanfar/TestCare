$(document).ready(function () {

    console.log("App started");

    $('body').fadeIn(1000).removeClass('hidden');

    $("#currentPatientTable tr").click(function () {
        
        window.location.href = "Patient.Html"
    });

    $(".chosen-select").chosen({ no_results_text: "Oops, nothing found!", width: "100%" });


})