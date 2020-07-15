let player;

const playerContainer=$('.player');

const eventsInit=()=>{
  $(".controls__play-btn").click(e=>{

    if (playerContainer.hasClass('active')){
      player.pauseVideo();
    } else{
      player.playVideo();
    }
  })

  $(".player__splash").click(e=>{
    player.playVideo();
  })

  $(".controls__scroll-bar").click(e=>{
    const bar=$(e.currentTarget);
    const clickedPosition=e.originalEvent.layerX;
    const newSliderPositionPercent=(clickedPosition/bar.width())*100;
    const newSliderPositionSec=(player.getDuration()/100)*newSliderPositionPercent;
    
    player.seekTo(newSliderPositionSec);

  })

  $(".controls__volume-btn").click(e=>{
    if (playerContainer.hasClass('mute')){
      player.unMute();
      playerContainer.removeClass("mute");
    } else{
      player.mute();
      playerContainer.addClass("mute");
    }
  })

  $(".controls__volume-bar").click(e=>{
    const volumeBar=$(e.currentTarget);
    const clickedPosition=e.originalEvent.layerX;
    const newVolumePositionPercent=(clickedPosition/volumeBar.width())*100;
    player.setVolume(newVolumePositionPercent);
    player.unMute();
    playerContainer.removeClass("mute");
    $('.volume-bar__slider').css({
      left:`${newVolumePositionPercent}%`
    })
    $('.volume-bar__strip').css({
      right:`${100-newVolumePositionPercent}%`
    })
  })

}

const onPlayerReady=()=>{
  let interval;
  const durationSec=player.getDuration();

  const volumePercent=player.getVolume();

  $('.volume-bar__slider').css({
    left:`${volumePercent}%`
  })
  $('.volume-bar__strip').css({
    right:`${100-volumePercent}%`
  })

  if (typeof interval!=="undefined"){
    clearInterval(interval);
  }
  interval=setInterval(()=>{
    const completedSec=player.getCurrentTime();
    const completedPercent=(completedSec/durationSec)*100;
    $('.scroll-bar__slider').css({
      left:`${completedPercent}%`
    })
    $('.scroll-bar__strip').css({
      right:`${100-completedPercent}%`
    })
  })
}

const onPlayerStateChange=event=>{
  // -1 – воспроизведение видео не началось
  // 0 – воспроизведение видео завершено
  // 1 – воспроизведение
  // 2 – пауза
  // 3 – буферизация
  // 5 – видео находится в очереди
  switch (event.data){
    case 1:
      playerContainer.addClass("active");
    break;
    case 2:
      playerContainer.removeClass("active");
    break;
  }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '370',
    width: '660',
    videoId: '5k_pyJEzrWM',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 1
    }
  });
}

eventsInit();
