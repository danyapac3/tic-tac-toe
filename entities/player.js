const createPlayer = (mark, name, controller) => {
  console.log(controller);
  return {name, mark, playTurn: controller.playTurn};
}

export default createPlayer
export { createPlayer }