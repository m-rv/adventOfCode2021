const input = document.body.innerText.trim().split('\n').map(i => Number.parseInt(i));

const partOne = input.reduce((count, current, i, array) => (i === 0 ? 0 : current > array[i-1] ? count + 1 : count), 0);

const three = (array) => (array.map((a,i) => (i+2 >= array.length ? 0 : array[i] + array[i+1] + array[i+2])));

const partTwo = three(input).reduce((count, current, i, array) => (i === 0 ? 0 : current > array[i-1] ? count + 1 : count), 0);
