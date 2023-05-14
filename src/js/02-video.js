import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = "videoplayer-current-time";
const onPlay = function(data) {

    const { duration, percent, seconds } = data;
    localStorage.setItem(LOCAL_KEY, seconds);
};
player.on('timeupdate', throttle(onPlay, 1000))
const getLocalKey = localStorage.getItem(LOCAL_KEY) || 0;
    player.setCurrentTime(getLocalKey);


    
