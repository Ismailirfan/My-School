document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('mousemove', (e) => {
        let cursor = document.querySelector('.custom-cursor');
        cursor.style.left = e.pageX - 25 + 'px';
        cursor.style.top = e.pageY - 25 + 'px';
    });
});
