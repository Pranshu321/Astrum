
# trigger-url :> https://ap-south-1.aws.data.mongodb-api.com/app/hackit-tngat/endpoint/disaster_blogs

from http import client
import json
import random
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from datetime import datetime

client=MongoClient("mongodb+srv://Sreetama_123:test@cluster1.rn1lgvm.mongodb.net/?retryWrites=true&w=majority")

db = client['disasters_india']
Collection = db["disasters_ind"]

f = open(r"twitter\disaster_blogs\natural_Disasters_India.json",encoding="utf8",errors="ignore")
data = json.load(f)
for d in data :
    d['info'] = d['info'].replace('–','-')
    d['info']=d['info'].replace(' ','')
    d['info']=datetime.strptime(d['info'],'%Y-%m-%d').date()

data=sorted(data,key=lambda d : d['info'],reverse=True)
for d in data :
    d['info']=d['info'].strftime("%Y-%m-%d")

if isinstance(data, list):
    Collection.insert_many(data) 
else:
    Collection.insert_one(data)

print("inserted into the db sucessfully")

