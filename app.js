const music = new Audio('Fernandinho Teus Sonhos.mp3');

//CRIANDO ARRAY

const songs = [
    {
        id:'1',
        songName:'Teus Sonhos <br> <div class="subtitle">Fernandinho</div>',
        poster:"imagens/1.jpg"
    },
    {
        id:'2',
        songName:'Que ele cresca <br> <div class="subtitle">Desconhecido</div>',
        poster:"imagens/2.jpg"
    },
    {
        id:'3',
        songName:'Brilharei <br> <div class="subtitle">Juliano Son</div>',
        poster:"imagens/3.jpg"
    },
    {
        id:'4',
        songName:'Aba Pai <br> <div class="subtitle">Daniel Alencar</div>',
        poster:"imagens/4.jpg"
    },
    {
        id:'5',
        songName:'Faz chover <br> <div class="subtitle">Fernandinho</div>',
        poster:"imagens/5.jpg"
    },
    {
        id:'6',
        songName:'Uma nova historia <br> <div class="subtitle">Fernandinho</div>',
        poster:"imagens/6.jpg"
    },
    {
        id:'7',
        songName:'God is able <br> <div class="subtitle">Hillsong</div>',
        poster:"imagens/7.jpg"
    },
   
    {
        id:'8',
        songName:'Impossivel Deus pode <br> <div class="subtitle">Daniel Alencar</div>',
        poster:"imagens/8.jpg"
        
    },
    {
        id:'9',
        songName:'Toma me <br> <div class="subtitle">Juliano Son</div>',
        poster:"imagens/9.jpg"
    },
    {
        id:'10',
        songName:'Emanuel <br> <div class="subtitle">Fernandinho</div>',
        poster:"imagens/10.jpg"
    },
    {
        id:'11',
        songName:'Te louvarei <br> <div class="subtitle">Toque no Altar</div>',
        poster:"imagens/3.jpg"
        
    },
    {
        id:'12',
        songName:'Teu Santo Nome <br> <div class="subtitle">Gabriela Rocha</div>',
        poster:"imagens/9.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let masterPlay2 = document.getElementById('masterPlay2');
let wave = document.getElementsByClassName('wave')[0];
let biMusicNoteBeamed = document.getElementById('biMusicNoteBeamed');
//ICON DE PLAY DE BAIXO
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

//ICON DE PLAY DE CIMA
masterPlay2.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        masterPlay2.classList.remove('bi-play-fill');
        masterPlay2.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay2.classList.add('bi-play-fill');
        masterPlay2.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

biMusicNoteBeamed.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }

})

// PLAY PARA TOCAR MUSICA
const  makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })

}
const  makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}
//Titlo de cada musica
//const aud = document.querySelector('#aud')
//const sons =['1','2','3','4','5']
//Pegando a primeira musica
let audio = 0;
//Iniciando ou ligando o son
//loadSong(sons[audio])

//function loadSong(sons1){
 //   title.innerText = sons1
 //   music.src = 'audio/${sons1}.mp3'
 //   poster_master_play.src = 'imagens/${sons1}.jpg'
//}

let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        audio = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${audio}.mp3`;
        poster_master_play.src = `imagens/${audio}.jpg`;
        //poster_master_play.src = 'imagens/${audio}.png';
        music.play();

        let song_title = songs.filter((ele)=>{
            return ele.id == audio;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        //music.addEventListener('ended',() =>{
        //    masterPlay.classList.add('bi-play-fill');
        //    masterPlay.classList.remove('bi-pause-fill');
        //    wave.classList.remove('active2');

       // })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${audio-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

// MINUTO INICIAL E FIM DA MUSICA, BARRA DE MINUTOS
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    //MINUTOS NO FIM DA MUSICA
    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);

    if (sec<10){
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    // MINUTOS NO INICIO DA MUSICA
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);

    if (sec1<10){
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    // BARRA DE PROGRESSO
    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}`;
})

// ARASTAR A BARRA DE MUSICA ONDE QUERO ESCUTAR
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})
// ATIVACAO DA ANIMACAO QUANDO A MUSICA TOCA
music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    audio ++;
    music.src = `audio/${audio}.mp3`;
    poster_master_play.src = `imagens/${audio}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == audio;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${audio-1}`].style.background = "rgb(105, 105, 170, .1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[audio-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[audio-1].classList.add('bi-pause-circle-fill');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

// BACK DE MUSICAS
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    audio -=1;
    if(audio<1){
        audio = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/${audio}.mp3`;
    poster_master_play.src = `imagens/${audio}.jpg`;
    music.play();

    let song_title = songs.filter((ele)=>{
        return ele.id == audio;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`$(audio)`).classList.remove('bi-play-fill');
    document.getElementById(`$(audio)`).classList.add('bi-pause-fill');
    makeAllBackgrounds();

    Array.from(document.getElementsByClassName('songItem'))[`${audio-1}`].style.background = "rgb(105, 105, 170, .1)";
   
})

// NEXT DE MUSICA

next.addEventListener('click', ()=>{
    audio -= 0;
    audio += 1;
    if(audio > Array.from(document.getElementsByClassName('songItem')).length){
        audio = 1;

    }
    music.src = `audio/${audio}.mp3`;
    poster_master_play.src = `imagens/${audio}.jpg`;
    music.play();

    let song_title = songs.filter((ele)=>{
        return ele.id == audio;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`$(audio)`).classList.remove('bi-play-fill');
    document.getElementById(`$(audio)`).classList.add('bi-pause-fill');
    makeAllBackgrounds();

    Array.from(document.getElementsByClassName('songItem'))[`${audio-1}`].style.background = "rgb(105, 105, 170, .1)";
   
})

// SCROLL DAS MUSICAS POPULARES SONGS

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

// SCROLL DAS MUSICAS POPULARES ARTISTS
let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})

//WEBSITE RESPONSIVO
var swiper = new Swiper(".menu_song",{
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },

    breakpoints: {
        280:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView:3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 20,
        },
    },
});