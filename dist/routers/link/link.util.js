export function linkUrl(len) {
    let options = "qwertyuiopasdfghjklzxcvbnm1234567890";
    let url = "";
    let lenght = options.length;
    for (let i = 0; i < len; i++) {
        url += options[Math.floor(Math.random() * lenght)];
    }
    return url;
}
//# sourceMappingURL=link.util.js.map