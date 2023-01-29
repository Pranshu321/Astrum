import React, { useState } from "react";
import Header from "./Header";

const Astra = () => {
	const [display, setDisplay] = useState(false);
	return (
		<div className=" h-screen w-screen bg-back">
			<Header />
			<div className=" flex justify-center items-center h-full flex-col ">
				
					<iframe
						allow="microphone;"
						width="1000"
						height="700"
						src="https://console.dialogflow.com/api-client/demo/embedded/dfdeb32e-d37a-40f2-a754-6da5f455d755"
					></iframe>
			
			</div>
		</div>
	);
};

export default Astra;
