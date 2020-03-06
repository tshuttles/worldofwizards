class Api::V1::SpellsController < ApplicationController

  def create 
    current_wizard = Wizard.find_by_id(params[:wizard_id])
    name = spell_name
    while current_wizard.spells.map { |spell| spell.name }.include?(name)
      name = spell_name
    end 
    spell = current_wizard.spells.create(name: name)
    render json: spell
  end 

  # def destroy
  #   spell = Spell.find(params[:id])
  #   spell.delete
  # end

  private 

  def spell_name
    Faker::Movies::HarryPotter.spell
  end

end