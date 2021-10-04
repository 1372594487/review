function myPromiseAll(lists){
    return new Promise((resolve,reject)=>{
        let resArr = []
        let num = 0
        lists.forEach(element => {
            element.then(res=>{
                resArr.push(res);
                num++;
                if(num === lists.length){
                    resolve(resArr)
                }
            })
        });

    })
}