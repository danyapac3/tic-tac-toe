const createPlayer = (mark, name, controller) => {
  let score = 0;

  const resetScore = () => score = 0;
  const increaseScore = () => {score++};
  const getScore = () => { return score }

  return {name, mark, increaseScore, getScore, resetScore, controller};
}

export default createPlayer
export { createPlayer }