import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 rounded-md mb-2'>
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;