// admin.js – Admin panel logic
(function () {
  const codeEl = document.getElementById("signup-code");
  const refreshBtn = document.getElementById("refresh-code");
  const adsContainer = document.getElementById("admin-ads");

  function renderCode() {
    let code = localStorage.getItem("nb_code");
    if (!code) {
      code = Math.random().toString(36).substring(2, 8);
      localStorage.setItem("nb_code", code);
    }
    codeEl.textContent = code;
  }

  function refreshCode() {
    const newCode = Math.random().toString(36).substring(2, 8);
    localStorage.setItem("nb_code", newCode);
    renderCode();
  }

  function renderAds() {
    const ads = JSON.parse(localStorage.getItem("nb_ads")) || [];
    adsContainer.innerHTML = "";
    ads.forEach((ad, idx) => {
      const div = document.createElement("div");
      div.className = "ad-card";
      div.innerHTML = `
        <h3>${ad.title}</h3>
        <p>${ad.description}</p>
        <p><strong>Price:</strong> ${ad.price}</p>
        <small>Posted by: ${ad.username}</small>
        <button data-id="${ad.id}" class="delete-btn">Delete</button>
      `;
      adsContainer.appendChild(div);
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        let ads = JSON.parse(localStorage.getItem("nb_ads")) || [];
        ads = ads.filter(ad => ad.id != id);
        localStorage.setItem("nb_ads", JSON.stringify(ads));
        renderAds();
      });
    });
  }

  refreshBtn.addEventListener("click", refreshCode);

  renderCode();
  renderAds();
})();
