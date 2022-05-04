export const useRandomNumber = (min, max, isInt) => {

  const getRandomFloat = (min, max) => Math.random() * (max - min) + min;
  
  const getRandomInt = () => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return {
    getRandomFloat,
    getRandomInt
  }
}