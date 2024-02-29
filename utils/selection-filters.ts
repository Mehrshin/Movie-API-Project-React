// export interface SlideItem{
//     movieId: number;
//     title: string;
//     genre: string;
//     poster_path: string;
// }

// interface ContentMap{
//     films: SlideItem[];
//     series: SlideItem[];
// }

// export interface Slides{
//     [genre: string]: SlideItem[];
// }

// export const selectionFilter = (contentMap: ContentMap): Slides => {
//     const slides: Slides = {};


//     const addContenttoSlides = (contentList: SlideItem[]) =>{
//         contentList.forEach(slideItem => {
//             if (slides[slideItem.genre]){
//                 slides[slideItem.genre].push(slideItem);
//             }else{
//                 slides[slideItem.genre]= [slideItem];
//             }
//         });
//     };
//     addContenttoSlides(contentMap.films);
//     addContenttoSlides(contentMap.series);

//     return slides;

// };

// export default selectionFilter;