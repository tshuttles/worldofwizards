class Wizard {
  constructor(wizardJSON) {
    this.id = wizardJSON.id 
    this.name = wizardJSON.name 
  };

  renderWizard() {
    // return `<li><span>${this.name}</span><button data-id="${this.id}" class="spell-button">Add Spell</button></li>`
    return `<p>${this.name}</p>`
  };

  makeCard() {
    const wizardCard = document.createElement('div')
    wizardCard.className = "wizard-card"
    wizardCard.id = `${this.id}`
    wizardCard.innerHTML = this.renderWizard()

    const addSpellButton = document.createElement('button')
    addSpellButton.id = `${this.id}`
    addSpellButton.innerHTML = "Add Spell"
    wizardCard.appendChild(addSpellButton)

    return wizardCard
    // this.wizardsContainer.appendChild(wizardCard)
  }

}