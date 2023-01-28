import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineCloseSquare } from "react-icons/ai";
//INTERNAL IMPORT
import "../css/cssfiles/Popup.css";

const Popup = ({ title, text, setOpenModel }) => {
	return (
		<div className={"Model"}>
			<div className={"Model_box"} style={{ width: "40rem" }}>
				<div className={"Model_box_heading"}>
                    <p style={{ color: "#D0E167" , fontWeight: 600 , fontSize: "24px" , textAlign: "center" }}>{title}</p>
					<div
						className={"Model_box_heading_img"}
						onClick={() => setOpenModel(false)}
						style={{ cursor: "pointer" }}
					>
						<AiOutlineCloseSquare color="#D0E167" size={50} />
					</div>
				</div>

				<div
					className={"Model_box_wallet"}
                    style={{
                        marginTop: "12px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<div className="text-white text-base">{text}</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
