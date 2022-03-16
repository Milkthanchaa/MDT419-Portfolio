window.onload = pageLoad;

function pageLoad() {
	// if( numbox == 0 ) {
	// 	alert("Please fill in the number")
	// }
	document.getElementById("start").onclick = startGame;
}

function startGame() {
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.1; // 0.5 minute 30 sec 
	var second = min * 60;
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);

	function timeCount() {
		var allbox = document.querySelectorAll("#game-layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		// second = second - 1;
		// clock.innerHTML = second;
		if (second > 0 && allbox.length > 0) {
			second = second - 1;
			clock.innerHTML = second;
		}
		else if (allbox.length == 0 && second > 0) {
			alert(" You win! ");
			clearInterval(timer);
			clearScreen();
		}
		else if (second == 0 && allbox.length > 0) {
			alert("Game over")
			clearScreen();
		}


	}
}

function addBox() {
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i = 0; i < numbox; i++) {
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.backgroundColor = colorDrop;
		//สีกล่อง
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}

	
}

function bindBox(box) {
	//เมื่อกดแล้ว กล่องจะหายไป
	var gameLayer = document.getElementById("game-layer");
	box.onclick = function () {
		gameLayer.removeChild(box);

	}
}

function clearScreen() {
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");
	var gameLayer = document.getElementById("game-layer");

	//delete all  div
	for (var i = 0; i < allbox.length; i++) {
		gameLayer.removeChild(allbox[i]);
	}
}




