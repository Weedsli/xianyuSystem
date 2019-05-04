class Login{
	constructor(){
	    this.inputUserName = document.querySelector("#inputUserName");
	    this.inputPassword = document.querySelector("#inputPassword");
	    this.btn = document.querySelector("#btn");
	    this.checkbox = document.querySelector("#checkbox");
	    this.bindEvent();
	}
	
	bindEvent(){
		this.btn.onclick=()=>{
			let username=this.inputUserName.value,
				password=this.inputPassword.value;
//				console.log(typeof username);
//				console.log(password);
				if(username===""){
					alert("请输入用户名！");
					//return;
				}
				if(password===""){
					alert("请输入密码！");
					//return;
				}
			tools.ajax("POST","../api/v1/login.php",{username,password},data=>{
				if(data.res_code===1){
					alert(data.res_message);
					if(this.checkbox.checked){
            		tools.cookie("username", username, {expires: 7, path: "/"});
         		}else{
            		tools.cookie("username", username, {path: "/"});
          		}
         		window.location.href = "../index.html";
				}else{
					alert("用户名或密码错误！");
				}
			});
			return false;
		}
	}
}
new Login();
