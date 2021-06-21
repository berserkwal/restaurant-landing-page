const menu = (function () {
	function render(node) {
		const content = document.createElement("section");

		const heading = document.createElement("h1");
		const menuSection = document.createElement("section");
		const menuArray = [];
		const menuList = [
			"Appetizers",
			"Antipasto",
			"Entree",
			"Pasta",
			"Pizza",
			"Beverages",
		];

		function menuGenerator(itemName, itemDescription, price, type) {
			const menuItemContainer = document.createElement("div");
			const itemTitlePart = document.createElement("div");
			const menuItemName = document.createElement("h3");
			const menuItemDescription = document.createElement("p");
			const seperator = document.createElement("span");
			const menuItemPrice = document.createElement("p");

			menuItemContainer.classList.add("menu-item-container");

			menuItemName.textContent = itemName;
			menuItemPrice.textContent = price;
			menuItemDescription.textContent = itemDescription;

			itemTitlePart.append(menuItemName, seperator, menuItemPrice);
			menuItemContainer.append(itemTitlePart, menuItemDescription);

			menuArray[type].append(menuItemContainer);
		}
		function beverageGenerator(itemName, price, type) {
			const menuItemContainer = document.createElement("div");
			const itemTitlePart = document.createElement("div");
			const menuItemName = document.createElement("h3");
			const seperator = document.createElement("span");
			const menuItemPrice = document.createElement("p");

			menuItemContainer.classList.add("menu-item-container");

			menuItemName.textContent = itemName;
			menuItemPrice.textContent = price;

			itemTitlePart.append(menuItemName, seperator, menuItemPrice);
			menuItemContainer.append(itemTitlePart);

			menuArray[type].append(menuItemContainer);
		}

		for (let i = 0; i < 6; i++) {
			const node = document.createElement("div");
			const nodeTitle = document.createElement("h2");
			nodeTitle.innerText = menuList[i];
			node.classList.add("menuTypes");
			node.append(nodeTitle);
			menuArray.push(node);
		}

		menuSection.classList.add("menu-section");

		content.classList.add("content");

		heading.innerText = "Our Menu";

		content.append(heading, menuSection);
		menuArray.forEach((item) => menuSection.append(item));
		node.append(content);
		(function () {
			menuGenerator(
				"Garlic Bread",
				"With melted parmesan cheese and a special blend of herbs and spices",
				4,
				0
			);
			menuGenerator(
				"Caprese",
				"Fresh vine ripened tomato slices with mozzarella cheese and basil leaves, douse with balsamic vinegar and olive oil",
				6,
				0
			);
			menuGenerator(
				"Stuffed Mushroom",
				"Parmesan, Romano and Mozzarella cheese, clams and herb breadcrumns baked in mushroom caps",
				7,
				0
			);
			menuGenerator(
				"Calamari",
				"Lightly breaded and fried. Served with lemon wedges and marinara sauce",
				8,
				0
			);
			menuGenerator(
				"Bruschetta",
				"Heirloom tomato, pickled garlic, parmisan",
				11,
				1
			);
			menuGenerator("Bacon-wrapped Figs", "balsamic reduction", 9, 1);
			menuGenerator(
				"Beef Carapccio",
				"Pickled shallot, aruguia, grana padano",
				16,
				1
			);
			menuGenerator(
				"Steamed Mussels",
				"Slow-roasted tomato, fennel, calabarian chilli oil, grilled bread",
				18,
				1
			);
			menuGenerator(
				"Pollo Piccata",
				"Tender chicken breast poinded thin and braised in a garlic-lemon sauce, with white wine and capers served over roasted red potatoes",
				15,
				2
			);
			menuGenerator(
				"Fritto Misto",
				"Tempura battered shrimp, calamari, zucchini and eggplant, served with marinara sauce",
				15,
				2
			);
			menuGenerator(
				"Pollo Alla Romana",
				"Half a roasted chicken with garlic, shallots, rosemary and broccolini, served over mashed potatoes",
				18,
				2
			);
			menuGenerator(
				"Salmon Siciliano",
				"Grilled Chinook salmon served with artichoke heart, kalamata olices, capers and garlic sauce over corn polenta",
				21,
				2
			);
			menuGenerator(
				"Spaghetti Pomodoro",
				"Simple and deliciours, with house-made tomato-basil marinara drizzled with Tuscan olice oil",
				11,
				3
			);
			menuGenerator(
				"Fettuccine Carbonara",
				"Pancetta bacon with shallots in a parmesan cream sauce over fettucine",
				13,
				3
			);
			menuGenerator(
				"Squash Ravioli",
				"House-made ravioli stuffed with butternut squash in a browned-butter sage sauce",
				16,
				3
			);
			menuGenerator(
				"Paglia E Reno",
				"Handmade spinach tagliatella, peas, prosciutto di Parma, Parmeggiano Reggiano",
				14,
				3
			);
			menuGenerator(
				"Potato Gnocchi",
				"Hand-made potato dumplings with sage, browned butter, fontina and gorgonzola cheese",
				14,
				3
			);
			menuGenerator(
				"Margherita",
				"San Marzano tomato sauce with fresh mozzarella and basil",
				10,
				4
			);
			menuGenerator(
				"Margherita",
				"San Marzano tomato sauce with fresh mozzarella and basil",
				10,
				4
			);
			menuGenerator(
				"Funghi",
				"Three types of mushrooms with tomato, fresh mozzarella and parsley",
				10,
				4
			);
			menuGenerator(
				"Bologna",
				"Spicy salami wiht Bolognese meat sauce, roasted garlic and frest mozzarella",
				12,
				4
			);
			menuGenerator(
				"Sicilian",
				"Sweet Italian sausage, spicy Capicola ham, fontina, mozzarella and basil",
				14,
				4
			);
			beverageGenerator("Soda", 2.75, 5);
			beverageGenerator("Coffee/Tea", 1.75, 5);
			beverageGenerator("Bottled Water", 2.75, 5);
			beverageGenerator("Fresh Lemonade", 1.75, 5);
		})();
	}

	return { render };
})();

export { menu };
