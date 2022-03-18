

let napDynoRef = document.querySelector('form#skills')
let favoriteColor = document.querySelector('button#color')
let favoritePlace = document.querySelector('button#place')
let favoriteRitual = document.querySelector('button#ritual')



function napoleanDynoRef(evt) {
	evt.preventDefault();

	alert('Girls only like guys who have great skills.');
}

function myFavoriteColor(evt) {
    evt.preventDefault();

    alert('My favorite color is blue.');
}

function myFavoritePlace(evt) {
    evt.preventDefault();

    alert('My favorite place is Lake Tahoe, California.');
}

function myFavoriteRitual(evt) {
    evt.preventDefault();

    alert('My favorite ritual or hobby would have to be playing some games with my friends.');
}


napDynoRef.addEventListener('mouseover', napoleanDynoRef);
favoriteColor.addEventListener('click', myFavoriteColor);
favoritePlace.addEventListener('click', myFavoritePlace);
favoriteRitual.addEventListener('click', myFavoriteRitual);