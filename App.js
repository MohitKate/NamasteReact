{
  /* <div id='parent'>
    <div id='child'>
        <h1>I am Mohit</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "I am Mohit"),React.createElement("h2", { id: "heading" }, "I am Kate")]
  )
);

// const heading = React.createElement("h1", {id:'heading'}, "Hello world from JS");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
