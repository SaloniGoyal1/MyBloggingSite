function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
	var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
}
}


function getcomment() {
  text = comment.value;
  document.getElementById("para").innerHTML += '<p>'+text
  document.getElementById("comment").value = "enter"
}