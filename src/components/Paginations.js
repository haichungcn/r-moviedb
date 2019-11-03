import React, {useEffect} from 'react'
import { Pagination } from 'react-bootstrap';

export default function Paginations(props) {
    
    let {currentPageNumber, totalPageNumber,handlePage, mode} = props;
    let pageArray = [];
    for (let i = 0; i < totalPageNumber; i++) {
        pageArray.push(i+1);
    }
    console.log(pageArray)
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {pageArray.map(el => {
                if((el >= currentPageNumber - 2) && (el <= currentPageNumber + 2))
                return (<Pagination.Item onCLick={() => {
                    console.log('clicked', currentPageNumber, 'el:', el,);
                    handlePage(mode, el)}}>{el}</Pagination.Item>)
            })}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
        // <button type="button" className="btn btn-outline-secondary rounded-pill loadMoreBtn ml-3 align-self-center" onClick={() => props.getData(props.mode)}><i className="fas fa-plus"></i></button>
    )
}
