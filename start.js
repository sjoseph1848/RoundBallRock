document.getElementById('button').addEventListener('click', loadUsers);

//load Github Users

function loadUsers() {
  var xhr = new XMLHttpRequest();

  xhr.open(
    'GET',
    'https://data.nba.net/10s/prod/v1/20170218/scoreboard.json',
    true
  );

  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      console.log(users);
      // var output = '';

      // for (var i in users) {
      //   output +=
      //     '<div class="user">' +
      //     '<img src="' +
      //     users[i].avatar_url +
      //     '" width=70"height="70">' +
      //     '<ul>' +
      //     '<li>ID: ' +
      //     users[i].id +
      //     '</li>' +
      //     '<li>Login: ' +
      //     users[i].login +
      //     '</li>' +
      //     '</ul>' +
      //     '</div>';
      // }
      // document.getElementById('users').innerHTML = output;
    }
  };

  xhr.send();
}
