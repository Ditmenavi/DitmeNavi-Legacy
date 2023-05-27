var cringe = [
    'among us', 'poppy playtime', 'squid game', 'friday night funkin', 'roblox', 'monster school', 'minecraft', 'mang thai',
    'có bầu', 'spiderman', 'elsa', 'peppa pig', 'doremon', 'conan', 'anime', 'gacha life', '18+', 'robux', 'dream', 'speedrun',
    'manhunt', 'dream smp', 'dream team', 'chuyển giới', '3 giờ sáng', 'thử thách gọi điện cho', 'quỷ', 'triệu hồi', 'herobrine',
    'entity 303', 'tik tok', 'exe', 'ma ám', 'slenderman', 'talking angela', 'mất tích', 'huggy wuggy', 'meme', 'bủh', 'lmao',
    'dảk', 'ngoài đời thật', 'sonic exe', 'hẹn hò', 'chịch nhau', 'chuyện tế nhị', '18 cộng', 'challenge', 'free fire', '1 tỉ $',
    'beluga', 'hecker', 'parlo', 'eugene', 'skittle', 'hunggvn', 'vinhmc', 'redhoodvn', 'mều channel', 'panda tv', 'cổ tích có thật',
    'gái xinh', 'ngủ ở khách sạn', 'ma nhập', 'sát nhân', 'noob', 'quỷ đầu loa', 'búp bê', 'granny', 'play together', 'siren head',
    'scp', 'undertale', 'sans'
];
// function ccjv() {
//     var salt = $("#input").val();
//     $("#output").html("");
//     output = "";
//     for(var index = 0; index < salt; index++) {
//         output = output + cringe[Math.floor(Math.random()*cringe.length)] + " ";
//     }
//     $("#output").html(output);
// }
var salt = $("#input").val();
function cringetitle() {
    var salt = $("#input").val();
    $("#output").html("");
    output = "";
    for(var index = 0; index < salt; index++) {
        output = output + cringe[Math.floor(Math.random()*cringe.length)] + " ";
    }
    $("#output").html(output);
}