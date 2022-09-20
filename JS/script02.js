const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.booked)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);

//save selected movie index and price
function setmovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .selected");
    const selectedSeatsCount = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat);
    });


    //set local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    //seats and price
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
}

//movie select
movieSelect.addEventListener("change", (e) => {
    ticketPrice = parseInt(e.target.value);
    setmovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener("click", (e) => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("booked")) {
        e.target.classList.toggle("selected");
    }

    updateSelectedCount();
});