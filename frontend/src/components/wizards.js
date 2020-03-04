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
      const wizardCard = document.createElement('div')
      wizardCard.className = "wizard-card"
      wizardCard.id = `${wizard.id}`
      wizardCard.innerHTML = wizard.renderWizard()

      const addSpellButton = document.createElement('button')
      addSpellButton.id = `${wizard.id}`
      addSpellButton.innerHTML = "Add Spell"
      wizardCard.appendChild(addSpellButton)
      addSpellButton.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.nextElementSibling.childElementCount < 5){
          fetch(this.baseURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
                },
            body: JSON.stringify({name})
          })
          .then(resp => resp.json())
          .then(name => addSpellButton(name))
        }
      })
      this.wizardsContainer.appendChild(wizardCard)
    })
  };

  createWizard() {
    const name = this.newWizardName.value
    this.adapter.createNewWizard(name)
    .then(wizard => {
      const newWizard = new Wizard(wizard)
      this.wizardsContainer.innerHTML += newWizard.renderWizard()
    })
    this.newWizardName.value = ""

    // const newWizard = this.newWizardName.value
    // this.adapter.createNewWizard(wizardName).then(wizJSON => {
      // this.wizards.push(new Wizard(wizard))
      // this.render()
    // })
  };

  initListeners() {
    this.wizardsContainer = document.querySelector('#wizards-container')
    this.newWizardName = document.querySelector('#new-wizard-name')
    this.newWizardForm = document.querySelector("#new-wizard-form")
    this.newWizardForm.addEventListener("submit", this.createWizard.bind(this))
    // this.newWizardForm.addEventListener("submit", (e) => {
    //   e.preventDefault()
      // this.createWizard()
    // })
  };

};