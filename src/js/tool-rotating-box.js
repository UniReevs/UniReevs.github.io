  $('.user-input[name="shape"]').on('change', function() {
    let value = $(this).val();
    $('#js-shape').attr('data-shape', value);
  });
  $('.user-input[name="axis"]').on('change', function() {
    let value = $(this).val();
    $('#js-shape').attr('data-axis', value);
  });
  $('.user-input[name="face"]').on('change', function() {
    let value = $(this).val();
    $('#js-shape').toggleClass(value);
  });
