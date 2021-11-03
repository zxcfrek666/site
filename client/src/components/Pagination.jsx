import React from 'react'

export const Pagination = ({ countriesPerPage, totalProduct, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProduct / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='pagination-block'>
            <ul className="my-pagination">
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)} className="page-item" key={number}>
                        <div className="pagination-item">
                            <span>{number}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
