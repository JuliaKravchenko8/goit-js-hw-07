import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const imagesEl = galleryItems
  .map(
    item =>
      `<li>
      <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a></li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesEl);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', {
  captionsData: 'alt',
  captionDelay: 250,
});
