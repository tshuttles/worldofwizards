class Wizard {
  constructor(wizardJSON) {
    this.id = wizardJSON.id 
    this.name = wizardJSON.name 
  };

  renderWizard() {
    // return `<li><span>${this.name}</span><button data-id="${this.id}" class="spell-button">Add Spell</button></li>`
    return `<h1>${this.name}</h1><br><p></p>`
  };

}