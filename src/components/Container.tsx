import React, { useCallback, useState } from "react";
import MemoizedListItem, { ListItem } from "./ListItem";
import { provideUUID, generateFakeItem } from "../util";
import TestItem1 from "./TestItem1";

const initCount = 1000;
const initial = provideUUID(initCount);

interface IContainerProps {}
const Container: React.FC<IContainerProps> = () => {
  const [array, setArray] = useState(initial);

  const [memo, setMemo] = useState(false);

  const addItem = useCallback(() => {
    setArray(array => [generateFakeItem()].concat(array));
  }, []);

  const regenerate = useCallback(() => {
    setArray(provideUUID(initCount));
  }, []);

  const toggleMemo = useCallback(() => {
    setMemo(memo => !memo);
  }, []);

  return (
    <div>
      <TestItem1 />
      <button onClick={addItem}>add</button>
      <button onClick={regenerate}>reset</button>
      <button
        className={`memo-button-${memo ? "on" : "off"}`}
        onClick={toggleMemo}
      >
        memoization is {memo ? "on" : "off"}
      </button>
      {array.map(item => {
        return memo ? (
          <MemoizedListItem key={item.uuid} val={item.uuid} />
        ) : (
          <ListItem key={item.uuid} val={item.uuid} />
        );
      })}
    </div>
  );
};

export default Container;
