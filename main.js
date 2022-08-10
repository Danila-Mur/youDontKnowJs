const booksItem = document.querySelectorAll('.book'),
  body = document.querySelector('body'),
  booksTitles = document.querySelectorAll('.book a'),
  promo = document.querySelector('.adv'),
  bookChaptersList = document.querySelectorAll('.book ul'),
  bookChaptersItem = document.querySelectorAll('.book li');

booksItem[0].before(booksItem[1]);
booksItem[2].before(booksItem[4]);
booksItem[5].after(booksItem[2]);

body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

booksTitles[4].textContent = 'Книга 3. this и Прототипы Объектов';

promo.remove();

console.log('bookChaptersList: ', bookChaptersList);
console.log('bookChaptersItem: ', bookChaptersItem);

bookChaptersItem[3].after(bookChaptersItem[6]);
bookChaptersItem[6].after(bookChaptersItem[8]);
bookChaptersItem[9].after(bookChaptersItem[2]);

bookChaptersItem[47].after(bookChaptersItem[55]);
bookChaptersItem[55].after(bookChaptersItem[49]);
bookChaptersItem[49].after(bookChaptersItem[50]);
bookChaptersItem[53].after(bookChaptersItem[51]);

const createbookChaptersItem = document.createElement('li');
createbookChaptersItem.textContent = 'Глава 8: За пределами ES6';
bookChaptersItem[25].append(createbookChaptersItem);
