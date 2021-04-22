import { SliderMarkObject } from '../types.d';

const loanTermMin = 3;
const loanTermMax = 37;

const createRange = (min: number, max: number): number[] => Array.from({length: (max - min)}, (v, k) => k + min);
const loanTermOptions = createRange(loanTermMin, loanTermMax);

export const getSliderMarks: any[] = loanTermOptions.map((num: number): any => {
  if (num < loanTermMin) return undefined;

  const numsToLabel = [3, 36];

  let objectToReturn: SliderMarkObject = {
    value: num,
    label: null,
  };

  if (numsToLabel.indexOf(num) > -1) {
    objectToReturn.label = num.toString()
  }

  return objectToReturn
});
