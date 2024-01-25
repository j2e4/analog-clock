import { atom, selector } from 'recoil';

export const currentDateState = atom({
  key: 'currentTime',
  default: new Date(),
});

export const currentTimeUnitsState = selector({
  key: 'currentTimeUnits',
  get: ({ get }) => {
    const currentTime = get(currentDateState);

    return [
      currentTime.getHours(),
      currentTime.getMinutes(),
      currentTime.getSeconds(),
    ];
  },
});
