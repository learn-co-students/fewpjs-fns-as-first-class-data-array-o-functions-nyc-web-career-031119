

  const wakeDog = function wakeDog(dogName, dogBreed){
    return `Wake ${dogName} the ${dogBreed}`
  }

  const leashDog = function leashDog(dogName, dogBreed){
    return `Leash ${dogName} the ${dogBreed}`
  }

  const walkToPark = function walkToPark(dogName, dogBreed){
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

  const throwFrisbee = function throwFrisbee(dogName, dogBreed){
      return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }

  const walkHome = function walkHome(dogName, dogBreed){
      return `Walk home with ${dogName} the ${dogBreed}`
  }

  const unleashDog = function unleashDog(dogName, dogBreed){
      return `Unleash ${dogName} the ${dogBreed}`
  }

// }


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed){
  routine.forEach(function(action){
    routine.push(action(name, breed))
  })
  return routine
}
