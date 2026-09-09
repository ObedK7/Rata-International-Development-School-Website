const parentRadios = document.querySelectorAll(".parent-toggle");
const motherData = document.querySelector(".mother-data");
const fatherData = document.querySelector(".father-data");
const guardianData = document.querySelector(".guardian-data");
const bothData = document.querySelector(".both-data");


// ===============================================================
// REGISTRATION FORM VALIDATION SCRIPT DOM ELEMENTS CHILD DETAILS
// ===============================================================

const registrationForm = document.querySelector("#registrationForm");
const childName = document.getElementById('childName');
const placeOfBirth = document.getElementById('placeOfBirth');
const dateOfBirth = document.getElementById('dateOfBirth');
const homeTown = document.getElementById('homeTown');
const motherTongue = document.getElementById('motherTongue');
const classAdmitted = document.getElementById('classAdmitted');
const male = document.getElementById('check-male');
const female = document.getElementById('check-female');

// ==========================
// BOTH PARENTS DOM ELEMENTS 
// ==========================
const bothMotherName = document.getElementById('bothMotherName');
const bothMotherAddress = document.getElementById('bothMotherAddress');
const bothMotherContact = document.getElementById('bothMotherContact');


const bothFatherName = document.getElementById('bothFatherName');
const bothFatherAddress = document.getElementById('bothFatherAddress');
const bothFatherContact = document.getElementById('bothFatherContact');

// =============================
// MOTHER DOM ELEMENT SELECTION
// =============================
const motherName = document.getElementById('motherName');
const motherAddress = document.getElementById('motherAddress');
const motherContact = document.getElementById('motherContact');
const motherContactHint = document.getElementById('motherContactHint')

// =============================
// FATHER DOM ELEMENT SELECTION
// =============================
const fatherName = document.getElementById('fatherName');
const fatherAddress = document.getElementById('fatherAddress');
const fatherContact = document.getElementById('fatherContact');
const fatherContactHint = document.getElementById('fatherContactHint')

// ===============================
// GUARDIAN DOM ELEMENT SELECTION
// ===============================
const guardianName = document.getElementById('guardianName');
const guardianAddress = document.getElementById('guardianAddress');
const guardianContact = document.getElementById('guardianContact');
const guardianContactHint = document.getElementById('guardianContactHint')

// ===================================
// FEEDBACK DOM ELEMENT #CONTACT HINT
// ===================================
const bothMotherContactHint = document.getElementById('bothMotherContactHint');
const bothFatherContactHint = document.getElementById('bothFatherContactHint');

// ===================================
// PARENTS RADIO TOGGLE HIDE FUNCTION
// ===================================
function hideAllDataBlocks() {
    // Safe execution checks ensure script doesn't crash on pages without these forms
    if (motherData) motherData.style.display = "none";
    if (fatherData) fatherData.style.display = "none";
    if (guardianData) guardianData.style.display = "none";
    if (bothData) bothData.style.display = "none";
}

// Initial hide call (Safely executed via function layout)
hideAllDataBlocks();



// ================================
// SAFE FORM CONDITIONAL EXECUTION
// ================================

// ===================================
// PARENTS RADIO TOGGLE & RESET LOGIC
// ===================================
if (parentRadios.length > 0) {
    parentRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
            // 1. Hide all blocks
            hideAllDataBlocks();

            // 2. Clear validation hints and red borders ONLY (Do NOT clear .value here)
            const hints = [motherContactHint, fatherContactHint, guardianContactHint, bothFatherContactHint, bothMotherContactHint];
            hints.forEach(hint => { if (hint) hint.textContent = ''; });

            const contacts = [motherContact, fatherContact, guardianContact, bothMotherContact, bothFatherContact];
            contacts.forEach(contact => { if (contact) contact.style.borderColor = ''; });

            // 3. Display ONLY the newly selected section
            if (this.id === "check-father" && fatherData) {
                fatherData.style.display = "block";
            } else if (this.id === "check-mother" && motherData) {
                motherData.style.display = "block";
            } else if (this.id === "check-guardian" && guardianData) {
                guardianData.style.display = "block";
            } else if (this.id === "check-both-parents" && bothData) {
                bothData.style.display = "block";
            }
        });
    });
}






// 3. Display ONLY the newly selected section
function hideAllDataBlocks() {
    const blocks = [fatherData, motherData, guardianData, bothData];
    blocks.forEach(block => {
        if (block) {
            block.style.display = "none";
            block.querySelectorAll('input, select').forEach(input => input.value = '');
        }
    });
}


if (parentRadios.length > 0) {
    parentRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
            // 1. Hide all blocks
            hideAllDataBlocks();
            if (this.id === "check-father" && fatherData) {
                fatherData.style.display = "block";

            } else if (this.id === "check-mother" && motherData) {
                motherData.style.display = "block";

            } else if (this.id === "check-guardian" && guardianData) {
                guardianData.style.display = "block";

            } else if (this.id === "check-both-parents" && bothData) {
                bothData.style.display = "block";

            }
        });
    });
}




// ==========================================
// MOTHER HELP FUNCTION
// ==========================================

// ==========================
// MOTHER CONTACT VALIDATION
// ==========================


motherContact.addEventListener('focus', () => {
    motherContactHint.textContent = 'Please enter a 10 digit number.';
    motherContactHint.style.color = 'gray';
})

motherContact.addEventListener('blur', (e) => {
    const motherContactInput = motherContact.value;

    const parentSelected = document.querySelector('input[name="radio"]:checked')
    if (parentSelected && (parentSelected.id === 'check-mother' || parentSelected.id === 'check-both-parents')) {
        if (motherContactInput.trim() === '') {
            motherContactHint.textContent = 'Please provide all fields.'
            motherContactHint.style.color = 'red'
            motherContact.style.borderColor = 'red'
        }
        else if (isNaN(motherContactInput)) {
            motherContactHint.textContent = 'Please enter digits only.';
            motherContactHint.style.color = 'red';
            motherContact.style.borderColor = 'red';
        }
        else if (motherContactInput.length !== 10) {
            motherContactHint.textContent = 'Number should be 10-digit long.'
            motherContactHint.style.color = 'red'
            motherContact.style.borderColor = 'red'
        }
        else if (!motherContactInput.startsWith('0')) {
            motherContactHint.textContent = 'Number should begin with 0.'
            motherContactHint.style.color = 'red'
            motherContact.style.borderColor = 'red'
        }
        else {
            motherContact.style.borderColor = ''
            motherContactHint.textContent = '';
        }
    }
})

// =========================
// FATHER HELPER FUNCTION
// =========================


// ===============================
// FATHER CONTACT VALIDATION DATA
// ===============================


fatherContact.addEventListener('focus', () => {
    fatherContactHint.textContent = 'Please enter a 10 digit number.';
    fatherContactHint.style.color = 'gray';
})

fatherContact.addEventListener('blur', (e) => {
    const fatherContactInput = fatherContact.value;
    const parentSelected = document.querySelector('input[name="radio"]:checked')
    if (parentSelected && (parentSelected.id === 'check-father' || parentSelected.id === 'check-both-parents')) {
        if (fatherContactInput.trim() === '') {
            fatherContactHint.textContent = 'Please provide all fields.'
            fatherContactHint.style.color = 'red'
            fatherContact.style.borderColor = 'red'
        }
        else if (isNaN(fatherContactInput)) {
            fatherContactHint.textContent = 'Please enter digits only.';
            fatherContactHint.style.color = 'red';
            fatherContact.style.borderColor = 'red';
        }
        else if (fatherContactInput.length !== 10) {
            fatherContactHint.textContent = 'Number should be 10-digit long.'
            fatherContactHint.style.color = 'red'
            fatherContact.style.borderColor = 'red'
        }
        else if (!fatherContactInput.startsWith('0')) {
            fatherContactHint.textContent = 'Number should begin with 0.'
            fatherContactHint.style.color = 'red'
            fatherContact.style.borderColor = 'red'
        }
        else {
            fatherContact.style.borderColor = ''
            fatherContactHint.textContent = '';
        }
    }

})


// ========================
// GUARDIAN HELPER FUNCTION
// ========================


// =================================
// GUARDIAN CONTACT VALIDATION DATA
// =================================

guardianContact.addEventListener('focus', () => {
    guardianContactHint.textContent = 'Please enter a 10 digit number.';
    guardianContactHint.style.color = 'gray';
})

guardianContact.addEventListener('blur', (e) => {
    const guardianContactInput = guardianContact.value;
    const parentSelected = document.querySelector('input[name="radio"]:checked')
    if (parentSelected && parentSelected.id === 'check-guardian') {
        if (guardianContactInput.trim() === '') {
            guardianContactHint.textContent = 'Please provide all fields.'
            guardianContactHint.style.color = 'red'
            guardianContact.style.borderColor = 'red'
        }
        else if (isNaN(guardianContactInput)) {
            guardianContactHint.textContent = 'Please enter digits only'
            guardianContactHint.style.color = 'red';
            guardianContact.style.borderColor = 'red';
        }
        else if (guardianContactInput.length !== 10) {
            guardianContactHint.textContent = 'Number should be 10-digit long.'
            guardianContactHint.style.color = 'red'
            guardianContact.style.borderColor = 'red'
        }
        else if (!guardianContactInput.startsWith('0')) {
            guardianContactHint.textContent = 'Number should begin with 0.'
            guardianContactHint.style.color = 'red'
            guardianContact.style.borderColor = 'red'
        }
        else {
            guardianContact.style.borderColor = ''
            guardianContactHint.textContent = '';
        }
    }

})

// =================================
// BOTH PARENTS CONTACT VALIDATION
// =================================


// MOTHER CONTACT VALIDATION DATA

bothMotherContact.addEventListener('focus', () => {
    bothMotherContactHint.textContent = 'Please enter a 10 digit number.';
    bothMotherContactHint.style.color = 'gray';
})

bothMotherContact.addEventListener('blur', (e) => {
    const bothMotherContactInput = bothMotherContact.value;
    const parentSelected = document.querySelector('input[name="radio"]:checked')
    if (parentSelected && parentSelected.id === 'check-both-parents') {
        if (bothMotherContactInput.trim() === '') {
            bothMotherContactHint.textContent = 'Please provide all fields.'
            bothMotherContactHint.style.color = 'red'
            bothMotherContact.style.borderColor = 'red'
        }
        else if (isNaN(bothMotherContactInput)) {
            bothMotherContactHint.textContent = 'Please enter digits only'
            bothMotherContactHint.style.color = 'red';
            bothMotherContact.style.borderColor = 'red';
        }
        else if (bothMotherContactInput.length !== 10) {
            bothMotherContactHint.textContent = 'Number should be 10-digit long.'
            bothMotherContactHint.style.color = 'red'
            bothMotherContact.style.borderColor = 'red'
        }
        else if (!bothMotherContactInput.startsWith('0')) {
            bothMotherContactHint.textContent = 'Number should begin with 0.'
            bothMotherContactHint.style.color = 'red'
            bothMotherContact.style.borderColor = 'red'
        }
        else {
            bothMotherContact.style.borderColor = ''
            bothMotherContactHint.textContent = '';
        }
    }

})


// FATHER CONTACT VALIDATION DATA

bothFatherContact.addEventListener('focus', () => {
    bothFatherContactHint.textContent = 'Please enter a 10 digit number.';
    bothFatherContactHint.style.color = 'gray';
})

bothFatherContact.addEventListener('blur', (e) => {
    const bothFatherContactInput = bothFatherContact.value;
    const parentSelected = document.querySelector('input[name="radio"]:checked')
    if (parentSelected && parentSelected.id === 'check-both-parents') {
        if (bothFatherContactInput.trim() === '') {
            bothFatherContactHint.textContent = 'Please provide all fields.'
            bothFatherContactHint.style.color = 'red'
            bothFatherContact.style.borderColor = 'red'
        }
        else if (isNaN(bothFatherContactInput)) {
            bothFatherContactHint.textContent = 'Please enter digits only'
            bothFatherContactHint.style.color = 'red';
            bothFatherContact.style.borderColor = 'red';
        }
        else if (bothFatherContactInput.length !== 10) {
            bothFatherContactHint.textContent = 'Number should be 10-digit long.'
            bothFatherContactHint.style.color = 'red'
            bothFatherContact.style.borderColor = 'red'
        }
        else if (!bothFatherContactInput.startsWith('0')) {
            bothFatherContactHint.textContent = 'Number should begin with 0.'
            bothFatherContactHint.style.color = 'red'
            bothFatherContact.style.borderColor = 'red'
        }
        else {
            bothFatherContact.style.borderColor = ''
            bothFatherContactHint.textContent = '';
        }
    }

})





// =============================================
// REGISTRATION FORM VALIDATION HELPER FUNCTION
// =============================================


// Helper function: Capitalizes the first character of any text
function capitalizeFirstLetter(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Parent Section Validation: Ensures that the selected parent section has all required fields filled.
function validateParentSection() {
    // 1. Check if any parent radio is selected
    const selectedRadio = Array.from(parentRadios).find(radio => radio.checked);

    if (!selectedRadio) {
        alert("Please select a parent option!");
        return false;
    }

    // 2. Map radio IDs to their active container
    let activeContainer = null;
    if (selectedRadio.id === "check-father") activeContainer = fatherData;
    else if (selectedRadio.id === "check-mother") activeContainer = motherData;
    else if (selectedRadio.id === "check-guardian") activeContainer = guardianData;
    else if (selectedRadio.id === "check-both-parents") activeContainer = bothData;

    // 3. Highlight empty fields inside ONLY the active container
    let isValid = true;
    if (activeContainer) {
        const inputs = activeContainer.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
    }

    if (!isValid) {
        alert("Please fill in all required parent details!");
    }

    return isValid;
}

// validateBasicFields: Checks that all basic child details are filled and highlights any empty fields.
function validateBasicFields() {
    const textInputs = [childName, placeOfBirth, dateOfBirth, homeTown, motherTongue, classAdmitted];
    let isValid = true;

    textInputs.forEach(element => {
        if (element) {
            if (element.value.trim() === '') {
                element.style.borderColor = 'red';
                isValid = false;
            } else {
                element.style.borderColor = ''; // Clears red border if filled
            }
        }
    });

    return isValid;
}


// inputMessage: Dynamically clears red borders on keystroke for child detail fields.
function inputMessage() {
    const fieldInput = [childName, placeOfBirth, dateOfBirth, homeTown, motherTongue, classAdmitted];
    fieldInput.forEach(input => {
        if (input) {
            ['input', 'change'].forEach(eventType => {
                input.addEventListener(eventType, () => {
                    if (input.value.trim() !== '') {
                        input.style.borderColor = ''; // Clears red border on input
                    }
                });
            });
        }
    });
}
inputMessage();

// parentInputMessage: Dynamically clears red borders on keystroke for parent detail fields.
function parentInputMessage() {
    // Array of all conditional parent fields across Mother, Father, Guardian, and Both blocks
    const parentFields = [
        motherName, motherAddress, motherContact,
        fatherName, fatherAddress, fatherContact,
        guardianName, guardianAddress, guardianContact,
        bothMotherName, bothMotherAddress, bothMotherContact,
        bothFatherName, bothFatherAddress, bothFatherContact
    ];

    parentFields.forEach(input => {
        if (input) {
            ['input', 'change'].forEach(eventType => {
                input.addEventListener(eventType, () => {
                    if (input.value.trim() !== '') {
                        input.style.borderColor = ''; // Wipes red border dynamically on keystroke
                    }
                });
            });
        }
    });
}

// Initialize on page load alongside inputMessage()
parentInputMessage();

function contactValidation() {
    const contactFields = [
        motherContact, fatherContact, guardianContact,
        bothMotherContact, bothFatherContact
    ];
    let isValid = true;

    contactFields.forEach(input => {
        // Only validate fields that exist and are currently visible/rendered
        if (input && input.offsetParent !== null) {
            const cleanValue = input.value.trim();

            if (!cleanValue.startsWith('0')) {
                input.style.borderColor = 'red';
                isValid = false;
                if (!isValid) {
                    alert('Contact number should begin with 0!'); return;
                }
            } else {
                input.style.borderColor = '';
            }
            // Check if empty OR not exactly 10 digits
            if (cleanValue === '' || cleanValue.length !== 10 || isNaN(cleanValue)) {
                input.style.borderColor = 'red';
                isValid = false;
                if (!isValid) {
                    alert('Please provide a valid 10-digit contact number!'); return;
                }
            } else {
                input.style.borderColor = '';
            }
        }
    });


    return isValid;
}



registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const parentSelected = document.querySelector('input[name="radio"]:checked')

    if (!validateBasicFields()) {
        alert('Please fill in all required fields!');
        return;
    }

    const isParentValid = validateParentSection();
    if (!isParentValid) return;

    if (!contactValidation()) {
        return;
    }

    if (!male.checked && !female.checked) {
        alert('Please select Gender!'); return;
    }

    // ==============================
    // FORM DATA COLLECTION & RESET
    // ==============================
    const nameInput = capitalizeFirstLetter(childName.value.trim());
    const placeOfBirthInput = capitalizeFirstLetter(placeOfBirth.value.trim());
    const dateOfBirthInput = dateOfBirth.value;
    const homeTownInput = capitalizeFirstLetter(homeTown.value.trim());
    const motherTongueInput = capitalizeFirstLetter(motherTongue.value.trim());
    const classAdmittedSelect = classAdmitted.value;
    const genderValue = male.checked ? male.value : (female.checked ? female.value : '');


    // MOTHER DETAILS
    let motherNameInput = '';
    let motherAddressInput = '';
    let motherContactInput = '';
    if (parentSelected && parentSelected.value === 'mother') {
        motherNameInput = capitalizeFirstLetter(motherName.value.trim());
        motherAddressInput = capitalizeFirstLetter(motherAddress.value.trim());
        motherContactInput = motherContact.value;
    } else if (parentSelected && parentSelected.value === 'both') {
        motherNameInput = capitalizeFirstLetter(bothMotherName.value.trim());
        motherAddressInput = capitalizeFirstLetter(bothMotherAddress.value.trim());
        motherContactInput = bothMotherContact.value;
    }


    // FATHER DETAILS
    let fatherNameInput = '';
    let fatherAddressInput = '';
    let fatherContactInput = '';
    if (parentSelected && parentSelected.value === 'father') {
        fatherNameInput = capitalizeFirstLetter(fatherName.value.trim());
        fatherAddressInput = capitalizeFirstLetter(fatherAddress.value.trim());
        fatherContactInput = fatherContact.value;
    } else if (parentSelected && parentSelected.value === 'both') {
        fatherNameInput = capitalizeFirstLetter(bothFatherName.value.trim());
        fatherAddressInput = capitalizeFirstLetter(bothFatherAddress.value.trim());
        fatherContactInput = bothFatherContact.value;
    }

    // GUARDIAN DETAILS
    let guardianNameInput = '';
    let guardianAddressInput = '';
    let guardianContactInput = '';
    if (parentSelected && parentSelected.value === 'guardian') {
        guardianNameInput = capitalizeFirstLetter(guardianName.value.trim());
        guardianAddressInput = capitalizeFirstLetter(guardianAddress.value.trim());
        guardianContactInput = guardianContact.value;
    }

    // ============================
    // FORM DATA OBJECT CREATION
    // ============================
    const formData = {
        childName: nameInput,
        placeOfBirth: placeOfBirthInput,
        dateOfBirth: dateOfBirthInput,
        homeTown: homeTownInput,
        motherTongue: motherTongueInput,
        classAdmitted: classAdmittedSelect,
        gender: genderValue,
        mother: { name: motherNameInput, address: motherAddressInput, contact: motherContactInput },
        father: { name: fatherNameInput, address: fatherAddressInput, contact: fatherContactInput },
        guardian: { name: guardianNameInput, address: guardianAddressInput, contact: guardianContactInput },
        status: 'Pending'
    };

    console.log('Form Data Submitted:', formData);

    const successMsg = document.getElementById('submitSuccessMsg');
    if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.textContent = '🎉 Student registration submitted successfully!';
    }


    registrationForm.reset();
    hideAllDataBlocks();
})


registrationForm.addEventListener('input', () => {
    const successMsg = document.getElementById('submitSuccessMsg');
    if (successMsg) successMsg.style.display = 'none';
});



