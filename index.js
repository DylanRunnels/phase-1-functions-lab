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
    const distance = 264;
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return 2.56;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else if (distance >= 2500) {
      return "Cannot travel that far.";
    }
  }
  const startDistance = 0; // Starting distance in feet
const destinationDistance = 264; // Destination distance in feet

const farePrice = calculatesFarePrice(startDistance, destinationDistance);
console.log(farePrice);