import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Ищете решение для принятия случайных решений?
          </h1>
          <p className="primary-text">
            Тогда вам точно понравится наш Рандомайзер! Это простой и удобный
            инструмент, который поможет вам избежать скучных рутинных задач -
            выбирать случайные числа, определять случайные места для поездок,
            делать случайный выбор из предложенных вариантов и многое другое!
          </p>
          <button className="secondary-button">
            Узнать больше <FiArrowRight />{" "}
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
