function main(){
    // >>>>> Create Var <<<<<<
    var data = info();
    autoMusic();

    // Start put html
    for (let i = 0; i < data.length; i++) {
        // >>>>> Create Var <<<<<<
        var aNews = document.createElement('a');
        var divNews = document.createElement('div');
        var imgNews = document.createElement('img');
        var h2News = document.createElement('h2');
        var hr = document.createElement('hr');

        //  >>>>> Set your config <<<<<<

        divNews.setAttribute('class', 'news')
        aNews.setAttribute('onclick','passID('+i+')');
        imgNews.setAttribute('id','thumb');
        imgNews.setAttribute('onclick','passID('+i+')');
        imgNews.setAttribute('src',data[i]['img']);
        h2News.innerHTML = data[i]['title'];
        // Create

        divNews.appendChild(imgNews);
        divNews.appendChild(h2News);
        aNews.appendChild(divNews);
        document.getElementById('auto').appendChild(aNews);
        document.getElementById('auto').appendChild(hr)
        
    }
}

function passID(i){
    sessionStorage.setItem('id',i);
    window.location.href = 'html/news/news.html';
}

function info(){
    
    dataHome = [
        {
            id:0,
            img:"https://cdn.discordapp.com/attachments/704786714769490101/770307290334363688/unknown.png",
            title:"REIMPRESSÃO DO MANGÁ DE ONE PIECE"
        },
        {
            id:1,
            img: "https://onepieceex.net/wp-content/uploads/2020/10/One-Piece-Calendario-2021.jpg",
            title: "CALENDÁRIO ONE PIECE 2021"
        },
        {
            id:2,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/770313016935579658/unknown.png",
            title: "SEM ONE PIECE NAS PROXIMAS 2 SEMANAS"
        },
        {
            id:3,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/770327013989810176/unknown.png",
            title: "KILLER E UROUGE CONFIMARDOS NO WARRIORS 4 - DLC DEDICADA AOS SUPERNOVAS"
        },
        {
            id:4,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/770325906823577652/unknown.png",
            title: "25 FATOS DE 2020 SOBRE O NOVO LIVE ACTION DE ONE PIECE"
        },
        {
            id:5,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/769724482159247390/unknown.png",
            title: "DIVULGADA A DATA DE ONE PIECE NA NETFLIX"
        },
        {
            id:6,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/770328028814901278/unknown.png",
            title: "ANUNCIADO X DRAKE PARA PIRATE WARRIORS 4"
        },
        {
            id:7,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/770327045426774066/unknown.png",
            title: "IMAGENS DO NOVEL DO ACE"
        },
        {
            id:8,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/770327076179673108/unknown.png",
            title: "REVISTA JUMP DIZ QUE PRÓXIMO ARCO SERÁ O FINAL - E COMENTAM SOBRE RELER TODA A OBRA"
        },
        {
            id:9,
            img: "https://cdn.discordapp.com/attachments/704786714769490101/770327105036615700/unknown.png",
            title: "TOKYO ONE PIECE TOWER FECHARÁ SUAS PORTAS"
        }
    ]
    return dataHome;
}