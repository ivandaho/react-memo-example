import uuid from "uuid/v4";

export const provideUUID = (count: number) => {
  return new Array(count)
    .fill({})
    .map(item => Object.assign({}, item, { uuid: uuid() }));
};

export const generateFakeItem = () => {
  return { uuid: uuid() };
};

/** dummy expensive calculation */
export const expensiveCalculation = (times: number) => {
  let useless = [];
  for (let i = 0; i <= times; i++) {
    useless = useless.concat(new Array(100));
  }
};
