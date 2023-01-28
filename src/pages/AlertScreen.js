import { collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Card from "../utils/Card";

const AlertScreen = () => {
	const [data, setdata] = useState([{}]);
	const [filter, setfilter] = useState("");
	const GetDataHelp = async () => {
		let temp = [];
		const querySnapshot = await getDocs(collection(db, "alerts"));
		querySnapshot.forEach((doc) => {
			temp.push({ ...doc.data(), id: doc.id });
		});
		console.log(temp);
		setdata(temp);
	};

	useEffect(() => {
		GetDataHelp();
	}, []);

	return (
		<>
			<div className="bg-back">
				<div>
					<Header />
					<div className="flex flex-col">
						<div className="w-full justify-center flex">
							<div className="flex mt-24 items-center justify-center w-1/2">
								<input
									type="search"
									id="default-search"
									className="block w-full p-4 pl-10 text-base text-black font-semibold border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Search Alerts , Relief and Info keywords"
									onChange={(e) => setfilter(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="flex flex-wrap gap-5 justify-center items-center py-24 h-full overflow-hidden bg-back">
							{data
								.filter((item) => {
									if (filter === "") {
										return item;
									} else if (item.type.includes(filter.toLocaleLowerCase())) {
										return item;
									}
								})
								.map((item, idx) => {
									return (
										<Card
											title={item.title}
											desc={item.desc}
											time={item.Timestamp}
											date={item.date}
											type={item.type}
											link={`https://www.google.com/maps?q=${item.latitude},%20${item.longi}`}
										/>
									);
								})}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default AlertScreen;
