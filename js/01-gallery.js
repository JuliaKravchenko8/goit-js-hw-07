import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const imagesEl = galleryItems
  .map(
    item =>
      `<div class = "gallery__item"><a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesEl);

galleryEl.addEventListener('click', imageClick);

function imageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}">`
  );

  instance.show();

  galleryEl.addEventListener('keydown', onKeyClose);

  function onKeyClose(event) {
    if (event.code === 'Escape') {
      instance.close();
      galleryEl.removeEventListener('keydown', onKeyClose);
    }
  }
}
