class Wizard {
  constructor(wizardJSON) {
    this.id = wizardJSON.id 
    this.name = wizardJSON.name 
  }

  renderWizard() {
    // return `<li>${this.name}</li>`
    return `<li><span>${this.name}</span><button class="spell-button">Add Spell</button></li>`
  }
}