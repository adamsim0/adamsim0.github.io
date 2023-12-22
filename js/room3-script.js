function printPage() {
    var printContent = document.getElementById("printContent");
    var originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;

    window.print();

    document.body.innerHTML = originalContent;
}