gsap.registerPlugin(ScrollTrigger);
class ImageReveal {
static defaults = {
	items: '[data-module="ImageReveal"]',
	scaleFrom: 1.2,
	scrubDelay: 1
};

constructor(element, options) {
	this.options = { ...ImageReveal.defaults, ...options };
	this.init();
}

init() {
	this.createChildRefs().enable();
	return this;
}

createChildRefs() {
	this.items = [...document.querySelectorAll(this.options.items)] || [];
	return this;
}

enable() {
	if (!!this.items.length) this.animate();
	return this;
}

animate() {
	this.items.forEach((item) => {
		gsap.fromTo(item, {scale: this.options.scaleFrom}, {scale: 1, ease: "none", scrollTrigger: {trigger: item, start: "top bottom", end: "center 25%", scrub: this.options.scrubDelay,}});
	});
}
}

new ImageReveal();
gsap.fromTo(".stats", {y: 0, opacity: 1,}, {y: 330, opacity: 0, scrollTrigger: {trigger: ".stats", start: "top top", scrub: true, toggleActions: "play none none reset", scrubDelay: 1}
});

const boxes = gsap.utils.toArray('.my-row');
boxes.forEach(box => {
  gsap.fromTo(box, {y: 80, opacity: 0,}, {y: 0, opacity: 1, scrollTrigger: {trigger: box, start: "top 80%", end: "bottom 20%", scrubDelay: 1, scrub: true,}})
});

const boxes2 = gsap.utils.toArray('.my-vid');
boxes2.forEach(box2 => {
  gsap.fromTo(box2, {y: 80, opacity: 1,}, {y: 0, opacity: 1, scrollTrigger: {trigger: box2, start: "top top", end: "center 1%", scrubDelay: 1, scrub: true}})
});
