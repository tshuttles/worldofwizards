class Api::V1::SpellsController < ApplicationController

  def create
    name = Faker::Movies::HarryPotter.spell 
    spell = Spell.create(name: name, wizard_id: params[:wizard_id].to_i)
    render json: spell
  end 

  # def destroy
  #   spell = Spell.find(params[:id])
  #   spell.delete
  # end

end