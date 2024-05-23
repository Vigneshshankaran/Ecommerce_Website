// import React from 'react';
// import { Pagination } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useLocation } from 'react-router-dom';

// const Paginate = ({ pages, page, keyword = '', isAdmin = false }) => {
//     const location = useLocation(); // Get current location
//     const searchParams = new URLSearchParams(location.search); // Extract query parameters
//     const currentKeyword = searchParams.get('keyword') || ''; // Get current 'keyword' parameter
//     const currentPage = searchParams.get('page') || 1; // Get current 'page' parameter

//     return pages > 1 && (
//         <Pagination>
//             {[...Array(pages).keys()].map((x) => (
//                 <LinkContainer
//                     key={x + 1}
//                     to={{
//                         pathname: isAdmin ? '/admin/productlist' : '/',
//                         search: `?keyword=${encodeURIComponent(currentKeyword)}&page=${x + 1}`,
//                     }}
//                 >
//                     <Pagination.Item active={x + 1 === parseInt(currentPage)}>{x + 1}</Pagination.Item>
//                 </LinkContainer>
//             ))}
//         </Pagination>
//     );
// };

// export default Paginate;


import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const Paginate = ({ pages, page, keyword = '', isAdmin = false }) => {
    const location = useLocation(); // Get current location
    const searchParams = new URLSearchParams(location.search); // Extract query parameters
    const currentKeyword = searchParams.get('keyword') || ''; // Get current 'keyword' parameter

    return pages > 1 && (
        <Pagination>
            {[...Array(pages).keys()].map((x) => (
                <LinkContainer
                    key={x + 1}
                    to={{
                        pathname: isAdmin ? '/admin/productlist' : '/',
                        search: `?keyword=${encodeURIComponent(currentKeyword)}&page=${x + 1}`,
                    }}
                >
                    <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    );
};

export default Paginate;
