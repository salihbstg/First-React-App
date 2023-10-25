import React from 'react';
import Date from "./Date";
import "./Product.css";
export default function Product(props) {
  return (
    <>
        <div className="card-wrapper">
            <div className="card-image">
              <img src={props.url} alt="" />
            </div>
            <div className="card-infos">
              <h1>{props.title}</h1>
              <p>{props.info}</p>
            </div>
            <div className="card-date">
                <Date/>
            </div>
        </div>
    </>
  )
}
