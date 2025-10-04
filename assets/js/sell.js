// sell.js – Logic for posting ads
(function () {
  const form = document.getElementById("sell-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem("nb_session"));
    if (!currentUser) {
      alert("Please log in first.");
      return;
    }

    const ads = JSON.parse(localStorage.getItem("nb_ads")) || [];
    const newAd = {
      title: form.title.value,
      description: form.description.value,
      price: form.price.value,
      category: form.category.value,
      image: form.image.value,
      username: currentUser.username,
      id: Date.now()
    };

    ads.push(newAd);
    localStorage.setItem("nb_ads", JSON.stringify(ads));
    alert("Ad posted successfully!");
    form.reset();
  });
})();
