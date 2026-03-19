$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
$("#contact-form").submit(function (event) {
    event.preventDefault();

    emailjs.init("xWYkeQpv8WPfptd0y");

    const params = {
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        phone: $('input[name="phone"]').val(),
        message: $('textarea[name="message"]').val()
    };

    emailjs.send('service_iizrq4s', 'template_7wd85fh', params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            $("#contact-form")[0].reset();
            alert("Pesan berhasil dikirim, tunggu balasan<3");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Pesan gagal dikirim ");
        });
});

    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Nazla";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Kembali ke Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Fotografi", "Backend Development", "Desain Grafis"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

/*async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
} */

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="assets/images/projects/${project.image}.webp" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
           
             <a href="${project.links.code}" class="btn" target="_blank">
   Lihat <i class="fas fa-eye"></i>
</a>

          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

/*fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
}); */

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

/* ===== EXPERIENCE CARD CLICK EFFECT ===== */
function activeCard(element) {
    const timeline = document.querySelector('.timeline');
    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        item.classList.remove('active');
    });

    if (element.classList.contains('active')) {
        element.classList.remove('active');
        timeline.classList.remove('blur');
    } else {
        element.classList.add('active');
        timeline.classList.add('blur');
    }
}


// 1. DATA LANGSUNG DIMASUKKAN KE VARIABEL
const dataSkills = [
    { "name": "andorid", "icon": "https://img.icons8.com/?size=48&id=04OFrkjznvcd&format=png&color=000000" },
    { "name": "HTML5", "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { "name": "CSS3", "icon": "https://img.icons8.com/color/48/000000/css3.png" },
    { "name": "JavaScript", "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { "name": "Java", "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
    { "name": "PHP", "icon": "https://img.icons8.com/offices/48/000000/php-logo.png" },
    { "name": "Python", "icon": "https://img.icons8.com/color/48/000000/python--v1.png" },
    { "name": "C++", "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { "name": "MySQL", "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png" },
    { "name": "Desain", "icon": "https://img.icons8.com/?size=48&id=eQkArL7FJogn&format=png&color=000000" },
    { "name": "Fotografi", "icon": "https://img.icons8.com/?size=48&id=u6A1fcsd1q2J&format=png&color=000000" },
    { "name": "Figma", "icon": "https://img.icons8.com/?size=48&id=zfHRZ6i1Wg0U&format=png&color=000000" },
    { "name": "Canva", "icon": "https://img.icons8.com/?size=48&id=iWw83PVcBpLw&format=png&color=000000" },
    { "name": "vsc", "icon": "https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png&color=000000" },
    { "name": "Vs", "icon": "https://img.icons8.com/?size=48&id=ezj3zaVtImPg&format=png&color=000000" },
    { "name": "adobe lightroom", "icon": "https://img.icons8.com/?size=48&id=19313&format=png&color=000000" },
    { "name": "snapseed", "icon": "https://img.icons8.com/?size=48&id=dqlXCvQrhIDX&format=png&color=000000" },
    { "name": "GitHub", "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png" }
];

const dataProjects = [
    { "name": "andorid List to List", "desc": "Aplikasi andorid List to List berbasis Java dan XML.", "image": "andorid", "category": "andorid", "links": { "code": "https://github.com/NazlaAulia/List-to-list-app1.git" } },
    { "name": "Aplikasi Kolam Renang UNESA", "desc": "Aplikasi desktop untuk pengelolaan data kolam renang UNESA menggunakan Java.", "image": "kolamrenang", "category": "desktop", "links": { "code": "https://github.com/NazlaAulia/pemesanan-tiket-kolam-renang-unesa.git" } },
    { "name": "Aplikasi KRS & KHS", "desc": "Aplikasi desktop sistem KRS dan KHS berbasis Java.", "image": "visual", "category": "desktop", "links": { "code": "https://github.com/NazlaAulia/ProjectKRSKHS.git" } },
    { "name": "Web Portofolio", "desc": "Website portofolio pribadi menggunakan HTML, CSS dan JavaScript.", "image": "portofolio", "category": "web", "links": { "code": "https://github.com/NazlaAulia/Portfolio-Nazla.git" } },
   
   
];

// 2. PANGGIL FUNGSINYA PAKAI DATA DI ATAS
showSkills(dataSkills);
showProjects(dataProjects);

// Ambil elemen dropdown
const dropdown = document.querySelector('.dropdown');

// Fitur 1: Klik untuk buka/tutup
dropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // Biar klik di dalam sini nggak dianggap klik 'luar'
    dropdown.classList.toggle('active');
});

// Fitur 2: Klik di mana saja untuk menutup (Ini yang kamu mau!)
window.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    }
});