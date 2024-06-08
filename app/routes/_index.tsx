import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Index() {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <div style={{ height: "1000px" }}>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <div
              style={{
                border: "1px solid blue",
                width: "200px",
                height: "50px",
              }}
            >
              {item}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
