import React, { Component, useState, useRef } from 'react';
import './Song.css'

const Song = () => {
    let [i, setI] = useState(0);
    const musicRef = useRef();
    const [play, setPlay] = useState(false);

    const list = [
        {
            path: "https://dl2.mp3party.net/online/8523037.mp3",
            title: 'Cкриптонит-положение',
            img: 'https://images.genius.com/ad00fb85928e48698fb5acefc8c970ac.1000x1000x1.jpg'

        },
        {
            path: "https://cdn7.sefon.pro/prev/6pY3tNwLWjjkhRy9-nsIaw/1630805690/38/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81%D1%8B%20-%20%D0%93%D0%BE%D0%BB%D0%B0%D1%8F%20%28192kbps%29.mp3",
            title: 'Градусы — Голая',
            img: 'http://rultrastar.com/image/cache/data/2000/Gradusy%20-%20Golaya-500x500.jpg'
        },
        {
            path: "https://cdn8.sefon.pro/prev/K-n1Wk0g0QyMTewtRHn8lg/1630807330/115/Bill%20Withers%20ft.%20Grover%20Washington%20Jr.%20-%20Just%20The%20Two%20Of%20Us%20%28192kbps%29.mp3",
            title: 'Bill Withers - Just The Two Of Us',
            img: 'https://i1.sndcdn.com/artworks-000166184877-ij3zyc-t500x500.jpg'
        },
        {
            path: "https://cdn6.sefon.pro/prev/1WMtUlDoQpaLQiw-YuhXAw/1630807573/32/Quest%20Pistols%20-%20%D0%A2%D1%8B%20%D0%A2%D0%B0%D0%BA%20%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%20%28192kbps%29.mp3",
            title: 'Quest Pistols Show - Ты Так Красива',
            img: 'https://c-cl.cdn.smule.com/rs-s78/arr/14/57/3cc8ac17-cd41-4f74-9683-9963aec7a8d3_1024.jpg'
        },
    ]


    const onPlayer = () => {
        setPlay(!play)
        play ? onPause() : onPlay()
    }

    const onPlay = () => {
        musicRef.current.play()
    }
    const onPause = () => {
        musicRef.current.pause()
    }



    const prevSong = () => {
        if (i === 0) {
            i = list.length
        } else {
            setI(i - 1)
        }
    }
    const nextSong = () => {
        if (i === list.length - 1) {
        } else {
            setI(i + 1)    
        }
    }
    return (
        <div className="container">
            <div className="img">
                <img src={list[i].img} width='380' height='380' alt="" />
            </div>
            <div className="name">
                <h1>{list[i].title}</h1>
            </div>
            <div class="frame">
                <audio src={list[i].path} ref={musicRef}></audio>
                <span onClick={prevSong} class="btn">
                    <i class="fas fa-backward"></i>
                </span>
                <span onClick={onPlayer} class="btn">
                    <i class={play ? 'fas fa-pause' : 'fas fa-play'}></i>
                </span>
                <a href="#" onClick={nextSong} class="btn">
                    <i class="fas fa-forward"></i>
                </a>
            </div>
        </div>
    );
}

export default Song;