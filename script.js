document.addEventListener("mousemove", function(e) {
    let cursor = document.getElementById("cursor");
    let left = e.pageX - 25;
    let top = e.pageY - 25;
    cursor.style.left = left + 'px';
    cursor.style.top = top + 'px';
});
