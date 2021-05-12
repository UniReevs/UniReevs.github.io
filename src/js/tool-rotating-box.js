const $shape = $('#js-shape');
$('.user-input[name="shape"]').on('change', function() {
  let value = $(this).val();
  $shape.attr('data-shape', value);
});
$('.user-input[name="axis"]').on('change', function() {
  let value = $(this).val();
  $shape.attr('data-axis', value);
});
$('.user-input[name="face"]').on('change', function() {
  let value = $(this).val();
  $shape.toggleClass(value);
});
$('.user-input[name="circle"]').on('change', function() {
  let value = $(this).val();
  $shape.toggleClass(value);
});
$('#js-grid').on('change', function() {
  let value = $(this).val();
  $('.container').toggleClass(value);
});
