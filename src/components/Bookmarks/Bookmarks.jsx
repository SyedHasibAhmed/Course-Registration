import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3'>
            <h1 className='text-3xl text-center'>Bookmarks:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => 
                    <Bookmark 
                    key={idx}
                    bookmark={bookmark}
                    ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;