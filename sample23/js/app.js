gsap.registerPlugin(ScrollTrigger);

let sOne = document.querySelector("#section-one");

sOne.innerHTML = sOne.innerText
	.split("")
	.map(function (char) {
		if (char == " ") {
			char = "&nbsp;";
		}
		return "<span>" + char + "</span>";
	})
	.join("");

var tl = gsap.timeline();

tl.set("#section-one span", { y: -100, opacity: 0 });

tl.to("#section-one span", {
	y: 0,
	opacity: 1,
	duration: 0.2,
	stagger: 0.1,
	ease: "power1.out"
});

let sTwo = document.querySelector("#section-two");

sTwo.innerHTML = sTwo.innerText
	.split("")
	.map(function (char) {
		if (char == " ") {
			char = "&nbsp;";
		}
		return "<span>" + char + "</span>";
	})
	.join("");

const sectionTwo = document.querySelector("#section-two");
const options = {
	threshold: 0.5
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			gsap.set("#section-two span", { opacity: 0, scale: 1.5 });
			return;
		}

		var tlTwo = gsap.timeline({ defaults: { ease: "power1.out" } });

		tlTwo.to("#section-two span", {
			scale: 1,
			opacity: 1,
			duration: 0.1,
			stagger: 0.25
		});
	});
}, options);

observer.observe(sectionTwo);

let sThree = document.querySelector("#section-three");

sThree.innerHTML = sThree.innerText
	.split("")
	.map(function (char) {
		if (char == " ") {
			char = "&nbsp;";
		}
		return "<span>" + char + "</span>";
	})
	.join("");

const sectionThree = document.querySelector("#section-three");

const observerThree = new IntersectionObserver(function (entries, observerThree) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			// gsap.set("#section-two span", { opacity: 0, scale: 1.5 });
			return;
		}

		anime.timeline({ loop: false }).add({
			targets: "#section-three span",
			translateY: ["100px", 0],
			opacity: [0, 1],
			rotateX: ["180deg", 0],
			duration: 1000,
			delay: anime.stagger(50)
		});
	});
}, options);

observerThree.observe(sectionThree);
