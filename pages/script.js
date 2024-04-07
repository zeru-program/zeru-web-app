// cptyt
console.log("zeru website. created by Justine, © 2024 all rights reserved.");

// navbar system
const navClicks = document.querySelectorAll(".link-item");
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
var conImgTalk = document.querySelector(".con-img-talk");
var lastScrollTop = 0;
var isLogoTranslated = false;

document.addEventListener("DOMContentLoaded", function () {
    logo.style.animation = "trasl 1.5s ease";
    title.style.animation = "traslRight 1s ease";
    subtitle.style.animation = "traslRight 2s ease";
    btnTalk.style.animation = "traslRight 2.5s ease";
    conImgTalk.style.animation = "traslRight 3s ease";
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
            conImgTalk.style.animation = "traslRightOut 3s ease";
            logo.classList.add("translated");
            title.classList.add("translatedRight");
            subtitle.classList.add("translatedRight");
            btnTalk.classList.add("translatedRight");
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
        conImgTalk.style.animation = "traslRight 3s ease";
        logo.classList.remove("translated");
        title.classList.remove("translatedRight");
        subtitle.classList.remove("translatedRight");
        btnTalk.classList.remove("translatedRight");
        conImgTalk.classList.remove("translatedRight");
        isLogoTranslated = false;
    }
}

// system image slider
const slider = document.getElementById("slider");
const cr1 = document.getElementById("r1");
const cr2 = document.getElementById("r2");
const cr3 = document.getElementById("r3");
const cr4 = document.getElementById("r4");
const imgp1 = document.getElementById("imgp1");
const imgp2 = document.getElementById("imgp2");
const imgp3 = document.getElementById("imgp3");
const imgp4 = document.getElementById("imgp4");
let startX;
let currentIndex = 0;

slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", e => {
    if (startX) {
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        if (diffX > 10) {
            if (currentIndex < slider.children.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        } else if (diffX < -10) {
            if (currentIndex > 0) {
                currentIndex--;
            } /*else {
          currentIndex = slider.children.length - 1;
        } */
            updateSlider();
        }

        startX = null;
    }
});
function gantiSlideOtomatis() {
    currentIndex += 1;
    if (currentIndex >= slider.children.length) {
        currentIndex = 0;
    }
    updateSlider();
}
setInterval(gantiSlideOtomatis, 5000);
function updateSlider() {
    const translateValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
    cr1.classList.remove("on");
    cr2.classList.remove("on");
    cr3.classList.remove("on");
    cr4.classList.remove("on");

    imgp1.classList.remove("opacityOn");
    imgp2.classList.remove("opacityOn");
    imgp3.classList.remove("opacityOn");
    imgp4.classList.remove("opacityOn");

    if (currentIndex === 0) {
        cr1.classList.add("on");
        imgp1.classList.add("opacityOn");
    } else if (currentIndex === 1) {
        cr2.classList.add("on");
        imgp2.classList.add("opacityOn");
    } else if (currentIndex === 2) {
        cr3.classList.add("on");
        imgp3.classList.add("opacityOn");
    } else if (currentIndex === 3) {
        cr4.classList.add("on");
        imgp4.classList.add("opacityOn");
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


// integrisàsi ke airtable database
const token = 'patr7CaP3OREqdu3U.71469001afdda2024f6ad10f1989a0fc08079ac5dfbee77f704789d79830be92';
const endpoint = 'https://api.airtable.com/v0/appaPLvXBCHaWhQfA/Sheet1/';

fetch(endpoint, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
})
.catch(error => {
  console.error('Error:', error);
});
