function Item(props) {
  return (
    <li
      id={props.id}
      onClick={() => {
        props.strike(props.id);
      }}
      style={{ textDecoration: props.item[1] ? "line-through" : "none" }}>
      {props.item}
    </li>
  );
}

export default Item;
