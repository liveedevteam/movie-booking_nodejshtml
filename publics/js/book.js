function bookTicketOfMovie() {
    const movieName = document.getElementById("movie-name").value;
    const seats = document.getElementById("seats").value;
    console.log(movieName);
    console.log(seats);
    const data = {
        movieName: movieName,
        seats: seats,
    };
    console.log(data);
    const url = window.location.hostname
    // console.log(url)
    // console.log(`${url}/book`)
    let apiURL = ""
    if (url === 'localhost') {
        apiURL = `http://${url}:3000/book`
    } else {
        apiURL = `https://${url}/book`
    }
    fetch(apiURL, {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log("Success:", data);
            console.log(data.finalPrices);
            document.getElementById("finalPrices").innerHTML = data.finalPrices;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}