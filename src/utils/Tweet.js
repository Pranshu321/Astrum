import React from "react";
import TweetEmbed from "react-tweet-embed";

const Tweet = () => {
	return (
		<div className="w-full mt-2 mb-10" style={{ height: "35rem" }}>
			<div className="max-w-3xl mx-auto text-center pb-8">
				<h2 className="h2 mb-4 text-text">Recent Tweets</h2>
				<p className="text-lg text-gray-600">
                This Tweet Classification feature automatically classify tweets related to disasters into different categories. This feature can help to quickly identify and prioritize important information related to disasters.
				</p>
			</div>
			<div className="flex flex-wrap justify-evenly">
				<div style={{ width: "300px", height: "2rem" }}>
					<TweetEmbed
						tweetId="1619371319119986688"
						placeholder="disaster tweets"
						options={{
							theme: "dark",
							cards: "hidden",
						}}
					/>
				</div>
				<div style={{ width: "300px", height: "2rem" }}>
					<TweetEmbed
						tweetId="1619371319119986688"
						placeholder="disaster tweets"
						options={{
							theme: "dark",
							cards: "hidden",
						}}
					/>
				</div>
				<div style={{ width: "300px", height: "2rem" }}>
					<TweetEmbed
						tweetId="1619371319119986688"
						placeholder="disaster tweets"
						options={{
							theme: "dark",
							cards: "hidden",
						}}
					/>
				</div>
				<div style={{ width: "300px", height: "2rem" }}>
					<TweetEmbed
						tweetId="1619371319119986688"
						placeholder="disaster tweets"
						options={{
							theme: "dark",
							cards: "hidden",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Tweet;
