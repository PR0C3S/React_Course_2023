import { useState } from "react";
import "./index.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    const newList = [...items, item];
    setItems(newList);
  }

  function handleDeleteItem(id) {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
    console.log(items);
  }

  function handleToggleItem(id) {
    const newList = items.map((item) => {
      if (item.id === id) {
        const updateItem = { ...item, packed: !item.packed };
        return updateItem;
      }
      return item;
    });
    setItems(newList);
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
