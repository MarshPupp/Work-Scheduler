$(document).ready(function() {
  // Display current day at the top of the calendar
  var date = dayjs();
  $('#currentDay').text(date.format('dddd, MMMM D YYYY,h:mm:ss a'))

  // Color-code time blocks based on current time
  colorCodeTimeBlocks();
  // Load events from local storage
  loadEvents();

  // Event listeners for save buttons
  $('.saveBtn').on('click', function() {
    const hour = $(this).parent().attr('id').split('-')[1];
    const eventText = $(this).siblings('.description').val();
    saveEvent(hour, eventText);
  });
});

function colorCodeTimeBlocks() {
  const currentHour = new Date().getHours();
  $('.time-block').each(function() {
    const blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
}

function saveEvent(hour, eventText) {
  localStorage.clear();
  localStorage.setItem(`event-${hour}`, eventText);
}

function loadEvents() {
  $('.time-block').each(function() {
    const hour = $(this).attr('id').split('-')[1];
    const eventText = localStorage.getItem(`event-${hour}`);
    if (eventText) {
      $(this).find('.description').val(eventText);
    }
  });
}

    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

