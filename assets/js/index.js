// index.js – Home page logic
(function () {
  const adsContainer = document.getElementById("ads-container");

  function renderAds() {
    const ads = JSON.parse(localStorage.getItem("nb_ads")) || [];
    adsContainer.innerHTML = "";
    ads.forEach((ad, idx) => {
      const card = document.createElement("div");
      card.className = "ad-card";
      card.innerHTML = `
        <img src="${ad.image || 'assets/img/placeholder.png'}" alt="Ad">
        <h3>${ad.title}</h3>
        <p>${ad.description}</p>
        <p><strong>Price:</strong> ${ad.price}</p>
        <small>Posted by: ${ad.username}</small>
      `;
      adsContainer.appendChild(card);
    });
  }

  renderAds();
})();
