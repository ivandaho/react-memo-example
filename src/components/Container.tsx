import React, { useCallback, useState } from "react";
import ListItem from "./ListItem";
import { provideUUID, generateFakeItem } from "../util";
import TestItem1 from "./TestItem1";

const initCount = 1000;
const initial = provideUUID(initCount);

interface IContainerProps {}
const Container: React.FC<IContainerProps> = () => {
  const [array, setArray] = useState(initial);

  const addItem = useCallback(() => {
    setArray(array => [generateFakeItem()].concat(array));
  }, []);

  const regenerate = useCallback(() => {
    setArray(provideUUID(initCount));
  }, []);

  return (
    <div>
      <TestItem1 />
      <button onClick={addItem}>add</button>
      <button onClick={regenerate}>refresh</button>
      {array.map(item => {
        return <ListItem key={item.uuid} val={item.uuid} />;
      })}
    </div>
  );
};

export default Container;
