"use strict";

$(document).ready(function () {
    const year_now = (new Date()).getFullYear();
    $('#process-btn').on('click', handleClick);


    function handleClick() {
        let yob = $('#yob').val();

        if (yob.trim() === '') {
            output('Please enter a year!');
        } else {
            let age = year_now - yob;
            output(`You are ${age} years old.`);
        }
    }

    function output(text) {
        $('#txt-output').text(text);
    }
});
