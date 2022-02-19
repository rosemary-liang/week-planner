/* global data */
/* exported data */

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
  $tbody.prepend(renderEntry(entryData));

  $form.reset();
}

var $tbody = document.querySelector('tbody');

function renderEntry(entry) {
  var tr = document.createElement('tr');
  // $tbody.appendChild(tr);

  var tdTime = document.createElement('td');
  tdTime.setAttribute('class', 'time');
  tdTime.textContent = entry.time;
  tr.appendChild(tdTime);

  var tdDescription = document.createElement('td');
  tdDescription.setAttribute('class', 'description');
  tdDescription.textContent = entry.desc;
  tr.appendChild(tdDescription);

  var entryId = entry.entryId;
  tr.setAttribute('data-entry-id', entryId);
  entryId++;

  return tr;
}

// append entries
window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $tbody.append(renderEntry(data.entries[i]));
  }
});
