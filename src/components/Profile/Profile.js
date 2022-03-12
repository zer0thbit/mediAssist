import "./Profile.css";
import { motion } from "framer-motion";
import Images from "../images";
import { useState, useRef, useEffect } from "react";

const Profile = ({ data }) => {
    const [width, setWidth] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        setTimeout(() => {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }, 3000);
    }, []);

    const RatingContainer = ({ starColor, rating }) => {
        const ratings = [];
        for (let i = 0; i < 5; i++) {

            ratings.push(<i key={i + "star"}
                className={`${i < rating ? "fa fa-star" : "fa fa-star-o"}`}
                style={{ color: `${starColor}` }}
            />)

        }

        return ratings;
    };

    return (
        <>
            <div className="profile">
                <div
                    className="profile-card"
                    style={{ backgroundColor: `${data.cardColor}` }}
                >
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="profile-details"
                    >
                        <div className="profile-name">
                            {data.name}, &nbsp;
                            {data.age}
                        </div>

                        <div className="profile-occupation">{data.occupation}</div>
                        <div className="profile-rating">
                            <RatingContainer
                                starColor={data.starColor}
                                rating={data.rating}
                            />
                        </div>
                        <div className="profile-rate">
                            <div>${data.rate}</div>
                            <div style={{ fontSize: "12px" }}>per day</div>
                        </div>
                    </motion.div>

                    <motion.img
                        initial={{ x: -250, y: -150, scale: 0.2 }}
                        animate={{ x: 0, y: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="profile-photo"
                        src={require(`../../assets/${data.image}/${data.image}@3x.png`)}
                        alt={`${data.name}`}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="profile-location"
                >
                    <div style={{ color: "#B9B9B9" }}>Location</div>
                    <div style={{ color: "#525252" }}>{data.location}</div>
                </motion.div>

                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="profile-exp"
                >
                    <p>Experience</p>
                </motion.div>

                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="profile-carousel"
                    ref={carousel}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="profile-slider"
                    >
                        {Images.map((image) => {
                            return (
                                <motion.div className="slider-item" key={image}>
                                    <img src={image} alt="slider" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="profile-desc"
                >
                    <h4 className="profile-about">About {data.name}</h4>
                    <p>{data.about}</p>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                className="profile-hire"
            >
                <button className="hire-btn">Hire {data.name}</button>
            </motion.div>
        </>
    );
};

export default Profile;
