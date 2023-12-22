// room-script.js

function changeImage() {
    document.getElementById('roomImage').src = './images/bathroom2.jpg';
}

function resetImage() {
    document.getElementById('roomImage').src = './images/room4.jpg';
}

function printPage() {
    var printContent = document.getElementById("printContent");
    var originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;

    window.print();

    document.body.innerHTML = originalContent;
}