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

var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var day = $form.elements.day.value;
  var time = $form.elements.time.value;
  var desc = $form.elements.desc.value;
  var entryData = {
    day: day,
    time: time,
    desc: desc,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(entryData);
  $form.reset();
}
