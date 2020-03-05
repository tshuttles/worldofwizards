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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name})
    })
    .then(res => {return res})
    .then(res => res.json())
  };

  addSpell(wizard_id) {
    return fetch(this.baseURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // "Accept": "application/json"
        },
      body: JSON.stringify({wizard_id})
        })
      .then(resp => resp.json())
      // .then(name => addSpellButton(name))
  }

};