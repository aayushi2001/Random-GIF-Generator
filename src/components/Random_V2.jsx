import React from 'react';
import '../comp.css';
import useGif from '../useGif';

const Tag = () => {
    const {gif, fetchGif} = useGif();

    return (
        <div className="container abc">
            <h1>Random Gif</h1>
            <img width="300" height="300" src={gif} alt="Random Gif" />
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag;