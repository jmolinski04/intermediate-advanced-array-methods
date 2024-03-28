const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfTripledEvens = (arr) => {
  return arr
    .filter((number) => number % 2 === 0)
    .map((number) => number * 3)
    .filter((acc, current) => acc + current);
};

sumOfTripledEvens(arr);
