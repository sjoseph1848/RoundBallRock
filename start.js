document.getElementById('button').addEventListener('click', loadUsers);

//load Github Users

function loadUsers() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', './data/scores1172018.json', true);

  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      console.log(users.numGames);
      console.log(users);
      console.log(users.games[0].arena);
      console.log(users.games[0].hTeam);
      console.log(users.games[0].hTeam.triCode);
      console.log(users.games[0].hTeam.score);

      console.log(users.games[0].vTeam.triCode);
      console.log(users.games[0].vTeam.score);

      for (var i = 0; i < users.numGames; i++) {
        console.log(users.games[i].hTeam.triCode);
        console.log(users.games[i].hTeam.score);

        console.log(users.games[i].vTeam.triCode);
        console.log(users.games[i].vTeam.score);
      }
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
