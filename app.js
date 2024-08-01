var istatus = document.querySelector("h4");
var addFriend = document.querySelector("#add");
var RemoveFriend = document.querySelector("#Remove");
addFriend.addEventListener("click", function () {
  istatus.innerHTML = "Friends";
  istatus.style.color = "green";
});

RemoveFriend.addEventListener("click", function () {
  istatus.innerHTML = "Not Friend";
  istatus.style.color = "red";
});
