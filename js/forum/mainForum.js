
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
        console.log(xml);
        xmlfeeds = xml.getElementsByTagName("Feed");
        console.log(xmlfeeds);
        for (let i = 0; i < xmlfeeds.length; i++){
            
            var br = document.createElement('br');
            var divFeed= document.createElement('div');
            var feed = document.createElement('a');
            feed.setAttribute("onclick","FeedFunction(" + i + ")");
            feed.setAttribute('href','#');
            feed.setAttribute('class','feed');
            feed.innerHTML= xmlfeeds[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
            divFeed.appendChild(feed);
            divFeed.setAttribute('class','divfeed');
            
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