import React from 'react';
import Photo from './Photo';
import ReactPaginate from 'react-paginate'

function Photos(props) {

    const handlePageClick = () => {
        console.log("page clicked")
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ReactPaginate 
                previousLabel={'previous'}
                nextLabel= {'next'}
                breakLabel= {'...'}
                pageCount= {25}
                marginPagesDisplayed= {3}
                pageRangeDisplayed= {6}
                onPageChange= {handlePageClick}
            />
            {/* <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo /> */}
        </div>
    );
}

export default Photos;