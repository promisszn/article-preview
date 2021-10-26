window.addEventListener('load', () => {
    const share = document.getElementById('shar');
    const active = document.getElementById('active');
    const icon1 = document.querySelector('.share-icon');
    const icon2 = document.querySelector('.share-icon2');

    function toggle(){
        share.classList.toggle('hidden');
        active.classList.toggle('active-share');
    }

    function hide(){
        active.classList.toggle('active-share');
        share.classList.toggle('hidden');
    }

    icon1.addEventListener('click', toggle);
    icon2.addEventListener('click', hide);
});