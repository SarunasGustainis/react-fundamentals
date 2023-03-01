import React from "react";

const listForRender = [
  { value: 3, name: "List item value 3" },
  { value: 4, name: "List item value 4" },
  { value: 10, name: "List item value 10" },
  { value: 13, name: "List item value 13" },
  { value: 62, name: "List item value 62" },
  { value: 22, name: "List item value 22" },
  { value: 47, name: "List item value 47" },
  { value: 7, name: "List item value 7" },
  { value: 8, name: "List item value 8" },
];

const RenderingLists = () => {
  const fullList = listForRender.map((item) => (
    <li key={item.value}>{item.name}</li>
  ));

  const filteredList = listForRender
    .filter((item) => item.value % 2 === 0)
    .map((item) => <li key={item.value}>{item.name}</li>);

  return (
    <section>
      <h2>Full list:</h2>
      <ul>{fullList}</ul>
      <h2>Filtered list:</h2>
      <ul>{filteredList}</ul>
    </section>
  );
};

export default RenderingLists;
