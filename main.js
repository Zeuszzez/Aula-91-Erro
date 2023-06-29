function addUser(){
  var player1 = document.getElementById ("player1NameInput").value
  var player2 = document.getElementById ("player2NameInput").value
  localStorage.setItem ("Player1", player1)
  localStorage.setItem ("Player2", player2)
  console.log (player1)
  window.location = "game.html"
}

