document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__list');

  toggle.addEventListener('click', function() {
    menu.classList.toggle('nav__list--active');
  });
});

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // Настройка громкости при загрузке
  player.setVolume(50);

  // Назначение обработчиков кнопок
  document.getElementById('play-btn').addEventListener('click', function() {
    player.playVideo();
  });

  document.getElementById('pause-btn').addEventListener('click', function() {
    player.pauseVideo();
  });

  document.getElementById('stop-btn').addEventListener('click', function() {
    player.stopVideo();
  });

  // Контроль громкости
  document.getElementById('volume-slider').addEventListener('input', function() {
    player.setVolume(this.value);
  });
}