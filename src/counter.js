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


    
function printLpattern(arr,m=arr.length, n=arr[0].length) {
  let row=0;
  let col=0;
  let res = [];
  while(row<m && col<n) {
  for(let i=0; i<m; i++) {
    res.push(arr[i][col]);
  }
  col++;
  for(let j=col; j<n; j++) {
    res.push(arr[m-1][j]);
  }
  m--;
}
console.log(res);
return res;
}

let matrixl = [
[1 ,2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16],
[17, 18, 19, 20]
  ]
  
printLpattern(matrixl);

function matrixDiagonalDiff(arr) {
  let d1 = 0;
  let d2 =0;
  let top =0;
  let bottom = arr.length -1;
  for(let i=0; i<arr[0].length; i++) {
    d1+=arr[top++][i];
    d2+=arr[bottom--][i];
  }

  console.log(Math.abs(d1-d2));
  return Math.abs(d1-d2)
}

let matrixDiagonal = [
[1, 2, 2],
[4, 25, 6],
[7, 8, 9]

  ]
  
matrixDiagonalDiff(matrixDiagonal); 

function rotateMatrixClock(arr) {
  let n = arr.length;
  let m = arr[0].length;
 let rotated = Array.from({length: m} , () => Array(n).fill(0));
  for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
      rotated[j][n-1-i] = arr[i][j];
    }
  }
  console.log(rotated);
  return rotated;
}

let matixClock =[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
  ];

  
rotateMatrixClock(matixClock);

function rotateMatrixAntiClock(arr) {
  let n = arr.length;
  let m = arr[0].length;
 let rotated = Array.from({length: m} , () => Array(n).fill(0));
  for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
      rotated[m-1-j][i] = arr[i][j];
    }
  }
  console.log(rotated);
  return rotated;
}

let matixAntiClock =[
 [1,2,3],
 [4,5,6],
 [7,8,9]
  ];

  
  rotateMatrixAntiClock(matixClock);


  /* Notes for matrix clockwise and anticlockwise 
  Clockwise: Column becomes row , but 1st col becomes 1st row and then row is reversed

  Anticlockwise: Column becomes row but 1st col becomes last row
  */


    
function setZeroes(arr) {
  let zeroCol = new Set();
  let zeroRow = new Set();
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[0].length; j++) {
      if(arr[i][j] === 0) {
        zeroRow.add(i);
        zeroCol.add(j);
      }
    }
  }
  for(let r of zeroRow) {
    for(let j=0; j<arr[0].length; j++) {
      arr[r][j] = 0;
    }
  }
   for(let c of zeroCol) {
    for(let j=0; j<arr.length; j++) {
      arr[j][c] = 0;
    }
  }
  return arr;
}


const arr = [
 [1,1,1],
 [1,0,1],
 [1,1,1]
];

 
console.log(setZeroes(arr));
}
