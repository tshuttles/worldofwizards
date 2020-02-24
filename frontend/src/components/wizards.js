class Wizards {
  constructor() {
    this.wizards = []
    this.adapter = new WizardsAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadWizards()
  }

  fetchAndLoadWizards(){
    this.adapter.getWizards().then(wizards => {
      console.log(wizards)
    })
  }
}