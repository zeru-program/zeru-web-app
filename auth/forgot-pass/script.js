const form = document.getElementById("formSubm");
const signInURL = "https://script.google.com/macros/s/AKfycbyX5kHUlX8eMxdUB0tlq6N8AsYxCPq6QT8KXanPgUyUU-vl3SHmuSJOGdtPuRsRlujE/exec";
const updatePasswordURL = "https://script.google.com/macros/s/AKfycbyX5kHUlX8eMxdUB0tlq6N8AsYxCPq6QT8KXanPgUyUU-vl3SHmuSJOGdtPuRsRlujE/exec?updatePassword=true";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputEmail = document.getElementById('email').value;
    const inputPasswordOld = document.getElementById('passOld').value;
    const inputPasswordNew = document.getElementById('passNew').value;
    
    fetch(`${signInURL}?usernameOrEmail=${inputEmail}&password=${inputPasswordOld}`)
        .then(res => res.json())
        .then(data => {
            const users = data.content.slice(1);
            const foundUser = users.find(user => user[3] === inputEmail && user[2] === inputPasswordOld);
            if (foundUser) {
                const newPassword = inputPasswordNew; // Password baru dari input pengguna
      const email = inputEmail; // Contoh email
        const passwordNew = inputPasswordNew; // Contoh password baru
        
        // Buat URL dengan parameter yang sesuai
        const updatePasswordURL = `https://script.google.com/macros/s/AKfycbyX5kHUlX8eMxdUB0tlq6N8AsYxCPq6QT8KXanPgUyUU-vl3SHmuSJOGdtPuRsRlujE/exec?updatePw=true&email=${email}&passNew=${passwordNew}`;
        
        // Kirim permintaan HTTP
        fetch(updatePasswordURL)
          .then(response => {
            if (response.ok) {
            console.log('Password updated successfully', response);
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });

            } else {
                alert("Invalid username/email or password");
            }
        })
        .catch(error => {
            console.error("Error:", error.message);
        });
});


    function closePopupWrong() {
      const wrongPopup = document.querySelector('.cek-wrong');
      wrongPopup.style.display = "none";

    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        resetCek();
      }
      if (e.altKey) {
        const usn = document.getElementById('usn');
        usn.value = "";
        const mail = document.getElementById('email');
       mail.value = "";
      }
    });

   
    document.getElementById('email').addEventListener('click', function () {
      const email = document.getElementById('email');
      email.style.border = "2px solid white";
    });
    document.getElementById('passOld').addEventListener('click', function () {
      document.getElementById('passOld').style.border = "2px solid white";
    });
    document.getElementById('passNew').addEventListener('click', function () {
      document.getElementById('passNew').style.border = "2px solid white";
    });
  