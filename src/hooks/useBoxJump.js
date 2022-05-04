import { useRandomNumber } from './useRandomNumber'

export const useBoxJump = (project) => {
  const { getRandomInt, getRandomFloat } = useRandomNumber()

  const makeJump = (i, ref) => {
    const randomRate = getRandomFloat(1.5, 2.5)
    const objValues = { rotateX: 1, transformY: 6, scaleX: 1, scaleY: 1};
    const sheet = project.sheet("Sheet", 'Instance' + i)
    const boxObj = sheet.object("First Object", objValues);

    boxObj.onValuesChange((values) => {
      const { transformY, rotateX, scaleX, scaleY } = values
      
      if(ref.current){
        const box = ref.current
        box.position.y = transformY
        box.rotation.y = Math.PI / rotateX
        box.scale.x = scaleX
        box.scale.y = scaleY
      }
    })
    project.ready.then(() => {
      setTimeout(() => {
        sheet.sequence.play({range: [0, 4.5], iterationCount: Infinity, rate: randomRate})
      }, getRandomInt(0, 3000));
    })
  }

  return makeJump
}