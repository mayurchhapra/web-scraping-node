const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_India';

rp (url).then((html) => {
    let $ = cheerio.load(html);
    const len = $('td > a').length;
    const array = [];
    for (let i=0; i<len; i+=6) {
        array.push($('td > a', html)[i].attribs.href);
    }
    // console.log($('td >a', html).attr('scope'));
    console.log(array);
}).catch((error) => console.log(error));

// TEST DATA 

// const rp = require('request-promise');
// const cheerio = require('cheerio');
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// rp(url)
//   .then(function(html){
//     //success!
//     const $ = cheerio.load(url);
//     const len = $('big > a', html).length;
//     const webPush = [];
//     for (let i=0; i<len; i++) {
//         webPush.push($('big > a', html)[i].attribs.href);
//     }
//     console.log(webPush);
//   })
//   .catch(function(err){
//     //handle error
//   });