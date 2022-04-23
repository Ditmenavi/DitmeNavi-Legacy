let a = document.getElementsByClassName("wibu");
for (let i = 0; i < a.length; i++) {
    a[i].onclick = function() {
      var m =$(a[i]).closest('li').find("h2")
      m.toggleClass("color-wibu")
    };
}
let b = document.getElementsByClassName("chuinhau");
for (let i = 0; i < b.length; i++) {
    b[i].onclick = function() {
      var m =$(b[i]).closest('li').find("h2")
      m.toggleClass("color-chuinhau")
    };
}
let c = document.getElementsByClassName("khochiu");
for (let i = 0; i < c.length; i++) {
    c[i].onclick = function() {
      var m =$(c[i]).closest('li').find("h2")
      m.toggleClass("color-khochiu")
    };
}
let d = document.getElementsByClassName("vanhoc");
for (let i = 0; i < d.length; i++) {
    d[i].onclick = function() {
      var m =$(d[i]).closest('li').find("h2")
      m.toggleClass("color-vanhoc")
    };
}
let e = document.getElementsByClassName("postnay");
for (let i = 0; i < e.length; i++) {
    e[i].onclick = function() {
      var m =$(e[i]).closest('li').find("h2")
      m.toggleClass("color-postnay")
    };
}
let f = document.getElementsByClassName("osu");
for (let i = 0; i < f.length; i++) {
    f[i].onclick = function() {
      var m =$(f[i]).closest('li').find("h2")
      m.toggleClass("color-osu")
    };
}
let g = document.getElementsByClassName("csgo");
for (let i = 0; i < g.length; i++) {
    g[i].onclick = function() {
      var m =$(g[i]).closest('li').find("h2")
      m.toggleClass("color-csgo")
    };
}
let h = document.getElementsByClassName("hdh");
for (let i = 0; i < g.length; i++) {
    h[i].onclick = function() {
      var m =$(h[i]).closest('li').find("h2")
      m.toggleClass("color-hdh")
    };
}