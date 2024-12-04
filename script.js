// Handles form submission and updates calendar with events

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("newsletterForm");
	const confirmation = document.getElementById("confirmation");
	const calendar = document.getElementById("calendar");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		confirmation.style.display = "block";
		form.style.display = "none";

		const today = new Date();
		const dateString = today.toDateString();
		const eventItem = document.createElement("div");
		eventItem.className = "event-item";
		eventItem.textContent = `Subscribed on: ${dateString}`;
		calendar.appendChild(eventItem);
	});
});

// loads navbar and footer on every page
$(function () {
	$("#nav-placeholder").load("nav.html");
	$("#footer-placeholder").load("footer.html");
	// $("#imports-placeholder").load("imports.html");
});

// map for footer



  