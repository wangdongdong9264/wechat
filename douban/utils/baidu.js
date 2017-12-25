"use strict";
function fetchApi(t,e){
  return fetch(URI,t,e)
}
function getCityName(){
  return fetchApi("geocoder/v2/",{
    location: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 39.90403) +','+ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 116.407526),
    output:"json",
    ak:"9zCdkirNueEUtfAt7pXef0aplgk86XrY"
  }).then(function(t){
    // console.log(t);
    return t.data.result.addressComponent.city
  })
}
var URI = "https://api.map.baidu.com",
    fetch=require('./fetch');

module.exports={
  getCityName:getCityName
}