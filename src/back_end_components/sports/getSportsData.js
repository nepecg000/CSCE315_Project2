var http = require('http');
var request = require('request');
var data = require("./teaminfo.json");
console.log("Sports Data = ",data);
//Used this website as reference for opening and parsing a json file https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824

// make the GET request
/* function getSportsData(callback){
    request('http://127.0.0.1:5000/', function (err, res) {
    if (err) return console.error(err.message);
    //res.body here
    console.log("here");
    let result = JSON.stringify(res.body);
    console.log("in ufnction: ",result);
    callback(result);
    });
} */

//const fs = require('fs')
//function jsonReader(filePath, cb) {
//    fs.readFile(filePath, (err, fileData) => {
//        if (err) {
//            return cb && cb(err)
//        }
//        try {
//            const object = JSON.parse(fileData)
//            return cb && cb(null, object)
//        } catch(err) {
//            return cb && cb(err)
//        }
//    })
//}

function getSportsData(){
    return 0;
}

function getRanking(teamName){
//    jsonReader('./teaminfo.json', (err, team) => {
//        if (err) {
//            console.log(err)
//            return
//        }
//        return team[teamName].rank // => "Infinity Loop Drive"
//    })
    console.log("Team Name = ",teamName);
    console.log("data = ",data);
    if(data[teamName] != undefined){
        return data[teamName].rank;
    }

    return "unranked";
}


function getTime(teamName){
//    jsonReader('./teaminfo.json', (err, team) => {
//        if (err) {
//            console.log(err)
//            return
//        }
//        return team[teamName].time // => "Infinity Loop Drive"
//    })
    console.log("Team Name = ",teamName);

    if(data[teamName] != undefined){
        return data[teamName].time;
    }

    return "No Time Set";

}

/* let name = "South Carolina"
getRanking(name)
getTime(name) */
/*
let data = null;
getSportsData(function(results){
    data = results;
})
console.log(data);
*/
export default {getSportsData, getRanking, getTime};
