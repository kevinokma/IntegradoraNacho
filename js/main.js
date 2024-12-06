// Función para manejar los 'Me Gusta' en las reseñas
/*function likeReview(albumName) {
    alert(`Te gustó la reseña de: ${albumName}`);
}*/
let likeCount = 0;

function incrementLike(albumName) {
    likeCount++;
    document.getElementById("likeCount").textContent = likeCount;
    alert(`Te gustó: ${albumName}`);
}
