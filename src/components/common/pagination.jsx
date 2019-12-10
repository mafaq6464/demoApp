import React from 'react';
import _ from "lodash";


const Pagination = (props) => {

    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);


    return ( 
        <div className="pagination" style={{ padding: "20px" }}>
            <ul style={{ listStyleType: "none" }}>
                { pages.map(page => (
                    <li key={page} style={{ display:"inline-block", verticalAlign:"top", margin:"0 3px" }}>
                        <button className={ page === currentPage ?  "page-link active" : "page-link" } style={{ display:"inline-block", cursor: "pointer", fontSize:"16px", lineHeight:"12px", padding:"5px", border:"1px solid #000", borderRadius:"3px" }} onClick={ () => onPageChange(page) } >{page}</button>
                    </li>
                ))}
            </ul>
        </div>  
    );
}

export default Pagination;