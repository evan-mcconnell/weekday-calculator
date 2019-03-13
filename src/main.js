  import $ from 'jquery';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { userDate, dayConvert } from './../src/calculator.js';


$(document).ready( function() {
  $(".date").submit(function(event) {
    event.preventDefault();
    const newDate = $('#date-input').val();
    const output = dayConvert(newDate);
    $(".output").text(output);
  });
});
