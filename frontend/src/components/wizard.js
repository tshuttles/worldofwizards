class Wizard {
  constructor(wizardJSON) {
    this.id = wizardJSON.id 
    this.name = wizardJSON.name 
  }

  renderWizard() {
    return `<li>${this.name}</li>`
  }
}