function reserveForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guest = document.getElementById("guest").value;

    // Save to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("guest", guest);

    // Redirect to details page
    window.location.href = "data.html";
}
