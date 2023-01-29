import React, { useState } from "react";
import "../css/cssfiles/helpform.css";
import Header from "../partials/Header";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Footer from "../partials/Footer";

const Helpform = () => {
	const [loc, setloc] = useState("");
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log("Error");
		}
	}

	const [formdata, setformdata] = useState({
		FName: "",
		LName: "",
		Gender: "",
		Age: "",
		Phone: "",
		Email: "",
		long: "",
		lat: "",
		Place: "",
		toh: "",
		Evacuated: false,
		FullAddress: "",
		Timestamp: new Date().toLocaleTimeString("en-US"),
	});
	function showPosition(position) {
		fetch(
			`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&apiKey=2f64534e3dbf426898582dd1b1f5f64f`
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result.results[0].formatted);
				setformdata({
					...formdata,
					FullAddress: result.results[0].formatted,
					lat: position.coords.latitude,
					long: position.coords.longitude,
				});
				setloc(result.results[0].formatted);
			})
			.catch((error) => console.log("error", error));
	}
	const SendData = async (e) => {
		e.preventDefault();
		try {
			const docRef = await addDoc(collection(db, "HelpForm"), formdata);
			console.log("Document written with ID: ", docRef.id);
			toast.success("Help registered , We will get back to you soon..");
		} catch (error) {
			toast.error("Currently We are down , try after some time");
		}
	};

	return (
		<div className="bg-back">
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "",
					duration: 3000,
					style: {
						background: "#363636",
						color: "#fff",
					},

					// Default options for specific types
					success: {
						duration: 3000,
						theme: {
							primary: "green",
							secondary: "black",
						},
					},
				}}
			/>
			<Header />
			<div className="bg-back" style={{ padding: "60px" }}></div>
			<div className="forms mb-20">
				<form className="form" onSubmit={SendData}>
					<div className="title">Welcome</div>
					<div className="subtitle">Let us know Your Problem!</div>
					<div className="input-container ic1">
						<input
							onChange={(e) =>
								setformdata({ ...formdata, FName: e.target.value })
							}
							id="firstname"
							className="input"
							type="text"
							placeholder=""
							required
						/>
						<div className="cut"></div>
						<label for="firstname" className="placeholder">
							First name
						</label>
					</div>
					<div className="input-container ic2">
						<input
							onChange={(e) =>
								setformdata({ ...formdata, LName: e.target.value })
							}
							id="lastname"
							className="input"
							type="text"
							placeholder=""
							required={true}
						/>
						<div className="cut"></div>
						<label for="lastname" className="placeholder">
							Last name
						</label>
					</div>
					<div className="input-container ic2">
						<input
							onChange={(e) =>
								setformdata({ ...formdata, Gender: e.target.value })
							}
							id="gender"
							className="input"
							type="text"
							placeholder=""
							required={true}
						/>
						<div className="cut"></div>
						<label for="gender" className="placeholder">
							Gender
						</label>
					</div>
					<div className="input-container ic2">
						<input
							onChange={(e) =>
								setformdata({ ...formdata, Email: e.target.value })
							}
							id="email"
							className="input"
							type="email"
							placeholder=""
						/>
						<div className="cut cut-short"></div>
						<label for="email" className="placeholder">
							Email
						</label>
					</div>
					<div className="input-container ic2">
						<input
							min={0}
							onChange={(e) =>
								setformdata({ ...formdata, Age: e.target.value })
							}
							id="Age"
							className="input"
							type="number"
							placeholder=""
							required
						/>
						<div className="cut "></div>
						<label for="Age" className="placeholder">
							Age
						</label>
					</div>
					<div className="input-container ic2">
						<input
							maxLength={10}
							onChange={(e) =>
								setformdata({ ...formdata, Phone: e.target.value })
							}
							id="Phone"
							className="input"
							type="tel"
							placeholder=""
							required
						/>
						<div className="cut cut-short"></div>
						<label for="Phone" className="placeholder">
							Phone
						</label>
					</div>
					<div className="input-container ic2">
						<input
							onChange={(e) =>
								setformdata({ ...formdata, toh: e.target.value })
							}
							id="toh"
							className="input"
							type="text"
							placeholder=""
							required
						/>
						<div className="cut" style={{ paddingRight: "90px" }}></div>
						<label for="toh" className="placeholder">
							Help Category
						</label>
					</div>
					<div className="input-container ic2">
						<input
							onChange={(e) =>
								setformdata({ ...formdata, Place: e.target.value })
							}
							id="Place"
							className="input"
							type="text"
							placeholder=""
							required
						/>
						<div className="cut" style={{ paddingRight: "90px" }}></div>
						<label for="Place" className="placeholder">
							Place of Help
						</label>
					</div>
					<div className="input-container ic2 mb-8">
						<input
							id="text"
							style={{ marginBottom: "10px" }}
							className="input"
							defaultValue={loc}
							type="text"
							placeholder=""
							required
						/>
						<div className="cut"></div>
						<label for="email" className="placeholder">
							Location
						</label>
						<button
							type="button"
							onClick={getLocation}
							className="btn-sm mr-3 bg-yell font-semibold text-back hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out"
						>
							Locate Me
						</button>
					</div>
					<button type="submit" className="submit">
						Submit
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Helpform;
