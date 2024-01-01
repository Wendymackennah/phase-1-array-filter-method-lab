// Code your solution here
//Function to find matching drivers
    function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Function to perform fuzzy matching
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Function to match driver names in an array of objects
function matchName(driverObjects, name) {
  return driverObjects.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}