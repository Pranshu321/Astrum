# from tensorflow.keras.models import model_from_json

#### model.h5 is not there for limited space please generate your own weights or run ipynb file

from fastapi import FastAPI
import tensorflow as tf
from tensorflow_hub import KerasLayer
import tensorflow_text
import json
from http import client
import json
from pymongo import MongoClient
import tweepy
from tweepy.asynchronous import AsyncStreamingClient
import time
import pandas as pd
import numpy as np
import os
from dotenv import load_dotenv
import asyncio

load_dotenv()
consumer_key=os.getenv('API_Key')
consumer_secret=os.getenv('API_Key_Secret')

access_token=os.getenv('access_token')

access_token_secret=os.getenv('access_token_secret')

auth = tweepy.OAuth1UserHandler(consumer_key, consumer_secret)   
auth.set_access_token(access_token,access_token_secret)
api=tweepy.API(auth,retry_count=2)
bearer_token = os.environ["bearer_token"]

class MyStreamer(AsyncStreamingClient):
    def __init__(self, tlimit: int):
        self.start_time = time.time()
        self.limit = int(tlimit)
        self.data = []
        super(MyStreamer, self).__init__(bearer_token,wait_on_rate_limit=True)

    async def on_tweet(self, tweet):
        if (time.time() - self.start_time) < self.limit:
            id =tweet.id
            text = "@Notweet"
            status = api.get_status(id, tweet_mode="extended")
            try:
                text =status.retweeted_status.full_text
            except AttributeError:  
                text = status.full_text
            except tweepy.TweepError as e:
                pass   
            except Exception as ee:
                pass       
            self.data.append({ 'text':text ,'id':id})
            print(" tweet taken ")
        else:
            print("----------- going to sleep ----------")
            df = await self._sleep_and_preprocess()
            print(" Reconnecting with the stream ")

    async def _sleep_and_preprocess(self):
        await asyncio.sleep(80)
        df = self._preprocess_data()
        data =self.predict(df)
        # self.insert_into_db(data)
        print(" Reconnecting with the stream ")

    def _preprocess_data(self):
        df = pd.DataFrame(self.data)
        df["text"] = df["text"].str.replace(r"@\S+", "")
        df["text"] = df["text"].str.replace(r"http\S+", "")
        df["text"] = df["text"].str.replace(r"RT", "")
        return df

    def predict(self, df):
        # call your model here to predict on the dataframe
        # return predictions
        with open('model.json', 'r') as json_file:
            model_json = json_file.read()
        custom_objects = {"KerasLayer": KerasLayer}
        model = tf.keras.models.model_from_json(model_json, custom_objects=custom_objects)
        model.load_weights('model.h5')
        test=df
        test =test.drop(["id"],axis=1)
        test_tensor = tf.convert_to_tensor(test)
        y_predicted = model.predict(test_tensor)
        y_predicted = y_predicted.flatten()
        y_predicted = np.where(y_predicted > 0.5, 1, 0)
        y_predicted = y_predicted.tolist()
        disaster_tweet_ids = [str(df.loc[i, 'id']) for i in range(len(y_predicted)) if y_predicted[i] == 1]
        texts=[df.loc[i,'text'] for i in range(len(y_predicted))if y_predicted[i]==1]
        print("-----Disater tweets -----")
        for t in texts:
            print(t)
        data = {'disaster_tweet_ids':disaster_tweet_ids}
        return data

    def insert_into_db(self,data):
        client=MongoClient("mongodb+srv://Sreetama_123:test@cluster1.rn1lgvm.mongodb.net/?retryWrites=true&w=majority")
        db = client['disaster']
        Collection = db["tweets"]
        if isinstance(data, list):
            Collection.insert_many(data) 
        else:
            Collection.insert_one(data)
        print("inserted into the db sucessfully") 

    async def on_error(self, status):
        print(status)
        return True  

async def stream_tweets():
    rules = [{"value": "from : ndmapk OR from:NDRFHQ OR from:IMD_Earthquake OR from:emergencyglobal OR #WhatsHappening AND lang:en AND exclude:retweets", "tag": "Alerts"},{"value": "fire OR wildfire OR blaze OR flood OR tornado OR cyclone OR 'shots fired' OR #earthquake OR crisis OR SOS OR murder OR emergency OR tsunamis OR volcanes OR #disaster OR #floods OR #Disaster AND lang:en AND exclude:retweets", "tag": "Disaster tweets"}]
    streamer = MyStreamer(60)
    stream_rules = [tweepy.StreamRule(r["value"], r["tag"]) for r in rules]

    add_rules_task = asyncio.create_task(streamer.add_rules(stream_rules))
    await add_rules_task
    await streamer.filter(tweet_fields=['text' ,'id'])
    # await task
    # df =await streamer.preprocess_data()
    # print(df)


async def main():
    await stream_tweets()

asyncio.run(main())







