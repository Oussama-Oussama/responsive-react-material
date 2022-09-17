import React from "react";
import "../Styles/member.css";
import img from "../Images/oussama.fb.jpg"

function Memcard(props) {
  return (
    <div class="card">
      <div class="card-content">
        <div class="image">
          <img src={img} alt="" />
        </div>

        <div class="media-icons">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-github"></i>
        </div>

        <div class="name-profession">
          <span class="name">{props.name}</span>
          <span class="profession">{props.job}</span>
        </div>

        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>

        <div class="button">
          <button class="abootme">About me</button>
          <button class="hireme">Hire me</button>
        </div>
      </div>
    </div>
  );
}

export default Memcard;
