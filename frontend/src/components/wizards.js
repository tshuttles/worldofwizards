class Wizards {
  constructor() {
    this.wizards = []
    this.adapter = new WizardsAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadWizards()
  }

  fetchAndLoadWizards(){
    this.adapter
    .getWizards()
    .then(wizards => {
      wizards.forEach(wizard => this.wizards.push(wizard))
    })
    .then(() => {
      this.render()
    })
  }

  render(){
    const notesContainer = document.getElementById('wizards-container')
    notesContainer.innerHTML = "My Wizards Here"
  }
}