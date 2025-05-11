const createPlayer = (mark, name, controller) => {
  let score = 0;

  const resetScore = () => { score = 0 };
  const increaseScore = () => { score++ };
  const getScore = () => { return score };

  return {name, mark, controller, increaseScore, getScore, resetScore};
}

export default createPlayer
export { createPlayer }