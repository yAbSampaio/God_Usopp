

function main(){

    // >>>>> Create Var <<<<<<
    autoMusic();
    var data = info();
    var subs = 0;
    var leng = ["kaizu","four","seven"];
    var lengH = ["Rei dos Piratas","Yonkous","Governo Mundial"];
    

    // Start put html
    for (let i = 0; i < data.length; i++) {
        // >>>>> Create Var <<<<<<
            // indice
        var aInd = document.createElement('a');
        var liInd = document.createElement('li');

        var tableBandos = document.createElement('table'); 
        var h2Title = document.createElement('h2');
        var br = document.createElement('br');

        //  >>>>> Set your config <<<<<<

        h2Title.setAttribute('id',leng[i]);
        tableBandos.setAttribute('id','table');
        aInd.setAttribute('href', "#"+leng[i]);
        aInd.innerHTML = lengH[i];
        h2Title.innerHTML = lengH[i];
        
        liInd.appendChild(aInd);
        for (let j = 0; j < data[i].length; j++) {
            // >>>>> Create Var <<<<<<

            var trB = document.createElement('tr')


            if (data[i].length >= 2) {
                for (let k = 0; k < 3 && j < data[i].length ; k++) {
                    // >>>>> Create Var <<<<<<
                    
                    var tdB = document.createElement('td');
                    var aB = document.createElement('a');
                    var imgB = document.createElement('img');
                    var h3B = document.createElement('h3');
                    
                    var pB = document.createElement('p');
                    //  >>>>> Set your config <<<<<<

                    aB.setAttribute('onclick','passIDB('+data[i][j]['id']+')');
                    // imgB.setAttribute('id', "center");
                    imgB.setAttribute('src', data[i][j]['img']);
                    h3B.setAttribute('style',"text-align: center;");
                    h3B.innerHTML = data[i][j]['name'];
                    tdB.setAttribute('id','center');

                    // Create
                    pB.appendChild(imgB);
                    aB.appendChild(pB);
                    aB.appendChild(h3B);
                    tdB.appendChild(aB);
                    trB.appendChild(tdB);
                    j++;
                    
                }
                j--;
            }
            else{
                    var tdB = document.createElement('td');
                    var aB = document.createElement('a');
                    var imgB = document.createElement('img');
                    var h3B = document.createElement('h3');
                    var pB = document.createElement('p');
                    
                    //  >>>>> Set your config <<<<<<

                    aB.setAttribute('onclick','passIDB('+data[i][j]['id']+')');
                    imgB.setAttribute('src',data[i][j]['img']);
                    h3B.setAttribute('style',"text-align: center;");
                    h3B.innerHTML = data[i][j]['name'];
                    tdB.setAttribute('id','td');
                    pB.setAttribute('id', 'center');
                    
                    // Create
                    pB.appendChild(imgB);
                    aB.appendChild(pB);
                    aB.appendChild(h3B);
                    tdB.appendChild(aB);
                    trB.appendChild(tdB);
            }
        
            tableBandos.appendChild(trB);

        }
        
        // Create
        document.getElementById('auto').appendChild(h2Title);
        document.getElementById('auto').appendChild(br);
        document.getElementById('auto').appendChild(br);
        document.getElementById('auto').appendChild(tableBandos);
        document.getElementById('autoInd').appendChild(liInd);
    }
}
function passIDB(i){
    sessionStorage.setItem('idb',i);
    window.location.href = 'bandos.html';
}

function info(){
    
    dataPerson = [
        [
            {
                id:0,
                head :"Rei dos Piratas" ,
                img:"https://cdn.discordapp.com/attachments/704786714769490101/770360047217410068/unknown.png",
                name:"Piratas do Roger"
            },
        ],
        [
            {
                id:1,
                head :"Yonkous" ,
                img:"../../imgs/jolly/barba.png",
                name:"Piratas do Barba Branca"
            },
            {
                id:2,
                head :"Yonkous",
                img:"../../imgs/jolly/kaido.jpg",
                name:"Piratas das Feras"
            },
            {
                id:3,
                head : "Yonkous",
                img:"../../imgs/jolly/mom.jpg",
                name:"Piratas da Big Mom"
            },
            {
                id:4,
                head : "Yonkous",
                img:"../../imgs/jolly/shanks.jpg",
                name:"Piratas do Ruivo"
            },
            {
                id:5,
                head : "Yonkous",
                img:"../../imgs/jolly/barba negra.png",
                name:"Piratas do Barba negra"
            }
        ],
        [          
            {
                id:6,
                head : "Governo Mundial",
                img:"https://cdn.discordapp.com/attachments/704786714769490101/770695608843239444/unknown.png",
                name:"Marinha"
            }
        ]

    ]
    return dataPerson;
}

