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