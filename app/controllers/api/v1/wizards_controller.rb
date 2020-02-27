class Api::V1::WizardsController < ApplicationController

  def index 
    wizards = Wizard.all 
    render json: wizards, status: 200
  end 

  def create 
    wizard = Wizard.new(wizard_params)
    if wizard.save 
      render json: wizard, status: 200
    else 
      render json: {error: "Error! Could not create wizard.", status: 500}, status: 500
    end 
  end 

  def destroy
    wizard = Wizard.find(params[:id])
    wizard.delete
  end

  private 

  def wizard_params
    params.require(:wizard).permit(:name)
  end 

end