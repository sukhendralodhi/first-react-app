import React from "react";
import Header from "./Components/Header";

const App = () => {
    return (
        <div>
           {/* <Header title = "Text Utils"  aboutText = "About Us"/> */}
           <Header title = "TextUtils"  aboutText = "About Us" btnText = "Click me!"/>
           {/* <Header title = "TextUtils"  aboutText = "About Us" /> */}
           {/* <Header  aboutText = "About Us" /> */}
        </div>
    )
}

export default App;