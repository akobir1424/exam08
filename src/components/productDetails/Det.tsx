"use client";
import { card1, card2, card3, card4, DandyChair } from "@/assets/index";
import Brand from "@/components/brand/Brand";
import Input from "@/components/input/Input";
import React, { useState } from "react";
import Image from "next/image";
import "./productDetails.scss";

const Det = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerProduct = 85;
  const [totalPrice, setTotalPrice] = useState(pricePerProduct);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + pricePerProduct);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - pricePerProduct);
    }
  };

  return (
    <div>
      <div className="container md:mx-auto  lg:px-[62px] px-[10px]">
       
      </div>
      <div className="cards">
        <div className="container top">
          <div className="cards__wrapper">
            <h3>You might also like</h3>
            <ul className="cards__list">
              <li className="cards__item">
                <Image src={card1} alt="rasm" />
                <h5>The Dandy chair</h5>
                <p>£250</p>
              </li>

              <li className="cards__item">
                <Image src={card2} alt="rasm" />
                <h5>Rustic Vase Set</h5>
                <p>£155</p>
              </li>
              <li className="cards__item">
                <Image src={card3} alt="rasm" />
                <h5>The Silky Vase</h5>
                <p>£150</p>
              </li>
              <li className="cards__item">
                <Image src={card4} alt="rasm" />
                <h5>The Lucy Lamp</h5>
                <p>£399</p>
              </li>
            </ul>
            <div className="cards__btns">
              {" "}
              <button className="cards__btn">View collection</button>
            </div>
          </div>
        </div>
      </div>
      <Brand />
      <Input />
    </div>
  );
};

export default Det;
