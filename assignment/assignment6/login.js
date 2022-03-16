window.onload = loginLoad;
const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get("username")
	console.log(username);

	const password = urlParams.get("password")
	console.log(password);

function loginLoad(){
	let form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	let a = document.getElementById("username").value;
	let b = document.getElementById("password").value;

	if( a != username || b != password) {
		alert("Incorrect Username or Password")
		return false;
	}

	if(a == username && b == password) {
		alert("Complete Login")
	}
}

			