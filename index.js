console.log('i am alive');
//var parent = require('../stable/get-iterator');

//module.exports = parent;

async function getnews(){
    const apiKey = 'e7fbaba830f74892aea41dcc725c0450';
    const apiUrl = `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?category=graphicdesign&apikey=${apiKey}`

    fetch(apiUrl,{headers: new Headers({"X-Requested-With":"weugfiehvkjdcn"})})
    .then(a=>a.json())
    .then(response=>{
      for(var i=0; i<response.articles.length;i++){
        document.getElementById("output").innerHTML +=
        `<div style='padding-top:20px;'><img style='float:left; width: 150px;'src="${response.articles[i].urlToImage}"><h1>${response.articles[i].title}</h1>${response.artices[i].source.name}<br>${response.artices[i].description} <a href=';"${response.artices[i].url};'target='_any;'>${response.artices[i].url};</a></div>`;
      }
    })
  }

