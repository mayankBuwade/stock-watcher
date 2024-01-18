export function cleanJsonKeys(jsonObject) {
  const cleanedObject = {};
  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const cleanedKey = key.replace(/^\d+\.\s*/, ""); // Removes starting number, dot, and space
      cleanedObject[cleanedKey] = jsonObject[key];
    }
  }
  return cleanedObject;
}
