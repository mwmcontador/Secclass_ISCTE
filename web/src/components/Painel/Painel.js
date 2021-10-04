import React, { useState } from "react";
import SearchInput from "../SearchInput";

const Painel = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="row">
        <div className="col">
          <SearchInput value={setInput()} onChange />
        </div>
      </div>
    </div>
  );
};

export default Painel;
