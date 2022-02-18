var $open = document.querySelector('.open');
var $popup = document.querySelector('.modal');
var $submit = document.querySelector('.submit');

$open.addEventListener('click', openModal);
$submit.addEventListener('click', closeModal);

function openModal(event) {
  if ($popup.className === 'modal hidden') {
    $popup.className = 'modal';
  } else {
    $popup.className = 'modal hidden';
  }
}

function closeModal(event) {
  if ($popup.className === 'modal') {
    $popup.className = 'modal hidden';
  } else {
    $popup.className = 'modal';
  }
}
