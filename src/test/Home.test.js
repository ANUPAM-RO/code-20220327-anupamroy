import React from "react";
import ReactDOM  from "react-dom";
import Home from "../components/home/Home";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home></Home>, div)
})