function main(){
    // >>>>> Create Var <<<<<<
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
    getXMLFile("../../xml/news.xml", function(xml){
        autoMusic();
        data = xml.getElementsByTagName("news");
        var news = sessionStorage.getItem('id');
        var id;
        var divTitle = document.createElement('div');
        var divAux = document.createElement('div');
        var h1Title = document.createElement('h1');
        var h3Title = document.createElement('h3');
        var timeTitle = document.createElement('h5');
        var logo = document.createElement('img');
        var span = document.createElement('span');
        var autor = document.createElement('h5');
        var div = document.createElement('div');

        var hr = document.createElement('hr');
        var br = document.createElement('br');
        for (let j = 0; j < data.length; j++) {
            if (news == data[j].getElementsByTagName("id")[0].childNodes[0].nodeValue){
                id = j;
                
            }
            
        }

        divTitle.setAttribute('id','title');
        divAux.setAttribute('id','titleD');
        h1Title.innerHTML = data[id].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        h3Title.innerHTML = data[id].getElementsByTagName("subtitle")[0].childNodes[0].nodeValue;
        timeTitle.innerHTML = data[id].getElementsByTagName("time")[0].childNodes[0].nodeValue;
        logo.setAttribute('src',data[id].getElementsByTagName("logo")[0].childNodes[0].nodeValue);
        logo.setAttribute('style','width: 25%;');
        timeTitle.setAttribute('style',"text-align: end;");
        h1Title.setAttribute('style',"text-align: initial;");
        h1Title.setAttribute('id','h1t');
        h3Title.setAttribute('id','h3t');
        span.setAttribute('id','span');
        div.setAttribute('id','full');
        autor.innerHTML = "Por: "+data[id].getElementsByTagName("autor")[0].childNodes[0].nodeValue;

        divTitle.appendChild(logo);
        divAux.appendChild(h1Title);
        divAux.appendChild(h3Title);
        span.appendChild(autor);
        div.appendChild(timeTitle);
        span.appendChild(div);
        divAux.appendChild(span);
        divTitle.appendChild(divAux);
        document.getElementById('auto').appendChild(hr);
        document.getElementById('auto').appendChild(divTitle);
        document.getElementById('auto').appendChild(hr);
        document.getElementById('auto').appendChild(br);
        document.getElementById('auto').appendChild(br);
        document.getElementById('auto').appendChild(br);

        var textos = data[id].getElementsByTagName("text");
        var imgs = data[id].getElementsByTagName("img");
        for (let i = 0; i < textos.length; i++) {
            // >>>>> Create Var <<<<<<
            var pArt = document.createElement('p');
            var img = document.createElement('img');
            var pImg = document.createElement('p')
            // console.log(textos[i]);
            
            if(imgs.length == 0){
                pArt.innerHTML = data[id].getElementsByTagName("text")[i].childNodes[0].nodeValue;
                document.getElementById('auto').appendChild(pArt);
            }
            else{
                if (i>0) {
                    if(i <= imgs.length){
                        img.setAttribute('src',data[id].getElementsByTagName("img")[i-1].childNodes[0].nodeValue)
                        pImg.setAttribute('id', 'center');
                        pImg.appendChild(img); 
                        document.getElementById('auto').appendChild(pImg);
                    }

                    pArt.innerHTML = data[id].getElementsByTagName("text")[i].childNodes[0].nodeValue;
                    document.getElementById('auto').appendChild(pArt);
                } else {
                    pArt.innerHTML = data[id].getElementsByTagName("text")[i].childNodes[0].nodeValue;
                    document.getElementById('auto').appendChild(pArt);
                }
            
            }

            

            
        }
    })
}
