// // components/common/CustomCursor/CustomCursor.jsx
// import React from 'react';
// import './CustomCursor.css';

// const CustomCursor = ({ position }) => {
//   return (
//     <div 
//       className="custom-cursor"
//       style={{
//         left: position.x - 10,
//         top: position.y - 10
//       }}
//     />
//   );
// };

// export default CustomCursor;
import React from 'react';
import './CustomCursor.css';

const CustomCursor = ({ position }) => {
  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CustomCursor;
