$(document).ready(function () {

    console.log("App started");

    $("#currentPatientTable tr").click(function () {
        alert("aa");
        $.mobile.changePage("Patient.html",{transition:"slide"});
        //window.location.href = "Patient.Html"
    });

    $(".chosen-select").chosen({ no_results_text: "Oops, nothing found!", width: "100%" });


})