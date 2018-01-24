// make the request to the login endpoint

//set header if page has token
axios.defaults.headers.common['Authorization'] = "jwt " +sessionStorage.getItem('token');

function getToken() {

  var userElement = document.getElementById('username');
  var passwordElement = document.getElementById('password');
  var tokenElement = document.getElementById('token');
  var user = userElement.value;
  var password = passwordElement.value;

  var sendObject = JSON.stringify({name: user, password: password});

  console.log('going to send', sendObject);

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
      axios.defaults.headers.common['Authorization'] = "jwt " +sessionStorage.getItem('token'); //update axios Config if new token given.
    } else {
      tokenElement.innerHTML = "No token received";
    }
  })
}

// make the request to the secret API endpoint
function getSecret() {

  const token = sessionStorage.getItem('token');
  var resultElement = document.getElementById('result');
  
  axios({
    method:'get',
    url:'/api/manager',
  }).then(function(response){
    console.log(response)
    resultElement.innerHTML = response.data;
  })
}