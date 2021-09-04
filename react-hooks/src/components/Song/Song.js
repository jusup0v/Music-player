import React, { Component, useState, useRef } from 'react';
import './Song.css'

const Song = () => {
    const musicRef = useRef();
    const [play, setPlay] = useState()

    const onPlayer = () => {
        play ? onPause() : onPlay()
        setPlay(!play)
    }

    const onPlay = () => {
        musicRef.current.play()
    }
    const onPause = () => {
        musicRef.current.pause()
    }


    return (
        // <div className='music'>


        //     <button>Назад</button>
        //     <button className='audio' onClick={onPlayer}>{play ? <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png"
        //         width='20%' height='20%' alt="" /> : <img src="http://simpleicon.com/wp-content/uploads/play1.png" width='29%' height='29%' alt="" />}
        //     </button>
        //     <button>Вперед</button>
        // </div>
        <div class="frame">
            <audio ref={musicRef}>
                <source src={'https://go.mp3minusovki.com/music/fhvndfjwserjgt/38f1e9190ce0da64de77f6c1a9fa77db/5e34ce530e3d61046125aef0f73ce3b0.mp3'}
                    type='audio/mpeg' />
            </audio>
            <a href="#" class="btn">
                <i class="fas fa-backward"></i>
            </a>
            <a href="#" onClick={onPlayer} class="btn">
                <i class={play ? 'fas fa-pause' : 'fas fa-play'}></i>
            </a>
            <a href="#" class="btn">
                <i class="fas fa-forward"></i>
            </a>
        </div>
    );
}

export default Song;