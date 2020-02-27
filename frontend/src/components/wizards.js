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
    this.wizardsContainer.innerHTML = this.wizards.map(wizard => wizard.renderWizard()).join('')
  };

  createWizard() {
    console.log("creating wizard")
    const wizardName = this.newWizardName.value 
    console.dir(this.newWizardName)
    this.adapter.createNewWizard(wizardName).then(wizJSON => {
      this.wizards.push(new Wizard(wizard))
      this.render()
    })
  };

  addSpell(e) {
    console.log(e.target.dataset.id)
    if (e.target < 5){
      fetch(this.baseURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
            },
        body: JSON.stringify({name})
      })
      .then(resp => resp.json())
      .then(name => addSpell(name))
    }
  }
  

  initListeners() {
    this.wizardsContainer = document.querySelector('#wizards-container')
    this.newWizardName = document.querySelector('#new-wizard-name')
    this.newWizardForm = document.querySelector("#new-wizard-form")
    this.newWizardForm.addEventListener("submit", (e) => {
      e.preventDefault()
      this.createWizard()
    })
    this.wizardsContainer.addEventListener("click", (e) => {
      this.addSpell(e)
    })

  };

};