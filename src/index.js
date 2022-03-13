import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        marginTop: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button size="large" onClick={() => alert("Created")}>
        Create new
      </Button>
      <Button size="medium" onClick={() => alert("Created")}>
        Create new
      </Button>
      <Button size="small" onClick={() => alert("Created")}>
        Create new
      </Button>
    </div>
    <div
      style={{
        marginBottom: "30vh",
        marginTop: "32pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Button size="large" disabled>
        Create new
      </Button>
      <Button size="medium" disabled>
        Create new
      </Button>
      <Button size="small" disabled>
        Create new
      </Button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
