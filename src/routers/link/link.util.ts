export function linkUrl (len:number):String{
    let options ="qwertyuiopasdfghjklzxcvbnm1234567890"
    let url:string =""
    let lenght= options.length
    for (let i = 0; i < len; i++) {
        url+= options[Math.floor(Math.random()*lenght)]
    }
    return url;
} 