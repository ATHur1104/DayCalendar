$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 3000);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  function updateHourClasses() {
    var curHour = dayjs().hour();

    $('.time-block').each(function () {
      var bloHour = parseInt($(this).attr('id').split('-')[1]);

      if (bloHour < curHour) {
        $(this).addClass('past');
      } else if (bloHour === curHour) {
        $(this).addClass('present');
        $(this).removeClass('past');
      } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
      }
    });
  }
  updateHourClasses();

  setInterval(updateHourClasses, 10000);
  // TODO: Add code to get any user input that was saved in localStorage and set
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));
  // TODO: Add code to display the current date in the header of the page.
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});