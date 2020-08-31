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
// const tabsButton = document.querySelectorAll(".about-doctor__tab-button");
// const tabsContainer = document.querySelectorAll(".about-doctor__tab-container");

// for (const i of tabsButton) {
// 	i.addEventListener("click", () => {
// 		for (const b of tabsButton) {
// 			b.classList.remove("tab-button-active");
// 		}
// 		i.classList.add("tab-button-active");

// 		for (const c of tabsContainer) {
// 			c.classList.remove("tab-container-active");
// 		}
// 		document.querySelector("#" + i.value).classList.add("tab-container-active");
// 	});
// }

// настройка select
// const allSelect = document.querySelectorAll(".form-bot__form-select");
// for (const i of allSelect) {
// 	i.addEventListener("change", () => {
// 		if (i.value != "none") {
// 			i.classList.add("select-on");
// 			i.nextSibling.classList.remove("input-lable-none");
// 		}
// 	});
// }

// Маска для телефона
// import IMask from "imask.min.js";
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
