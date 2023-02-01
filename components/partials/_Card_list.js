import React from "react";
import styles from "../../styles/partials/_card_list.module.css";
import Cart_defunt from "./_Cart_defunt";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function Card_list({ tab }) {
  const owl_options = {
    margin: 30,
    autoplay: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    fluidSpeed: 10,
    responsiveClass: true,
    rewind: true,
    dotsClass: ["owl-dots"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };

  const component = (
    <>
      <OwlCarousel className="owl-theme" {...owl_options}>
        {tab.map((element) => (
          <Cart_defunt key={element} />
        ))}
      </OwlCarousel>
    </>
  );

  return component;
}

export default Card_list;
