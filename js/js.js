var btnAdd = document.querySelectorAll('.buy')
var num = document.getElementById('num')
var numAdd = 0
for(i = 0; i<btnAdd.length; i++){
	btnAdd[i].onclick = () => {
		numAdd++
		num.innerText = numAdd
	}
}
var logout = document.getElementById('logout')
logout.onclick =()=>{
	var outOrIn = document.getElementById('navbarDropdown')
	var drdLogOut = document.getElementById('drdab')
	drdab.style.display = 'none'
	drdLogOut.style.display = 'none'
	outOrIn.innerText = 'login'
	drdlogout.style.display = "none"
	var loginModal = document.getElementById('logiinModal')
	loginModal.style.display = 'block'
}