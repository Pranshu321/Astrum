import React, { useState } from "react";
import Header from "./Header";

const Astra = () => {
	const [display, setDisplay] = useState(false);
	return (
		<div className=" h-screen w-screen bg-back">
			<Header />
			<div className=" flex justify-center items-center h-full flex-col ">
				<button
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-12 "
					onClick={() => setDisplay(!display)}
				>
					Toggle
				</button>
				{display && (
					<iframe
						allow="microphone;"
						width="350"
						height="430"
						src="https://console.dialogflow.com/api-client/demo/embedded/dfdeb32e-d37a-40f2-a754-6da5f455d755"
					></iframe>
				)}
			</div>
		</div>
	);
};

export default Astra;
