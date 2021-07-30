import React from 'react'
var axios = require("axios").default;

export default function Testing() {

  console.log("test");
  var options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
    params: {
      q: '{query}-!{syear},{eyear}-!{snfrate},{enfrate}-!{simdbrate},{eimdbrate}-!{genreid}-!{vtype}-!{audio}-!{subtitle}-!{imdbvotes}-!{downloadable}',
      t: 'ns',
      cl: '{clist}',
      st: 'adv',
      ob: '{sortby}',
      p: '{page}',
      sa: '{andor}'
    },
    headers: {
      'x-rapidapi-key': '8e9ec56d34msh9491a9a35ff1018p191a31jsnb4ecbd4eda3c',
      'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div>
      Testing
    </div>
  )
}
