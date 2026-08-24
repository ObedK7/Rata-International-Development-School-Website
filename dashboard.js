// Select Mobile Menu Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Open Sidebar
hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
});

// Helper function to close sidebar
function closeMobileMenu() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

// Close Sidebar on 'X' click or overlay click
closeMenuBtn.addEventListener('click', closeMobileMenu);
sidebarOverlay.addEventListener('click', closeMobileMenu);