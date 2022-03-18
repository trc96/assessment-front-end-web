console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('You have submitted your form successfully!');
}

function giveCompliment(evt) {
	evt.preventDefault();

	// let compliments = ['You are smart!', 'You are brave!', 'You are funny!'];

	// for (let i = 0; i < compliments.length; i++) {
	// 	if (compliments[i] == [0]) {
	// 		alert(compliments[i]);
	// 	} else if (compliments[i] == [1]) {
	// 		alert(compliments[i]);
	// 	} else if (compliments[i] == [2]) {
	// 		alert(compliments[i]);
	// 	} else {
	// 		if (i > compliments.length) {
	// 			i = 0;
	// 		}
	// 	}
	// }

	alert('You did it!')
}



let form = document.querySelector('form#contact');
let picture = document.querySelector('img');


form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', giveCompliment);

