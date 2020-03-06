class Wizard {
  constructor(wizardJSON) {
    this.id = wizardJSON.id 
    this.name = wizardJSON.name 
    this.spells = wizardJSON.spells
    this.adapter = new WizardsAdapter()
  };

  handleAddSpell(e) {
    if (e.target.parentNode.children[1].children.length < 5) {
      this.adapter.addSpell(e.target.id)
      .then(spellJSON => {
        e.target.parentNode.children[1].innerHTML += `<p>${spellJSON.name}</p>` 
      })
    }
  };

  makeCard() {
    const wizardCard = document.createElement('div')
    wizardCard.className = "wizard-card"
    wizardCard.id = `${this.id}`
    wizardCard.innerHTML = `<p>${this.name}</p>`

    const spellsContainer = document.createElement('div')
    spellsContainer.className = "spells-container"
    wizardCard.appendChild(spellsContainer)
    this.spells.forEach (spell => {
      spellsContainer.innerHTML += `<p>${spell.name}</p>`
    })

    const addSpellButton = document.createElement('button')
    addSpellButton.id = `${this.id}`
    addSpellButton.innerHTML = "Learn Spell"
    addSpellButton.addEventListener('click', this.handleAddSpell.bind(this))
    wizardCard.appendChild(addSpellButton)
    
    return wizardCard
  };

};