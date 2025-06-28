function sendToWhatsApp(e) {
    e.preventDefault();
    var client = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var service = document.getElementById('service-name').innerText;
    var msg = encodeURIComponent("Servcice Booking\nService: " + service + "\nClient: " + client + "\nphone: " + phone);
    window.open("https://wa.me/237693197400?text=" + msg, "_blank");
}