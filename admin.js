const table = document.getElementById("bookingsTable");

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.forEach(b => {

let row = `<tr>

<td>${b.name}</td>
<td>${b.email}</td>
<td>${b.tour}</td>
<td>${b.date}</td>

</tr>`;

table.innerHTML += row;

});
