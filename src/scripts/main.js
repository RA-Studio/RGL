// Бургер меню
// const burgerButton = document.querySelectorAll(".main-manu__burger-button");
// const burgerManu = document.querySelector(".burger-manu");

// for (const i of burgerButton) {
// 	i.addEventListener("click", () => {
// 		burgerManu.classList.toggle("burger-manu__is-active");
// 		for (const b of burgerButton) {
// 			b.classList.toggle("main-manu__burger-button-cross");
// 		}
// 	});
// }

// Табы
const tabsButton = document.querySelectorAll(".stages-work__button");
const tabsContainer = document.querySelectorAll(".stages-work__tabs-item");

for (const i of tabsButton) {
	i.addEventListener("click", () => {
		for (const b of tabsButton) {
			b.classList.add("button_hgost-neutral");
		}
		i.classList.remove("button_hgost-neutral");

		for (const c of tabsContainer) {
			c.classList.remove("tab-container-active");
		}
		document.querySelector("#" + i.value).classList.add("tab-container-active");
	});
}

// Маска для телефона
document.querySelectorAll(".phone-mask").forEach((item) => {
	let telMask = IMask(item, {
		mask: "+{7}(000)000-00-00",
	});
	/*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
	telMask.on("accept", function () {
		item.setCustomValidity("Укажите полностью номер телефона.");
	});
	telMask.on("complete", function () {
		item.setCustomValidity("");
	});
});

// Слайдер https://www.npmjs.com/package/tiny-slider
if (document.querySelector(".slider-main")) {
	var injury = tns({
		container: ".slider-main",
		items: 1,
		gutter: 20,
		mouseDrag: true,
		// loop: false,
		speed: 400,
		controls: false,
		navPosition: "bottom",
	});
}

if (document.querySelector(".other-public__slider")) {
	var injury = tns({
		container: ".other-public__slider",
		items: 2,
		gutter: 64,
		mouseDrag: true,
		autoWidth: true,
		loop: false,
		speed: 300,
		// controls: false,
		controlsText: ["", ""],
		nav: false,
		navPosition: "bottom",
	});
}

if (document.querySelector(".gem-wiki__slider")) {
	var injury = tns({
		container: ".gem-wiki__slider",
		items: 3,
		gutter: 32,
		mouseDrag: true,
		autoWidth: true,
		loop: false,
		speed: 250,
		controls: false,
		// controlsText: ["", ""],
		nav: false,
		// navPosition: "bottom",
	});
}

// Галерея в статьях
const mainGalleryWrap = document.querySelectorAll(".main-gallery__wrap");
if (mainGalleryWrap) {
	for (const g of mainGalleryWrap) {
		const mainGallery = g.querySelector(".main-gallery");
		const mainGalleryControls = g.querySelector(".main-gallery-controls");

		var injury = tns({
			container: mainGallery,
			navContainer: mainGalleryControls,
			items: 1,
			gutter: 20,
			mouseDrag: true,
			loop: false,
			speed: 250,
			controls: false,
			navAsThumbnails: true,
			lazyload: true,
		});
	}
}

// Убирает tabIndex у ссылок внутри не активных слайдов
window.onload = function () {
	const tnsItem = document.querySelectorAll(".tns-slider .tns-item");

	if (tnsItem) {
		for (const i of tnsItem) {
			console.log(i.ariaHidden);
			if (i.ariaHidden) {
				const tabs = i.querySelectorAll("a");
				for (const t of tabs) {
					t.tabIndex = -1;
				}
			}
		}
	}
};

// Аккардион
if (document.querySelector(".faq")) {
	new Accordion(".faq");
}

// popup

const pooupBut = document.querySelector(".popup-open");

if (pooupBut) {
	const pooupWindow = document.querySelector(".certificate-popup");
	const pooupClose = document.querySelector(".popup--close");
	pooupBut.addEventListener("click", () => {
		pooupWindow.classList.add("certificate-popup-active");
	});
	pooupClose.addEventListener("click", () => {
		pooupWindow.classList.remove("certificate-popup-active");
	});
}
