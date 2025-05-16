// ...existing code...
document.getElementById('admissionForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Ganti URL berikut dengan endpoint Google Apps Script Web Apps Anda
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyekImqyWGH1JeHhCtV24UmEWf1erZ7IxVf-3Mf8vzQT9XultvdG8y2rGqcDjDihZLQ0g/exec';

    // Tampilkan loading (opsional)
    const submitBtn = form.querySelector('.btn-submit');
    if (submitBtn) submitBtn.disabled = true;

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            form.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        } else {
            alert('Gagal mengirim data. Silakan coba lagi.');
            if (submitBtn) submitBtn.disabled = false;
        }
    } catch (error) {
        alert('Terjadi kesalahan. Silakan coba lagi.');
        if (submitBtn) submitBtn.disabled = false;
    }
    // Jangan enable tombol jika form sudah disembunyikan
});
// ...existing code...
