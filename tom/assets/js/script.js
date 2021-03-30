var story = [
  {
    text: '昔々、トムがいました。'
  },
  {
    text: '変化を求めました。どうなりたいですか？'
  },
  {
    name: 'トム',
    text: 'よし、みんなでゲームを作ろう！'
  }
];

$('.js-next').on('click', function() {
  var index = $('#js-story-index').data('story-index');
  index = index + 1;
});


