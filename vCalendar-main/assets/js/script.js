$(function () {
  const mainDiv = $("#mainDiv");
  const currentDayEl = $('#currentDay');
  const now = dayjs();

  // Set current date in header
  currentDayEl.text(now.format('dddd, MMMM D, YYYY'));

  const currHour = now.hour();
  const dateKey = now.format('YYYYMMDD');

  // Create time blocks for the entire day (0 to 23)
  for (let hour = 0; hour <= 23; hour++) {
    const isPast = hour < currHour;
    const isPresent = hour === currHour;
    const isFuture = hour > currHour;

    let timeClass = "future";
    if (isPast) timeClass = "past";
    if (isPresent) timeClass = "present";

    const displayHour = hour > 12 ? (hour - 12) + " PM" : (hour === 12 ? "12 PM" : hour + " AM");

    // Retrieve saved data
    const savedText = localStorage.getItem(`${dateKey}-hour-${hour}`) || "";

    const timeBlock = $(`
      <div id="hour-${hour}" class="time-block ${timeClass}">
        <div class="hour">${displayHour}</div>
        <textarea class="description" placeholder="Add event...">${savedText}</textarea>
        <button class="saveBtn" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `);

    mainDiv.append(timeBlock);
  }

  // Handle save button clicks
  mainDiv.on('click', '.saveBtn', function () {
    const parentBlock = $(this).closest('.time-block');
    const hourId = parentBlock.attr('id');
    const description = parentBlock.find('.description').val();

    // Save to local storage with date-specific key
    localStorage.setItem(`${dateKey}-${hourId}`, description);

    // Minimal feedback (could be improved with a toast/notification)
    const btn = $(this);
    const originalIcon = btn.html();
    btn.html('<i class="fas fa-check"></i>');
    setTimeout(() => {
      btn.html(originalIcon);
    }, 1000);
  });
});
