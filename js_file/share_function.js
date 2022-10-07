function createBarContent(){
        // <li><a href="#">票券</a></li>
        // <li class="dropdown">
        //     <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">
        //     訂房 <span class="caret"></span></a>

        //     <ul class="dropdown-menu">
        //     <li><a href="#">國內訂房</a></li>
        //     <li><a href="#">國外訂房</a></li>
        //     </ul>
        // </li>

    // var portfolio = [["機器學習", "XOR分類器", "人臉辨識", "時間序列資料預測", "人臉辨識&口罩偵測演算法"], ["網站開發", "興趣介紹網站", "鋼琴教學網站", "早餐店訂餐系統", "書目管理系統"], ["爬蟲", "網頁爬蟲"], ["系統程式", "SIC/XE Assembler", "SIC/XE Linking Loader", "數學函式運算編譯器"], ["安卓", "試衣間", "Android 虛實整合遊戲"], ["電腦圖學", "Lighting helicopter"], ["網路傳輸", "TCP多人聊天室"], ["C#", "今晚吃甚麼"]];
    
    var portfolio = [["機器學習","XOR分類器", "人臉辨識","時間序列資料預測","人臉辨識&口罩偵測演算法"], ["網站開發", "興趣介紹網站", "鋼琴教學網站", "早餐店訂餐系統", "書目管理系統"], ["爬蟲", "網頁爬蟲"], ["系統程式", "SIC/XE Assembler"]];
        var website_counter = 0;
        for(var i = 0; i < portfolio.length; ++i){  
            var tag_li = document.createElement("li");
            tag_li.setAttribute('class', "dropdown");
            
            // set tag_a
            var tag_a = document.createElement("a");
            tag_a.textContent = portfolio[i][0];
            tag_a.setAttribute("class", "dropdown-toggle");
            tag_a.setAttribute("data-toggle", "dropdown");
            tag_a.setAttribute("href", "#");
            tag_a.setAttribute("role", "button");
            var tag_span = document.createElement("span");
            tag_span.setAttribute("class", "caret");
            tag_a.appendChild(tag_span);
            tag_li.appendChild(tag_a);

            // set tag_ul
            var tag_ul = document.createElement("ul");
            tag_ul.setAttribute("class","dropdown-menu");
            for(var j = 1; j < portfolio[i].length; ++j){
                var tag_inner_a = document.createElement("a");
                tag_inner_a.setAttribute("href", "portfolio"+ website_counter.toString() +".html");
                website_counter++;
                tag_inner_a.textContent = portfolio[i][j];
                var tag_inner_li =document.createElement("li"); 
                tag_inner_li.appendChild(tag_inner_a);

                tag_ul.appendChild(tag_inner_li);
            }
            tag_li.appendChild(tag_ul);

            // put into html
            document.getElementById("evanPortfolio").appendChild(tag_li);
        }
        // $('.dropdown').hover(function(){ 
        //     $('.dropdown-toggle', this).trigger('click'); 
        // });
    }

function scale_img(){
    var img_list = document.querySelectorAll("img");
    img_list.forEach(element => {
        var cla = element.getAttribute("class");
        if (cla != "no_scale_img"){  
            element.setAttribute('class', 'small_img');
            console.log(element.getAttribute("class"));
            element.addEventListener('click', function(){
                click_img(element);})
        };
    });
}

function click_img(ele){
    var cla = ele.getAttribute("class");
    if (cla == "small_img")
        ele.setAttribute('class', 'big_img');
    else if (cla = "big_img")
        ele.setAttribute('class', 'small_img');
}