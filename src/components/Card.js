import React from "react";
import "./Card.css";
import Data from "../data/data.json";
import { motion } from "framer-motion";

const Card = (props) => {
    const handleCardClick = (data) => {
        props.handleProfile(data);
    };

    const RatingContainer = ({ starColor, rating }) => {
        const ratings = starColor.map((ele, index) => {
            if (index < rating) {
                return (
                    <i
                        key={index + "star"}
                        className="fa fa-star"
                        style={{ color: `${ele}` }}
                    />
                );
            }
            return (
                <i
                    key={index + "star"}
                    className="fa fa-star-o"
                    style={{ color: `${ele}` }}
                />
            );
        });
        return ratings;
    };

    return (
        <motion.ul className="cards">
            {Data.map((ele, index) => (
                <motion.li
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 60, opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 0.2,
                        delay: index - index * 0.8,
                    }}
                    onClick={() => handleCardClick(ele)}
                    key={ele.name + index}
                    className="main-card"
                    style={{ backgroundColor: `${ele.cardColor}` }}
                >
                    <div className="photo-name">
                        <div className="photo">
                            <img
                                src={require(`../assets/${ele.image}/${ele.image}.png`)}
                                alt={`${ele.name}`}
                            />
                        </div>
                        <div>
                            <div className="name">
                                {ele.name}, &nbsp;
                                {ele.age}
                            </div>
                            <div className="location">{ele.location}</div>
                            <div className="occupation">{ele.occupation}</div>
                            <div className="rating">
                                <RatingContainer
                                    starColor={ele.starColor}
                                    rating={ele.rating}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="rate">
                        <div>${ele.rate}</div>
                        <div style={{ fontSize: "12px" }}>per day</div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default Card;
