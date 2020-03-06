class Api::V1::WizardsController < ApplicationController

  def index 
    wizards = Wizard.all 
    render json: WizardSerializer.new(wizards).to_serialized_json
  end 

  def create 
    wizard = Wizard.new(wizard_params)
    if wizard.save 
      render json: wizard
    else 
      render json: {error: "Error! Could not create wizard."}
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