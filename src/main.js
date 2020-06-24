import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from './haiku';
//import { Entry } from './entry';

$(document).ready(function() {
  $("form#journal-form").submit(function(event) {
    event.preventDefault();
    // let titleInput = $("#title").val();
    let line1 = $("#poem-entry").val();
    let haiku = new Haiku(line1);
    // console.log(haiku);
    console.log(line1);
    console.log(haiku);
  });
});