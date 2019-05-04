class AddShop {
  constructor () {
    this.inputName = document.querySelector("#inputName");
    this.inputPrice = document.querySelector("#inputPrice");
    this.inputNum = document.querySelector("#inputNum");
    this.addbtn = document.querySelector("#addbtn");
    this.init();
  }
  
  init(){
  	this.addbtn.onclick=()=>{
  		let name = this.inputName.value,
          	price = this.inputPrice.value,
         	 num = this.inputNum.value;
  		if(name===""||price===""||num===""){
  			alert("输入不能为空！");
  			return;
  		}
  		tools.ajaxGetPromise("api/v1/add.php",{name,price,num}).then(data=>{
  			if(data.res_code===1){
  				alert(data.res_message);
  				this.inputName.value = this.inputPrice.value = this.inputNum.value = "";
  				$('#myModal').modal('hide');
  			}
  		});
  	}
  }
}
new AddShop();
