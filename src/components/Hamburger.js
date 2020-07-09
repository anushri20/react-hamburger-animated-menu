// import React , {useRef, useEffect} from "react";
// import {Link} from 'react-router-dom';
// import "../App.scss";
// import gsap from 'gsap';
// import dallas from '../images/dallas.webp';
// import austin from '../images/austin.webp';
// import beijing from '../images/beijing.webp';
// import newyork from '../images/newyork.webp';
// import sanfrancisco from '../images/sanfrancisco.webp';

// const cities = [
//   {name: 'Dallas', image: dallas},
//   {name: 'Austin', image: austin},
//   {name: 'New York', image: newyork},
//   {name: 'San Francicso', image: sanfrancisco},
//   {name: 'Beijing', image: beijing}
// ]

// const Hamburger = ({state}) => {
//   // var for our animated dom nodes
//  let menu = useRef(null);
//  let revealMenu = useRef(null);
//  let revealMenuBackground = useRef(null);
//  let cityBackground = useRef(null);
//  let line1 = useRef(null);
//  let line2 = useRef(null);
//  let line3 = useRef(null);
//  let info = useRef(null);

// useEffect(() => {
//   if(state.clicked === false){
//     // close our menu
//     gsap.to([revealMenu,revealMenuBackground],{
//       duration: 0.8,
//       height:0,
//       ease: "power3.inOut",
//       stagger: {
//         amount: 0.07
//       }
//     });
//     gsap.to(menu, {
//       duration: 1,
//       css: {display: "none"}
//     });
    
//   }
//   else if(state.clicked === true || 
//     state.clicked=== true && state.initial === null){
//     //open our menu
//     gsap.to(menu, {
//       duration: 0,
//       css: {display: "block"}
//     });
//     gsap.to([revealMenuBackground,revealMenu] , {
//       height: "100%",
//       duration:0,
//       opacity: 1
//     });
//     staggerReveal(revealMenuBackground,revealMenu);
//     fadeInUp(info);
//     staggerText(line1,line2,line3);
//   }
// },[state])


// const staggerReveal = (node1, node2) => {
//   gsap.from([node1, node2], {
//     duration:0.8,
//     height:0,
//     transformOrigin: "right-top",
//     skewY: 2,
//     ease: "power3.inOut",
//     stagger: {
//       amount: 0.1
//     }
//   })
// };

// const staggerText = (node1, node2, node3) => {
//   gsap.from([node1,node2,node3],{
//     duration:0.8,
//     y:100,
//     delay:0.1,
//     ease:"power3.inOut",
//     stagger: {
//       amount: 0.3
//     }
//   });
// };

// const fadeInUp = (node) => {
//   gsap.from([node],{
//     y:60,
//     duration:1,
//     delay:.2,
//     opacity: 0,
//     ease: "power3.inOut"
//   });
// }

// const handleCity = city => {
//   gsap.to(cityBackground, {
//     duration:0,
//     background: `url(${city}) center center`
//   });
//   gsap.to(cityBackground, {
//     duration: 0.4,
//     opacity: 1,
//     ease: "power3.inOut"
//   });
//   gsap.to(cityBackground, {
//     duration:0.4,
//     skewY: 2,
//     transformOrigin: "right-top"
//   });
// };

// const handleCityReturn = () => {
//   gsap.to(cityBackground, {
//     duration: 0,
//     skewY: 0
//   });
//   gsap.to(cityBackground,{
//     duration:0.4,
//     opacity: 0,
//     skewY:0
//   });
// };

// const handleHover = e =>{
//   gsap.to(e.target, {
//     duration: 0.3,
//     y:3,
//     skewX: 4,
//     ease: "power1.inOut"
//   });
// };

// const handleHoverExit = e =>{
//   gsap.to(e.target, {
//     duration: 0.3,
//     y:-3,
//     skewX: 0,
//     ease: "power1.inOut"
//   });
// };

//   return (
//   <div ref={el=>(menu = el)} className='hamburger-menu'>
//     <div ref={el=>(revealMenuBackground = el)} className="menu-secondary-background-color"></div>
//     <div ref={el=>(revealMenu = el)} className="menu-layer">
//       <div ref={el => (cityBackground = el)} className="menu-city-background">

//       </div>
//       <div className="container">
//         <div className="wrapper">
//           <div className="menu-links">
//             <nav>
//               <ul>
//                 <li>
//                   <Link onMouseEnter={e => handleHover(e)}
//                         onMouseOut={e => handleHoverExit(e)}
//                   ref={el=>(line1 = el)} to="/opportunities" >Opportunities</Link>
//                 </li>
//                 <li>
//                   <Link onMouseEnter={e => handleHover(e)}
//                         onMouseOut={e => handleHoverExit(e)}
//                   ref={el=>(line2 = el)} to="/solutions" >Solutions</Link>
//                 </li>
//                 <li>
//                   <Link onMouseEnter={e => handleHover(e)}
//                         onMouseOut={e => handleHoverExit(e)}
//                   ref={el=>(line3 = el)} to="/contact" >Contact</Link>
//                 </li>
//               </ul>
//             </nav>
//             <div ref={el=>(info = el)} className="info">
//               <h3>Our Promise</h3>
//               <p>
//               redefined chunks as necessary, making this the first true generator on the Internet. 
//               It uses a dictionary of over 200 Latin words, combined with a handful of model sentence 
//               structures, to generate Lorem Ipsum 
//               </p>
//             </div>
//             <div className="locations">
//               Locations:
//              {cities.map(el => (
//                <span key={el.name} onMouseEnter={() => handleCity(el.image)} onMouseOut={handleCityReturn}>{el.name}</span>
//              ))}



//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Hamburger;


import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";



import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.png";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing }
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);
  

// OPEN MENU
const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

// CLOSE MENU
const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07
    }
  });
};

// STAGGER THE LINKS TO APPEAR
const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Fade up for the additonal info on our menu
 const fadeInUp = node => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut"
  });
};

// Hover on the link
const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut"
  });
};

// Hover off the link
 const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut"
  });
};

// adds city image once you hover on
const handleCity = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top"
  });
};

// Removes the city image once you hover off
const handleCityReturn = target => {
  gsap.to(target, {
    duration: 0,
    skewY: 0
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0
  });
};


  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/opportunities'>
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/solutions'>
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/contact-us'>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className='locations'>
                Locations:
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
