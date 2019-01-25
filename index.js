/* global $ */
/* eslint-disable no-console */
'use strict';

$('.js-dog-pictures-form').submit(function(event){
  event.preventDefault();
  const inputValue = $('.js-number-input').val();

  for (let i = 1; i <= inputValue; i++) {
    console.log('For loop running'); 
    fetch('https://dog.ceo/api/breeds/image/random')  
      .then( response => response.json() )
      .then( data => {
        console.log(data);
        console.log(data.message);
        $('.js-dog-image-grid').prepend( `<img src="${data.message}" class="dog-picture" />` );
      }); 
  }
});

$('.js-dog-breed-form').submit(function(event){
  event.preventDefault();
  const breedValue = $('.js-breed-input').val();
  console.log(breedValue);
  fetch(`https://dog.ceo/api/breed/${breedValue}/images/random`) 
    .then( response => response.json() )
    .then( data => {
      console.log(data);
      console.log(data.message);
      $('.js-dog-image-grid').prepend( `<img src="${data.message}" class="dog-picture" />` );
    });
});