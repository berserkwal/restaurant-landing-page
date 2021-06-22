import "./style.css";
import { menu } from "./menu";
import { contact } from "./contact";

const home = (function () {
	function render(node) {
		const content = document.createElement("section");
		const heading = document.createElement("h1");
		const subHeading = document.createElement("h2");
		const contentImage = document.createElement("div");
		const paragraph = document.createElement("p");

		paragraph.innerText =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis architecto atque dolorum vel? Aspernatur ea animi temporibus laborum, deleniti impedit mollitia. Veritatis velit, non fugit voluptatum explicabo nihil voluptates earum aut quia cupiditate ducimus id unde doloribus neque quasi est eaque maxime quos necessitatibus minus animi?";

		contentImage.style.setProperty(
			"--url",
			"url(https://images.unsplash.com/photo-1552644329-8f92449c1c78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80)"
		);

		heading.innerText = "Experience Fine Italian Dining";
		subHeading.innerText = "Great Food, Greater Wine";

		content.classList.add("content");
		contentImage.classList.add("content-image");

		content.append(heading, subHeading, contentImage, paragraph);

		node.append(content);
	}

	return { render };
})();

const universalSkeleton = (function () {
	const navigation = document.createElement("nav");
	const header = document.createElement("section");
	const navLogo = document.createElement("div");
	const logoText = document.createElement("span");
	const underline = document.createElement("div");
	const navElements = document.createElement("ul");
	const homeNav = document.createElement("li");
	const menuNav = document.createElement("li");
	const aboutNav = document.createElement("li");
	const main = document.createElement("section");
	const headerMainText = document.createElement("h1");
	const footer = document.createElement("footer");
	const footerLink = document.createElement("a");
	const hamburgerMenu = document.createElement("div");

	hamburgerMenu.innerHTML = `<div></div><div></div><div></div>`;

	headerMainText.innerText = "arancione";
	homeNav.innerText = "Home";
	menuNav.innerText = "Menu";
	aboutNav.innerText = "Contact";
	logoText.innerText = "arancione";
	footer.innerText = "Designed and developed by ";
	footerLink.innerText = "berserkwal";

	logoText.classList.add("logo-text");
	navLogo.classList.add("logo");
	header.classList.add("header-image");
	underline.classList.add("underline");
	main.classList.add("main-section");
	hamburgerMenu.classList.add("ham-menu");

	footerLink.setAttribute("href", "https://berserkwal.github.io");

	navLogo.append(logoText);
	navElements.append(homeNav, menuNav, aboutNav);
	navigation.append(navLogo, underline, hamburgerMenu, navElements);
	header.append(headerMainText);
	footer.append(footerLink);

	document.body.append(header, main, navigation, footer);

	function clearMain() {
		const everything = main.querySelector(".content");
		everything.remove();
	}

	hamburgerMenu.addEventListener("click", () => {
		if (!navigation.classList.contains("clicked")) {
			navigation.classList.add("clicked");
		} else {
			navigation.classList.remove("clicked");
		}
	});

	const options = { root: null, threshold: 0.5, rootMargin: "0px" };
	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				console.log("out");
				navigation.classList.remove("fullspread");
			} else {
				console.log("in");
				navigation.classList.add("fullspread");
			}
		});
	}, options);
	observer.observe(header);
	home.render(main);

	homeNav.addEventListener("click", () => {
		underline.classList.remove("menu", "contact");
		clearMain();
		home.render(main);
	});
	menuNav.addEventListener("click", () => {
		underline.classList.remove("contact");
		underline.classList.add("menu");
		clearMain();
		menu.render(main);
	});
	aboutNav.addEventListener("click", () => {
		underline.classList.remove("menu");
		underline.classList.add("contact");
		clearMain();
		contact.render(main);
	});

	// clearMain();
	return { header, main, homeNav, menuNav, aboutNav };
})();
