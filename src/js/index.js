import 'bootstrap';
import '../css/styles.scss';
import '../asstes/bg.jpg';

const elModalOpen = document.querySelector('#my-modal');
elModalOpen.addEventListener('click', () => {
    $('#my-modal').modal('show');
});

const elModalClose = document.querySelector('#my-modal');
elModalClose.addEventListener('click', () => {
    $('#my-modal').modal('hide');
});