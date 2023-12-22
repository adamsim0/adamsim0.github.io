document.addEventListener('DOMContentLoaded', function () {
    const viewImagesButton = document.getElementById('viewImagesButton');

    viewImagesButton.addEventListener('click', function () {
        window.open('images.html', '_blank');
    });
});
