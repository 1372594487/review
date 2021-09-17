function myAjax(url, method, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        method ||= "GET";
        data ||= null
        xhr.open(method, url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.responseText)
            }
        }
        xhr.send(data)
    })
}

// 箭头函数
let ajax = option => {
    // .0 创建异步对象实例
    let xhr = new XMLHttpRequest();
    // .0 监听请求和响应数据的状态
    xhr.onreadystatechange = ()=> {
        // .0 请求完成 记住 4 就可以
        if(xhr.readyState === 4){
            // .0 响应成功
            if(xhr.status == 200){
                // .0 数据响应回来
                let resInfo = xhr.getResponseHeader("Content-Type");
                // .0 接收响应报文的变量
                let resContent ;
                // .0 判断
                if(resInfo.indexOf("json") >-1){
                    // 转json对象
                    resContent = JSON.parse(xhr.responseText);
                }else if(resInfo.indexOf("xml") >-1){
                    // xml
                    resContent = xhr.responseXML;
                }else {
                    // 普通文档 
                    resContent = xhr.responseText;
                }
                // .0 判断
                if(typeof option.success == "function")  option.success(resContent);
            }
            else {
                 // .0 判断
                 if(typeof option.error == "function")  option.error("请求失败！");
            }
        }
    }
    // .0 提交给服务端参数
    let dataStr = "";
    // .0 循环
    for(let key in option.data){
        // 字符串拼接
        // dataStr += key +"="+ option.data[key]+"&";
        dataStr +=`${key}=${option.data[key]}&`;
    }
    // .0 去掉最后一个字符 &
    // dataStr && dataStr.slice(0,dataStr.length-1);
    if(dataStr.length!=0){
        dataStr = dataStr.slice(0,dataStr.length-1);
    }
    // .0 发起请求 与服务端建立联系
    xhr.open(option.type,option.type=="get" ? option.url+"?"+dataStr : option.url,true);
    // .0 判断请求方式
    if(option.type == "post"){
        // 0.设置请求头信息 application/x-www-form-urlencoded"
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    }
    // .0 发送请求  
    xhr.send(option.type=="get"?xhr.setRequestHeader:dataStr);
}