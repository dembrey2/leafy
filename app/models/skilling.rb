class Skilling < ApplicationRecord

  belongs_to :skill, inverse_of: :skillings
  belongs_to :skillable, polymorphic: true, inverse_of: :skillings
end
