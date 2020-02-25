class WizardsAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/wizards"
  }

  getWizards() {
    return fetch(this.baseURL).then(res => res.json())
  }

  createNewWizard(name) {
    return fetch()
  }
};