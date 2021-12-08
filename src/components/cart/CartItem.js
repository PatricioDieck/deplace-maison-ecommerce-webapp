import { useState } from "react";
import Tooltip from "../global/Tooltip/Tooltip";
import {
  StyledCartItem,
  StyledCartProductDetails,
  StyledCartProductItem,
  StyledDivider,
  StytledProductSummary,
} from "./styledComponents";

function CartItem(props) {
  const [hasError, setHasError] = useState(false);
  const item = {
    id: props.id,
    name: props.name,
    quantity: props.quantity,
    color: props.color,
    size: props.size,
    price: props.price,
    type: props.type,
    img: props.img,
  };

  const quantityChangeHandler = (event) => {
    if (
      event.target.value === "" ||
      event.target.value < 0 ||
      event.target.value > 10
    ) {
      setHasError(true);
      return;
    }

    if (event.target.value === "0") {
      props.onRemoveItem(props.id);
      return;
    }
    setHasError(false);

    const updatedItem = { ...item, quantity: event.target.value };
    props.onQuantityChange(updatedItem);
  };

  return (
    <StyledCartItem>
      <StyledCartProductItem>
        <img src={props.img} alt="Product"></img>
        <StyledCartProductDetails>
          <h2>{props.name}</h2>
          <h4>$ {props.price}</h4>
          <p>Color: {props.color}</p>
          <p>Size: {props.size}</p>
        </StyledCartProductDetails>
        <StytledProductSummary>
          <input
            type="number"
            name="quantity"
            min="0"
            max="10"
            defaultValue={props.quantity}
            onChange={quantityChangeHandler}
          ></input>
          {hasError && <Tooltip content="Please match the requested format" />}
          <p onClick={props.onRemoveItem.bind(null, props.id)}>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;
