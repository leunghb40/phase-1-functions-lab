function distanceFromHqInBlocks(location) {
    if (location > 42) {
      return location - 42;
    } else {
      return 42 - location;
    }
}
  
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}
  
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
  
console.log(distanceTravelledInFeet(42, 50));
console.log(distanceTravelledInFeet(50, 42));

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
    let farePrice = 0;
  
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      return "cannot travel that far";
    }
  
    return farePrice;
  }
  
console.log(calculatesFarePrice(43, 50));
console.log(calculatesFarePrice(32, 45));
console.log(calculatesFarePrice(34, 60));
