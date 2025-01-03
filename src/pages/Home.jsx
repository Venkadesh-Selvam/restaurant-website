import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import "./custom.scss";

function Home() {
  const [fetchData, setFetchData] = useState([]);

  const [favDish, setFavDish] = useState([]);

  useEffect(() => {
    const favDishes = JSON.parse(localStorage.getItem("favDish"));
    if (favDishes) {
      setFavDish(favDishes);
    }
  }, []);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("setFetchData"));
    if (savedData) {
      setFetchData(savedData);
    } else {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => {
          console.log({ data });
          if (data.categories) {
            setFetchData(data.categories);
            localStorage.setItem(
              "setFetchData",
              JSON.stringify(data.categories)
            );
          }
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div className="home-page bg-body-secondary">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 d-flex d-sm-block flex-column align-items-center">
              <h1 className="mb-2 text-black fw-semibold text-center text-uppercase fs-1 text-sm-start">
                Welcome To SelvaNila
              </h1>
              <h2 className="mb-2 text-black fw-semibold">
                !.. Where Flavor Meets Unforgettable Moments ..!{" "}
              </h2>
            </div>
          </div>
        </div>
      </header>
      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className=" mb-5 text-success text-uppercase fw-semibold">
            Our Top Menu
          </h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-12 mb-5">
              <ul
                className="d-flex flex-wrap justify-content-center list-unstyled"
                style={{ gap: "25px" }}
              >
                {fetchData.map((list) => (
                  <li
                    key={list.idCategory}
                    className="items-list text-center"
                    style={{ width: "20%" }}
                  >
                    <img
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={list.strCategoryThumb}
                      alt={list.strCategory}
                    />
                    <p className="text-success">{list.strCategory}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="row ">
        <div></div>
        <div className="col">
          <ul className="">
            
          </ul>
        </div>
      </div> */
}
