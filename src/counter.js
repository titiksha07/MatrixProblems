export function setupCounter() {
  function matrixZigzag(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        for (let j = 0; j < arr[0].length; j++) {
          res.push(arr[i][j]);
        }
      } else {
        for (let j = arr[0].length - 1; j >= 0; j--) {
          res.push(arr[i][j]);
        }
      }
    }
    return res;
  }

  let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
    [9, 0, 1, 2],
    [1, 2, 3, 4],
  ];

  matrixZigzag(matrix);
}
