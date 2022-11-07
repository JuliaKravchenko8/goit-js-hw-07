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

galleryEl.addEventListener('click', imageClick);

function imageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
