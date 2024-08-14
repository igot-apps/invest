function moveObjectById(id, fromArray, toArray) {
    // Find the index of the object with the specified id in the fromArray
    const index = fromArray.findIndex(obj => obj.id === id);
  
    if (index !== -1) {
      // Remove the object from the fromArray
      const [object] = fromArray.splice(index, 1);
  
      // Add the object to the toArray
      toArray.push(object);
    } else {
      console.log(`Object with id ${id} not found in the source array.`);
    }
  }
  
  // Example usage:
  const array1 = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 3, name: 'Object 3' }
  ];
  
  const array2 = [
    { id: 4, name: 'Object 4' },
    { id: 5, name: 'Object 5' }
  ];
  
  console.log('Before moving:');
  console.log('Array 1:', array1);
  console.log('Array 2:', array2);
  
  moveObjectById(2, array1, array2);
  
  console.log('After moving:');
  console.log('Array 1:', array1);
  console.log('Array 2:', array2);
  