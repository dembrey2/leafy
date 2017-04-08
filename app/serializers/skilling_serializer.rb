class SkillingSerializer < ActiveModel::Serializer
  attributes :id, :skillable_id, :skillable_type
  has_one :skill
end
