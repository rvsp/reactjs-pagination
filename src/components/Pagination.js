const Pagination = ({ dataPerPage, totalCard, paginate }) => {
  const pageNumber = [];
  for (let index = 1; index < Math.ceil(totalCard / dataPerPage); index++) {
    pageNumber.push(index);
  }
  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumber.map((number) => (
            <li key={number} className="page-item">
              <a
                href="!#"
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
