import React from "react";
import { expensiveCalculation } from "../util";

interface IListItemProps {
  val: any;
}
const ListItem: React.FC<IListItemProps> = props => {
  const { val } = props;
  expensiveCalculation(100);
  return <div>{val}</div>;
};

const MemoizedListItem = React.memo(ListItem);

export default MemoizedListItem;
// export default ListItem;
