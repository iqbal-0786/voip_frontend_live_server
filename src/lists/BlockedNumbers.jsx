import React, { useState } from "react";

const BlockedNumbers = () => {
  const [blockedNumbers, setBlockedNumbers] = useState([]);
  const [newBlockedNumber, setNewBlockedNumber] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const numbersPerPage = 5;

  const addBlockedNumber = () => {
    if (newBlockedNumber.trim() !== "") {
      setBlockedNumbers([...blockedNumbers, newBlockedNumber]);
      setNewBlockedNumber("");
    }
  };

  const removeBlockedNumber = (number) => {
    const updatedNumbers = blockedNumbers.filter((n) => n !== number);
    setBlockedNumbers(updatedNumbers);
  };

  const isNumberBlocked = (number) => {
    return blockedNumbers.includes(number);
  };

  const toggleBlock = (number) => {
    if (isNumberBlocked(number)) {
      removeBlockedNumber(number);
    } else {
      setBlockedNumbers([...blockedNumbers, number]);
    }
  };

  const indexOfLastNumber = currentPage * numbersPerPage;
  const indexOfFirstNumber = indexOfLastNumber - numbersPerPage;
  const currentNumbers = blockedNumbers.slice(
    indexOfFirstNumber,
    indexOfLastNumber
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main id="mains" className="mains">
      <section>
        <div className="filter-section">
          <div>
            <input
              type="text"
              value={newBlockedNumber}
              onChange={(e) => setNewBlockedNumber(e.target.value)}
              placeholder="Enter a number to block"
            />
            <button onClick={addBlockedNumber}>Block</button>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Blocked Number</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentNumbers.map((number) => (
                  <tr key={number}>
                    <td>
                      {number}
                      {isNumberBlocked(number) ? (
                        <span className="block-icon">🚫</span>
                      ) : null}
                    </td>
                    <td>
                      <button onClick={() => toggleBlock(number)}>
                        {isNumberBlocked(number) ? (
                          <>
                            <span className="unblock-icon">🔓</span>
                            Unblock
                          </>
                        ) : (
                          <>
                            <span className="block-icon">🚫</span>
                            Block
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ul className="pagination">
          {Array(Math.ceil(blockedNumbers.length / numbersPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  index + 1 === currentPage ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default BlockedNumbers;
