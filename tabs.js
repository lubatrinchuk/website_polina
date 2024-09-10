function openModal(src) {
    var modal = document.createElement('div');
    modal.className = 'modal';

    var modalContent = document.createElement('img');
    modalContent.className = 'modal-content';
    modalContent.src = src;

    var closeModal = document.createElement('span');
    closeModal.className = 'close';
    closeModal.innerHTML = '&times;';
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    modal.appendChild(closeModal);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = 'block';
}


