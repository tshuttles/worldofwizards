class WizardSerializer 

  def initialize(wizard_object)
    @wizard = wizard_object 
  end 

  def to_serialized_json 
    options = {
      include: {
        spells: {
          only: [:name]
        }
      },
      except: [:updated_at, :created_at]
    }
    @wizard.to_json(options)
  end 

end 