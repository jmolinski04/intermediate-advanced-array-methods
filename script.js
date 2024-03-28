const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfTripledEvens = (array) => {
  const mappedArray = array.map((number) => {
    if (number % 2 === 0) {
      number *= 3;
      console.log(number);
    }
  });

  return mappedArray;
};

sumOfTripledEvens(arr);
