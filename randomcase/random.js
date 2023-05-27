var input = $("#input");
var output = $("#output")
var ditconmemay = input.val();
function randomCase() {
    ditconmemay = input.val().split('').map((v) =>
    Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
    ).join('');
};

// input.change(function() {
//     randomCase(ditconmemay);
//     output.html(ditconmemay)
// })
document.getElementById("input").addEventListener("input", function() {
    randomCase(ditconmemay);
    output.html(ditconmemay);
});