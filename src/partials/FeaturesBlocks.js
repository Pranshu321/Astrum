import React from "react";
import { Link } from "react-router-dom";

function FeaturesBlocks() {
	return (
		<section className="relative">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			{/* <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-back pointer-events-none"
        aria-hidden="true"
      ></div> */}
			{/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4 text-text">How Astrum works</h2>
						<p className="text-xl text-gray-600">
							How we work and processes followed
						</p>
					</div>

					{/* Items */}
					<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
						{/* 1st item */}
						<div className="relative flex flex-col justify-center items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect
										className="fill-current text-yell"
										width="64"
										height="64"
										rx="32"
									/>
									<g strokeWidth="2">
										<path
											className="stroke-current text-black font-bold"
											d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
										/>
										<path
											className="stroke-current text-black"
											d="M20.571 37.714h5.715L36.57 26.286h8"
										/>
										<path
											className="stroke-current text-black font-bold"
											strokeLinecap="square"
											d="M41.143 34.286l3.428 3.428-3.428 3.429"
										/>
										<path
											className="stroke-current text-black"
											strokeLinecap="square"
											d="M41.143 29.714l3.428-3.428-3.428-3.429"
										/>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Initial Contact
							</h4>
							<p className="text-gray-600 text-center">
								Needy one can contact us via form and also with onclick
								help.
							</p>
						</div>

						{/* 2nd item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect
										className="fill-current text-yell"
										width="64"
										height="64"
										rx="32"
									/>
									<g
										strokeWidth="2"
										transform="translate(19.429 20.571)"
									>
										<circle
											className="stroke-current text-black"
											strokeLinecap="square"
											cx="12.571"
											cy="12.571"
											r="1.143"
										/>
										<path
											className="stroke-current text-black"
											d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
										/>
										<path
											className="stroke-current text-black font-bold"
											d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
										/>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Hotspot Finding
							</h4>
							<p className="text-gray-600 text-center">
								As the data provided from the organizations and people
								we identify the hotspot.
							</p>
						</div>

						{/* 3rd item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect
										className="fill-current text-yell"
										width="64"
										height="64"
										rx="32"
									/>
									<g strokeLinecap="square" strokeWidth="2">
										<path
											className="stroke-current text-black font-bold"
											d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
										/>
										<path
											className="stroke-current text-black"
											d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
										/>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Level Broadcast
							</h4>
							<p className="text-gray-600 text-center">
								The bridge with the authorites and sufferers as
								providing they can broadcast the infomation about alerts
								and relief.
							</p>
						</div>

						{/* 4th item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect
										className="fill-current text-yell"
										width="64"
										height="64"
										rx="32"
									/>
									<g
										transform="translate(22.857 19.429)"
										strokeWidth="2"
									>
										<path
											className="stroke-current text-black"
											strokeLinecap="square"
											d="M12.571 4.571V0H0v25.143h12.571V20.57"
										/>
										<path
											className="stroke-current text-black"
											d="M16 12.571h8"
										/>
										<path
											className="stroke-current text-black"
											strokeLinecap="square"
											d="M19.429 8L24 12.571l-4.571 4.572"
										/>
										<circle
											className="stroke-current text-black font-bold"
											strokeLinecap="square"
											cx="12.571"
											cy="12.571"
											r="3.429"
										/>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Statistics
							</h4>
							<p className="text-gray-600 text-center">
								We also provide the stats to government authorites about
								the injured , evacuations etc.
							</p>
						</div>

						{/* 6th item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect
										className="fill-current text-yell"
										width="64"
										height="64"
										rx="32"
									/>
									<g strokeWidth="2">
										<path
											className="stroke-current text-black"
											d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
										/>
										<path
											className="stroke-current text-black"
											d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
										/>
										<path
											className="stroke-current text-black"
											d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
										/>
										<path
											className="stroke-current text-black font-bold"
											d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
											strokeLinecap="square"
										/>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Donation
							</h4>
							<p className="text-gray-600 text-center">
								The ones who want to donate to needy ones and help to
								overcome the loss caused by disaster.
							</p>
						</div>
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								id="changeColor"
								className="w-[4.5rem] h-[4.5rem] p-1 -mt-1 mb-2"
								fill="#DC7633"
								xmlns="http://www.w3.org/2000/svg"
								xlink="http://www.w3.org/1999/xlink"
								width="64"
								zoomAndPan="magnify"
								viewBox="0 0 375 374.9999"
								height="64"
								preserveAspectRatio="xMidYMid meet"
								version="1.0"
							>
								<defs>
									<path
										id="pathAttribute"
										d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 "
										fill="#d4e162"
									></path>
								</defs>
								<g>
									<path
										id="pathAttribute"
										d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "
										fill-opacity="1"
										fill-rule="nonzero"
										fill="#d4e162"
									></path>
								</g>
								<g id="inner-icon" transform="translate(85, 75)">
									{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="199.8"
										height="199.8"
										fill="currentColor"
										class="bi bi-chat"
										viewBox="0 0 16 16"
										id="IconChangeColor"
									>
										{" "}
										<path
											d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
											id="mainIconPathAttribute"
											fill="#000000"
										></path>{" "}
									</svg>{" "}
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Live Chat
							</h4>
							<p className="text-gray-600 text-center">
								Real-time communication between authorities and
								suffering people, enabling them to respond quickly and
								effectively.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4 text-text">Astra - FAQ bot</h2>
						<p className="text-xl text-gray-600">
							Chat with our FAQ bot "Astra" to get answers to your
							questions.
						</p>
					</div>

					{/* Items */}
					<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-1 items-center md:max-w-2xl lg:max-w-none">
						{/* 1st item */}
					<Link to="/astra">
						<div className="relative flex flex-col justify-center items-center p-6 bg-white rounded shadow-xl">
							<svg
								id="changeColor"
								className="w-[4.5rem] h-[4.5rem] p-1 -mt-1 mb-2"
								fill="#DC7633"
								xmlns="http://www.w3.org/2000/svg"
								xlink="http://www.w3.org/1999/xlink"
								width="64"
								zoomAndPan="magnify"
								viewBox="0 0 375 374.9999"
								height="64"
								preserveAspectRatio="xMidYMid meet"
								version="1.0"
							>
								<defs>
									<path
										id="pathAttribute"
										d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 "
										fill="#d4e162"
									></path>
								</defs>
								<g>
									<path
										id="pathAttribute"
										d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "
										fill-opacity="1"
										fill-rule="nonzero"
										fill="#d4e162"
									></path>
								</g>
								<g id="inner-icon" transform="translate(85, 75)">
									{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="199.8"
										height="199.8"
										fill="currentColor"
										class="bi bi-chat"
										viewBox="0 0 16 16"
										id="IconChangeColor"
									>
										{" "}
										<path
											d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
											id="mainIconPathAttribute"
											fill="#000000"
										></path>{" "}
									</svg>{" "}
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Chat Now
							</h4>
						</div>
					</ Link>
						
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturesBlocks;
