function musicas(i,ref){
    sessionStorage.setItem('musica',i);
    window.location.href = ref;
}

function autoMusic(){
    var music = inf();
    var aud = sessionStorage.getItem('musica');
    if (aud == null){
        aud = 0;
    }
    // console.log(sessionStorage.getItem('musica'))
    var sou = document.createElement('source');
    // var audi = document.createElement('audio');

    // audi.setAttribute('controls');
    // audi.setAttribute('id','aud');
    sou.setAttribute('src',music[aud]['src']);
    sou.setAttribute('type','audio/mpeg')
    // audi.appendChild(sou);
    document.getElementById('aud').appendChild(sou);
}


function inf(){
    
    dataHo = [
        {
            id:0,
            src:"../../Tema de Sogeking  One Piece.mp3"
        },
        {
            id:1,
            src: "../../binks_sake.mp3"
        },
        {
            id:2,
            src: "../../wego.mp3"
        },
        {
            id:3,
            src: "../../we_are.mp3"
        },
        {
            id:4,
            src: "../../over_the_top.mp3"
        }
    ]
    return dataHo;
}