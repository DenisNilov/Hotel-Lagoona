import '../css/reset.css';
import '../css/style.css';
import '../css/adaptive.css';

// Import all images to ensure webpack processes them
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Import all images from the img directory
const images = importAll(
  require.context('../img', false, /\.(png|jpe?g|svg)$/)
);