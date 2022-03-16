window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validatePassForm;
}

function validatePassForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let password = document.getElementById("password").value;
    let checkpassword = document.getElementById("checkpassword").value;

    if ( password != checkpassword) { 
        document.getElementById("errormsg").innerHTML = " !! Error !! "
        alert("Incorrect Password")
        return false;
    }
    alert("Finish")
}