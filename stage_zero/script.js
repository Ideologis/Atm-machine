/*************  ✨ Codeium Command 🌟  *************/
// Function to display the current time in UTC
function displayCurrentTimeUTC () {
  // Get current UTC time instead of fixed time
  const utcTime = new Date()
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]')

  if (timeElement) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    }
    // Only set the formatted time once, using toLocaleString
    timeElement.textContent = utcTime.toLocaleString('en-US', options)
  }
}

// Initial call to display the time immediately
displayCurrentTimeUTC()

// Update the time every second
setInterval(displayCurrentTimeUTC, 1000)

/******  303fcbfc-4657-4ff2-84ab-4ee625441bfe  *******/
