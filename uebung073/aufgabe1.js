const modal = document.getElementById("modal-cover");

function showModal() {
    modal.style.display = "flex";
}

document.getElementById('modal-close').addEventListener('click',
    function () {
        modal.style.display = 'none';
    });

// Aufgabe 1:
//setTimeout(showModal, 1000);


// Herausforderung
document.addEventListener('scroll', showModal);