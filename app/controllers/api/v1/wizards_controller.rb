class Api::V1::WizardsController < ApplicationController

  def index 
    wizards = Wizard.all 
    render json: wizards, status: 200
  end 

  def show 
    wizard = Wizard.find(params[:id])
    render json: wizard, status: 200
  end 

  def create 
    wizard = Wizard.build(wizard_params)
    if wizard.save 
      render json: wizard, status: 200
    else 
      ender json: {error: "Error! Could not create wizard.", status: 500}, status: 500
    end 
    render json: wizard 
  end 

  def destroy
    wizard = Wizard.find(params[:id])
    wizard.delete
    render json: {wizardID: wizard.id}
  end

  private 

  def wizard_params
    params.require(wizard).permit(:name)
  end 

end