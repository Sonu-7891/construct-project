function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdownContent-2');
    var arrow = document.querySelector('.dropdown-toggle .arrow');

    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
        arrow.classList.remove('down');
        arrow.classList.add('up');
    } else {
        dropdownContent.style.display = 'none';
        arrow.classList.remove('up');
        arrow.classList.add('down');
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const login = document.getElementById('Login-1');
    const closeBtn = document.getElementsByClassName('close')[0];

    login.onclick = function() {
        modal.style.display = "flex";
    }
    
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
