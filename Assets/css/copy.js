function copyToClipboard(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).html().trim().replace(/  +/g, ' ').replace('<span class="hashtag">', '').replace('<span class="karambit">', '').replace('</span>', '').replace(/<br\s*[\/]?>/gi, "")).select();
    document.execCommand("copy");
    $temp.remove();
}