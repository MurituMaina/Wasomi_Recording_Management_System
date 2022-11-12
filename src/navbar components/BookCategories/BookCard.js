
const BookCard = ({book}) => {
  return (
    <div className="card">
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{book.title}</td>
              <td>{book.category}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCard;
