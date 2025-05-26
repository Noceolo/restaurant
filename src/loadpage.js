export default function loadPage(){
    var contentDiv = document.getElementById('content')

    const homeTab = document.createElement('div');
    homeTab.id = 'homeTab';
    homeTab.classList.add('tabContent')
    const homeh3 = document.createElement('h3');
    homeh3.textContent = "Welcome to Kam's Tavern"
    const homep1 = document.createElement('p');
    homep1.textContent = "The most cozy tavern of all middleEarth"
    const homep2 = document.createElement('p');
    homep2.textContent = "We have beer and a warm fire"

    homeTab.append(homeh3, homep1, homep2);


    const aboutTab = document.createElement('div');
    aboutTab.id = 'aboutTab';
    aboutTab.classList.add('tabContent')
    const abouth3 = document.createElement('h3');
    abouth3.textContent = "About the tavern"
    const aboutp1 = document.createElement('p');
    aboutp1.textContent = "Created by Kam, duh, this tavern is located right in the middle of Gondor, on the main road."

    aboutTab.append(abouth3, aboutp1);

    const contactTab = document.createElement('div');
    contactTab.id = 'contactTab';
    contactTab.classList.add('tabContent');
    const contacth3 = document.createElement('h3');
    contacth3.textContent = "Contact us !"
    const contactp1 = document.createElement('p');
    contactp1.textContent = "Send us recommendations and pictures at this adresse : kamthetaverne@middleearthe.gr"

    contactTab.append(contacth3, contactp1);

    contentDiv.append(homeTab, aboutTab, contactTab);

};

