// 待辦事項文字框的 focus 和blur 的事件觸發
var input_task_name = document.getElementsByClassName("task_name")[0];
input_task_name.addEventListener("focus", function(){
    this.closest("div.task_add_block").classList.add("-on");
});
input_task_name.addEventListener("blur", function(){
    this.closest("div.task_add_block").classList.remove("-on");
}); 

// 新增按鈕
var button_task_add =document.getElementsByClassName("task_add")[0];
button_task_add.addEventListener("click", function(){
let task_text =(input_task_name.value).trim();

if(task_text != ""){
    let item_id = Date.now();

    let list_html = `
    <li data-id="${item_id}">
        <div class="item_flex"> 
             <div class="left_block">
                 <div class="btn_flex">
                    <button type="button" class="btn_up">往上</button>
                     <button type="button" class="btn_down">往下</button>
                 </div>
            </div>
    <div class="middle_block">
      <div class="star_block">
        <span class="star" data-star="1"><i class="fas fa-star"></i></span>
        <span class="star" data-star="2"><i class="fas fa-star"></i></span>
        <span class="star" data-star="3"><i class="fas fa-star"></i></span>
        <span class="star" data-star="4"><i class="fas fa-star"></i></span>
        <span class="star" data-star="5"><i class="fas fa-star"></i></span>
      </div>
      <p class="para">` + task_text + `</p>
    </div>
    <div class="right_block">
      <div class="btn_flex">
        <button type="button" class="btn_update">更新</button>
        <button type="button" class="btn_delete">移除</button>
      </div>
    </div>
  </div>
</li>
`;

let ul_task_list = document.getElementsByClassName("task_list")[0];
    ul_task_list.insertAdjacentHTML("afterbegin", list_html);
        input_task_name.value = "";
            console.log(ul_task_list);

    };
});

// 欄位新增代辦事項  讓enter有效
input_task_name.addEventListener("keyup", function(e){
    // console.log(e.which);
if(e.which == 13){
    let button_task_add = document.getElementsByClassName("task_add")[0];
    button_task_add.click();
}
});
