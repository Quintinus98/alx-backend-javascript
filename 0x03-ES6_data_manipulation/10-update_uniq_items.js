export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  groceries.forEach((val, key) => {
    if (val === 1) {
      try {
        groceries.set(key, 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  });

  return groceries;
}
