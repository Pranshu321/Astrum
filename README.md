<h1 align="center" size="30px">Astrum - Disaster Risk Reduction</h1> 

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/03b9c630-7502-4339-aaa8-02711a254c11/deploy-status)](https://app.netlify.com/sites/astrum-hackit/deploys)

</div>


<div align="center">
  <a id="top" href="astrum-hackit.netlify.app" target="blank">
    <img src="https://user-images.githubusercontent.com/73426684/201504342-08cffce2-5087-4a69-b0ec-b9fa0ad6f49b.png" width="100px" alt="">
  </a>

  <h3 align="center">Astrum - Saves Lives</h3>

  <p align="center">
    <a href="https://astrum-hackit.netlify.app/" target="blank">Live Demo</a> |
    <a href="https://github.com/Pranshu321/Astrum_Hackit/issues" target="blank">Report a Bug</a> |
    <a href="https://github.com/Pranshu321/Astrum_Hackit/issues" target="blank">Suggest a Feature</a>
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

  - Astrum provides the authorities a personalized dashboard with the track of the recent evacuations and Emergency requests everything which updates synchronously. 
  - We update the recent stats no. of Injured , Deaths , Evacuated in the current disaster.
  - Finding the hospots is difficult so , we also help authorities to identify the hotspots and type of help needed there for faster rescue /operation.
  - We allow user location sharing (currently under development) to track people to rescue or in need of any kind of emergency help.
  - Using Nasa API we can track the upcoming volcanoes /tropical storms. (we expand this feature to other natural calamities) 
  - We can donate to the needy securely through our app.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Technologies Used :

1. **Frontend frameworks** : `React` , `SASS` , `Tailwind CSS` , `react-router-dom` , `react-hot-toast`

2. **Authenciation**       : `Firebase-Auth`

3. **Database and storage**: `Firestore` , `MonngoDb`

4. **Services**            : `Realm-Services` , `Google maps API ` , `Nasa API` , `Reverse-Geolocation`

5. **Deployment**          : `Netlify`

6. **Email Service**       : `Emailjs`


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

## Let's do a walkthrough of our app


## Welcome to Astrum
![image](https://user-images.githubusercontent.com/86917304/201508083-06daafa1-7ea1-44f8-9cb5-bb053a88c230.png)

## Personalized Dashboard
![image](https://user-images.githubusercontent.com/86917304/201508215-44348334-f62c-4d30-ad41-6283452e0da2.png)

## Previous Disaster Information
![image](https://user-images.githubusercontent.com/86917304/201508254-cb7c8a9e-3709-419d-a90a-ffe6b1a29650.png)

## Tracking of Disasters 
![image](https://user-images.githubusercontent.com/86917304/201508273-9e9969ba-4dcf-449a-8514-f6f613cc843c.png)

## Donation for needy one
![image](https://user-images.githubusercontent.com/86917304/201508333-c7485405-ef3c-4850-a4b2-177f78e5d498.png)

## Features for Needy ones
### Need Help form
![image](https://user-images.githubusercontent.com/86917304/201508371-66709b0b-b2ba-4d95-9d33-0ba4f24dc9d6.png)

### Emergency Help - (One click help , direct location sharing)
![image](https://user-images.githubusercontent.com/86917304/201508392-3edda4b3-6fd6-4a4b-9bf9-a6900d06fd66.png)

### Phone View
![image](https://user-images.githubusercontent.com/86917304/201508184-86698777-c4b8-4314-84fc-2a61f517457d.png)


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
* Currently we have the free version of Google API keys which restrict many map features, we plan to improve it in future!
* Tracking more natural calamities 
* Notifications
* Improving the backend architecture of CRUD
  
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Team Name - Buggies

Leader  - [Pranshu Jain](https://github.com/Pranshu321)

Member 2 - [Mohammad Sami](https://github.com/MSamiDev)

Member 3 - [Sreetama Ghosh Hazra](https://github.com/Sreetama2001)

Web APP : [Astrum](https://astrum-hackit.netlify.app/)

Video Link : [demo_video](https://www.loom.com/share/07374277cc9242ab89b023517e9a3c8c)

<p align="right">(<a href="#top">back to top</a>)</p>


