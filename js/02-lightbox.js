"use strict";
import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// 1. Створюємо розмітку і додаємо її в DOM
const galleryEl = document.querySelector('.gallery'); //<ul>

const elements = galleryItems.map(({ preview, original, description } = {}) =>
    `<li 
        <a class="gallery__item" href=${original}>
            <img 
                class="gallery__image"
                src=${preview} 
                alt=${description}
            />
        </a>
    </li>
    `).join('');

galleryEl.innerHTML = elements;
console.log(galleryEl);


// 2. Створюємо модальне вікно - галерею (з підписами зображень) через бібліотеку basicLightbox
new SimpleLightbox('.gallery .gallery__item', { 
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,  
});
