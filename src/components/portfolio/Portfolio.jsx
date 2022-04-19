import "./portfolio.scss";

import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  uniPortfolio,
  stylePortfolio,
  convPortfolio,
  giftPortfolio,
} from "../../data";
<link href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap" rel="stylesheet"></link>

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "uni",
      title: "Unique",
    },
    {
      id: "style",
      title: "Stylish",
    },
    {
      id: "con",
      title: "Convinient",
    },
    {
      id: "gift",
      title: "Gifts",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "uni":
        setData(uniPortfolio);
        break;
      case "style":
        setData(stylePortfolio);
        break;
      case "con":
        setData(convPortfolio);
        break;
      case "gift":
        setData(giftPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  }
