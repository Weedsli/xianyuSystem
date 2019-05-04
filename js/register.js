class Register{
	constructor(){
		this.inputUserName=document.querySelector("#inputUserName");
		this.inputPassword=document.querySelector("#inputPassword");
		this.btn=document.querySelector("#Btn");
		this.bindEvent();
	}
	
	bindEvent(){
		console.log("re")
		this.btn.onclick=()=>{
			let username=this.inputUserName.value,
				password=this.inputPassword.value;
				console.log(username);
			tools.ajax("POST", "../api/v1/register.php", {username, password}, data => {
        		if(data.res_code===1){
        			alert(data.res_message);
        		}else{
        			alert(data.res_message);
        			window.location.href = "register.html";
        		}
		          
		});
			return false;
	}
}
}

new Register();
