function handleclick(event) {
    // Get form fields
    var form = document.querySelector("#contactPage form");
    var name = document.getElementById("username");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var btn = document.getElementById("btn");
    var sendText = document.getElementById("send");
    var icon = document.getElementById("icn");

    // Check if all fields are filled
    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        alert("Please fill in all fields before submitting!");
        event.preventDefault(); // prevent submission if empty
        return;
    }

    // Animate button
    sendText.textContent = "Submitting...";
    icon.style.transform = "translateX(10px)";
    btn.style.backgroundColor = "rgba(0, 0, 255, 0.7)";
    btn.disabled = true;

    // Allow normal form submission (no preventDefault)
    // But use "submit" event listener to clear inputs after submit
    form.addEventListener("submit", function() {
        setTimeout(function() {
            // Clear inputs after form is submitted
            name.value = "";
            email.value = "";
            message.value = "";
            // Reset button
            sendText.textContent = "Send";
            icon.style.transform = "translateX(0)";
            btn.style.backgroundColor = "rgba(0, 255, 255, 0.2)";
            btn.disabled = false;
        }, 100); // tiny delay to make sure submission goes through
    }, { once: true });
}

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
