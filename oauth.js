window.onload = function() {
    document.querySelector('button').addEventListener('click', function() {
      chrome.identity.getAuthToken({interactive: true}, function(token) {
        console.log(token);
        fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`)
        .then((response)=> response.json())
        .then((response) => console.log(response))      
      });
    });
  };