

function main(){
    // >>>>> Create Var <<<<<<
    var data = info();


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
        aNews.setAttribute('href','html/news/news.html')
        imgNews.setAttribute('id','thumb');
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

function info(){
    
    dataHome = [
        {
            id:1,
            img:"https://vignette.wikia.nocookie.net/onepiece/images/0/0c/Volume_95.png/revision/latest?cb=20191228075843",
            title:"SBS 95 TRADUZIDO - O MISTÉRIO DOS ÓCULOS DO DOFLAMINGO..."
        },
        {
            id:2,
            img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-30705-p000_Cov_071618-3.jpg",
            title: "ATRASOS EM TODOS OS MANGÁS DA JUMP DEVIDO A COVID"
        }
    ]
    return dataHome;
}

