// cptyt
console.log("zeru website. created by Justine, © 2023-2024 all rights reserved.");

// back to top btn
var btn = document.querySelector('#button-to-top');

window.onscroll = (e) => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
}
btn.onclick = (e) => {
  e.preventDefault();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  handleScrollUp();
}





// navbar system
const nav = document.querySelector('.con-nav');
const home = document.getElementById('home');
const navClicks = document.querySelectorAll(".link-item");

window.onscroll = (e) => {
  if (document.documentElement.scrollTop >= (home.offsetHeight - nav.offsetHeight)) {
    nav.classList.add('nav-shadow');
  } else {
    nav.classList.remove('nav-shadow');
  }
};

navClicks.forEach(navClick => {
    navClick.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        navClick.classList.add("active");
    });
});
var valueBar = false;
function changeImgNav() {
    if (valueBar) {
        const navLinks = document.querySelector(".nav-links");
        const getNavOn = document.querySelector(".bar-nav");
        getNavOn.src = "menu.png";
        navLinks.classList.remove("act-link");
    } else {
        const navLinks = document.querySelector(".nav-links");
        const getNavOn = document.querySelector(".bar-nav");
        getNavOn.src = "cross.png";
        navLinks.classList.add("act-link");
    }
    valueBar = !valueBar;
}
const toHome = document.getElementById("toHome");
const toAbout = document.getElementById("toAbout");
const toSkils = document.getElementById("toSkils");
const toPortofolio = document.getElementById("toPortofolio");
const toContact = document.getElementById("toContact");

toHome.onclick = function () {
    window.location.href = "#home";
};
toSkils.onclick = function () {
    window.location.href = "#skils";
};
toAbout.onclick = function () {
    window.location.href = "#about";
};
toPortofolio.onclick = function () {
    window.location.href = "#portofolio";
};
toContact.onclick = function () {
    window.location.href = "#contact";
};
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".container");
    const navLinks = document.querySelectorAll(".link-item");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;

            if (
                pageYOffset >= sectionTop &&
                pageYOffset < sectionTop + sectionHeight
            ) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (
                link.id ===
                `to${
                    currentSection.charAt(0).toUpperCase() +
                    currentSection.slice(1)
                }`
            ) {
                link.classList.add("active");
            }
        });
    });
});

// shorcut code
document.addEventListener("keydown", function (e) {
    if ((e.altKey && e.key === "N") || e.key === "n") {
        const navLinks = document.querySelector(".nav-links");
        const getNavOn = document.querySelector(".bar-nav");
        getNavOn.src = "cross.png";
        navLinks.classList.add("act-link");
    }
    if ((e.altKey && e.key === "C") || e.key === "c") {
        const navLinks = document.querySelector(".nav-links");
        const getNavOn = document.querySelector(".bar-nav");
        getNavOn.src = "menu.png";
        navLinks.classList.remove("act-link");
    }
});
const containers = document.querySelectorAll(".container");
containers.forEach(con => {
    con.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        const getNavOn = document.querySelector(".bar-nav");
        getNavOn.src = "menu.png";
        navLinks.classList.remove("act-link");
    });
});

// system scrolling
var logo = document.querySelector(".logo-home-isi");
var title = document.getElementById("homeTitle");
var subtitle = document.getElementById("homeSubtitle");
var aboutContainer = document.getElementById("about");
var aboutTitle = document.getElementById("aboutTitle");
var aboutSubtitle = document.getElementById("aboutSubtitle");
var skilsContainer = document.getElementById("skils");
var skilTitle = document.getElementById("skilTitle");
var skilBoxs = document.querySelectorAll(".box");
var btnTalk = document.querySelector(".btn-talk");
var btnCv = document.querySelector(".btn-cv");
var conImgTalk = document.querySelector(".con-img-talk");
var lastScrollTop = 0;
var isLogoTranslated = false;

document.addEventListener("DOMContentLoaded", function () {
    logo.style.animation = "trasl 1.5s ease";
    title.style.animation = "traslRight 1s ease";
    subtitle.style.animation = "traslRight 2s ease";
    btnTalk.style.animation = "traslRight 2.5s ease";
    btnCv.style.animation = "traslRight 3s ease";
    conImgTalk.style.animation = "traslRight 3.5s ease";
});

window.addEventListener("scroll", function () {
    var currentScrollTop = window.scrollY || window.pageYOffset;

    if (currentScrollTop > lastScrollTop) {
        handleScrollDown(currentScrollTop);
    }
    if (currentScrollTop < lastScrollTop) {
        handleScrollUp();
    }

    lastScrollTop = currentScrollTop;
});
function handleScrollDown(currentScrollTop) {
    // Only trigger when currentScrollTop is greater than 40% of the viewport height
    if (currentScrollTop > window.innerHeight * 0.4) {
        if (!isLogoTranslated) {
            logo.style.animation = "traslOut 1.5s ease";
            title.style.animation = "traslRightOut 1s ease";
            subtitle.style.animation = "traslRightOut 2s ease";
            btnTalk.style.animation = "traslRightOut 2.5s ease";
            btnCv.style.animation = "traslRightOut 3s ease";
            conImgTalk.style.animation = "traslRightOut 3.5s ease";
            logo.classList.add("translated");
            title.classList.add("translatedRight");
            subtitle.classList.add("translatedRight");
            btnTalk.classList.add("translatedRight");
            btnCv.classList.add("translatedRight");
            conImgTalk.classList.add("translatedRight");
            isLogoTranslated = true;
        }
    }

    if (
        currentScrollTop >
        aboutContainer.offsetTop - window.innerHeight * 0.3
    ) {
        setTimeout(function () {
            aboutTitle.style.animation = "fadeInDown 1s ease";
            aboutTitle.classList.remove("translateAbout");
        }, 500);
        setTimeout(function () {
            aboutSubtitle.classList.remove("translateAbout");
        }, 1000);
    }

    if (currentScrollTop > skilsContainer.offsetTop - window.innerHeight / 2) {
        skilTitle.style.animation = "backInLeft 1.5s ease";
        skilBoxs.forEach(skilBox => {
            skilBox.style.animation = "fadeIn 5s ease";
        });
    }
}
function handleScrollUp() {
    if (isLogoTranslated) {
        logo.style.animation = "trasl 1.5s ease";
        title.style.animation = "traslRight 1s ease";
        subtitle.style.animation = "traslRight 2s ease";
        btnTalk.style.animation = "traslRight 2.5s ease";
        btnCv.style.animation = "traslRight 3s ease";
        conImgTalk.style.animation = "traslRight 3.5s ease";
        logo.classList.remove("translated");
        title.classList.remove("translatedRight");
        subtitle.classList.remove("translatedRight");
        btnTalk.classList.remove("translatedRight");
        btnCv.classList.remove("translatedRight");
        conImgTalk.classList.remove("translatedRight");
        isLogoTranslated = false;
    }
}


// sistem form submit
const form = document.querySelector(".form");
const popupSucces = document.querySelector(".con-popup-succes");
function submitForm() {
    var formData = new FormData(document.querySelector(".form"));
    fetch("https://sheetdb.io/api/v1/5evyv444o1ogn", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            const btnSubmit = document.querySelector(".submit-form");
            const inputNama = document.getElementById("nama");
            const inputEmail = document.getElementById("email");
            const inputSubjek = document.getElementById("subjek");
            const inputIsiSubjek = document.getElementById("isiSubjek");
            btnSubmit.innerHTML = '<div class="custom-loader"></div>';
            setTimeout(function () {
                popupSucces.style.display = "flex";
                btnSubmit.innerHTML = "Kirim";
            }, 5000);
            setTimeout(function () {
                popupSucces.style.display = "none";
                inputNama.value = "";
                inputEmail.value = "";
                inputSubjek.value = "";
                inputIsiSubjek.value = "";
            }, 11000);
            console.log("Data berhasil dikirim:", data);
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
        });
}

function cekDisabledBtn() {
    const inputNama = document.getElementById("nama");
    const inputEmail = document.getElementById("email");
    const inputSubjek = document.getElementById("subjek");
    const inputIsiSubjek = document.getElementById("isiSubjek");
    const btnSubmit = document.querySelector(".submit-form");
    if (
        inputNama.value.trim() !== "" &&
        inputEmail.value.trim() !== "" &&
        inputSubjek.value.trim() !== "" &&
        inputIsiSubjek.value.trim() !== ""
    ) {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

// redirect button "Let's Talk"
function talk() {
    window.location.href = "#talkHref";
}

// login system and welcoming
const verifyLogin = localStorage.getItem('hasLogin');
const usnUser = localStorage.getItem('username');
const emailUser = localStorage.getItem('email');
const passUser = localStorage.getItem('password');
const textWelcome = document.getElementById('homeTitle');
const textUsnNav = document.getElementById('textUserNav');
const signIn = document.getElementById('sign-in-btn');
const signUp = document.getElementById('sign-up-btn');
window.onload = () => {
  if (verifyLogin) {
    //text
    if (usnUser.split(" ").length > 6) {
    const shortenedUser = usnUser.split(" ").slice(0, 6).join(" ") + "..";
    textWelcome.innerText = 'Welcome ' + shortenedUser + '!';
  } else {
    textWelcome.innerText = 'Welcome ' + usnUser + '!';
  }
  
  // view sign
   textUsnNav.classList.remove('d-none');
   textUsnNav.classList.add('d-flex');
   textUsnNav.textContent = "Hello " + usnUser + "!";
   logout.classList.remove('d-none');
   logout.classList.add('d-flex');
   signIn.style.display = "none";
   signUp.style.display = "none";
  } else {
    textWelcome.innerText = 'Welcome !';
  }
}


// download cv
function downloadCv() {
  const anchor = document.createElement('a');
  anchor.href = "JUSTINE_CV_2024_BOGOR_INDONESIA.pdf";
  anchor.download = "JUSTINE_CV_2024_BOGOR_INDONESIA.pdf";

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

}

// log out
function logoutUser() {
    localStorage.removeItem('hasLogin');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  location.reload();
}