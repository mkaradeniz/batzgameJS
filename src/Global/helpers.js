import values from 'lodash/values'

/**
 * Finds an object by name and returns it's id.
 * @param {object[]} objects - All objects.
 * @param {string} object - The object's name.
 * @returns {number} - Object's id.
 */
export const getObjectId = (objects, object) => {
  const foundItem = values(objects).find(o => o.name === object.toLowerCase())

  if (foundItem) {
    return foundItem.id
  } else {
    return -1
  }
}

/**
 * Returns random int from a given interval.
 * Used to print random responses.
 * Shamelessly copy-pasted from StackOverflow.
 * @param {number} min 
 * @param {number} max 
 */
const getRandomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Returns a random response.
 * @param {string[]} responses 
 */
const getRandomResponse = responses => {
  return responses[getRandomIntFromInterval(0, responses.length - 1)]
}

/**
 * Returns a random response for the 'go' command if a given target is not found.
 * @param {string} target - An unknown object's name.
 */
export const getRandomDefaultGoMessage = target => {
  const responses = ['WOHIN soll ich?', `Was ist ein ${target}?`]

  return getRandomResponse(responses, target)
}
