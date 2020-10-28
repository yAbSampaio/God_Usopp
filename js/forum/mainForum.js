
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
       var br = document.createElement('br');
        xmlfeeds = xml.getElementsByTagName("Feed");
        for (let i = 0; i < xmlfeeds.length; i++){
            var divFeed= document.createElement('div');
            var feed = document.createElement('a');
            feed.setAttribute("onclick","FeedFunction(" + i + ")");
            feed.setAttribute('href','#');
            feed.innerHTML= xmlfeeds[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
            divFeed.appendChild(feed);
            document.getElementById("auto").appendChild(br);
            document.getElementById('auto').appendChild(divFeed);
            document.getElementById("auto").appendChild(br);
        }
        
        
    })
}

    
function FeedFunction (i){
    sessionStorage.setItem("id", i  );
    window.location.href ="feed.html";

}