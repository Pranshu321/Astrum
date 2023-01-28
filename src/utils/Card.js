import React from "react";
import { AiFillHeart, AiFillAlert, AiFillInfoCircle } from "react-icons/ai";

const Card = ({ title, desc, link, date, time, type }) => {
	return (
		<div>
			<div className="w-64 p-6 bg-white border flex flex-col justify-center items-center border-gray-200 rounded-lg shadow-xl h-44">
				<div className="flex flex-col justify-center items-center gap-2">
					{type !== "alert" && type !== "info" ? (
						<AiFillHeart size={40} color="#4BB543" />
					) : type !== "info" ? (
						<AiFillAlert size={40} color="red" />
					) : (
						<AiFillInfoCircle size={40} color="#F1D12F" />
					)}
					<a href="#">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
							{title}
						</h5>
					</a>
				</div>
				<p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">{desc}</p>
				<p className="inline-flex items-center text-gray-400">
					{date} {time}
					<a href={link} className="text-blue-600" target={"_blank"}>
						<svg
							className="w-5 h-5 ml-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
							<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
						</svg>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Card;
