document.getElementById("bookingForm")
.addEventListener("submit", function(e){

e.preventDefault();

const booking = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
tour: document.getElementById("tour").value,
date: document.getElementById("date").value

};

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push(booking);

localStorage.setItem("bookings", JSON.stringify(bookings));

alert("Booking Successful!");

});
