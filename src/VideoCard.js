import React, { useRef, useState } from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css'

function VideoCard( {url , likes , shares , channel , song , avatarSrc }) {
    const [ isVideoPlaying , setIsVideoPlaying ] = useState(false);

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }else {
            videoRef.current.play();
            setIsVideoPlaying(true)
        }
    };
    return(
        <div className = 'videoCard'>
            <VideoHeader />
            <video
                ref = { videoRef }
                onClick = { onVideoPress}
                className='Video_player'
                src={ url }
                alt='IG Reel Video'
                loop

            />
            <VideoFooter 
                channel = { channel }
                avatarSrc = { avatarSrc }
                song = { song }
                likes = { likes }
                shares = { shares }
            />

        </div>
    )
}

export default VideoCard;