// Función para descargar el CV usando html2pdf.js
function descargarCV() {
    const element = document.getElementById('cv-content');
    const downloadBtn = document.querySelector('.downloadBtn');
    if (downloadBtn) downloadBtn.style.display = 'none';
    html2pdf().set({
        margin: [0, 0, 0, 0],
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(element).save().then(() => {
        if (downloadBtn) downloadBtn.style.display = '';
    });
}
