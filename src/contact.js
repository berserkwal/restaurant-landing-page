const contact = (function () {
	function render(node) {
		const content = document.createElement("section");
		content.classList.add("content");
		const contactContainer = document.createElement("div");
		const contactText = document.createElement("div");
		const contactDetails = function () {
			const node = document.createElement("div");
			const sec1 = document.createElement("div");
			const sec2 = document.createElement("div");
			const mainTitle = document.createElement("h2");
			const title1 = document.createElement("h3");
			const title2 = document.createElement("h3");
			const list1 = document.createElement("ul");
			const list2 = document.createElement("ul");
			mainTitle.innerText = "Reach out to us";
			title1.innerText = "Phone:";
			title2.innerText = "E-mail:";

			list1.innerHTML = `<li>012-4231123</li><li>334-786800079</li>`;
			list2.innerHTML = `<li>notrealemail@arancione.com</li>`;

			sec1.append(title1, list1);
			sec2.append(title2, list2);

			node.append(mainTitle, sec1, sec2);
			return node;
		};
		const timing = function () {
			const node = document.createElement("div");
			const sec1 = document.createElement("div");
			const sec2 = document.createElement("div");
			const title1 = document.createElement("h3");
			const title2 = document.createElement("h3");
			const list1 = document.createElement("ul");
			const list2 = document.createElement("ul");
			const mainTitle = document.createElement("h2");

			mainTitle.innerText = "Our Timings";
			title1.innerText = "Mon-Thu:";
			title2.innerText = "Fri-Sun:";

			list1.innerHTML = `<li>08:00-20:00</li>`;
			list2.innerHTML = `<li>09:30-23:30</li>`;

			sec1.append(title1, list1);
			sec2.append(title2, list2);

			node.append(mainTitle, sec1, sec2);
			return node;
		};
		const map = document.createElement("div");

		map.innerHTML = `<h2>Our Location</h2><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47521.091420278055!2d12.508865803302825!3d41.89139005365572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23ff6a5cad4f94d1!2sBistrot%20L&#39;Arancione!5e0!3m2!1sen!2sin!4v1624284895501!5m2!1sen!2sin" width=100% height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

		contactContainer.classList.add("contact-container");
		contactText.classList.add("text-contacts");

		contactText.append(contactDetails(), timing());
		contactContainer.append(contactText, map);
		const heading = document.createElement("h1");
		heading.innerText = "Contact us";
		content.append(heading, contactContainer);
		node.append(content);
	}

	return { render };
})();

export { contact };
