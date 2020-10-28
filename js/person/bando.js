function main(){
    autoMusic();
    let getXMLFile=function(path,callback){
        let request = new XMLHttpRequest();
        request.open("GET",path);
        request.setRequestHeader("content-Type","text/xml");
        request.onreadystatechange=function(){
            if(request.readyState===4 && request.status=== 200){
                callback(request.responseXML);
            }
        };
        request.send();

    };

    getXMLFile("../../xml/bandos.xml", function(xml){
        //xmlfeeds = xml.getElementsByTagName("Feed");
        // feed.innerHTML= xmlfeeds[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
    
        var data = xml.getElementsByTagName("bando");
        
        var id = 2;
        var band = sessionStorage.getItem('idb');
        var cont = 0;
        var leng = ['his','coriosi','boss','comand','sub'];
        var lengH = ["Historia","Curiosidade","Líder","Comandantes","Subordinados"];
        var BossLen = ["Historia","Curiosidade","Poderes"];
        var auxBoss = ['historia','curio','power'];
        var auxBand = ['historiaB','curioB','powerB'];


        var auxComand = ['amou','imgsComand','nameComand','hisComand','curComand','powComand'];
        var auxSubs = ['amouGrup','imgsPerson','namePerson','hisPerson','curPerson','powPerson'];

        for (let x = 0; x < lengH.length; x++) {
            var aInd = document.createElement('a');
            var liInd = document.createElement('li');
            aInd.setAttribute('href', "#"+leng[x]);
            aInd.innerHTML = lengH[x];
            liInd.appendChild(aInd);
            document.getElementById('autoInd').appendChild(liInd);
        }

        for (let i = 0; i < data.length; i++) {
            if (band == data[i].getElementsByTagName("id")[0].childNodes[0].nodeValue){
                id = i;
                
            }
        }

        member = data[id].getElementsByTagName("tripu");
        var divTitle = document.createElement('div');
        var h1Title = document.createElement('h1');
        var imgT = document.createElement('img');
        var pT = document.createElement('p');

        h1Title.setAttribute('style',"text-align: center;");
        h1Title.innerHTML = data[id].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        imgT.setAttribute('src', data[id].getElementsByTagName("jolly")[0].childNodes[0].nodeValue);
        pT.setAttribute('id', 'center');
        
        pT.appendChild(imgT);
        divTitle.appendChild(pT);
        divTitle.appendChild(h1Title);
        document.getElementById('tit').appendChild(divTitle);
        
        for (let cont = 0; cont < lengH.length; cont++) {
            if (cont == 2) {
                var h2Title = document.createElement('h2');
                var br = document.createElement('br');
                var pB = document.createElement('p');
                var h3Name = document.createElement('h2');
                var imgB = document.createElement('img');
                var hr = document.createElement('hr');
                var person = member[0].getElementsByTagName("boss");

                h2Title.setAttribute('id',leng[cont]);
                h2Title.innerHTML = lengH[cont]; //Ver como fazer loop
                
                imgB.setAttribute('src', person[0].getElementsByTagName("img")[0].childNodes[0].nodeValue);
                pB.setAttribute('id', 'center');
                pB.appendChild(imgB);
                h3Name.setAttribute('style',"text-align: center;");
                h3Name.innerHTML = person[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;

                //h3Subs.setAttribute();

                document.getElementById('auto').appendChild(h2Title);
                document.getElementById('auto').appendChild(pB);
                document.getElementById('auto').appendChild(h3Name);
                document.getElementById('auto').appendChild(hr)
                for (let index = 0; index < BossLen.length; index++) {
                    var aux = person[0].getElementsByTagName(auxBoss[index]);
                    var h3Subs = document.createElement('h3');
                    h3Subs.innerHTML = BossLen[index];
                    document.getElementById('auto').appendChild(h3Subs);
                    for(let contArt = 0; contArt < aux[0].getElementsByTagName('text').length; contArt++){
                        var pSubs = document.createElement('p');
                        pSubs.innerHTML = aux[0].getElementsByTagName('text')[contArt].childNodes[0].nodeValue;
                        document.getElementById('auto').appendChild(pSubs);
                    }

                }
                
                document.getElementById('auto').appendChild(br);




            }
            
            else if (cont == 3) {
                var h2Title = document.createElement('h2');
                var br = document.createElement('br');
                var pCom = document.createElement('p');
                var h3Name = document.createElement('h2');
                var imgB = document.createElement('img');
                var person = member[0].getElementsByTagName("comands");
                var listPerson = person[0].getElementsByTagName("comand");
                var auxCom = person[0].getElementsByTagName("curio");

                h2Title.setAttribute('id',leng[cont]);
                h2Title.innerHTML = lengH[cont]; //Ver como fazer loop
                
                imgB.setAttribute('src', person[0].getElementsByTagName("img")[0].childNodes[0].nodeValue);
                pCom.setAttribute('id', 'center');
                pCom.appendChild(imgB);
                h3Name.setAttribute('style',"text-align: center;");
                h3Name.innerHTML = person[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;


                document.getElementById('auto').appendChild(h2Title);
                document.getElementById('auto').appendChild(pCom);
                document.getElementById('auto').appendChild(h3Name);
                for(let contArt = 0; contArt < auxCom[0].getElementsByTagName('text').length; contArt++){
                    var pSubs = document.createElement('p');
                    pSubs.innerHTML = auxCom[0].getElementsByTagName('text')[contArt].childNodes[0].nodeValue;
                    document.getElementById('auto').appendChild(pSubs);
                }

                for (let z = 0; z < listPerson.length;  z++) {
                    var h3Nam = document.createElement('h2');
                    var imgComan = document.createElement('img');
                    var pB = document.createElement('p');
                    var hr = document.createElement('hr');

                    h3Nam.innerHTML = listPerson[z].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                    imgComan.setAttribute('src', listPerson[z].getElementsByTagName("img")[0].childNodes[0].nodeValue);
                    pB.setAttribute('id', 'center');
                    pB.appendChild(imgComan);
                    

                    document.getElementById('auto').appendChild(pB);
                    document.getElementById('auto').appendChild(h3Nam);
                    document.getElementById('auto').appendChild(hr)

                    for (let index = 0; index < BossLen.length; index++) {
                        var h4Subs = document.createElement('h3');
                        var pSubs = document.createElement('p');
                        var aux = listPerson[z].getElementsByTagName(auxBoss[index]);
                        
                        h4Subs.innerHTML = BossLen[index];
                        document.getElementById('auto').appendChild(h4Subs);
                        // pSubs.innerHTML = listPerson[z].getElementsByTagName(auxBoss[index])[0].childNodes[0].nodeValue;
                        
                        for(let contArt = 0; contArt < aux[0].getElementsByTagName('text').length; contArt++){
                            var pSubs = document.createElement('p');
                            pSubs.innerHTML = aux[0].getElementsByTagName('text')[contArt].childNodes[0].nodeValue;
                            document.getElementById('auto').appendChild(pSubs);
                        }
                        // document.getElementById('auto').appendChild(pSubs);
        
                    }
                    document.getElementById('auto').appendChild(br);
                    
                }
                
                document.getElementById('auto').appendChild(br);
            }

            else if (cont == 4) {
                var h2Title = document.createElement('h2');
                var br = document.createElement('br');
                var pIni = document.createElement('p');
                var h3subti = document.createElement('h2');
                var person = member[0].getElementsByTagName("subs");
                var grup = person[0].getElementsByTagName("grup");
                var auxGrup = person[0].getElementsByTagName("curio");

                h2Title.setAttribute('id',leng[cont]);
                h2Title.innerHTML = lengH[cont]; //Ver como fazer loop
                document.getElementById('auto').appendChild(h2Title);

                for(let contArt = 0; contArt < auxGrup[0].getElementsByTagName('text').length; contArt++){
                    var pSubs = document.createElement('p');
                    pSubs.innerHTML = auxGrup[0].getElementsByTagName('text')[contArt].childNodes[0].nodeValue;
                    document.getElementById('auto').appendChild(pSubs);
                }
                
                // pIni.innerHTML = person[0].getElementsByTagName("curio")[0].childNodes[0].nodeValue;
                h3subti.innerHTML = 'Sub-Grupos';
                
                // document.getElementById('auto').appendChild(h2Title);
                // document.getElementById('auto').appendChild(pIni);
                document.getElementById('auto').appendChild(h3subti);
                for (let w = 0; w < grup.length;  w++) {
                    var h3Nam = document.createElement('h3');
                    var imgSub = document.createElement('img');
                    var pB = document.createElement('p');
                    var pSu = grup[w].getElementsByTagName("curio");
                    var hr = document.createElement('hr');
                    var h4Men = document.createElement('h4');
                    var infs = grup[w].getElementsByTagName("membro");
                    // console.log(infs.length);

                    h3Nam.innerHTML = grup[w].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                    imgSub.setAttribute('src', grup[w].getElementsByTagName("img")[0].childNodes[0].nodeValue);
                    pB.setAttribute('id', 'center');
                    pB.appendChild(imgSub);
                    h4Men.innerHTML = 'Membros';

                    document.getElementById('auto').appendChild(pB);
                    document.getElementById('auto').appendChild(h3Nam);
                    document.getElementById('auto').appendChild(hr);
                    for(let contArt = 0; contArt < pSu[0].getElementsByTagName('text').length; contArt++){
                        var pSubs = document.createElement('p');
                        pSubs.innerHTML = pSu[0].getElementsByTagName('text')[contArt].childNodes[0].nodeValue;
                        document.getElementById('auto').appendChild(pSubs);
                    }

                    if (infs.length != 0) {
                        document.getElementById('auto').appendChild(h4Men);
                    }

                    for (let indx = 0; indx < infs.length; indx++) {
                        var h3subM = document.createElement('h3');
                        var imgMem = document.createElement('img');
                        var p = document.createElement('p');
                        var phis = document.createElement('p');
                        var pSuMe = document.createElement('p');
                        var pSuPod = document.createElement('p');
                        var hr = document.createElement('hr');
                        //var h4sub = document.createElement('h4');
                        var h4cur = document.createElement('h4');
                        var h4po = document.createElement('h4');
                        
                        //h4Subs.setAttribute('style',"text-align: center;");
                        h3subM.innerHTML = infs[indx].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                        imgMem.setAttribute('src', infs[indx].getElementsByTagName("img")[0].childNodes[0].nodeValue);
                        p.setAttribute('id', 'center');
                        p.appendChild(imgMem);
                        document.getElementById('auto').appendChild(p);
                        document.getElementById('auto').appendChild(h3subM);
                        document.getElementById('auto').appendChild(hr);
                        
                        for (let index = 0; index < BossLen.length; index++) {
                            var h4Subs = document.createElement('h4');
                            var pSubs = document.createElement('p');
                            var aux = infs[indx].getElementsByTagName(auxBoss[index]);
                            
                            h4Subs.innerHTML = BossLen[index];
                            document.getElementById('auto').appendChild(h4Subs);
                            // pSubs.innerHTML = listPerson[z].getElementsByTagName(auxBoss[index])[0].childNodes[0].nodeValue;
                            
                            for(let contArt = 0; contArt < aux[0].getElementsByTagName('text').length; contArt++){
                                var pSubs = document.createElement('p');
                                pSubs.innerHTML = aux[0].getElementsByTagName('text')[contArt].childNodes[0].nodeValue;
                                document.getElementById('auto').appendChild(pSubs);
                            }
            
                        }
                        // h4sub.innerHTML = 'Historia';
                        // document.getElementById('auto').appendChild(p);
                        // document.getElementById('auto').appendChild(h3subM);
                        // document.getElementById('auto').appendChild(hr);
                        // phis.innerHTML = infs[indx].getElementsByTagName("historia")[0].childNodes[0].nodeValue;
                        // document.getElementById('auto').appendChild(h4sub);
                        // document.getElementById('auto').appendChild(phis);
                        // h4cur.innerHTML = 'Curiosidades';
                        // pSuMe.innerHTML = infs[indx].getElementsByTagName("curio")[0].childNodes[0].nodeValue;
                        // document.getElementById('auto').appendChild(h4cur);
                        // document.getElementById('auto').appendChild(pSuMe);
                        // h4po.innerHTML = 'Poderes';
                        // pSuPod.innerHTML = infs[indx].getElementsByTagName("power")[0].childNodes[0].nodeValue;
                        // document.getElementById('auto').appendChild(h4po);
                        // document.getElementById('auto').appendChild(pSuPod);

        
                    }
                    document.getElementById('auto').appendChild(br);
                    
                }
                
                document.getElementById('auto').appendChild(br);
            }

            else{
                var h2Title = document.createElement('h2');
                var br = document.createElement('br');
                // var pB = document.createElement('p');
                var aux = data[id].getElementsByTagName(auxBand[cont]);
                
                console.log(aux);
                

                h2Title.setAttribute('id',leng[cont]);
                h2Title.innerHTML = lengH[cont]; //Ver como fazer loop
                document.getElementById('auto').appendChild(h2Title);
                for(let contArt = 0; contArt < aux[0].getElementsByTagName('text').length; contArt++){
                    var pSubs = document.createElement('p');
                    pSubs.innerHTML = aux[0].getElementsByTagName('text')[contArt].childNodes[0].nodeValue;
                    document.getElementById('auto').appendChild(pSubs);
                }
                document.getElementById('auto').appendChild(br);
            }

        }
    })

}

// function info(){
    
//     dataPerson = [
//         [
//             {
//                 id:0,
//                 head :"Rei dos Piratas" ,
//                 img:"../../imgs/jolly/barba.png",
//                 name:"Piratas do Roger",
//                 his:"",
//                 coriosi: "",
//                 boss: "",
//                 comand: "",
//                 sub: ""

//             },
//         ],
//         [
//             {
//                 id:1,
//                 head :"Yonkous" ,
//                 img:"../../imgs/jolly/barba.png",
//                 name:"Piratas do Barba Branca",
//                 his:"",
//                 coriosi: "",
//                 boss: "",
//                 comand: "",
//                 sub: ""
//             },
//             {
//                 id:2,
//                 head :"Yonkous",
//                 img:"../../imgs/jolly/kaido.jpg",
//                 name:"Piratas das Feras",
//                 his:"Os Piratas das Feras são uma tripulação de piratas extremamente infame e poderosa liderada por Kaido das Cem Feras um dos Yonkous. Eles estão sediados no país de Wano, especificamente com a sede na ilha de Onigashima. Nas últimas duas décadas, a tripulação consolidou seu poder em Wano, que ocupou por meio de uma aliança com o shogun do país, Kurozumi Orochi. Recentemente, os Beasts Pirates entraram em uma nova aliança com os Big Mom Pirates, outra tripulação do Imperador, para planos de conquistar o mundo; Esses planos, de acordo com o 'Novo Projeto Onigashima' de Kaido, eventualmente viram Orochi ser considerado desnecessário e traiçoeiramente assassinado por Kaido durante o último Festival do Fogo. Devido às suas ações e funções, eles são os principais antagonistas do Arco Zou e do Arco do País Wano, e um dos grupos antagonistas centrais da Saga dos Quatro Imperadores.",
//                 coriosi: "O bando das feras foi desenvolvido com uma tematica animalisca tendo como por unanimidade todos os integrantes com akumas no mi do estilo zoans ou smiles",
//                 boss: "Kaidou das Feras",
//                 comand: "As Calamidades",
//                 sub: "Os Piratas das Feras seguem um sistema de meritocracia baseada na força, em que os membros da tripulação terão uma classificação mais elevada quanto maior for a sua capacidade de luta. É possível, até encorajado, entre eles desafiar aqueles que ocupam um cargo mais alto do que o seu, a fim de tirá-lo deles; isso é mostrado com o Tobiroppo, que, com a aprovação de Kaido, pode lutar contra um Grande Astro atuante e, em caso de vitória, tomar seu lugar. O inverso também é verdadeiro, onde especialmente os escalões superiores podem procurar eliminar aqueles classificados abaixo deles se assim o desejarem, como mostrado com Queen expressando sua intenção de matar um dos Tobiroppo e criar um assento aberto (embora isto acabou por ser devido à traição de Drake)."
//             },
//             {
//                 id:3,
//                 head : "Yonkous",
//                 img:"../../imgs/jolly/mom.jpg",
//                 name:"Piratas da Big Mom",
//                 his:"",
//                 coriosi: "",
//                 boss: "",
//                 comand: "",
//                 sub: ""
//             },
//             {
//                 id:4,
//                 head : "Yonkous",
//                 img:"../../imgs/jolly/shanks.jpg",
//                 name:"Piratas do Ruivo",
//                 his:"",
//                 coriosi: "",
//                 boss: "",
//                 comand: "",
//                 sub: ""
//             },
//             {
//                 id:5,
//                 head : "Yonkous",
//                 img:"../../imgs/jolly/barba negra.png",
//                 name:"Piratas do Barba negra",
//                 his:"",
//                 coriosi: "",
//                 boss: "",
//                 comand: "",
//                 sub: ""
//             }
//         ],
//         [          
//             {
//                 id:6,
//                 head : "Shichibukais",
//                 img:"../../imgs/jolly/shanks.jpg",
//                 name:"Piratas do Buggy",
//                 his:"",
//                 coriosi: "",
//                 boss: "",
//                 comand: "",
//                 sub: ""
//             }
//         ]

//     ]
//     return dataPerson;
// }

// function infoBoss(){
    
//     dataPerson = [
//         [
//             {
//                 id:0,
//                 imgBoss: "",
//                 nameB: "",
//                 bossHis: "",
//                 curosi: "",
//                 power: ""

//             },
//         ],
//         [
//             {
//                 id:1,
//                 imgBoss: "",
//                 nameB: "",
//                 bossHis: "",
//                 curosi: "",
//                 power: ""
//             },
//             {
//                 id:2,
//                 imgBoss: "https://vignette.wikia.nocookie.net/onepiece/images/2/29/Kaido_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20191222142606&path-prefix=pt",
//                 nameB: "Kaidou das Feras",
//                 bossHis: "Kaido das Feras, também conhecido como a 'Criatura Mais Forte do Mundo', é o Governador-Geral dos Piratas das Feras e um dos Yonkou. Ele e sua tripulação atualmente ocupam o País de Wano em aliança com seu shogun, Kurozumi Orochi, e mais recentemente firmaram uma aliança com a companheira Yonkou Big Mom e sua tripulação, os Piratas da Big Mom. Décadas atrás, antes da formação de sua própria tripulação, Kaido fazia parte dos lendários Piratas Rocks como um aprendiz. Kaido foi referido pela primeira vez por Monkey D. Garp no Arco Pós-Enies Lobby e então mencionado diretamente por Gecko Moria no Arco Thriller Bark, com seu título de Yonkou sendo revelado logo após os Piratas do Chapéu de Palha derrotarem Moria. Assim, Kaido é o terceiro imperador a ser mencionado pelo nome e o último a estrear. Devido a suas ações e seu papel, ele é o principal antagonista do Arco País de Wano e um dos antagonistas centrais da Saga Yonkou.",
//                 curosi: "Kaido é um guerreiro implacável, agressivo e confiante que nunca perde uma oportunidade de ganhar uma vantagem na guerra, como evidenciado por seu plano para atacar Barba Branca durante a tentativa deste último de salvar Portgas D. Ace da execução. Kaido parece abrigar um senso geral de despreocupação para a maioria das coisas, incluindo a própria natureza do mundo e a vida de si mesmo e de seus subordinados. Ele aparentemente deseja excitação e caos, pois está preparado para iniciar a maior guerra do mundo porque achava que era muito mundano. Essa imprudência, juntamente com sua aparente incapacidade de morrer, fez com que Kaido tentasse se suicidar como seu hobby.",
//                 power: "Muito pouco se sabem da fruta/poder do kaidou"
//             },
//             {
//                 id:3,
//                 imgBoss: "",
//                 nameB: "",
//                 bossHis: "",
//                 curosi: "",
//                 power: ""
//             },
//             {
//                 id:4,
//                 imgBoss: "",
//                 nameB: "",
//                 bossHis: "",
//                 curosi: "",
//                 power: ""
//             },
//             {
//                 id:5,
//                 imgBoss: "",
//                 nameB: "",
//                 bossHis: "",
//                 curosi: "",
//                 power: ""
//             }
//         ],
//         [          
//             {
//                 id:6,
//                 imgBoss: "",
//                 nameB: "",
//                 bossHis: "",
//                 curosi: "",
//                 power: ""
//             }
//         ]

//     ]
//     return dataPerson;
// }

// function infoComan(){
    
//     dataPerson = [
//         [
//             {
//                 id:0,
//                 amou: "",
//                 imgsComand0: "",
//                 nameComand0: "",
//                 hisComand0: "",
//                 curComand0: "",
//                 powComand0: ""

//             },
//         ],
//         [
//             {
//                 id:1,
//                 amou: "",
//                 imgsComand0: "",
//                 nameComand0: "",
//                 hisComand0: "",
//                 curComand0: "",
//                 powComand0: ""
//             },
//             {
//                 id:2,
//                 amou: "3",
//                 imgsComand0: "https://vignette.wikia.nocookie.net/onepiece/images/8/8f/King_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200121133933&path-prefix=pt",
//                 nameComand0: "King do Incêndio",
//                 hisComand0: "King do Incêndio é um Grande Astro dos Piratas das Feras, e um dos três homens considerados como braço direito de Kaido, as Calamidades.",
//                 curComand0: "King é um homem extremamente alto e largo, aparentando ser mais alto que Jack, que é bem grande",
//                 powComand0: "Ryu Ryu no Mi, Modelo: Pteranodonte",
//                 imgsComand1: "https://vignette.wikia.nocookie.net/onepiece/images/5/52/Queen_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200121133538&path-prefix=pt",
//                 nameComand1: "Queen da Praga",
//                 hisComand1: "Queen das Pragas é um Grande Astro dos Piratas das Feras e um dos três homens considerados como braço direito de Kaido, as Calamidades.",
//                 curComand1: "Como King, Queen é extremamente rude e crítico com seus colegas de tripulação, já que ele foi rápido em ridicularizar seus colegas Grandes Astros e chamá-los de nomes. Ele e King parecem ter um senso de desdém mútuo por Jack, já que eles são rápidos em se juntar a ele quando estão na mesma sala. King insinua que Queen está encarregado de 'quebrar as vontades' de indivíduos fortes que Kaido deseja que se juntem a sua tripulação.",
//                 powComand1: "Ryu Ryu no Mi, Modelo: Braquiossauro",
//                 imgsComand2: "https://vignette.wikia.nocookie.net/onepiece/images/3/3f/Jack_Anime_Infobox.png/revision/latest?cb=20161122230413&path-prefix=pt",
//                 nameComand2: "Jack da Seca",
//                 hisComand2: "Jack da Seca é um Grande Astro dos Piratas das Feras, um dos três confidentes mais próximos de Kaido, as Calamidades, e o capitão do Mammoth. Ele também é atualmente considerado o governante da região de Kuri no País de Wano. Ele também é um Homem-Peixe, sendo uma garoupa-gigante.",
//                 curComand2: "Jack parece ser muito teimoso e irresponsável, demostrado quando ele toma a decisão de atacar quatro navios da Marinha de uma vez transportando marinheiros poderosos para resgatar Doflamingo, mostrando também grande confiança em seu poder. Ele tem se mostrado extremamente impaciente, ficando com raiva quando alguém não cumpri as sua ordens imediatamente. Sua rejeição da oferta da Inuarashi mostra que ele também se recusa a comprometer-se com os outros.",
//                 powComand2: "Zou Zou no Mi, Modelo: Mamute"
//             },
//             {
//                 id:3,
//                 amou: "",
//                 imgsComand0: "",
//                 nameComand0: "",
//                 hisComand0: "",
//                 curComand0: "",
//                 powComand0: ""
//             },
//             {
//                 id:4,
//                 amou: "",
//                 imgsComand0: "",
//                 nameComand0: "",
//                 hisComand0: "",
//                 curComand0: "",
//                 powComand0: ""
//             },
//             {
//                 id:5,
//                 amou: "",
//                 imgsComand0: "",
//                 nameComand0: "",
//                 hisComand0: "",
//                 curComand0: "",
//                 powComand0: ""
//             }
//         ],
//         [          
//             {
//                 id:6,
//                 amou: "",
//                 imgsComand0: "",
//                 nameComand0: "",
//                 hisComand0: "",
//                 curComand0: "",
//                 powComand0: ""
//             }
//         ]

//     ]
//     return dataPerson;
// }

// function infoSub(){
    
//     dataPerson = [
//         [
//             {
//                 id:0,
//                 amou: "",
//                 imgGrup0: "",
//                 subGrup0: "",
//                 curGrup0: "",
//                 amouGrup0: "",
//                 imgsPerson0: "",
//                 namePerson0: "",
//                 hisPerson0: "",
//                 curPerson0: "",
//                 powPerson0: ""

//             },
//         ],
//         [
//             {
//                 id:1,
//                 amou: "",
//                 imgGrup0: "",
//                 subGrup0: "",
//                 curGrup0: "",
//                 amouGrup0: "",
//                 imgsPerson0: "",
//                 namePerson0: "",
//                 hisPerson0: "",
//                 curPerson0: "",
//                 powPerson0: ""
//             },
//             {
//                 id:2,
//                 amou: "6",
//                 imgGrup0: "https://cdn.discordapp.com/attachments/704786714769490101/769616509025648690/unknown.png",
//                 subGrup0: "Tobiroppo",
//                 curGrup0: "Os Tobiroppo (飛び六胞 Tobi Roppō, significa literalmente 'Seis Companheiros Voadores'; Versão em inglês: Tobi Roppo) são os mais fortes entre os Shinuchi. Eles se destacam significativamente na tripulação, com o próprio Kaido os tendo em alta conta. Atualmente, com X Drake renegado, o grupo consiste de apenas cinco: Page One, Ulti, Who's Who, Black Maria e Sasaki. Diretamente abaixo dos Grandes Astros na hierarquia, os Tobiroppo foram especificado como o próximo na fila para se tornar um Grande Astro caso um atual morra, com alguns deles (expressamente Who's Who e Sasaki) desejando matar um Grande Astro eles próprios e usurpar seu posto. Drake, Who's Who e Sasaki eram todos anteriormente ativos como capitães de sua própria tripulação, com Drake, ao invés de leal à tripulação, tendo sido um espião da Marinha, algo eventualmente descoberto e levando Drake a ser declarado inimigo",
//                 amouGrup0: "5",
//                 imgsPerson00: "https://vignette.wikia.nocookie.net/onepiece/images/6/6a/Page_One_Manga_Infobox.png/revision/latest?cb=20200617221208&path-prefix=pt",
//                 namePerson00: "Page One",
//                 hisPerson00: "Page One é um Astro Principal e um dos Tobiroppo dos Piratas das Feras.",
//                 curPerson00: "Page One acredita que qualquer pessoa que se rebele contra a administração de Wano deve ser feita de exemplo, e portanto, não tem vergonha sobre um pirata poderoso como ele ser enviado para lidar com tais situações. Como resultado, ele é violento em suas missões, destruindo vários estandes de soba enquanto procurava por Sanji, e não tendo remorso pelos donos dos estandes que ele erroneamente atacou, vendo suas ações como necessárias para coagir Sanji a se revelar.",
//                 powPerson00: "Page One comeu a Ryu Ryu no Mi, Modelo: Espinossauro, uma Akuma no Mi do tipo Zoan Ancestral que lhe dá a habilidade de se transformar em um espinossauro. Como espinossauro, ele possui uma força tremenda, principalmente nas mandíbulas e na cauda, que são capazes de destruir edifícios com facilidade.[6] Em sua forma híbrida, seus braços se tornam longos o suficiente para serem usados em combate e também possuem grande força, sendo capazes de superar um chute de Sanji aprimorado pelo Raid Suit, e enviar Sanji voando por vários edifícios.",
//                 imgsPerson01: "https://vignette.wikia.nocookie.net/onepiece/images/0/0a/Ulti_Manga_Infobox.png/revision/latest?cb=20200613224353&path-prefix=pt",
//                 namePerson01: "Ulti",
//                 hisPerson01: "Ulti é um dos Tobiroppo, os seis Astros Principais mais fortes dos Piratas das Feras",
//                 curPerson01: "Ulti é uma jovem ousada, rude e de temperamento curto, que não recua em uma briga verbal e ameaça regularmente com violência as pessoas que a incomodam. Um tanto inconstante, ela é vista agindo de forma amigável e tentando parecer refinada e madura, e logo depois é vista gritando enquanto age de forma perigosamente brusca. Nem mesmo pessoas como Queen ou Kaido, ambas seus superiores diretos (sendo o último alguém que a maioria dos membros da tripulação parece temer), estão a salvo de seu vitríolo, implicando que ela não tem medo deles, algo que choca até mesmo seus companheiros Tobiroppo. Ela também não tem nenhum problema em agir de forma altamente casual em relação ao Kaido, chegando a demonstrar, mesmo de maneira breve, uma grande alegria durante sua reunião.",
//                 powPerson01: "Ulti comeu a Ryu Ryu no Mi, Modelo: Paquicefalossauro, uma Akuma no Mi do tipo Zoan Ancestral que lhe dá a habilidade de se transformar em um paquicefalossauro. Com essa fruta, a força física de Ulti é aumentada ainda mais, ao ponto dela conseguir agarrar e imobilizar Luffy rapidamente, apesar dele ser imensamente forte. A parte frontal do seu crânio também é bastante aprimorada, aumentando tremendamente o poder de suas cabeçadas, embora ainda não se tenha visto o quão poderosas elas ficam. Os companheiros de Ulti consideram sua transformação um exagero contra a maioria dos oponentes, e observam que isso provavelmente causaria um grande estrago à mansão de Kaido, já que ela a faz contra oponentes que leva a sério",
//                 imgsPerson02: "https://vignette.wikia.nocookie.net/onepiece/images/c/ca/Who%27s_Who_Manga_Infobox.png/revision/latest?cb=20200613224354&path-prefix=pt",
//                 namePerson02: "Who's Who",
//                 hisPerson02: "Who's Who é um Astro Principal e um dos Tobiroppo dos Piratas das Feras. Antes de se juntar aos Piratas das Feras, ele era o capitão de sua própria tripulação",
//                 curPerson02: "Who's Who parece ser um homem sem rodeios que se irrita facilmente, em particular com as brigas de Ulti e Page One. Segundo King, Who's Who pretende se tornar um dos Astros Principais dos Piratas das Feras, e por isso se recusa a responder aos atuais, vendo-os como obstáculos e justificando seu próprio comportamento insolente através do sistema hierárquico da tripulação. Essa insubordinação é ainda mais evidenciada pelo fato de que, ao contrário da maioria de seus companheiros de tripulação, Who's Who se refere ao Queen e King sem qualquer tipo de honorífico, denotando um senso de desrespeito à sua autoridade (particularmente Queen, cuja morte é algo que Who's Who contemplou algumas vezes). Ele é confiante em sua força, sorrindo para a ideia de possivelmente ocupar um lugar nos Grandes Astros quando lhe foi dada uma oportunidade.",
//                 powPerson02: "Who's Who carrega uma katana em seu quadril direito, deixando-a descansar ao seu lado quando sentado.[2] Não se sabe o quão habilidoso ele é com ela.",
//                 imgsPerson03: "https://vignette.wikia.nocookie.net/onepiece/images/8/87/Black_Maria_Manga_Infobox.png/revision/latest?cb=20200613224352&path-prefix=pt",
//                 namePerson03: "Black Maria",
//                 hisPerson03: "Black Maria é uma Astro Principal e um dos Tobiroppo dos Piratas das Feras. Ela é dona de seu próprio bordel em Onigashima, perto da mansão de Kaido.",
//                 curPerson03: "Black Maria parece ter uma personalidade flertadora, pois expressou timidamente sua aprovação na atitude de temperamento curto de Ulti, e escolheu ficar com Kaido em vez de completar uma missão oficial do próprio capitão. No entanto, ela e os outros membros do Tobiroppo ficaram sérios e em choque quando Ulti falou rudemente sobre Kaido.",
//                 powPerson03: "Embora as habilidades de combate de Black Maria ainda não tenham sido testemunhadas, como uma das seis Astros Principais mais fortes, pode-se assumir que ela é muito poderosa, sendo potencialmente capaz de desafiar um dos Grandes Astros por sua posição",
//                 imgsPerson04: "https://vignette.wikia.nocookie.net/onepiece/images/9/9d/Sasaki_Manga_Infobox.png/revision/latest?cb=20200616235647&path-prefix=pt",
//                 namePerson04: "Sasaki",
//                 hisPerson04: "Sasaki é um Astro Principal e um dos Tobiroppo dos Piratas das Feras. Antes de se juntar aos Piratas das Feras, ele era o capitão de sua própria tripulação.",
//                 curPerson04: "Sasaki parece ser frio, insubordinado e ambicioso. Segundo King, Sasaki pretende se tornar um dos Grandes Astros dos Piratas das Feras, e por esta razão, ele se recusa a responder aos atuais, ignorando qualquer tentativa de convocação a menos que o nome de Kaido esteja associado. Ele também vê seus companheiros Tobiroppo com um olhar competitivo, considerando-os 'concorrentes' em um certo ponto e desestimulando de forma zombeteira tanto X Drake quanto Page One de buscar o avanço na tripulação, chamando este último de peso morto.",
//                 powPerson04: "Sasaki carrega o que parece ser uma katana com uma borla decorando o cabo em seu quadril esquerdo. Não se sabe o quão habilidoso ele é com ela.",
//                 //
//                 //------Shinuchi----//
//                 //
//                 imgGrup1: "https://cdn.discordapp.com/attachments/704786714769490101/769611527161380894/unknown.png",
//                 subGrup1: "Shinuchi",
//                 curGrup1: "Os Shinuchi (真打ち Shin'uchi, Versão em inglês: Headliners/Astros Principais) são os oficiais de segundo grau da tripulação - a maioria dos quais são Gifters de elite - que são responsáveis por liderar os Waiters, Pleasures e Gifters inferiores.Pessoas poderosas que se juntam à tripulação podem atingir esse nível em um curto espaço de tempo, como Hawkins, e X Drake foi até capaz de se tornar um Tobiroppo. Isso também mostra que ter os poderes de uma fruta SMILE não é um pré-requisito para a posição. Além dos Tobiroppo, a força dos Shinichi parece variar de indivíduo para indivíduo e depende de contra quem eles estão lutando. Por exemplo, Sheepshead foi facilmente defendido por Brook e derrubado por um único ataque de Sanji, Holdem foi derrotado com um golpe de Luffy, e Dobon foi facilmente derrotado por Eustass Kid e Luffy  quando ambos estavam algemados com Kairoseki. Hawkins, por outro lado, se manteve firme contra outros da Pior Geração, ameaçando facilmente Roronoa Zoro e Luffy simultaneamente e colidindo com Trafalgar Law",
//                 amouGrup1: "3",
//                 imgsPerson10: "https://vignette.wikia.nocookie.net/onepiece/images/4/40/Babanuki_Manga_Infobox.png/revision/latest?cb=20190718151535&path-prefix=pt",
//                 namePerson10: "Babanuki",
//                 hisPerson10: "Babanuki é um Astro Principal dos Piratas das Feras que atua como diretor da Mina dos Prisioneiros na região de Udon no País de Wano.",
//                 curPerson10: "Babanuki é um homem extremamente grande e musculoso, com longos cabelos escuros e uma grande barba. Como muitos outros usuários de SMILE, ele tem dois chifres no alto da cabeç",
//                 powPerson10: "SMILE do Elefante",
//                 imgsPerson11: "https://vignette.wikia.nocookie.net/onepiece/images/6/6d/Basil_Hawkins_Manga_Post_Timeskip_Infobox.png/revision/latest?cb=20190428140903&path-prefix=pt",
//                 namePerson11: "Basil Hawkins",
//                 hisPerson11: "Basil Hawkins é um infame pirata do North Blue conhecido como 'O Mago', e o capitão dos Piratas Hawkins. Ele é um dos doze piratas que são referidos como a 'Pior Geração'. Sua antiga recompensa conhecida era de 249,000,000, mas depois do timeskip, foi elevada a 320,000,000. Depois de encontrar Kaido, ele se juntou ao Piratas das Feras e se tornou um dos Astros Principais da tripulação",
//                 curPerson11: "Hawkins se retrata de maneira nobre e enigmática. Ele quase sempre permanece completamente calmo independentemente da situação, não mostrando nenhuma resposta emocional a eventos que seriam considerados ultrajantes para a maioria das pessoas",
//                 powPerson11: "Hawkins comeu a Wara Wara no Mi, uma Akuma no Mi do tipo Paramecia que lhe permite criar e manipular palha. Ele pode se cobrir de palha e fazer personagens de palha espantosos para ajudar em sua ofensiva, com essas criações ganhando armas baseadas em pregos. Hawkins é mostrado usando um baralho de cartas de tarô. Ele originalmente usou cartas azuis com uma borda cinza escuro e uma estrela amarela de quatro pontas no meio sobre uma explosão azul escura. Após o timeskip, suas cartas são vermelhas com uma borda amarela e uma estrela vermelha escura sobre uma explosão preta. No anime, ele voltou a usar cartões azuis durante o Arco País de Wano", 
//                 imgsPerson12: "https://cdn.discordapp.com/attachments/704786714769490101/769613752873910323/unknown.png",
//                 namePerson12: "Speed",
//                 hisPerson12: "Speed é um Astro Principal dos Piratas das Feras, e cuida da Cidade Bakura. No entanto, ela atualmente é subordinada a Tama, devido aos poderes de sua Akuma no Mi.",
//                 curPerson12: "Foi a primeiro(a) usuario de SMILE a sucumbir aos poderes da Tama",
//                 powPerson12: "SMILE do Cavalo", 
//                 //
//                 //------Gifters----//
//                 //
//                 imgGrup2: "https://cdn.discordapp.com/attachments/704786714769490101/769616401345282048/unknown.png",
//                 subGrup2: "Gifters",
//                 curGrup2: "Os Gifters (ギフターズ Gifutāzu) são a infantaria de elite da tripulação, composta por quase 500 Usuários de Zoan Artificial. Tendo comido SMILEs, eles têm habilidades e atributos do tipo Zoan. Apenas 10% das pessoas que comeram SMILEs ganham poderes e são, portanto, consideradas 'gifted/dotadas' (daí o seu nome). Os ditos poderes do tipo Zoan permitem que seus portadores transformem partes de seus corpos, por ex. suas cabeças ou membros, em partes do corpo animal não correspondentes. Alguns Gifters têm atributos animais permanentes, em alguns casos assumindo a forma de apêndices extras (até mesmo cabeças de animais sencientes), e podem ganhar certas capacidades corporais associadas ao animal em questão (por exemplo, sentidos aprimorados). O quão poderosa uma dada transformação acaba sendo é considerada uma aposta, e apenas aqueles com domínio avançado de sua habilidade são capazes de desativar sua transformação à vontade (embora isso pareça raro). Na tripulação, os Gifters parecem seguir codinomes correspondentes ao seu poder animal, em vez de seus nomes reais, e têm pares de chifres pretos em suas cabeças",
//                 amouGrup2: "0",
//                 imgsPerson2: "",
//                 namePerson2: "",
//                 hisPerson2: "",
//                 curPerson2: "",
//                 powPerson2: "",
//                 //
//                 //-------Numbers----//
//                 //
//                 imgGrup3: "https://cdn.discordapp.com/attachments/704786714769490101/769616251995291668/unknown.png",
//                 subGrup3: "Numbers",
//                 curGrup3: "Os Numbers (ナンバーズ Nanbāzu) são um grupo de dez ex-sujeitos da ciência que passaram por experimentos de Gigantificação em Punk Hazard a fim de recriar a raça de gigantes antigos, mas foram considerados fracassados por algum motivo. Eles também foram mencionados como tendo sido comprados por Kaido em vez de se juntarem a ele, tornando-os semelhantes a armas vivas.",
//                 amouGrup3: "0",
//                 imgsPerson3: "",
//                 namePerson3: "",
//                 hisPerson3: "",
//                 curPerson3: "",
//                 powPerson3: "",
//                 //
//                 //------Pleasures----//
//                 //
//                 imgGrup4: "https://cdn.discordapp.com/attachments/704786714769490101/769616323251666995/unknown.png",
//                 subGrup4: "Pleasures",
//                 curGrup4: "Os Pleasures (プレジャーズ Purejāzu) são os soldados de infantaria de nível médio da tripulação, apenas acima dos Waiters. Eles são os muitos infelizes que não conseguiram obter qualquer característica animal após comer uma fruta SMILE, estando nos 90% que comeram frutas insatisfatórias (e como para cada Gifter há nove Pleasures, pode-se inferir que o número de Pleasures está em torno de 4,500, embora qualquer número específico não tenha sido mencionado ainda).",
//                 amouGrup4: "0",
//                 imgsPerson4: "",
//                 namePerson4: "",
//                 hisPerson4: "",
//                 curPerson4: "",
//                 powPerson4: "",
//                 //
//                 //------------------Tobiropo----//
//                 //
//                 imgGrup5: "https://cdn.discordapp.com/attachments/704786714769490101/769616205974732830/unknown.png",
//                 subGrup5: "Waiters",
//                 curGrup5: "Os Waiters (ウェイターズ Weitāzu) são os soldados de infantaria de baixo nível da tripulação que ainda não comeram os SMILEs, ainda aguardando sua chance de ganhar poderes de animais (daí seu nome). Seu papel ou deveres específicos na tripulação, ao contrário dos Pleasures ou Gifters, são desconhecidos.",
//                 amouGrup5: "0",
//                 imgsPerson5: "",
//                 namePerson5: "",
//                 hisPerson5: "",
//                 curPerson5: "",
//                 powPerson5: ""
//             },
//             {
//                 id:3,
//                 amou: "",
//                 imgGrup0: "",
//                 subGrup0: "",
//                 curGrup0: "",
//                 amouGrup0: "",
//                 imgsPerson0: "",
//                 namePerson0: "",
//                 hisPerson0: "",
//                 curPerson0: "",
//                 powPerson0: ""
//             },
//             {
//                 id:4,
//                 amou: "",
//                 imgGrup0: "",
//                 subGrup0: "",
//                 curGrup0: "",
//                 amouGrup0: "",
//                 imgsPerson0: "",
//                 namePerson0: "",
//                 hisPerson0: "",
//                 curPerson0: "",
//                 powPerson0: ""
//             },
//             {
//                 id:5,
//                 amou: "",
//                 imgGrup0: "",
//                 subGrup0: "",
//                 curGrup0: "",
//                 amouGrup0: "",
//                 imgsPerson0: "",
//                 namePerson0: "",
//                 hisPerson0: "",
//                 curPerson0: "",
//                 powPerson0: ""
//             }
//         ],
//         [          
//             {
//                 id:6,
//                 amou: "",
//                 imgGrup0: "",
//                 subGrup0: "",
//                 curGrup0: "",
//                 amouGrup0: "",
//                 imgsPerson0: "",
//                 namePerson0: "",
//                 hisPerson0: "",
//                 curPerson0: "",
//                 powPerson0: ""
//             }
//         ]

//     ]
//     return dataPerson;
// }