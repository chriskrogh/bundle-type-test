"use client";

import { useState } from "react";
import { Count } from "./types";

export default function Counter() {
  const [count, setCount] = useState<Count>({ count: 0 });
  return (
    <div>
      <h1>Count: {count.count}</h1>
      <button onClick={() => setCount({ count: count.count + 1 })}>
        Increment
      </button>
    </div>
  );
}
