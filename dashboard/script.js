let urlDb = 'https://zerupgmm-default-rtdb.firebaseio.com/';

// dashboard item system
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;
	
	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}
window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
// dashboard item system

//print project
const getBodyProject = document.getElementById('project-body');
fetch(urlDb + 'project.json')
.then(res=>res.json())
.then(data => {
  for (let key in data) {
    var val = data[key]
    //console.log(val)
    const tableProject = document.getElementById('project-body')
    var elem = document.createElement('tr')
    elem.innerHTML = `
     <td>${val.id}</td>
     <td>${val.title}</td>
     <td>${val.description}</td>
     <td>${val.tech}</td>
     <td>${val.display}</td>
     <td>${val.url}</td>
     <td>${val.date}</td>
     <td><button style="padding:10px;margin-right:8px; background:yellow;" onclick="editProject('${key}', this)">EDIT</button><button style="padding:10px; background:red;" onclick="deleteProject('${key}')">DELETE</button></td>
    `;
    tableProject.appendChild(elem)
  }
})
.catch(e => console.error(e));
//handle form project
const formProject = document.getElementById('form-project')
formProject.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const tech = document.getElementById('tech').value;
  const desc = document.getElementById('desc').value;
  const disp = document.getElementById('disp').value;
  const url = document.getElementById('urlP').value;
  const date = document.getElementById('date').value;
  
  fetch(urlDb + "project.json")
  .then(res => res.json())
  .then(data => {
    let length = 0;
    
    for (let key in data) {
      length++;
    }
    
    var nextId = length + 1;
    
    const datas = {
      id: nextId,
      title: title,
      tech: tech,
      description: desc,
      display: disp,
      url: url,
      date: date
    };
    
    fetch(urlDb + 'project.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datas)
    })
    .then(res => {
      if (res.ok) {
        alert('success')
        location.reload();
      }
    })
  })
});
// handle of delete project
function deleteProject(key) {
//  console.log(key)
fetch(urlDb + `project/${key}.json`, {
  method: "DELETE"
})
.then(res => {
  if (res.ok) {
    alert('success removed')
    location.reload();
  }
})
.catch(e => console.error(e))
}

//print portofolio
const getBodyPorto = document.getElementById('portofolio-body');
fetch(urlDb + 'portofolio.json')
.then(res=>res.json())
.then(data => {
  for (let key in data) {
    var val = data[key]
    //console.log(val)
    const tableProject = document.getElementById('portofolio-body')
    var elem = document.createElement('tr')
    elem.innerHTML = `
     <td>${val.id}</td>
     <td>${val.title}</td>
     <td>${val.url}</td>
     <td><button style="padding:10px;margin-right:8px; background:yellow;" onclick="editPorto('${key}', this)">EDIT</button><button style="padding:10px; background:red;" onclick="deletePorto('${key}')">DELETE</button></td>
    `;
    tableProject.appendChild(elem)
  }
})
.catch(e => console.error(e));
// handle of delete portofolio
function deletePorto(key) {
//  console.log(key)
fetch(urlDb + `portofolio/${key}.json`, {
  method: "DELETE"
})
.then(res => {
  if (res.ok) {
    alert('success removed')
    location.reload();
  }
})
.catch(e => console.error(e))
}



// log out
function logoutUser() {
    localStorage.removeItem('hasLogin');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  location.reload();
}