export const manualArrayLength = (array) => {
  let r = 0;

  // eslint-disable-next-line no-unused-vars
  for (const iterator of array) {
    r++;
  }

  return r;
};

export function arrayPush(array, ...elements) {
  const arrlength = manualArrayLength(array);
  const elementLength = manualArrayLength(elements);
  for (let i = 0; i < elementLength; i++) {
    array[arrlength + i] = elements[i];
  }

  const newlength = manualArrayLength(array);
  return newlength;
}

// Console.log(arrayPush([], 2));

export const fakepop = (array) => {
  const arr = array[array.length - 1];
  // eslint-disable-next-line operator-assignment
  array.length = array.length - 1;
  return arr;
};

console.log(fakepop([1, 2, 24]));

export const indexOF = (arr, arrayElement) => {
  let elemtIndex = -1;
  const arrayLength = manualArrayLength(arr);
  for (let i = 0; i < arrayLength; i++)
    if (arrayElement === arr[i]) {
      elemtIndex = i;
    }

  return elemtIndex;
};

// Console.log(indexOF([1, 2, 3, 7, 35], 35));
