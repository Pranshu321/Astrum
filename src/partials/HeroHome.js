import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../utils/Modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import axios from "axios";

function HeroHome() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);
	const [visible, setVisible] = useState(false);
	const [fullAddress, setFullAddress] = useState("");
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log("Error");
		}
	}

	function showPosition(position) {
		fetch(
			`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&apiKey=2f64534e3dbf426898582dd1b1f5f64f`
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result.results[0].formatted);
				const docRef = addDoc(collection(db, "EmergencyReq"), {
					lat: position.coords.latitude,
					long: position.coords.longitude,
					Timestamp: new Date().toLocaleTimeString("en-US"),
					FullAddress: result.results[0].formatted,
				})
					.then(() => {
						toast.success("Emergency Request Accepted");
						setVisible(false);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((error) => console.log("error", error));
	}

	// async function showPosition(position) {
	// 	try {
	// 		const options = {
	// 			method: "GET",
	// 			url: `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&apiKey=2f64534e3dbf426898582dd1b1f5f64f`,
	// 		};
	// 		axios
	// 			.request(options)
	// 			.then(async function (response) {
	// 				console.log(response.data);
	// 				// setFullAddress(response.data.results[0].formatted_address)
	// 				const docRef = await addDoc(collection(db, "EmergencyReq"), {
	// 					lat: position.coords.latitude,
	// 					long: position.coords.longitude,
	// 					Timestamp: new Date().toLocaleTimeString("en-US"),
	// 					FullAddress: response.data.results[0].formatted_address,
	// 				});
	// 				toast.success("Emergency Request Accepted");
	// 			})
	// 			.catch(function (error) {
	// 				console.error(error);
	// 			});
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast.error("Internal Server Error");
	// 	}
	// }
	return (
		<section className="relative bg-back">
			{/* Illustration behind hero content */}
			<div
				className="absolute ml-6 left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
				aria-hidden="true"
			>
				<svg
					width="1360"
					height="578"
					viewBox="0 0 1360 578"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							x1="50%"
							y1="0%"
							x2="50%"
							y2="100%"
							id="illustration-01"
						>
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Hero content */}
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Section header */}
					<div className="text-center pb-12 md:pb-16">
						<h1
							className="text-5xl md:text-6xl text-text font-extrabold leading-tighter tracking-tighter mb-4"
							data-aos="zoom-y-out"
						>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-yell to-high">
								Astrum
							</span>{" "}
							Disaster Risk Reduction
						</h1>
						<div className="max-w-3xl mx-auto">
							<p
								className="text-xl text-gray-600 mb-8"
								data-aos="zoom-y-out"
								data-aos-delay="150"
							>
								Connecting those in need with those who can help, in real-time with the guiding light in times of crisis.
							</p>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
								data-aos="zoom-y-out"
								data-aos-delay="300"
							>
								<div>
									<Link
										to={"/nasamap"}
										className="btn text-black font-semibold mr-4 bg-gray-400 hover:bg-yell w-full mb-4 sm:w-auto sm:mb-0"
										href="#0"
									>
										Disaster Pridiction<small>-by nasa</small>
									</Link>
								</div>
								<div>
									<Link
										to={"/help"}
										className="btn text-black font-semibold bg-yell hover:bg-yell w-full mb-4 sm:w-auto sm:mb-0"
										href="#0"
									>
										Need Help?
									</Link>
								</div>
								<div>
									<button
										onClick={(e) => {
											e.preventDefault();
											setVisible(true);
										}}
										data-toggle="modal"
										data-target="#exampleModalCenter"
										className="btn text-white bg-red-600 w-full sm:w-auto sm:ml-4"
									>
										Emergency Help
									</button>
									<Modal
										id="modal"
										ariaLabel="modal-headline"
										show={visible}
										handleClose={() => setVisible(false)}
									>
										<div className="">
											<div>
												<h2 className="text-text font-semibold text-2xl">
													Do you really want Emergency help ?
												</h2>
											</div>
											<div className="mt-8">
												<button
													onClick={getLocation}
													className=" text-white mr-4 rounded-md py-2 px-8 font-semibold bg-green-600 w-full mb-4 sm:w-auto sm:mb-0"
													href="#0"
												>
													Sure
												</button>
												<button
													onClick={(e) => setVisible(false)}
													className="py-2 px-8 rounded-md text-white font-semibold bg-red-600 w-full mb-4 sm:w-auto sm:mb-0"
													href="#0"
												>
													Cancel
												</button>
											</div>
										</div>
									</Modal>
								</div>
							</div>
						</div>
					</div>

					{/* Hero image */}
					<div>{/* Modal */}</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;