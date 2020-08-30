/* 
	Parallax effect
	Causes movement of the UI based on the position of the mouse on the window.
	Default maximum width offset is 10%, maximum height offset is 10%
*/

let max_width_offset = 0.01;
let max_height_offset = 0.01;

const body = document.querySelector('body');

let element_list = document.querySelectorAll('.parallax');

body.addEventListener('mousemove', e => {
	let width_ratio = e.pageX / window.innerWidth;
	let height_ratio = e.pageY / window.innerHeight;
	
	let translateX = (width_ratio - 0.5) * (window.innerWidth * max_width_offset);
	let translateY = (height_ratio - 0.5) * (window.innerHeight * max_height_offset);

	for (let i = 0; i < element_list.length; i++) {
		element_list[i].style.transform = `translate(${translateX}px, ${translateY}px)`;
	}
	
});

