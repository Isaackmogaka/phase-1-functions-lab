// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block > 42 ){
        return block - 42

    }
    else{
        return 42 - block
    }
  }
  
  function distanceFromHqInFeet(feets) {
    return distanceFromHqInBlocks(feets) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
   let distance;
   if (destination > start){
    return distance = (destination -start)*264
   }
   else{
    return distance = (start-destination)*264
   }
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;

    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;

    } else if (distance > 2000 && distance <= 2500) {
      return 25;

    }
     else {
      return 'cannot travel that far';
    }
  }
