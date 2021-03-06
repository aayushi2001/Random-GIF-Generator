import React, { useState } from 'react';
import '../comp.css';
import useGif from '../useGif';

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGif(tag);

    return (
        <div className="container ab">
            <h1>Random {tag} Gif</h1>
            <img width="300" height="300"  src={gif} alt="Random Gif" />
            <span><input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button></span>
        </div>
    );
}

export default Tag;