import React from 'react';
import Article from '../components/Article';
const list = [{
    id:0,
    title: 'Pierwszy artykuł',
    author: "Mateusz Sierka",
    txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius quia molestias, harum illum doloribus fuga voluptates sequi corporis nesciunt ad iure dignissimos quidem modi quam ipsa qui corrupti vero!'
},{
    id:1,
    title: 'Drugi artykuł',
    author: "Mateusz Sierka",
    txt: '2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius quia molestias, harum illum doloribus fuga voluptates sequi corporis nesciunt ad iure dignissimos quidem modi quam ipsa qui corrupti vero!'
},{
    id:2,
    title: 'Trzeci artykuł',
    author: "Mateusz Sierka",
    txt: '3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius quia molestias, harum illum doloribus fuga voluptates sequi corporis nesciunt ad iure dignissimos quidem modi quam ipsa qui corrupti vero!'
}]
const HomePage = () => {
    const article = list.map(article => (
        <Article key = {article.id} {...article}/>
    ))
    return ( 
        <>
        <div className='home'>{article}</div>
        </>
     );
}
 
export default HomePage;