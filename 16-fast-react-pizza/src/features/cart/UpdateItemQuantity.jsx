import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaceItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId, currentQuanitity }) {
  const dispatch = useDispatch();

  function handleIncreaceItemQuantity() {
    dispatch(increaceItemQuantity(pizzaId));
  }

  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuanitity}</span>
      <Button type="round" onClick={handleIncreaceItemQuantity}>
        +
      </Button>
    </div>
  );
}
