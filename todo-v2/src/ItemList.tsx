import TodoItem from "./TodoItem";

function ItemList(props: any): any {
  let itemList: any = [];
  props.items.map((item: any, index: number) => {
    itemList.push(
      <TodoItem key={index} id={index} value={item} onDone={props.handleDone} />
    );
  });
  console.log(itemList);
  // return <p>Hello</p>;
  return { itemList };
}

export default ItemList;
