class Wizards {
  constructor() {
    this.wizards = []
    this.adapter = new WizardsAdapter()
    this.fetchAndLoadWizards()
    this.initListeners()
  };

  fetchAndLoadWizards() {
    this.adapter.getWizards()
    .then(wizards => {
      wizards.forEach(wizard => this.wizards.push(new Wizard(wizard)))
    })
    .then( () => {
      this.render()
    })
  };

  initListeners() {
    this.wizardsContainer = document.querySelector('#wizards-container')
    this.spellsContainer = document.querySelector('#spells-container')
    this.newWizardName = document.querySelector('#new-wizard-name')
    this.newWizardForm = document.querySelector("#new-wizard-form")
    this.newWizardForm.addEventListener("submit", this.createWizard.bind(this))
  };

  render() {
    this.wizardsContainer.innerHTML = ""
    this.wizards.forEach(wizard => {
      const card = wizard.makeCard()
      this.wizardsContainer.appendChild(card)
    })
  };

  createWizard(e) {
    e.preventDefault()
    const name = this.newWizardName.value
    this.adapter.createNewWizard(name)
    .then(wizard => {
      wizard.spells = []
      const newWizard = new Wizard(wizard)
      this.wizardsContainer.appendChild(newWizard.makeCard())
    })
    this.newWizardName.value = ""
  };

};