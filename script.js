function openLightbox(imageUrl) {
    var lightbox = document.getElementById('lightbox'); 
    var lightboxImage = document.getElementById('lightbox-image'); 
    lightboxImage.src = imageUrl; 
    lightbox.style.display = 'flex';
} 

function closeLightbox() {
    var lightbox = document.getElementById('lightbox'); 
    lightbox.style.display = 'none';
}