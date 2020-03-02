# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'securerandom' 

Wizard.create([
  {name: 'Harry Potter'},
  {name: 'Hermione Granger'},
  {name: 'Ron Weasley'},
  {name: 'Draco Malfoy'},
  {name: 'Albus Dumbledore'},
  {name: 'Tom Riddle aka Voldemort'}
])

wizards = []

wizard_name.each do |name|
  wizards << Wizard.create(name: name)
end

wizards.each do |wizard|
  wizSpells = (SecureRandom.random_number(5) + 1).floor

  (1..wizSpells).each do |spell|
    name = Faker::Movies::HarryPotter.spell
    Spell.create(name: name, wizard_id: wizard.id)
  end
end