// //element, object, value
// const heading = React.createElement("h1", { id: "heading", xyz: "heading1" }, ["Hello world from React!", "fdsfsd"]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(heading);

/**
 * <div id="parent"> 
 *      <div id="child">
 *          <h1>Hello World From React!!</h1>
 *          <h2>Hello World From React!!</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>Hello World From React!!</h1>
 *          <h2>Hello World From React!!</h2>
 *      </div>
 * </div>
 * 
 */


const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                "Shashank",
                React.createElement("h1", {}, "H1 tag here"),
                React.createElement("h2", {}, "H2 tag here")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                "Shashank",
                React.createElement("h1", {}, "H1 tag here"),
                React.createElement("h2", {}, "H2 tag here")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);




