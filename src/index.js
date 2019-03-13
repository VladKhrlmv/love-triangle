/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let x = 0; x < preferences.length; x++)
  {
    for (let y = 0; y < preferences.length; y++)
    {
      for (let z = 0; z < preferences.length; z++)
      {
        if((preferences[x] == y+1) && (preferences[y] == z+1) && (preferences[z] == x+1))
        {
          counter++;
        }
      }
    }
  }
  return Math.floor(counter/3);
};
