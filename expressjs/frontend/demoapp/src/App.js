// import { useEffect, useState } from "react";
// import axios from "axios"
// import Dashboard from "./component/Dashboard";

// function App() {

//   const [jokes, setJokes] = useState([]);
//   useEffect(() => {
//     const response = axios.get('http://localhost:9090/jokes').then((res) => { console.log(res.data); return res.data; }).then((res) => { setJokes(res); console.log("setting the data", res) }).catch((err) => { console.log(err) });


//   })
//   return (
//     // <div>
//     //   <div>
//     //     {jokes.map(item => (
//     //       <div className="App" key={item.id}>
//     //         <h1>{item.title}</h1>
//     //         <p>{item.content}</p>
//     //       </div>

//     //     ))}
//     //   </div>



//     //   <div >
//     //     {/* Map over jokes array and render each joke */}
//     //     {jokes.map((item) => (
//     //       <div key={item.id}>
//     //         <h1>{item.title}</h1>
//     //         <p>{item.content}</p>
//     //       </div>
//     //     ))}
//     //   </div>



//     // </div>
// <div>

// <Dashboard/>
// </div>
//   );
// }

// export default App;


import React from 'react';
import Dashboard from './component/Dashboard';

const App = () => {
  // Define state for navigation items and trips
  const navItems = { home: 'Home', my_trip: 'My Trip', discover_places: 'Discover Places', notifications: 'Notifications', settings: 'Settings' };
  const trips = { kulon_progo: 'Kulon Progo', bromo: 'Bromo' };

  // Handle navigation item click
  const handleNavItemClick = (key) => {
    // Update state or perform actions based on clicked item
  };

  return (
    <div className="App">
      <Dashboard navItems={navItems} trips={trips} handleNavItemClick={handleNavItemClick} />
    </div>
  );
};

export default App;
