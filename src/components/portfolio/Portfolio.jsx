import { useEffect, useState } from "react";

import PortfolioList from "../portfolioList/PortfolioList";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
} from "../../data";

import "./portfolio.scss";

export default function Portfolio() {
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Wild Code School",
        },
        {
            id: "web",
            title: "Projets Perso",
        },
        {
            id: "mobile",
            title: "Projets Fake",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            default:
                setData(webPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1><span>P</span>rojets</h1>
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
                    <a 
                    href={d.link} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    className="item" 
                    style={ d.link === "" ? {cursor: "not-allowed"} : {cursor: "pointer"}}>
                            <img
                                src={d.img}
                                alt=""
                            />
                        <h3>{d.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
}