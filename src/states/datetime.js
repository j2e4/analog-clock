import { atom, selector } from "recoil";

export const currentTimeState = atom({
  key: "currentTime",
  default: new Date(),
});

export const currentHourState = selector({
  key: "currentHour",
  get: ({ get }) => {
    const currentTime = get(currentTimeState);

    return currentTime.getHours();
  },
});
export const currentMinuteState = selector({
  key: "currentMinute",
  get: ({ get }) => {
    const currentTime = get(currentTimeState);

    return currentTime.getMinutes();
  },
});
export const currentSecondState = selector({
  key: "currentSecond",
  get: ({ get }) => {
    const currentTime = get(currentTimeState);

    return currentTime.getSeconds();
  },
});

export const currentTimeMessageState = selector({
  key: "currentTimeMessage",
  get: ({ get }) => {
    const h = get(currentHourState);
    const m = get(currentMinuteState);
    const s = get(currentSecondState);

    return [h, m, s].map((number) => String(number).padStart(2, "0")).join(":");
  },
});
