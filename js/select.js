class SelectList{
	constructor(tbody){
		this.tbody = document.querySelector(tbody);
		this.pageIndex=1;//默认当前页为第一页
		Object.defineProperty(this,"count",{
			writable : false,
     		value : 5
		});
		this.pageCount = 1; // 默认总页数为1（临时赋值）
		this.init();
	}
	init(){
		let {pageIndex,count}=this;//解构赋值
		tools.ajaxGetPromise("api/v1/select.php",{pageIndex,count}).then(data=>{
			if(data.res_code===1){
				this.render(data.res_body.data);
				this.pageCount=data.res_body.pageCount;
				pagination.render(this);
			}else{
				alert(data.res_message);
			}
		})
	}
	
	render(list){
		console.log(111)
		let html="";
		list.forEach((shop,index)=>{
			console.log(222)
			html+=`
			<tr data-id="${shop.id}">
				  <td>${(this.pageIndex-1)*this.count + index + 1}</td>
			      <td>${shop.name}</td>
			      <td>
			        <span>${shop.price}</span>
			        <input type="text" class="inputPrice">
			      </td>
			      <td>
			        <span>${shop.num}</span>
			        <input type="text" class="inputNum">
			      </td>
			      <td>
			        <button type="button" class="btn btn-xs btn-edit btn-success">编辑</button>
			        <button type="button" class="btn btn-xs btn-del btn-danger">删除</button>
			        <button type="button" class="btn btn-xs btn-ok btn-info">确定</button>
			        <button type="button" class="btn btn-xs btn-cancel btn-warning">取消</button>
			      </td>
			</tr>`;
			console.log(122)
		});
		this.tbody.innerHTML=html;
		console.log(333)
	}
}
let getShop=new SelectList("#tbody");
