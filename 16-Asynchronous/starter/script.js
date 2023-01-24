'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const images = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']

// images.forEach(img => document.querySelector("body").insertAdjacentHTML(
//   "beforeend",
//   `<img style="height: 400px; margin: 0 20px" src="${img}">`
// ))

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = (path) => {
  const img = document.createElement('img')
  img.src = path
  img.addEventListener('load', () => {
    document.querySelector("main").append(img)
  })
  return img
}

const loadNPause = async () => {
  try {
    // for (const image of images) {
    //   const img = await createImage(image)
    //   await wait(2)
    //   console.log(img)
    //   img.style = "display: none"
    // }
    images.forEach(async image => {
      await wait(2)
      await createImage(image)
    })
  } catch(err) {
    console.error(err)
  }
}

loadNPause()