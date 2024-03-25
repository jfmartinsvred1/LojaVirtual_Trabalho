function expandImage(img) {
    var modal = document.getElementById("myModal");
    var expandedImg = document.getElementById("expandedImg"); 
    modal.style.display = "block";
    expandedImg.src = img.src;
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

