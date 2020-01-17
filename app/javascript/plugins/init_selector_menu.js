const selectorMenu = () => {
  const societe = document.getElementById('societe-selector');
  const activites = document.getElementById('activites-selector');
  const references = document.getElementById('references-selector');
  const evenements = document.getElementById('evenements-selector');
  const documents = document.getElementById('documents-selector');
  const aboutus = document.getElementById('about-us-selector');
  const contact = document.getElementById('contact-selector');


  const societeContainer = document.getElementById('societe-container');
  const activitesContainer = document.getElementById('activites-container');
  const referencesContainer = document.getElementById('references-container');
  const evenementsContainer = document.getElementById('evenements-container');
  const documentsContainer = document.getElementById('documents-container');
  const aboutusContainer = document.getElementById('about-us-container');
  const contactContainer = document.getElementById('contact-container');

    societe.addEventListener('click', (event) => {
      societe.classList.add('active');
      activites.classList.remove('active');
      references.classList.remove('active');
      evenements.classList.remove('active');
      documents.classList.remove('active');
      aboutus.classList.remove('active');
      contact.classList.remove('active');
      societeContainer.classList.remove('hidden');
      activitesContainer.classList.add('hidden');
      referencesContainer.classList.add('hidden');
      evenementsContainer.classList.add('hidden');
      documentsContainer.classList.add('hidden');
      aboutusContainer.classList.add('hidden');
      contactContainer.classList.add('hidden');
    });

    activites.addEventListener('click', (event) => {
      societe.classList.remove('active');
      activites.classList.add('active');
      references.classList.remove('active');
      evenements.classList.remove('active');
      documents.classList.remove('active');
      aboutus.classList.remove('active');
      contact.classList.remove('active');
      societeContainer.classList.add('hidden');
      activitesContainer.classList.remove('hidden');
      referencesContainer.classList.add('hidden');
      evenementsContainer.classList.add('hidden');
      documentsContainer.classList.add('hidden');
      aboutusContainer.classList.add('hidden');
      contactContainer.classList.add('hidden');
    });

    references.addEventListener('click', (event) => {
      societe.classList.remove('active');
      activites.classList.remove('active');
      references.classList.add('active');
      evenements.classList.remove('active');
      documents.classList.remove('active');
      aboutus.classList.remove('active');
      contact.classList.remove('active');
      societeContainer.classList.add('hidden');
      activitesContainer.classList.add('hidden');
      referencesContainer.classList.remove('hidden');
      evenementsContainer.classList.add('hidden');
      documentsContainer.classList.add('hidden');
      aboutusContainer.classList.add('hidden');
      contactContainer.classList.add('hidden');
    });

    evenements.addEventListener('click', (event) => {
      societe.classList.remove('active');
      activites.classList.remove('active');
      references.classList.remove('active');
      evenements.classList.add('active');
      documents.classList.remove('active');
      aboutus.classList.remove('active');
      contact.classList.remove('active');
      societeContainer.classList.add('hidden');
      activitesContainer.classList.add('hidden');
      referencesContainer.classList.add('hidden');
      evenementsContainer.classList.remove('hidden');
      documentsContainer.classList.add('hidden');
      aboutusContainer.classList.add('hidden');
      contactContainer.classList.add('hidden');
    });

    documents.addEventListener('click', (event) => {
      societe.classList.remove('active');
      activites.classList.remove('active');
      references.classList.remove('active');
      evenements.classList.remove('active');
      documents.classList.add('active');
      aboutus.classList.remove('active');
      contact.classList.remove('active');
      societeContainer.classList.add('hidden');
      activitesContainer.classList.add('hidden');
      referencesContainer.classList.add('hidden');
      evenementsContainer.classList.add('hidden');
      documentsContainer.classList.remove('hidden');
      aboutusContainer.classList.add('hidden');
      contactContainer.classList.add('hidden');
    });

    aboutus.addEventListener('click', (event) => {
      societe.classList.remove('active');
      activites.classList.remove('active');
      references.classList.remove('active');
      evenements.classList.remove('active');
      documents.classList.remove('active');
      aboutus.classList.add('active');
      contact.classList.remove('active');
      societeContainer.classList.add('hidden');
      activitesContainer.classList.add('hidden');
      referencesContainer.classList.add('hidden');
      evenementsContainer.classList.add('hidden');
      documentsContainer.classList.add('hidden');
      aboutusContainer.classList.remove('hidden');
      contactContainer.classList.add('hidden');
    });

    contact.addEventListener('click', (event) => {
      societe.classList.remove('active');
      activites.classList.remove('active');
      references.classList.remove('active');
      evenements.classList.remove('active');
      documents.classList.remove('active');
      aboutus.classList.remove('active');
      contact.classList.add('active');
      societeContainer.classList.add('hidden');
      activitesContainer.classList.add('hidden');
      referencesContainer.classList.add('hidden');
      evenementsContainer.classList.add('hidden');
      documentsContainer.classList.add('hidden');
      aboutusContainer.classList.add('hidden');
      contactContainer.classList.remove('hidden');
    });
};

export { selectorMenu };
