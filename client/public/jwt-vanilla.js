// make the request to the login endpoint

//set header if page has token
axios.defaults.headers.common['Authorization'] = "jwt " +sessionStorage.getItem('token');


function getToken() {
  
  
  // var loginUrl = "/login"
  // var xhr = new XMLHttpRequest();
  var userElement = document.getElementById('username');
  var passwordElement = document.getElementById('password');
  var tokenElement = document.getElementById('token');
  var user = userElement.value;
  var password = passwordElement.value;
  
  // xhr.open('POST', loginUrl, true);
  // xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  // xhr.addEventListener('load', function() {
  //   var responseObject = JSON.parse(this.response);
  //   console.log(responseObject);
  //   if (responseObject.token) {
  //     tokenElement.innerHTML = "token received";
  //     sessionStorage.setItem('token', responseObject.token);
  //   } else {
  //     tokenElement.innerHTML = "No token received";
  //   }
  // });

  var sendObject = JSON.stringify({name: user, password: password});

  console.log('going to send', sendObject);

 // xhr.send(sendObject);
  
  axios({
    method:'post',
    url:'/login',
    data:{
      name:user,
      password:password
    }
  }).then(function(response){
    let responseObject=response.data;
    if (responseObject.token) {
      tokenElement.innerHTML = "token received";
      sessionStorage.setItem('token', responseObject.token); //store token
      axios.defaults.headers.common['Authorization'] = "jwt " +sessionStorage.getItem('token'); //update axios Config if no token available on loading page.
    } else {
      tokenElement.innerHTML = "No token received";
    }
  })
}

// make the request to the secret API endpoint
function getSecret() {

  var url = "/api/manager"
  //var xhr = new XMLHttpRequest();
  const token = sessionStorage.getItem('token');
  //var tokenElement = document.getElementById('token');
  var resultElement = document.getElementById('result');
  // xhr.open('GET', url, true);
  // xhr.setRequestHeader("Authorization", "jwt " + token);
  // xhr.addEventListener('load', function() {
  //   var responseObject = JSON.parse(this.response);
  //   console.log(responseObject);
  //   resultElement.innerHTML = this.responseText;
  // });
  // xhr.send(null);
  
  axios({
    method:'get',
    url:'/api/manager',
    //headers is set in config
    // headers:{
    //   Authorization: "jwt " +token
    // }
  }).then(function(response){
    console.log(response)
    resultElement.innerHTML = response.data;
  })
}