import React, { useEffect, useState } from "react";
import "../css/cssfiles/dashboard.css";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import grave from "../images/icons/grave.png";
import patient from "../images/icons/patient.png";
import { HiBellAlert } from "react-icons/hi2";
import emergency_call from "../images/icons/emergency-call.png";
import Donations from "../utils/Donations";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
import axios from "axios";

const Dashboard = () => {
	const history = useHistory();
	const [Injured, setInjured] = useState(0);
	const [Deaths, setDeaths] = useState(0);
	const [Evacuated, setEvacuted] = useState(0);
	const [time, settime] = useState("");
	const [data, setdata] = useState([{}]);
	const [Emerdata, setEmerdata] = useState([{}]);
	let totaldona = 0;
	function sendMail(uniq, user, email) {
		emailjs
			.send(
				"service_hesknwi",
				"template_ibzkoaw",
				{
					email: email,
					ngo: auth.currentUser?.displayName,
					user: user,
					link: `https://astra-chat.up.railway.app/chat.html?name=${user}&room=${uniq}`,
				},
				"gP8sKnDLte9gp24k2"
			)
			.then(function (response) {
				console.log("SUCCESS!", response.status, response.text);
				window.open(
					`https://astra-chat.up.railway.app/chat.html?name=${auth.currentUser?.displayName}&room=${uniq}`,
					"_blank"
				);
				setemail("");
			})
			.catch((err) => {
				console.error(err);
			});
	}
	const GetData = async () => {
		let i = 0,
			e = 0,
			d = 0;
		const querySnapshot = await getDocs(collection(db, "stats"));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			i += parseInt(doc.data().Injured);
			e += parseInt(doc.data().Evacuated);
			d += parseInt(doc.data().Deaths);
			settime(doc.data().Timestamp);
		});
		setInjured(i);
		setDeaths(d);
		setEvacuted(e);
	};
	const [loc, setloc] = useState("");

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log("Error");
		}
	}

	async function handleEvacuated(id, Ev) {
		console.log("Eva", id, Ev);
		const washingtonRef = doc(db, "HelpForm", id);
		await updateDoc(washingtonRef, {
			Evacuated: !Ev,
		});
		window.location.reload();
	}

	function showPosition(position) {
		fetch(
			`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&apiKey=2f64534e3dbf426898582dd1b1f5f64f`
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result.results[0].city);
				setloc(result.results[0].city);
			})
			.catch((error) => console.log("error", error));
	}

	const GetDataHelp = async () => {
		let i = 0;
		let temp = [];
		const querySnapshot = await getDocs(collection(db, "HelpForm"));
		querySnapshot.forEach((doc) => {
			temp.push({ ...doc.data(), id: doc.id });
			i++;
		});
		// console.log(temp);
		setdata(temp);
	};
	const GetDataEmer = async () => {
		let temp = [];
		const querySnapshot = await getDocs(collection(db, "EmergencyReq"));
		querySnapshot.forEach((doc) => {
			temp.push(doc.data());
		});
		setEmerdata(temp);
	};

	// function getLocation() {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(showPosition);
	// 	} else {
	// 		console.log("Error");
	// 	}
	// 	const axios = require("axios");
	// }
	// function showPosition(position) {
	// 	const options = {
	// 		method: "GET",
	// 		url: "https://maps.googleapis.com/maps/api/geocode/json",
	// 		params: {
	// 			latlng: position.coords.latitude + "," + position.coords.longitude,
	// 			key: process.env.REACT_APP_GMAP_API,
	// 		},
	// 	};

	// 	axios
	// 		.request(options)
	// 		.then(function (response) {
	// 			console.log(response.data);
	// 			let address_comp = response.data.results[0].address_components.length;
	// 			console.log(address_comp);
	// 			setloc(
	// 				`${
	// 					response.data.results[0].address_components[address_comp - 3]
	// 						.long_name
	// 				}`
	// 			);
	// 		})
	// 		.catch(function (error) {
	// 			console.error(error);
	// 		});
	// }

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				history.push("/");
				// ...
			}
		});
		GetData();
		GetDataHelp();
		GetDataEmer();
		getLocation();
	}, []);

	return (
		<div className="bg-back">
			<div className="flex">
				<nav
					className="nav__mobile flex-column flex-align-center"
					style={{ background: "#131515" }}
				>
					<div className="nav__hamburger flex flex-align-center flex-column flex-justify-center mb-6">
						<span className="hamburger-line"></span>
						<span className="hamburger-line"></span>
						<span className="hamburger-line"></span>
					</div>
				</nav>
				<nav className="nav flex flex-column" style={{ background: "#131515" }}>
					<ul className="nav__menus flex flex-column mb-14">
						<span className="text-2xl font-bold ml-2 text-text">Astrum</span>
						<li className="mb-3">
							<a className="nav__menu flex flex-align-center">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.4498 3.7803C15.4098 4.0303 15.3898 4.2803 15.3898 4.5303C15.3898 6.7803 17.2098 8.5993 19.4498 8.5993C19.6998 8.5993 19.9398 8.5703 20.1898 8.5303V16.5993C20.1898 19.9903 18.1898 22.0003 14.7898 22.0003H7.40076C3.99976 22.0003 1.99976 19.9903 1.99976 16.5993V9.2003C1.99976 5.8003 3.99976 3.7803 7.40076 3.7803H15.4498ZM15.6508 9.8603C15.3798 9.8303 15.1108 9.9503 14.9498 10.1703L12.5308 13.3003L9.75976 11.1203C9.58976 10.9903 9.38976 10.9393 9.18975 10.9603C8.99076 10.9903 8.81076 11.0993 8.68975 11.2593L5.73076 15.1103L5.66976 15.2003C5.49976 15.5193 5.57976 15.9293 5.87976 16.1503C6.01976 16.2403 6.16976 16.3003 6.33976 16.3003C6.57076 16.3103 6.78976 16.1893 6.92976 16.0003L9.43975 12.7693L12.2898 14.9103L12.3798 14.9693C12.6998 15.1393 13.0998 15.0603 13.3298 14.7593L16.2198 11.0303L16.1798 11.0503C16.3398 10.8303 16.3698 10.5503 16.2598 10.3003C16.1508 10.0503 15.9098 9.8803 15.6508 9.8603ZM19.5899 2C20.9199 2 21.9999 3.08 21.9999 4.41C21.9999 5.74 20.9199 6.82 19.5899 6.82C18.2599 6.82 17.1799 5.74 17.1799 4.41C17.1799 3.08 18.2599 2 19.5899 2Z"
										fill="black"
									/>
								</svg>
								Your Location {loc ? loc : "none"}
							</a>
						</li>
						<li className="mt-8 mb-3">
							<a className="nav__menu active flex flex-align-center">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
										fill="black"
									/>
								</svg>
								Home
							</a>
						</li>
						<li className="mb-3">
							<Link
								to={"/statsUp"}
								className="nav__menu flex flex-align-center "
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.3 12.8294C18.5124 12.8294 19.6102 12.8983 20.2855 13.0265C20.296 13.0265 20.9139 13.1536 21.1199 13.2356C21.4172 13.3639 21.6688 13.5955 21.8291 13.8853C21.9438 14.1169 22 14.3616 22 14.617C21.9895 14.883 21.8174 15.3831 21.7367 15.5802C21.2346 16.8797 19.5868 19.3633 18.5815 20.3158C18.4211 20.4774 18.2269 20.652 18.1812 20.6983C17.9284 20.8955 17.6206 21 17.2894 21C16.991 21 16.6937 20.9074 16.4538 20.7209C16.3292 20.6318 16.1473 20.4545 16.0641 20.3715L16.0196 20.3265C14.978 19.3526 13.4121 16.926 12.9089 15.6955C12.8982 15.6955 12.6475 15.0816 12.5968 14.7113L12.5882 14.617V14.5706C12.5882 14.0361 12.8855 13.5373 13.3665 13.2819C13.6298 13.1429 14.3952 13.0147 14.4069 13.0028C15.0927 12.8983 16.1449 12.8294 17.3 12.8294ZM6.70553 12.8905C7.18478 12.8905 7.57926 13.2561 7.63317 13.7277L7.63945 13.8383L7.89575 18.4171C7.89575 19.0846 7.36325 19.625 6.70553 19.625C6.08892 19.625 5.58133 19.15 5.52029 18.5406L5.51414 18.4171L5.77161 13.8383C5.77161 13.3146 6.18942 12.8905 6.70553 12.8905ZM6.71173 3C7.00783 3 7.30509 3.09264 7.54618 3.27793C7.65004 3.35291 7.79368 3.48866 7.88681 3.57993L7.98037 3.67345C9.02079 4.64858 10.5879 7.07394 11.0911 8.30444C11.1007 8.30444 11.3523 8.91922 11.4032 9.28974L11.4118 9.38409V9.43041C11.4118 9.96371 11.1133 10.4626 10.6335 10.7179C10.3702 10.8581 9.60478 10.9852 9.59308 10.997C8.90727 11.1016 7.85514 11.1704 6.70003 11.1704C5.48757 11.1704 4.38981 11.1016 3.71453 10.9733C3.70282 10.9733 3.08606 10.8462 2.88009 10.7642C2.58282 10.6372 2.3312 10.4044 2.17087 10.1145C2.05618 9.88294 2 9.63827 2 9.38409C2.01053 9.11685 2.18257 8.618 2.26215 8.42083C2.76539 7.12026 4.41204 4.6367 5.41852 3.68532C5.57886 3.5226 5.77313 3.34801 5.81877 3.30169C6.07039 3.10452 6.37936 3 6.71173 3ZM17.2947 4.375C17.9113 4.375 18.4179 4.84999 18.4788 5.45938L18.4849 5.58295L18.2286 10.1618C18.2286 10.6856 17.8108 11.1096 17.2947 11.1096C16.8155 11.1096 16.421 10.744 16.3671 10.2724L16.3608 10.1618L16.1033 5.58295C16.1033 4.91543 16.637 4.375 17.2947 4.375Z"
										fill="black"
									/>
								</svg>
								Update data
							</Link>
						</li>
						<li className="mb-3">
							<Link
								to={"/createalert"}
								className="nav__menu flex flex-align-center"
							>
								<HiBellAlert size={30} />
								Create Alert/Relief
							</Link>
						</li>
						<li className="mb-3">
							<a
								href="https://donate.stripe.com/test_28o4gI1Dle9VdlS8ww"
								target={"blank"}
								className="nav__menu flex flex-align-center"
							>
								<svg
									width="27"
									height="24"
									viewBox="0 0 27 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.3541 0C23.9526 0 26.6667 2.64612 26.6667 7.17573H21.0252V7.22196C18.4069 7.22196 16.2844 9.29132 16.2844 11.844C16.2844 14.3967 18.4069 16.4661 21.0252 16.4661H26.6667V16.882C26.6667 21.3539 23.9526 24 19.3541 24H7.31259C2.71407 24 0 21.3539 0 16.882V7.11796C0 2.64612 2.71407 0 7.31259 0H19.3541ZM25.6711 9.16322C26.2209 9.16322 26.6667 9.59778 26.6667 10.1338V13.5079C26.6603 14.0414 26.2183 14.4723 25.6711 14.4786H21.1319C19.8064 14.496 18.6473 13.6112 18.3467 12.3524C18.1961 11.5711 18.4075 10.7648 18.9241 10.1496C19.4407 9.53449 20.2098 9.17343 21.0252 9.16322H25.6711ZM21.6652 10.7232H21.2267C20.9574 10.7201 20.6981 10.8222 20.5066 11.0067C20.3151 11.1912 20.2074 11.4428 20.2074 11.7053C20.2074 12.2561 20.6618 12.7043 21.2267 12.7106H21.6652C22.2281 12.7106 22.6844 12.2657 22.6844 11.7169C22.6844 11.1681 22.2281 10.7232 21.6652 10.7232ZM13.843 5.18825H6.31704C5.75871 5.18822 5.30427 5.62613 5.29778 6.17044C5.29778 6.72117 5.7522 7.1694 6.31704 7.17573H13.843C14.4059 7.17573 14.8622 6.73082 14.8622 6.18199C14.8622 5.63317 14.4059 5.18825 13.843 5.18825Z"
										fill="black"
									/>
								</svg>
								Donate
							</a>
						</li>
					</ul>
					<ul className="nav__logouts flex flex-column flex-justify-between">
						<li onClick={() => auth.signOut()}>
							<a className="nav__logout flex flex-align-center">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.4927 2C13.9753 2 16 3.99 16 6.44V11.23H9.89535C9.45785 11.23 9.11192 11.57 9.11192 12C9.11192 12.42 9.45785 12.77 9.89535 12.77H16V17.55C16 20 13.9753 22 11.4724 22H6.51744C4.02471 22 2 20.01 2 17.56V6.45C2 3.99 4.03488 2 6.52762 2H11.4927ZM18.5402 8.5502C18.8402 8.2402 19.3302 8.2402 19.6302 8.5402L22.5502 11.4502C22.7002 11.6002 22.7802 11.7902 22.7802 12.0002C22.7802 12.2002 22.7002 12.4002 22.5502 12.5402L19.6302 15.4502C19.4802 15.6002 19.2802 15.6802 19.0902 15.6802C18.8902 15.6802 18.6902 15.6002 18.5402 15.4502C18.2402 15.1502 18.2402 14.6602 18.5402 14.3602L20.1402 12.7702H16.0002V11.2302H20.1402L18.5402 9.6402C18.2402 9.3402 18.2402 8.8502 18.5402 8.5502Z"
										fill="black"
									/>
								</svg>
								Logout
							</a>
						</li>
					</ul>
				</nav>
				<section className="section__main" style={{ background: "#131515" }}>
					<div className="flex search mb-8">
						<button className="bg-white search__button">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 14.2715 20.5045 16.5823 18.9134 18.3165L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.8156 19.343C16.1488 20.6778 14.0354 21.477 11.7388 21.477C6.36876 21.477 1.99976 17.108 1.99976 11.738C1.99976 6.368 6.36876 2 11.7388 2ZM11.7388 3.5C7.19576 3.5 3.49976 7.195 3.49976 11.738C3.49976 16.281 7.19576 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5Z"
									fill="#919EAB"
								/>
							</svg>
						</button>
						<input
							type="text"
							placeholder="Search anything"
							className="search__input"
						/>
					</div>
					<div
						className="bg-white banner w-full flex justify-center flex-col"
						style={{ height: "max-content" }}
					>
						<h2 className="text-red-600 font-semibold text-2xl mb-4">
							Emergency Requests
						</h2>
						<table className="table-auto overflow-scroll w-100vw">
							<thead className="">
								<tr>
									<th>
										<h3 className="text-black mx-6 my-3">Time</h3>
									</th>
									<th>
										<h3 className="text-black mx-6 my-3">Location</h3>
									</th>
								</tr>
							</thead>
							<tbody>
								{Emerdata.map((item, idx) => (
									<tr className="">
										<th>
											<h3 className="text-black mx-4 my-3">{item.Timestamp}</h3>
										</th>
										<th>
											<h3 className="text-black mx-4 my-3">
												<Link
													to={{
														pathname: "/map/parameter-data",
														state: { lat: item.lat, lng: item.long },
													}}
												>
													{item.FullAddress}
												</Link>
											</h3>
										</th>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<h2 className="text-2xl mb-5 font-semibold text-text">Stats</h2>
					<div className="portos">
						<div className="flex flex-justify-between flex-align-center bg-white porto">
							<img src={patient} alt="" />
							<div className="mt-1">
								<div className="flex flex-align-center flex-justify-between mb-2">
									<p className="text-xl mr-4">
										<b>Injured</b>
										<span className="text-gray-500 text-sm"></span>
									</p>
									<p className="text-xl">{Injured}</p>
								</div>
								<div className="flex flex-align-center flex-justify-between">
									<small className="text-gray-500">last Updated {time}</small>
								</div>
							</div>
						</div>
						<div className="flex flex-justify-between flex-align-center bg-white porto">
							<img src={grave} alt="" />
							<div className="mt-1">
								<div className="flex flex-align-center flex-justify-between mb-2">
									<p className="text-xl mr-4">
										<b>Deaths</b>
										<span className="text-gray-500 text-sm"></span>
									</p>
									<p className="text-xl">{Deaths}</p>
								</div>
								<div className="flex flex-align-center flex-justify-between">
									<small className="text-gray-500">last Updated {time}</small>
								</div>
							</div>
						</div>
						<div className="flex flex-justify-between flex-align-center bg-white porto">
							<img src={emergency_call} alt="" />
							<div className="mt-1">
								<div className="flex flex-align-center flex-justify-between mb-2">
									<p className="text-xl mr-4">
										<b>Urgent Calls</b>
										<span className="text-gray-500 text-sm"></span>
									</p>
									<p className="text-xl">{Evacuated}</p>
								</div>
								<div className="flex flex-align-center flex-justify-between">
									<small className="text-gray-500">last Update {time}</small>
								</div>
							</div>
						</div>
					</div>

					<table className="table-auto overflow-scroll w-100vw">
						<thead className=" ">
							<tr>
								<th>
									<h3 className="text-white mx-6 my-3">Name</h3>
								</th>
								<th>
									<h3 className="text-white mx-6 my-3">Gender</h3>
								</th>
								<th>
									<h3 className="text-white mx-6 my-3">Problem type</h3>
								</th>
								<th>
									<h3 className="text-white mx-6 my-3">Phone</h3>
								</th>
								<th>
									<h3 className="text-white mx-6 my-3">Location</h3>
								</th>
								<th>
									<h3 className="text-white mx-6 my-3">Evacuation status</h3>
								</th>
								<th>
									<h3 className="text-white mx-6 my-3">Change status</h3>
								</th>
								<th>
									<h3 className="text-white mx-6 my-3">Chat</h3>
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, idx) => (
								<tr className="">
									<th>
										<h3
											className="text-white my-3"
											onClick={() => handleEvacuated(item.id, item.Evacuated)}
										>
											{item.FName}
										</h3>
									</th>
									<th>
										<h3 className="text-white my-3">{item.Gender}</h3>
									</th>
									<th>
										<h3 className="text-white my-3">{item.toh}</h3>
									</th>
									<th>
										<h3 className="text-white my-3">{item.Phone}</h3>
									</th>
									<th>
										<h3 className="text-white my-3">
											<Link
												to={{
													pathname: "/map/parameter-data",
													state: { lat: item.lat, lng: item.long },
												}}
											>
												{item.Place}{" "}
											</Link>
										</h3>
									</th>
									<th>
										<label
											for="toggle"
											className={`mx-4 my-3 text-md ${
												item.Evacuated != false
													? "text-green-500"
													: "text-yellow-500"
											}`}
										>
											{" "}
											{item.Evacuated ? "Evacuated" : "Ongoing"}
										</label>
									</th>
									<th>
										<div className="mx-4 my-3 relative  inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
											<input
												type="checkbox"
												checked={item.Evacuated}
												onClick={() => handleEvacuated(item.id, item.Evacuated)}
												name="toggle"
												id="toggle"
												className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
											/>
											<label
												for="toggle"
												className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
											></label>
										</div>
									</th>
									<th>
										<p
											onClick={() => {
												sendMail(uuidv4(), item.FName, item.Email);
											}}
											target={"_blank"}
											className="text-white cursor-pointer hover:text-green-500"
										>
											Live Chat
										</p>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</section>
				<section className="section__account" style={{ background: "#131515" }}>
					<div className="flex flex-align-center flex-justify-between mb-8 option">
						<div className="flex flex-align-center flex-justify-between">
							<img
								className="profile__pic mr-2"
								src={
									auth.currentUser?.photoURL != null
										? auth.currentUser?.photoURL
										: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_F8Fkc4WqCZ018z4t2RSPmA9iTAdeEaopA&usqp=CAU"
								}
								alt="Timothy"
								width="32"
								height="32"
							/>
							<p className="text-bold mr-2 text-text">
								{auth.currentUser?.displayName}
							</p>
						</div>
					</div>
					<h2 className="text-2xl mb-4 text-text font-semibold">
						Total Donations Received
					</h2>
					<div className="card flex flex-align-center flex-justify-center flex-column mb-4">
						{Donations.slice(2, 7).map((item, idx) => {
							totaldona += item.donation_Amount;
						})}
						<h2 className="text-2xl text-white text-bold mb-2">₹{totaldona}</h2>
						<p className="text-bold text-white flex flex-align-center">
							Last Updated {time}
						</p>
					</div>

					<h2 className="text-2xl mt-6 mb-4 text-text font-semibold">
						Recent Donations
					</h2>
					<div className="transactions">
						{Donations.slice(2, 7).map((item, idx) => (
							<div className="transaction flex flex-align-center flex-justify-between mb-4">
								<div className="flex flex-align-center flex-justify-between">
									<svg
										width="48"
										height="48"
										viewBox="20 20 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mr-2"
									>
										<g filter="url(#filter0_d_1_55)">
											<rect
												x="20"
												y="20"
												width="48"
												height="48"
												rx="16"
												fill="#636890"
											/>
										</g>
										<path
											d="M52.8406 43.5407L44.5906 33.0407C44.5205 32.9511 44.4308 32.8786 44.3285 32.8287C44.2262 32.7788 44.1138 32.7529 44 32.7529C43.8862 32.7529 43.7738 32.7788 43.6715 32.8287C43.5692 32.8786 43.4795 32.9511 43.4094 33.0407L35.1594 43.5407C35.0544 43.6708 34.9971 43.8329 34.9971 44.0001C34.9971 44.1672 35.0544 44.3294 35.1594 44.4594L43.4094 54.9594C43.4795 55.0491 43.5692 55.1216 43.6715 55.1714C43.7738 55.2213 43.8862 55.2472 44 55.2472C44.1138 55.2472 44.2262 55.2213 44.3285 55.1714C44.4308 55.1216 44.5205 55.0491 44.5906 54.9594L52.8406 44.4594C52.9456 44.3294 53.0029 44.1672 53.0029 44.0001C53.0029 43.8329 52.9456 43.6708 52.8406 43.5407ZM44.75 35.6657L51.0687 43.7094L44.75 46.5876V35.6657ZM43.25 46.5876L36.9312 43.7094L43.25 35.6657V46.5876ZM43.25 48.2376V52.3344L38.2437 45.9594L43.25 48.2376ZM44.75 48.2376L49.7562 45.9594L44.75 52.3344V48.2376Z"
											fill="white"
										/>
										<defs>
											<filter
												id="filter0_d_1_55"
												x="0"
												y="0"
												width="88"
												height="88"
												filterUnits="userSpaceOnUse"
												color-interpolation-filters="sRGB"
											>
												<feFlood
													flood-opacity="0"
													result="BackgroundImageFix"
												/>
												<feColorMatrix
													in="SourceAlpha"
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
													result="hardAlpha"
												/>
												<feOffset />
												<feGaussianBlur stdDeviation="10" />
												<feComposite in2="hardAlpha" operator="out" />
												<feColorMatrix
													type="matrix"
													values="0 0 0 0 0.5586 0 0 0 0 0.560629 0 0 0 0 0.57 0 0 0 0.04 0"
												/>
												<feBlend
													mode="normal"
													in2="BackgroundImageFix"
													result="effect1_dropShadow_1_55"
												/>
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="effect1_dropShadow_1_55"
													result="shape"
												/>
											</filter>
										</defs>
									</svg>
									<div>
										<p className="text-bold text-text">{item.donorName}</p>
										<small className="text-bold text-gray-500">
											{item.residence}
										</small>
									</div>
								</div>
								<p className="text-bold text-success">
									+{item.donation_Amount}
								</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Dashboard;
