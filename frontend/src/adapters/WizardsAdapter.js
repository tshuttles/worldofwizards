class WizardsAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/wizards"
  };

  getWizards() {
    return fetch(this.baseURL).then(res => res.json())
  };

  createNewWizard(name) {
    return fetch(this.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name: name})
    })
    .then(res => {
      console.log(res.status)
      return res
    })
    .then(res => res.json())
    .catch((message) => {
      alert("Error. Could not create wizard.")
      console.error(message)
    })
  };

};