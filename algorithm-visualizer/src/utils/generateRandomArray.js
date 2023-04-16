function generateRandomArray(length) {
  const array = [];

  for (let i = 1; i <= length; i++) {
    array.push(i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default generateRandomArray;
