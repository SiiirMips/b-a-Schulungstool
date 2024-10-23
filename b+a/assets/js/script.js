// JavaScript isn't really necessary for this task since Bootstrap's classes handle the responsive behavior.
// But if you want to control extra custom behavior, you can add logic here. 

window.addEventListener('resize', function() {
    let fullSidebar = document.getElementById('fullSidebar');
    let compactSidebar = document.getElementById('compactSidebar');

    if (window.innerWidth > 1198) {
        fullSidebar.classList.remove('d-none');
        compactSidebar.classList.add('d-none');
    } else {
        fullSidebar.classList.add('d-none');
        compactSidebar.classList.remove('d-none');
    }
});

// Aktiviert alle Tooltips auf der Seite
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
document.addEventListener('DOMContentLoaded', function () {
    // Holt den aktuellen Dateinamen und Pfad aus der URL
    const currentPath = window.location.pathname;
    
    // Selektiert alle Links in der großen und kompakten Sidebar
    const navLinks = document.querySelectorAll('.nav-link');

    // Schleife durch alle Links und überprüft, ob der href-Wert mit dem aktuellen URL-Pfad übereinstimmt
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Prüft, ob der aktuelle Pfad in der URL mit dem href-Attribut des Links übereinstimmt
        if (currentPath === linkPath) {
            // Fügt die 'active' Klasse hinzu, wenn der Link der aktuellen Seite entspricht
            link.classList.add('active');
        } else {
            // Entfernt die 'active' Klasse von allen anderen Links
            link.classList.remove('active');
        }
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        const currentPage = window.location.pathname; // Holt den aktuellen Pfad
        const currentPageElement = document.getElementById('current-page');
        
        // Definiere die Breadcrumb-Texte basierend auf der aktuellen Seite
        let pageTitle = '';

        if (currentPage.includes('dashboard')) {
            pageTitle = 'Dashboard';
        } else if (currentPage.includes('kurse')) {
            pageTitle = 'Kurse';
        } else if (currentPage.includes('kursteilnahmen')) {
            pageTitle = 'Kursteilnahmen';
        } else if (currentPage.includes('benutzer')) {
            pageTitle = 'Benutzer';
        } else if (currentPage.includes('gruppen')) {
            pageTitle = 'Gruppen';
        } else if (currentPage.includes('einstellungen')) {
            pageTitle = 'Einstellungen';
        }

        // Setzt den aktuellen Seitentitel in den Breadcrumb
        currentPageElement.textContent = pageTitle;
    });

// Vertical Bar Chart for Erstellte Kursteilnahmen
var ctxBar = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        datasets: [{
            label: 'Erstellte Kursteilnahmen',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // Beispielwerte
            backgroundColor: '#2da05f',
            borderRadius: 5,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Verhindert das Beibehalten des Seitenverhältnisses
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

// Doughnut Chart for Status der Kursteilnahmen
var ctxPie = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Unerledigt, Frist läuft noch', 'Unerledigt, überfällig', 'Erledigt'],
        datasets: [{
            data: [50, 20, 30], // Beispielwerte
            backgroundColor: ['#007bff', '#dc3545', '#28a745'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Verhindert das Beibehalten des Seitenverhältnisses
        cutout: '80%' // For the rounded center
    }
});
