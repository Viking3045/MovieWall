import { genresItems } from '../data/genres';
function genresGalleryEditor(array) {
  const genreResult = genresItems.reduce((acc, element) => {
    if (Array.isArray(array) && array.includes(element.id)) {
      acc.push(element.name);
    }
    return acc;
  }, []);

  if (!genreResult.length) {
    return 'Unknown genre';
  } else if (genreResult.length > 2) {
    return `${genreResult[0]}, ${genreResult[1]}...`;
  } else {
    return genreResult.join(', ');
  }
}
export { genresGalleryEditor };
