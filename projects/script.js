$(document).ready(function () {
    // Menu toggle
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
    });

    // Panggil fungsi tampilkan projek pake data manual
    showProjects(dataProjects);
});

// Judul Tab Otomatis
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Nazla";
    } else {
        document.title = "Kembali ke protofolio";
    }
});

// DATA PROJEK (Ganti isi di sini kalau mau nambah projek baru)
const dataProjects = [
    { "name": "andorid List to List", "desc": "Aplikasi andorid List to List berbasis Java dan XML.", "image": "andorid", "category": "andorid", "links": { "code": "https://github.com/NazlaAulia/List-to-list-app1.git" } },
    { "name": "Aplikasi Kolam Renang UNESA", "desc": "Aplikasi desktop untuk pengelolaan data kolam renang UNESA menggunakan Java.", "image": "kolamrenang", "category": "desktop", "links": { "code": "https://github.com/NazlaAulia/pemesanan-tiket-kolam-renang-unesa.git" } },
    { "name": "Aplikasi KRS & KHS", "desc": "Aplikasi desktop sistem KRS dan KHS berbasis Java.", "image": "visual", "category": "desktop", "links": { "code": "https://github.com/NazlaAulia/ProjectKRSKHS.git" } },
    { "name": "Web List to List", "desc": "Aplikasi web sederhana hasil pelatihan pengembangan web.", "image": "webpe", "category": "web", "links": { "code": "https://github.com/NazlaAulia/Pelatihan-To-dolist.git" } },
    { "name": "Web Portofolio", "desc": "Website portofolio pribadi menggunakan HTML, CSS dan JavaScript.", "image": "portofolio", "category": "web", "links": { "code": "https://github.com/NazlaAulia/Portfolio-Nazla.git" } },
    { "name": "Desain Grafis", "desc": "Kumpulan hasil desain grafis menggunakan Canva dan Photoshop", "image": "desain1", "category": "desain", "links": { "code": "https://drive.google.com/drive/folders/1CXFW5Tpb6_Y9IkxdbkOVHh6Xba_j9Fln" } },
    { "name": "Fotografi", "desc": "Kumpulan hasil foto dan lomba fotografi", "image": "foto", "category": "fotografi", "links": { "code": "https://drive.google.com/drive/folders/10k9pRUS53cj1uy9E-RC8-0ynLdfs10Eq" } }
];

// FUNGSI UTAMA TAMPILKAN PROJEK
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    
    // Path sakti biar gambar muncul di mana aja
    let basePath = window.location.pathname.includes('projects/') ? '../' : '';

    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 380px; margin: 1rem">
                <img draggable="false" src="${basePath}assets/images/projects/${project.image}.webp" alt="project" />
                <div class="content">
                    <div class="tag"><h3>${project.name}</h3></div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="${project.links.code}" class="btn" target="_blank">Lihat <i class="fas fa-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectsHTML;

    // ISOTOPE (Filternya)
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
}

// Disable Inspect Element
document.onkeydown = function (e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 67 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
}

