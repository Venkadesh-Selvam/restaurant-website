import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";

function Category() {
  const { category } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dishPerPage = 8;

  useEffect(() => {
    if (category) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setFetchData(data.meals);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [category]);

  const indexOfLastDish = currentPage * dishPerPage;
  const indexOfFirstDish = indexOfLastDish - dishPerPage;
  const currentDishes = fetchData.slice(indexOfFirstDish, indexOfLastDish);

  return (
    <div className=" bg-body-secondary mt-5 p-8 py-2 shadow">
      <div className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-black text-uppercase fw-semibold">
            {category || "Category"}
          </h2>
          <div className="row mb-5 w-100 d-flex align-items-center justify-content-center">
            <div className="col-lg-12 mb-5 d-flex flex-column align-items-center">
              <ul
                className="d-flex flex-wrap justify-content-center list-unstyled"
                style={{ gap: "25px" }}
              >
                {currentDishes.map((list) => (
                  <li
                    key={list.idMeal}
                    className=" items-list text-center"
                    style={{ width: "22%" }}
                  >
                    <img
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={list.strMealThumb}
                      alt={list.strMeal}
                    />
                    <p style={{ color: "purple" }} className="fs-5">
                      {list.strMeal}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {fetchData.length > dishPerPage && (
              <div className="d-flex justify-content-center align-items-center">
                <Pagination
                  dishPerPage={dishPerPage}
                  totalDishes={fetchData.length}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
