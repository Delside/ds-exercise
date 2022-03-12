import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Button size="40">Create new</Button>
      <Button size="32">Create new</Button>
      <Button size="24">Create new</Button>
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
