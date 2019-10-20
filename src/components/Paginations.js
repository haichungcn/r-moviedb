import React, {useEffect} from 'react'
import { Pagination } from 'react-bootstrap';

export default function Paginations(props) {
    
    return (
        // <Pagination>
        //     <Pagination.First href={`#${props.pageList[0]}`}/>
        //     <Pagination.Prev href={`#${props.pageList[props.currentPageNumber-3]}`}/>
        //     <Pagination.Item href={`#${props.pageList[props.currentPageNumber-2]}`}>
        //         {props.currentPageNumber > 1 ? props.currentPageNumber-1 : props.currentPageNumber}
        //     </Pagination.Item>

        //     <Pagination.Item key={props.currentPageNumber} active={true}>
        //         {props.currentPageNumber}
        //     </Pagination.Item>

        //     <Pagination.Item onClick={() => {
        //         props.setCurrentPageNumber(props.currentPageNumber+1)
        //         props.getData(props.mode)
        //     }}>{props.currentPageNumber+1}</Pagination.Item>
        //     <Pagination.Next onClick={() => {
        //         props.setCurrentPageNumber(props.currentPageNumber+2)
        //         props.getData(props.mode)
        //     }}/>
        //     <Pagination.Last onClick={() => {
        //         props.setCurrentPageNumber(10)
        //         props.getData(props.mode)
        //     }}/>
        // </Pagination>
        <button type="button" className="btn btn-outline-secondary rounded-pill loadMoreBtn ml-3 align-self-center" onClick={() => props.getData(props.mode)}><i className="fas fa-plus"></i></button>
    )
}
