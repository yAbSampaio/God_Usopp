function main(){
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

    getXMLFile("../../XML/feeds.xml", function(xml){
        
        autoMusic();
        var id = sessionStorage.getItem("id");
        var br = document.createElement('br');
        Feed = xml.getElementsByTagName("Feed")[id];

        var criador= document.createElement("h3")
        criador.setAttribute("id","criador");
        criador.innerHTML=Feed.getElementsByTagName("criador")[0].childNodes[0].nodeValue;

        var texto= document.createElement("p")
        texto.setAttribute("id","texto");
        texto.innerHTML=Feed.getElementsByTagName("texto")[0].childNodes[0].nodeValue;

        document.getElementById("titulo").innerHTML= Feed.getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
        document.getElementById("div_T").appendChild(criador);
        document.getElementById("auto").appendChild(texto);
        document.getElementById("auto").appendChild(br);
        var hr = document.createElement("hr");
        var comentario= document.createElement("h3")
        comentario.innerHTML="Comentarios :";

        document.getElementById("auto").appendChild(hr);
        document.getElementById("auto").appendChild(comentario);

        var comentarios = Feed.getElementsByTagName("comentario");

        for (let i = 0; i < comentarios.length; i++){

            var div_comentario= document.createElement('div');

            var comentario = document.createElement('p');
            comentario.setAttribute("id","comentario");
            comentario.innerHTML=comentarios[i].getElementsByTagName("criador")[0].childNodes[0].nodeValue  + ": " + comentarios[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue;
            
            div_comentario.appendChild(comentario);
            document.getElementById('auto').appendChild(div_comentario);
            document.getElementById("auto").appendChild(br);
        }
        
        
    })
}
