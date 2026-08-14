// Returns the total of all numbers in an array.
export function sum(numbers) {
  let total = 0;

  // Add each number to the total.
  for (const number of numbers) {
    total += number;
  }

  return total;
}

// Returns the average of all numbers in an array.
export function average(numbers) {
  // Return 0 to avoid dividing by zero when the array is empty.
  if (numbers.length === 0) {
    return 0;
  }

  return sum(numbers) / numbers.length;
}

// Returns a new array with duplicate values removed.
// The original order of the values is preserved.
export function unique(array) {
  const uniqueValues = [];

  // Add a value only if it is not already in the new array.
  for (const value of array) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues;
}

// Divides an array into smaller arrays containing no more
// than the specified number of elements.
export function chunk(array, size) {
  const chunks = [];

  // Move through the array by the specified chunk size.
  for (let index = 0; index < array.length; index += size) {
    // Copy the current group of elements into a new smaller array.
    chunks.push(array.slice(index, index + size));
  }

  return chunks;
}

// Returns the unique values found in both arrays.
export function intersection(firstArray, secondArray) {
  const commonValues = [];

  // Check each value from the first array.
  for (const value of firstArray) {
    // Add the value if it is in the second array and has not already been added.
    if (secondArray.includes(value) && !commonValues.includes(value)) {
      commonValues.push(value);
    }
  }

  return commonValues;
}