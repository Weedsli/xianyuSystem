class Leave{
	constructor(){
		let unloginUl = document.querySelector("#unlogin-ul");
		let loginUl = document.querySelector("#login-ul");
		this.btn=document.querySelector("#leave");
		this.bindEvent();
	}
	bindEvent(){
		this.btn.onclick=()=>{
		  unloginUl.classList.remove("hidden");
		  loginUl.classList.add("hidden");
		  tools.cookie("username", "", {expires:-1,path: "/"});
		}
	}
}
new Leave();

