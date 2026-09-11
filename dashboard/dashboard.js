// Select Mobile Menu Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const studentTableBody = document.getElementById('studentTableBody');


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



// Add at the top of dashboard.js
async function verifyAdminAuth() {
    try {
        const response = await fetch('api/check_auth.php');
        const data = await response.json();

        if (!data.authenticated) {
            // Unauthenticated user -> Bounce back to login
            window.location.href = 'login.html';
        }
    } catch (err) {
        window.location.href = 'login.html';
    }
}

// Execute session check immediately when dashboard loads
document.addEventListener('DOMContentLoaded', () => {
    verifyAdminAuth();
    loadStudents(); // Loads real data after auth confirmation
});


// ==========================================
// 2. RENDER TABLE ROWS WITH ACTION DROPDOWNS
// ==========================================
function renderTable(studentsList) {
    // Clear existing static rows
    studentTableBody.innerHTML = '';

    // If no students found in database
    if (!studentsList || studentsList.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 20px;">
                    No registered students found.
                </td>
            </tr>
        `;
        return;
    }

    // Loop through each student record and generate rows
    studentsList.forEach(student => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
    <td data-label="ID">#${student.id}</td>
    <td data-label="Full Name"><strong>${student.child_name}</strong></td>
    <td data-label="Contact">${student.mother_contact || student.father_contact || 'N/A'}</td>
    <td data-label="Class">${student.class_admitted}</td>
    <td data-label="Date Registered">${student.created_at ? student.created_at.split(' ')[0] : 'N/A'}</td>
    <td data-label="Status">
        <span class="badge badge-${(student.status || 'pending').toLowerCase()}">
            ${student.status || 'Pending'}
        </span>
    </td>
    <td data-label="Actions" class="action-cell">
        <div class="dropdown">
            <button class="btn-icon dropdown-toggle" onclick="toggleDropdown(event, ${student.id})">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
            <div id="dropdown-${student.id}" class="dropdown-menu">
                <a href="#" class="dropdown-item" onclick="viewStudent(${student.id})">
                    <i class="fa-solid fa-eye"></i> View Details
                </a>
                <a href="#" class="dropdown-item" onclick="editStudent(${student.id})">
                    <i class="fa-solid fa-pen"></i> Edit Record
                </a>
                <a href="#" class="dropdown-item" onclick="approveStudent(${student.id})">
                    <i class="fa-solid fa-check"></i> Approve
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item danger" onclick="deleteStudent(${student.id})">
                    <i class="fa-solid fa-trash"></i> Delete
                </a>
            </div>
        </div>
    </td>
`;
        studentTableBody.appendChild(tr);
    });
}


// ==========================================
// 3. DROPDOWN TOGGLE & CLOSE LOGIC
// ==========================================
function toggleDropdown(event, studentId) {
    event.stopPropagation(); // Prevents immediate close from window listener

    const targetMenu = document.getElementById(`dropdown-${studentId}`);
    const isAlreadyOpen = targetMenu.classList.contains('show');

    // Close any other open dropdown menus on the page first
    closeAllDropdowns();

    // If it wasn't open before, open it now
    if (!isAlreadyOpen) {
        targetMenu.classList.add('show');
    }
}

// Close all active action menus
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
    });
}

// Close open dropdowns if user clicks anywhere outside
window.addEventListener('click', closeAllDropdowns);


// ==========================================
// 4. ACTION HANDLER STUBS (PLACEHOLDERS)
// ==========================================
function viewStudent(id) {
    closeAllDropdowns();
    console.log("Viewing student details for ID:", id);
}

function editStudent(id) {
    closeAllDropdowns();
    console.log("Editing student record for ID:", id);
}

function approveStudent(id) {
    closeAllDropdowns();
    console.log("Approving student status for ID:", id);
}

function deleteStudent(id) {
    closeAllDropdowns();
    if (confirm("Are you sure you want to delete this student record?")) {
        console.log("Deleting student record ID:", id);
    }
}


