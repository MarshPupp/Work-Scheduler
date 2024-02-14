$(document).ready(function() {
  // Display current day at the top of the calendar
  var date = dayjs();
  $('#currentDay').text(date.format('dddd, MMMM D YYYY,h:mm:ss a'))

  // Color-code time blocks based on current time
  colorCodeTimeBlocks();
  // Load events from local storage
  loadEvents();

  //Event listeners for save buttons
  function loadEvents() {
    $('.time-block').each(function() {
      const hour = $(this).attr('id').split('-')[1];
      const eventText = localStorage.getItem(`event-${hour}`);
      if (eventText) {
        $(this).find('.description').val(eventText);
      };
    });
  };

  //color coding for time blocks
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
// function to save text to local storage
function saveEvent(hour, eventText) {
  localStorage.clear();
  localStorage.setItem(`event-${hour}`, eventText);
}
// function to get previously saved text from local storage
function loadEvents() {
  $('.time-block').each(function() {
    const hour = $(this).attr('id').split('-')[1];
    const eventText = localStorage.getItem(`event-${hour}`);
    if (eventText) {
      $(this).find('.description').val(eventText);
    }
  });
}
});
