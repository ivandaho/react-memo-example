# react-memo-example

scaffolded with `npm create vite@latest react-memo-example -- --template react-ts`


## Usage

The `<Container />` renders either a memoized or unmemoized version of a list of `<ListItem />`s. Each `<ListItem />` component does an expensive calculation during render. If the list is memoized, the existing items will not re-render, hence will not perform the expensive calculation. You can test this out by adding an item with and without memoization enabled.

Notable usages: chat windows, long lists/tables
