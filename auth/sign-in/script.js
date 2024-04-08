const form = document.getElementById("signin-form");
const signInURL =
    "https://script.google.com/macros/s/AKfycbyX5kHUlX8eMxdUB0tlq6N8AsYxCPq6QT8KXanPgUyUU-vl3SHmuSJOGdtPuRsRlujE/exec";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const usernameOrEmail = form.elements["username-email"].value;
    const password = form.elements["password"].value;
    fetch(
        `${signInURL}?usernameOrEmail=${usernameOrEmail}&password=${password}`
    )
        .then(res => res.json()) // Mengubah respons menjadi objek JSON
        .then(data => {
            const users = data.content.slice(1);
            const foundUser = users.find(
                user =>
                    (user[1] === usernameOrEmail ||
                        user[3] === usernameOrEmail) &&
                    user[2] === password
            );
            if (foundUser) {
                const [id, username, password, email] = foundUser; // Mendapatkan nilai id, username, password, dan email dari pengguna yang ditemukan
                window.location.href = "/home/";
                localStorage.setItem("hasLogin", true);
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
            } else {
                document.querySelector(".cek-wrong").style.display = "flex";
                document.querySelector(".wrong-popup").style.display = "flex";
            }
        })
        .catch(e => {
            console.error("error", e.message);
        });
});

function closePopupWrong() {
    document.querySelector(".cek-wrong").style.display = "none";
    document.querySelector(".wrong-popup").style.display = "none";
}

const imgPw = document.querySelector(".vis-pass");
const password = document.getElementById("password");
var cekVis = true;
function switchOn() {
    if (cekVis) {
        imgPw.src = "von.png";
        imgPw.style.width = "23px";
        password.type = "text";
    } else {
        imgPw.src = "voff.png";
        imgPw.style.width = "25px";
        password.type = "password";
    }
    cekVis = !cekVis;
}
