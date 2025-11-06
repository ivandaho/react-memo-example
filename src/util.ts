import { v4 as uuid } from "uuid";

export const provideUUID = (count: number) => {
  return new Array(count)
    .fill({})
    .map((item) => Object.assign({}, item, { uuid: uuid() }));
};

export const generateFakeItem = () => {
  return { uuid: uuid() };
};

/** dummy expensive calculation */
export const expensiveCalculation = (times: number) => {
  let useless:any = [];
  for (let i = 0; i <= times; i++) {
    useless = useless.concat(new Array(100));
  }
};
