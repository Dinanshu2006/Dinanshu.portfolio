
function code1() {
    var s = document.getElementById("file1");
    s.style.opacity = 1;
    setTimeout(() => {
        s.style.opacity = 0;
    }, 3000);
}

function code2() {
    var s = document.getElementById("file2");
    s.style.opacity = 1;
    setTimeout(() => {
        s.style.opacity = 0;
    }, 3000);
}

function code3() {
    var s = document.getElementById("file3");
    s.style.opacity = 1;
    setTimeout(() => {
        s.style.opacity = 0;
    }, 3000);
}

function code4() {
    var s = document.getElementById("file4");
    s.style.opacity = 1;
    setTimeout(() => {
        s.style.opacity = 0;
    }, 3000);
}

function code5() {
    var s = document.getElementById("file5");
    s.style.opacity = 1;
    setTimeout(() => {
        s.style.opacity = 0;
    }, 3000);
}

function code6() {
    var s = document.getElementById("file6");
    s.style.opacity = 1;
    setTimeout(() => {
        s.style.opacity = 0;
    }, 3000);
}

function proj() {
    var h = document.getElementById("win");
    h.style.display = "block";

}
function closewin() {
    var h = document.getElementById("win");
    h.style.display = "none";
}
function toggleMenu(menu) {
    menu.classList.toggle('active');
    document.querySelector('.anchor').classList.toggle('active');
}