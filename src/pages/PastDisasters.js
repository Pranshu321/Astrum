import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/cssfiles/PastDisasters.css";
import Header from "../partials/Header";
import Popup from "../utils/PopUp";
const PastDisasters = () => {
	const [data, setdata] = useState([{}]);
	const [title, setitle] = useState("");
	const [text, settext] = useState("");
	const [openModal, setOpenModel] = useState(false);
	const Fetching = async () => {
		fetch(
			"https://ap-south-1.aws.data.mongodb-api.com/app/hackit-tngat/endpoint/disaster_blogs"
		)
			.then((response) => response.json())
			.then((datas) => {
				console.log(datas);
				setdata(datas);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		Fetching();
	}, []);

	return (
		<>
			<Header />
			<div style={{ background: "black" }}>
				<div style={{ padding: "30px" }}></div>
				{openModal && (
					<Popup title={title} text={text} setOpenModel={setOpenModel} />
				)}
				<div className="container">
					{data.map((item, idx) => {
						return (
							<div key={item._id} className="feature feature-one">
								<h2 className="feature__title">{item.title}</h2>
								<p className="feature__desc">
									{item.duration} {item.year}
								</p>
								<button
									onClick={() => {
										setitle(item.title);
										settext(item.disaster_Info.slice(0,1000));
										setOpenModel(true);
									}}
									className="mt-12 cursor-pointer btn text-black bg-gradient-to-r from-yell to-high font-semibold hover:bg-[#00C8C8] w-full mb-4 sm:w-auto sm:mb-0"
									href="#0"
								>
									Read More
								</button>
								<img
									onClick={() => console.log(item._id)}
									className="feature__img"
									src="https://kellychi22.github.io/frontend-mentor-solutions/10-four-card-feature-section/images/icon-supervisor.svg"
									alt=""
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default PastDisasters;
