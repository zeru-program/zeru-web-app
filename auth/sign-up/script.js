var form = document.getElementById("formSubm");

form.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.querySelector(".username").value;
    const email = document.querySelector(".email").value;
    const passwordA = document.querySelector(".passwordAsli").value;
    const passwordC = document.querySelector(".passwordConfirm").value;
    const divBoxWaiting = document.querySelector(".popupWait");
    const divIsiBoxWaiting = document.querySelector(".isi-wait");
    const divIsiBoxWaitingLast = document.querySelector(".wait-popup");
    const cookies = document.getElementById("cookies");

    if (username && email && passwordA && passwordC && cookies.checked) {
        // post form
        const submitURL =
            "https://script.google.com/macros/s/AKfycbyX5kHUlX8eMxdUB0tlq6N8AsYxCPq6QT8KXanPgUyUU-vl3SHmuSJOGdtPuRsRlujE/exec";
        fetch(submitURL)
            .then(res => res.json())
            .then(data => {
                const lastID = data.content[data.content.length - 1][0];
                const nextID = lastID + 1;
                const formData = new FormData(form);
                formData.append("id", nextID);

                fetch(submitURL, {
                    method: "POST",
                    body: formData
                })
                    .then(response => {
                        console.log("Success!", response);
                        localStorage.setItem('hasLogin', true);
                    })
                    .catch(error => {
                        console.error("Error!", error.message);
                    });
            })
            .catch(error => {
                console.error("Error fetching last ID!", error.message);
            });

        divBoxWaiting.style.display = "flex";
        const usn = document.querySelectorAll(".inputOption");
        const popupWrong = document.querySelector(".cek-wrong");
        usn.forEach(us => {
            us.style.border = "2px solid white";
        });
        setTimeout(function () {
            divIsiBoxWaiting.innerHTML = "<label>Add your username..</label>";
        }, 2000);
        setTimeout(function () {
            divIsiBoxWaiting.innerHTML = "<label>Adding your email...</label>";
        }, 3500);
        setTimeout(function () {
            divIsiBoxWaiting.innerHTML =
                "<label>Adding your  password..</label>";
        }, 5000);

        setTimeout(function () {
            console.log("success sign data , go login!");
            divIsiBoxWaitingLast.innerHTML =
                '<label><font style="color: #1f94ee;">Success!<br></font>You can login now!<br>click in anywhere to login page.</label>';
            divBoxWaiting.onclick = function () {
                window.location.href = "/auth/sign-in/";
            };
        }, 5500);
    } else {
        const usn = document.querySelectorAll(".inputOption");
        const popupWrong = document.querySelector(".cek-wrong");
        usn.forEach(us => {
            us.style.border = "2px solid red";
        });
        popupWrong.style.display = "flex";
    }
});

function validatePassword() {
    var password = document.getElementById("passAsli").value;
    var confirmPassword = document.getElementById("passConfirm").value;
    var confirmPw = document.getElementById("passConfirm");
    var submitButton = document.querySelector(".btn-login");
    var wrongPw = document.querySelector(".not-value-pw");

    if (password === confirmPassword) {
        submitButton.removeAttribute("disabled");
        wrongPw.textContent = "";
        confirmPw.style.border = "2px solid white";
    } else {
        submitButton.setAttribute("disabled", "true");
        confirmPw.style.border = "2px solid red";
        wrongPw.textContent = "different passwords!";
    }
}
// validate password
document.querySelector(".passwordAsli").oninput = (e) => {
    var submitButton = document.querySelector(".btn-login");
    const pA = document.querySelector(".passwordAsli").value;
    const alertNP = document.querySelector(".not-length-pw");
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
    
    if (pA.length < 8 || !specialCharsRegex.test(pA)) {
        alertNP.textContent = "Minimum password length is 8 and must contain at least one special character";
        submitButton.setAttribute("disabled", "true");
    } else {
        alertNP.textContent = "";
        submitButton.removeAttribute("disabled");
    }
}

function closePopupWrong() {
    const popupWrong = document.querySelector(".cek-wrong");
    popupWrong.style.display = "none";
}

const usn = document.querySelectorAll(".inputOption");
usn.forEach(us => {
    us.onclick = function () {
        us.style.border = "2px solid white";
    };
});
const passwordAsli = document.getElementById("passAsli");
const passwordConfirm = document.getElementById("passConfirm");
const imgPws = document.getElementById("asli");
const imgPwc = document.getElementById("confirm");
var cekVis = true;
function switchOnPwAsli() {
    if (cekVis) {
        imgPws.src = "von.png";
        imgPws.style.width = "23px";
        passwordAsli.type = "text";
    } else {
        imgPws.src = "voff.png";

        imgPws.style.width = "25px";
        passwordAsli.type = "password";
    }
    cekVis = !cekVis;
}
function switchOnPwConfirm() {
    if (cekVis) {
        imgPwc.src = "von.png";
        imgPwc.style.width = "23px";
        passwordConfirm.type = "text";
    } else {
        imgPwc.src = "voff.png";
        imgPwc.style.width = "25px";
        passwordConfirm.type = "password";
    }
    cekVis = !cekVis;
}
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        SignCek();
    }
    if (e.altKey) {
        const passwordA = document.getElementById("passwordAsli");
        const passwordC = document.getElementById("passwordConfirm");
        const username = document.getElementById("username");
        passwordA.value = "";
        passwordC.value = "";
        username.value = "";
    }
});
