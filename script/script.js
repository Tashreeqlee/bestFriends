//
let friendsList = [];
function displayNames() {
    let previousNamesDiv = document.getElementById('previousNames');
    previousNamesDiv.innerHTML = '';
    for (let name of friendsList) {
        previousNamesDiv.innerHTML += `${name} <br>`;
    }
}
document.getElementById('addFriendButton').addEventListener('click', function() {
  let input = document.getElementById('friendNameInput');
  let newName = input.value.trim();
  
if (newName.length > 3) {
    if (!friendsList.includes(newName)) {
        friendsList.push(newName);
        localStorage.setItem('friendsList', JSON.stringify(friendsList));
        displayNames();
        input.value = '';
    }else {
        document.getElementById('notificationLabel').innerText = 'This name already exists in the list.';
    }} else {
    document.getElementById('notificationLabel').innerText = 'Name should be longer than 3 characters.';
  }
});
document.getElementById('friendNameInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('addFriendButton').click();
  }
});
document.addEventListener('DOMContentLoaded', function() {
  let storedList = localStorage.getItem('friendsList');
  if (storedList) {
    friendsList = JSON.parse(storedList);
    displayNames();
  }
});











