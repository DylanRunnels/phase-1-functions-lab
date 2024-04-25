function distanceFromHqInBlocks(pickupLocation) {
    const distance = Math.abs(pickupLocation - 42);
  
    return distance;
  }
function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = Math.abs(pickupLocation - 42);
    const feetPerBlock = 264;
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    return distanceInFeet;
  }

function distanceTravelledInFeet(start, destination) {
    const blockLength = 264;
    const distance = Math.abs(destination - start) * blockLength;
    return distance;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Calculate the distance
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return fare; 
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return "cannot travel that far";
    }
  }
  const startDistance = 0; 
const destinationDistance = 264; 

const farePrice = calculatesFarePrice(startDistance, destinationDistance);
console.log(farePrice);