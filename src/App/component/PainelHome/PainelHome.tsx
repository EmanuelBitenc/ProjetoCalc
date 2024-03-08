//import logo from "../../../assets/calcIcon.svg";
import "./painelHome.css";
import "./animation.css";
import { useEffect, useState } from "react";

const PainelHome = () => {
  const simbolos = [
    "+",
    "-",
    "x",
    "÷",
    "%",
    "=",
    "≠",
    "y",
    "N",
    "∞",
    "∑",
    "+",
    "-",
    "x",
    "÷",
    "%",
    "=",
    "≠",
    "y",
    "N",
    "∞",
    "∑",
    "+",
    "-",
    "x",
    "÷",
    "%",
    "=",
    "≠",
    "y",
    "N",
    "∞",
    "∑",
  ];
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCooldown((prevCooldown) => !prevCooldown);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector(".containerPainel");
    if (container) {
      const altura = container.clientHeight;
      const largura = container.clientWidth;

      document.querySelectorAll(".iconsAnimacao").forEach((icon: Element) => {
        (icon as HTMLElement).style.top = Math.random() * altura + "px";
        (icon as HTMLElement).style.left = Math.random() * largura + "px";
      });
    }
  }, [cooldown]);

  return (
    <>
      <div className="containerPainel ">
        <div className="containerAnimacao">
          <div className="icons">
            {simbolos.map((simbolo, index) => (
              <span key={index} className="iconsAnimacao">
                {simbolo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PainelHome;
