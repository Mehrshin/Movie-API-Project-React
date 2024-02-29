// import { useState, useEffect } from 'react';

// export const useContent = (contentType:string) => {
//     const [content, setContent] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//         // Example: Fetch content using an API
//         try {
//             const response = await fetch(`my-api-url/${contentType}`);
//             const data = await response.json();
//             setContent(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//         };

//         fetchData();
//     }, [contentType]);

//     return { [contentType]: content };
// };
