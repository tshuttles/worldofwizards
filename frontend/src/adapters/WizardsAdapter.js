class WizardsAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/wizards"
    this.spellURL = "http://localhost:3000/api/v1/spells"
  };

  getWizards() {
    return fetch(this.baseURL).then(res => res.json())
  };

  createNewWizard(name) {
    return fetch(this.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name})
    })
    .then(res => res.json())
  };

  addSpell(wizard_id) {
    return fetch(this.spellURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({wizard_id})
    })
    .then(res => res.json())
  };

};