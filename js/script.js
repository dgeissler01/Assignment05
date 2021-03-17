window.addEventListener('load', () => {
    let empForm = document.getElementById('empForm');
    empForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log(e.target.id.value);
        console.log(e.target.name.value);
        console.log(e.target.ext.value);
        console.log(e.target.email.value);
        console.log(e.target.department.value);
    })
});