import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Button size="40" onClick={() => alert("Created")}>
        Create new
      </Button>
      <Button size="32" onClick={() => alert("Created")}>
        Create new
      </Button>
      <Button size="24" onClick={() => alert("Created")}>
        Create new
      </Button>
    </div>
    <div>
      <Button size="40" disabled>
        Create new
      </Button>
      <Button size="32" disabled>
        Create new
      </Button>
      <Button size="24" disabled>
        Create new
      </Button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
