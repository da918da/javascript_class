 // 變數宣告及賦值(assign)
 var a = 1;
 var b = 2;
 var c = a + b;

 // 在瀏覽器中的 console 印出
 console.log("這邊是字串可打文字" + a);
 console.log("b 值是 " + b);
 console.log("c 值是 a + b，結果變成 " + c);
 console.log("");

 // for 迴圈
 for (var i = 0; i < 3; i++) {
   console.log("執行第 " + (i + 1) + " 次迴圈。");
   c++; // c++ 等同於 c = c + 1
   console.log("因為 c++ ，所以 c 的值變成 " + c);

   if (c >= 6) {
     console.log("c 有大於等於 6");
   } else {
     console.log("c 沒有大於等於 6");
   }

   console.log("");
 }

 console.log("程式結束。");