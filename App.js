/*create nested structure in react*/
/* react coming from node module*/
import React from "react"; 
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.png";
import userIcon from "./user icon.png";

//nested element using create element
//const Heading = React.createElement("div", {className:"title"},
// React.createElement("h1", {}, "hello h1"),
// React.createElement("h2", {}, "hello h2"),
// React.createElement("h3", {}, "hello h3"),
//);


//nested element using jsx

//const Heading = (
//    <div className="title">
  //  <h1>Hello  world h1</h1>
    //<h2>Hello world h2</h2>
    //<h3>Hello world h3</h3>
    //</div>
    
  //  );

  //create function element with same

  //const Heading = () => {
  //  return (
  //  <div className="title">
  //  <h1>Hello  world h1</h1>
   // <h2>Hello world h2</h2>
  //  <h3>Hello world h3</h3>
  //  </div>
  //);
  //};

  //Pass attribute into the tag in jsx

  //const Heading = () => {
    //  return (
     // <div className="title">
      //<h1 style={{color:"red"}} key="h1">Hello  world h1</h1>
     //<h2 style={{color:"blue"}} key="h2">Hello world h2</h2>
      //<h3 style={{color:"green"}} key="h3">Hello world h3</h3>
      //</div>
    //);
    //};

    //component composition

   /// const Component1 = () => {
      //  return <h1> Component Composition</h1>
        //};

    //const Component2 = () => {
      //  return(
        //    <div className="title">
          //       <h1 style={{color:"red"}} key="h1">Hello  world h1</h1>
            //     <h2 style={{color:"blue"}} key="h2">Hello world h2</h2>
              //   <Component1/>
                // <h3 style={{color:"green"}} key="h3">Hello world h3</h3>
              //</div>
        //);
    //};

    const Header = () => { 
      return (    
        <React.Fragment>
        <header className="header">
        <div className="left">
        <img src={logo} alt="image"  />
        </div>
        <div className="center">  
        <input type="text"  className="input" placeholder="search..." />
        <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div> 
        <div className="right">
        <img src={userIcon}  alt="image"/>
        </div>
        </header> 
        </React.Fragment> );      
 };


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

