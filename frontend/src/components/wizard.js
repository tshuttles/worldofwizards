class Wizard {
  constructor(wizardJSON) {
    this.id = wizardJSON.id 
    this.name = wizardJSON.name 
    this.spells = wizardJSON.spells
  };

  renderWizard() {
    return `<p>${this.name}</p>`
  };

  makeCard() {
    const wizardCard = document.createElement('div')
    wizardCard.className = "wizard-card"
    wizardCard.id = `${this.id}`
    wizardCard.innerHTML = this.renderWizard()

    const spellsContainer = document.createElement('div')
    spellsContainer.className = "spells-container"
    wizardCard.appendChild(spellsContainer)
    this.spells.forEach (spell => {
      spellsContainer.innerHTML += `<p>${spell.name}</p>`
    })

    const addSpellButton = document.createElement('button')
    addSpellButton.id = `${this.id}`
    addSpellButton.innerHTML = "Learn Spell"
    wizardCard.appendChild(addSpellButton)

    return wizardCard
  };

};