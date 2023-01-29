<h1 align="center" size="30px">Astrum - Disaster Risk Reduction</h1> 

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/03b9c630-7502-4339-aaa8-02711a254c11/deploy-status)](https://astrum-hackit.netlify.app)

</div>


<div align="center">
  <a id="top" href="astrum-hackit.netlify.app" target="blank">
    <img src="https://user-images.githubusercontent.com/73426684/201504342-08cffce2-5087-4a69-b0ec-b9fa0ad6f49b.png" width="100px" alt="">
  </a>

  <h3 align="center">Astrum - Advanced Systems for Tracking and Responding to Urban Misery </h3>

  <p align="center">
    <a href="https://astrum-hackit.netlify.app/" target="blank">Live Demo</a> |
    <a href="https://github.com/Pranshu321/Astrum/issues" target="blank">Report a Bug</a> |
    <a href="https://github.com/Pranshu321/Astrum/issues" target="blank">Suggest a Feature</a>
  </p>
</div>

---

## The motivation:
 
With the rapid change in climate and increasing global warming , quick response to a disaster saves a lot of lives. According to a report, climate change-induced natural disasters killed almost 3,000 people and 70,000 livestock, and destroyed around 4.1 lakh houses just this year alone. They also affected 18 lakh hectares of crop area — about 1% of the total cropped area in India . We studied that results can be a little worse off if we plan and manage effectively during a crisis.

The motivation for the Astrum project stems from the realization that current post-disaster management systems are often fragmented and inefficient. In the aftermath of a disaster, the ability to quickly and effectively collect, analyze, and disseminate critical information is essential for the safety and well-being of affected communities. However, the lack of a centralized platform for data management and communication can lead to confusion, duplication of efforts, and wasted resources.

Astrum aims to address these issues by providing a comprehensive and customizable platform for post-disaster management. The platform includes a web-based interface for data input and visualization, as well as a set of tools for data analysis and decision-making. It also includes a **mobile application [(PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)** that allows users to report incidents and request assistance in real-time.

The Astrum project is driven by the belief that by making post-disaster management more efficient and effective, we can better serve the needs of affected communities and aid organizations. We hope that by providing this open-source platform, we can help save lives and improve recovery efforts in the aftermath of disasters.

<!-- <img
  src=""
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px"> -->
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
 ---

## How it works :

We have a built Disaster Risk Management System for better management and collaboration during a natural or man-made disaster .Our web helps in prediction of upcoming natural threats using Nasa API, along with that we have integrated platform for collaboration between Ngos , Police and Local helpers for faster evacuation and relief work.

  - The Astrum project includes a "Personalized Dashboard" feature, which allows users to view updated statistics, help requests, emergency requests, donation             information, and create broadcast messages all in one place. This feature can be accessed through the web-based interface and is designed to be user-friendly and       easy to navigate.
  - Here we also includes an "Alert Room" feature, which is a centralized platform for broadcasting important information, alerts, and relief updates to NGOs and           government authorities. This feature allows for real-time communication and coordination during a disaster event.
  - a live chat feature, which enables real-time communication between suffering people and authorities during a disaster event. This feature allows people to report       incidents and request assistance in real-time with privacy control, and allows authorities to respond quickly and efficiently.
  - Finding the hospots is difficult so , we also help authorities to identify the hotspots and type of help needed there for faster rescue /operation.
  - The Emergency Help feature is an important component of the Astrum project, as it allows people to quickly and easily request assistance in emergency situations,       and enables authorities to respond quickly and effectively to the needs of affected communities during a disaster event.
  - We used Nasa API we can track the upcoming volcanoes /tropical storms. (we expand this feature to other natural calamities) 

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Technologies Used :

1. **Frontend frameworks** : `React` , `SASS` , `Tailwind CSS` , `react-router-dom` , `react-hot-toast`

2. **Authenciation**       : `Firebase-Auth`

3. **Database and storage**: `Firestore` , `MonngoDb`

4. **Services**            : `Realm-Services` , `Google maps API ` , `Nasa API` , `Reverse-Geolocation` , `Twitter Api` 
   
5. **Deployment**          : `Netlify`
  
6. **ML frameworks**       : `Sk-learn` , `Numpy` , `Tensorflow` , `Pandas` , `Bert-model`
  
7. **Model Backend**       : `FastAPi` , `Tweepy`

8. **Email Service**       : `Emailjs`

9.  **Payment Service**     : `Stripe`


<!-- GETTING STARTED -->
## Getting Started

### This is an example of how you may give instructions on setting up your project locally.To get a local copy up and running follow these simple example steps.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This project doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/Pranshu321/Astrum_Hackit.git
   ```
2. Now install all npm packages.
   ```sh
    npm i 
   ```
   
3. Now you have to define own firebase project config at `src/firebase.js`.

  ![image](https://user-images.githubusercontent.com/86917304/201507081-c0e7cc6b-4d3f-4d99-8611-1ddf98afcd3f.png)

4. After all steps defined above you can run command `npm start` to run application at `localhost:3000`.

<p align="right">(<a href="#top">back to top</a>)</p>

---

# Let's do a walkthrough of our app


## Welcome to Astrum
![image](https://user-images.githubusercontent.com/86917304/215289523-fb2e62c2-f120-4a88-9eca-81a1ca01dbac.png)

## Personalized Dashboard
The Personalized Dashboard provides a real-time view of the disaster event, including updated statistics on the number of incidents reported, the number of people affected, and the resources needed for relief efforts. This information is collected and analyzed from the data input by users and NGO's

Users can also view and respond to help and emergency requests, as well as view and manage donations. The feature also allows users to create and send broadcast messages, which can be used to communicate important information to affected communities and aid organizations.

![image](https://user-images.githubusercontent.com/86917304/215279754-af2495f5-7d14-4454-98fa-57f8a903563a.png)

## Live / One-to-One Chat (Astra-Chat)
The live chat feature can be accessed through a mobile application, and is designed to be user-friendly and easy to navigate. It allows people to report incidents such as injuries, damage to property, and the need for evacuation. The authorities can use the chat feature to provide information on evacuation routes, emergency shelter locations, and other important information.

The live chat feature also allows authorities to request information from people on the ground. This can be used to gather information on the extent of damage, the number of people affected, and the resources needed for relief efforts.

![image](https://user-images.githubusercontent.com/86917304/215282084-0a4003c7-06bb-4cc6-830b-d8fe7ac9afbf.png)


## Previous Disaster Information
The Astrum project includes a feature that allows users to access information about previous disasters. This feature can be accessed through the web-based interface and is designed to be user-friendly and easy to navigate.
The previous disaster information includes details such as the location, date, and type of disaster This information can be used to gain insights and make data-driven decisions during a disaster event.

![image](https://user-images.githubusercontent.com/86917304/215279787-afebf223-e820-4a2a-982c-ad60ce0d7ab2.png)

## Tracking of Disasters 
Users can access this feature through the web-based interface, where they can view maps and other data visualizations that display information about the location, what type of disaster. The data is updated in real-time, allowing users to stay informed about the latest developments.

![image](https://user-images.githubusercontent.com/86917304/201508273-9e9969ba-4dcf-449a-8514-f6f613cc843c.png)

## Donation for needy one
Users can make donations through a variety of payment methods, including credit card, debit card, and online banking. They can also choose to make donations to specific disaster relief efforts or organizations.

![image](https://user-images.githubusercontent.com/86917304/201508333-c7485405-ef3c-4850-a4b2-177f78e5d498.png)

# Features for Needy ones

## Need Help form

"Help Form" feature, which allows users to request assistance and provide information about their needs during a disaster event. This feature can be accessed through the mobile application (PWA) or web-based interface and is designed to be user-friendly and easy to navigate.

![image](https://user-images.githubusercontent.com/86917304/201508371-66709b0b-b2ba-4d95-9d33-0ba4f24dc9d6.png)

## Emergency Help - (One click help , direct location sharing)

When a person requests emergency help, their location is automatically shared with the authorities, allowing them to quickly and efficiently respond to the incident. The authorities can use this information to dispatch emergency services, such as ambulances or fire trucks, to the affected area.

![image](https://user-images.githubusercontent.com/86917304/201508392-3edda4b3-6fd6-4a4b-9bf9-a6900d06fd66.png)

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Contributions

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
This project is open to contributions from developers, designers, and disaster management experts. We welcome all pull requests, bug reports, and feature requests. Join us in our mission to make post-disaster management more efficient and effective.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!---IDEAS--->
## Upcoming Ideas/ Improvements

We have loads of Ideas for our web app , for the time being we have thought of a few!

* Filtering about important tweets/ SOS during a calamity so that a need for help through social media doesnot go unnoticed! 
* **Multi-language support:** The project can be translated and customized to support multiple languages to reach a wider audience and to better serve the needs of       people speaking different languages.
* **Virtual and augmented reality:** The project can use virtual and augmented reality to provide users with more immersive and detailed information about disasters.     This can include 3D maps, simulations of disasters, and virtual tours of affected areas.
* We gonna implement AI and machine learning to analyze the data collected and make predictions about the spread and severity of disasters. This can help authorities     and NGOs to respond more effectively and efficiently.
  
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Team Name - Buggies

Leader  - [Pranshu Jain](https://github.com/Pranshu321)

Member 2 - [Mohammad Sami](https://github.com/MSamiDev)

Member 3 - [Sreetama Ghosh Hazra](https://github.com/Sreetama2001)

Web APP : [Astrum](https://astrum-hackit.netlify.app/)

Video Link : [Demo Video](https://www.loom.com/share/07374277cc9242ab89b023517e9a3c8c)

<p align="right">(<a href="#top">back to top</a>)</p>
