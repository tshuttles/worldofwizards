class Wizards {
  constructor() {
    this.wizards = []
    this.adapter = new WizardsAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadWizards()
    this.initListeners()
  }

  fetchAndLoadWizards() {
    this.adapter
    .getWizards()
    .then(wizards => {
      wizards.forEach(wizard => this.wizards.push(new Wizard(wizard)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const wizardsContainer = document.querySelector('#wizards-container')
    wizardsContainer.innerHTML = this.wizards.map(wizard => wizard.renderWizard()).join('')
  }

  createWizard() {
    console.log("creating wizard")
    const wizardName = this.newWizardName.value 
    this.adapter.createNewWizard(wizardName)
  }

  initListeners() {
    this.newWizardForm = document.querySelector("#new-wizard-form")
    this.newWizardForm.addEventListener("submit", (e) => {
      e.preventDefault()
      this.createWizard()
    })
    this.newWizardName = document.querySelector('#new-wizard-name')
    this.spellButton = document.querySelectorAll(".spell-button")
    this.spellButton.addEventListener("click", (e) => {
      e.preventDefault()
      this.addSpell()
    })
  }

  addSpell() {
    
  }
};