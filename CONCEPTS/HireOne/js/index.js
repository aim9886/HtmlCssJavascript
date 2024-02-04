function openSignInPage() {
    window.location.href = "signIn.html";
  }
  
  function openSearchPage() {
    window.location.href = "search.html";
  }
  
  const navbarToggle = document.querySelector(".navbar-toggle");
  const menu = document.querySelector(".menu");
  
  navbarToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
  
  async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      return data.features;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  function createFeatureCards(features) {
    const featureContainer = document.getElementById('feature-container');
  
    features.forEach((feature) => {
      const featureCard = document.createElement('div');
      featureCard.className = 'FeatureCard';
  
      const featureContent = document.createElement('div');
  
      const featureTitle = document.createElement('h3');
      featureTitle.className = 'FeatureTitle';
      featureTitle.textContent = feature.name;
  
      const featureDescription = document.createElement('p');
      featureDescription.className = 'FeatureCardDescription';
      featureDescription.textContent = feature.desc;
  
      featureContent.appendChild(featureTitle);
      featureContent.appendChild(featureDescription);
  
      const featureIcon = document.createElement('div');
      featureIcon.className = 'FeatureIcon';
  
      featureCard.appendChild(featureContent);
      featureCard.appendChild(featureIcon);
  
      featureContainer.appendChild(featureCard);
    });
  }
  
  window.addEventListener('DOMContentLoaded', async () => {
    const features = await fetchData();
    createFeatureCards(features);
  });

  async function fetchContactData() {
    try {
      const response = await fetch('data.json');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.contact;
    } catch (error) {
      console.error('Error fetching contact data:', error);
      return {};
    }
  }
  

  function updateContactInfo(contact) {
    const contactInfoContainer = document.getElementById('contact-info');
  
    const email = document.createElement('p');
    email.innerHTML = `<strong style="color: hsl(280, 80%, 59%);">Email:</strong> ${contact.email}`;
  
    const phone = document.createElement('p');
    phone.innerHTML = `<strong style="color: hsl(280, 80%, 59%);">Phone:</strong> ${contact.phone}`;
  
    const address = document.createElement('p');
    address.innerHTML = `<strong style="color: hsl(280, 80%, 59%);">Address:</strong> ${contact.address}`;
  
    contactInfoContainer.appendChild(email);
    contactInfoContainer.appendChild(phone);
    contactInfoContainer.appendChild(address);
  }
  
  window.addEventListener('DOMContentLoaded', async () => {
    const contact = await fetchContactData();
    updateContactInfo(contact);
  });