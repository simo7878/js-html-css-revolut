$(document) .ready(
  function() {
    $('.parent_dropdown > a').click(
      function() {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
