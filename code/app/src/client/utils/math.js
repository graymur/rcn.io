// Returns a random integer between min (included) and max (included)
const rnd = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export {rnd}
