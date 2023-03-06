"use strict";
import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// 1. Створюємо розмітку і додаємо її в DOM
const galleryEl = document.querySelector('.gallery'); //<div>

const elements = galleryItems.map(({ preview, original, description } = {}) =>
    `<div class="gallery__item"
        <a class="gallery__link" href=${original}>
            <img 
                class="gallery__image"
                src=${preview} 
                data-source=${original}
                alt=${description}
            />
        </a>
    </div>
    `).join('');

galleryEl.innerHTML = elements;
console.log(galleryEl);

// 2. Вішаємо слухача подіїї (клік) на батьківський <div>
galleryEl.addEventListener('click', handlePictureClick); 

function handlePictureClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.target.src = event.target.dataset.source;
    const modal = event.target.src;

    // Створюємо модальне вікно з бекдропом через бібліотеку basicLightbox
    const instance = basicLightbox.create(`
    <img src=${modal} width="800" height="600">
    `)
    instance.show() 
    
    // Закриваємо модальне вікно клавшею Esc
    if (instance.show()) {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                instance.close();
            }
        })
    }
}