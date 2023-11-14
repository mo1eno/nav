import React from "react";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <p className="primary-subheading">О нас</p>
        <h1 className="primary-heading">Почему именно мы?</h1>
        <p className="primary-text">
          Рандомайзер - это ваш гид в мире случайностей, который обеспечит вам
          интересные и неожиданные результаты.
        </p>
        <p className="primary-text">
          Вы можете настроить параметры рандомизации, задавать диапазоны чисел,
          включать или исключать определенные варианты. Больше не нужно решать,
          как делать выбор, просто доверьтесь Рандомайзеру!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default About;
