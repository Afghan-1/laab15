// ===== ТАБИ =====

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        const tabId = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');

        setTimeout(() => {
            document.getElementById(tabId).classList.add('active');
        }, 50);
    });
});

// ===== МОДАЛКА =====

const modal = document.getElementById('my-modal');
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.querySelector('.close-modal');

// відкриття
openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // блок скролу
});

// закриття (хрестик)
closeBtn.addEventListener('click', closeModal);

// закриття (клік фон)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// закриття (ESC)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}