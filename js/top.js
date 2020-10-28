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
    var sou = document.createElement('source');

    sou.setAttribute('src',music[aud]['src']);
    sou.setAttribute('type','audio/mpeg')
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