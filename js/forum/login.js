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
    getXMLFile("../../XML/usuarios.xml", function(xml){

        autoMusic();
        var logado= sessionStorage.getItem("logado");

        if( logado =="sim"){

            document.getElementById("login").remove();
            document.getElementById("botoes").remove();
            var msg_logout= document.createElement("h2");
            msg_logout.innerHTML= "Você ja esta logado, deseja sair ?";
            
            var butao_logout=document.createElement("button");
            butao_logout.innerHTML="Logout";
            butao_logout.setAttribute("onclick","Logout()");

            document.getElementById("logout").appendChild(msg_logout);
            document.getElementById("logout").appendChild(butao_logout);
        }

    })
 }  
        
function Cadastrar (){
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
//ferifica o cadastro
    getXMLFile("../../XML/usuarios.xml", function(xml){
        xmlUsuarios = xml.getElementsByTagName("Usuario");
        for (let i = 0; i < xmlUsuarios.length; i++){

            var nome  = document.getElementById("nome").Value;
            nome_usuario= xmlUsuarios[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;

            if(nome==nome_usuario){
                document.getElementById("erro").innerHTML="nome já cadastrado"
            }else{
                // cadastra no xml

            }
        }
    })
}
function Logar (){
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
    // verifica o login
    getXMLFile("../../XML/usuarios.xml", function(xml){
        xmlUsuarios = xml.getElementsByTagName("Usuario");
        for (let i = 0; i < xmlUsuarios.length; i++){

            var nome  = document.getElementById("nome").value;
            var senha = document.getElementById("senha").value;
            nome_usuario= xmlUsuarios[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            senha_usuario= xmlUsuarios[i].getElementsByTagName("senha")[0].childNodes[0].nodeValue;

            if( nome==nome_usuario && senha==senha_usuario ){
                sessionStorage.setItem("nome", nome_usuario)
                sessionStorage.setItem("logado", "sim"  )
            }
            
        }
        if(sessionStorage.getItem("logado")=="sim"){
            document.getElementById("erro").innerHTML=""
            document.getElementById("botao_logar").remove;
            document.getElementById("botao_cadastrar").remove;
            window.location.href ="login.html";

        }else{

            document.getElementById("erro").innerHTML="nome ou senha não cadastrados"

        }
    })
}
function Logout (){
    sessionStorage.setItem("logado" , "nao"  );
    window.location.href ="login.html";
}



