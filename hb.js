// script.js
document.addEventListener('DOMContentLoaded', function() {
    const horseList = document.getElementById('horse-list');
    const horseSelect = document.getElementById('horse-select');
    const dateInput = document.getElementById('date-input');
    const bookBtn = document.getElementById('book-btn');
    const bookingStatus = document.getElementById('booking-status');
  
    // Mock data for available horses
    const availableHorses = [
      { id: 1, name: 'Horse A' },
      { id: 2, name: 'Horse B' },
      { id: 3, name: 'Horse C' }
    ];
  
    // Populate horse list and select options
    availableHorses.forEach(horse => {
      const option = document.createElement('option');
      option.value = horse.id;
      option.textContent = horse.name;
      horseSelect.appendChild(option);
  
      const listItem = document.createElement('li');
      listItem.textContent = horse.name;
      horseList.appendChild(listItem);
    });
  
    // Event listener for booking button
    bookBtn.addEventListener('click', function() {
      const selectedHorse = horseSelect.value;
      const selectedDate = dateInput.value;
  
      // Perform booking logic (this is where you'd typically send data to a server)
      if (selectedHorse && selectedDate) {
        // Here, you can handle the booking process, e.g., display confirmation message
        bookingStatus.textContent = `Booking confirmed for ${selectedDate} with Horse ${selectedHorse}`;
      } else {
        bookingStatus.textContent = 'Please select a horse and date.';
      }
    });
  });
  