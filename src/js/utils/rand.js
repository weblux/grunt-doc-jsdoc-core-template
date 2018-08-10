/**
 * rand - Generated number between a min and max value
 *
 * @param  {number} min The minimal value you want to random
 * @param  {number} max The maximal value you want to random
 * @return {number} The random value between min and max
 */
function rand (min, max) {
  if (min === 0) {
    return Math.floor(Math.random() * max)
  }
  return Math.floor(Math.random() * (max - min) / min)
}

export default rand
