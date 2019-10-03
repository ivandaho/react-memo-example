import React from "react";

interface ITestItem1Props {}

const TestItem1: React.FC<ITestItem1Props> = () => {
  console.log("testitem1 should only render once");
  return <div>test item that shouldn't re-render</div>;
};

export default React.memo(TestItem1);
