class Wizards {
  constructor() {
    this.wizards = []
    this.adapter = new WizardsAdapter()
    this.fetchAndLoadWizards()
    this.initListeners()
  };

  fetchAndLoadWizards() {
    this.adapter
    .getWizards()
    .then(wizards => {
      wizards.forEach(wizard => this.wizards.push(new Wizard(wizard)))
    })
    .then(() => {
      this.render()
    })
  };

  render() {
    this.wizardsContainer.innerHTML = ""
    console.log(this.wizards)
    this.wizards.forEach(wizard => {
      const card = wizard.makeCard()
      this.wizardsContainer.appendChild(card)
    })
  }

  createWizard(e) {
    e.preventDefault()
    const name = this.newWizardName.value
    this.adapter.createNewWizard(name)
    .then(wizard => {
      const newWizard = new Wizard(wizard)
      this.wizardsContainer.innerHTML += newWizard.renderWizard()
    })
    this.newWizardName.value = ""
  };

  handleAddSpell(e) {
    console.log(e.target.id)
    this.adapter.addSpell(e.target.id)
    .then(spellJSON => {
      console.log(spellJSON)
    })

  // addSpellButton.addEventListener('click', (e) => {
  //   console.log(e.target.nextElementSibling)
  //   if (e.target.nextElementSibling < 5){
  //   }
  }

  initListeners() {
    this.wizardsContainer = document.querySelector('#wizards-container')
    this.spellsContainer = document.querySelector('#spells-container')
    this.newWizardName = document.querySelector('#new-wizard-name')
    this.newWizardForm = document.querySelector("#new-wizard-form")
    this.newWizardForm.addEventListener("submit", this.createWizard.bind(this))
    this.wizardsContainer.addEventListener('click', this.handleAddSpell.bind(this))
  };

};