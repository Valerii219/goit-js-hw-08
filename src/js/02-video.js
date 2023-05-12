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

const getLocalKey = localStorage.getItem(LOCAL_KEY);
if (getLocalKey){
    console.log(getLocalKey);
}
    
const GET_LOCAL_KEY = localStorage.getItem(LOCAL_KEY);
    player.setCurrentTime(getLocalKey).then(function(seconds) {
    
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
            default:
                // some other error occurred
                break;
        }
    });
    
