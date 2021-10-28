// 待辦事項文字框的 focus 和blur 的事件觸發
var input_task_name = document.getElementsByClassName("task_name")[0];
input_task_name.addEventListener("focus", function(){
    this.closest("div.task_add_block").classList.add("-on");
});
input_task_name.addEventListener("blur", function(){
    this.closest("div.task_add_block").classList.remove("-on");
}); 
