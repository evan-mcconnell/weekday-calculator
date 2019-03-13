// import $ from 'jquery';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  function scopeCheck() {
  let x = 5;
  if (x > 1) {
    x = 6;
  }
  console.log(x);
  }
  scopeCheck();
