$(document).ready(function(){
    getData();
});
var currentlySelectedPerson;
function getData() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function (data) {
            console.log(data);
            showPerson(data.people, currentlySelectedPerson);
            $.each(data.people, function (i, person) {
                $('#ajax-data').append('<div class="person"></div>');
                var $el = $('#ajax-data').children().last();
                $el.append('<h2>' + person.name + '</h2>');
                $el.append('<p>' + person.favoriteMovie1 + '</p>');
                $el.append('<p>' + person.favoriteMovie2 + '</p>');
                $el.append('<p>' + person.favoriteSong + '</p>');
                $el.append('<p>' + person.avatar + '</img');
            });

        },
        error: function () {
            console.log('ERROR: Unable to contact the server.');
        },
        timeout: function () {

        }

    });
    function showPerson(peopleArray, specificPerson) {
        var person = peopleArray[specificPerson]
        $('.person-info').html('<h1>' + person.name + '</h1>' + '<p>' + person.favoriteMovie1 + '</p>' + '<p>' +
            person.favoriteMovie2 + '</p>' + '<p>' + person.favoriteSong + '</p>');
    }
}