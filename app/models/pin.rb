# == Schema Information
#
# Table name: pins
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  address     :text
#  longitutde  :float            default(0.0)
#  latitude    :float            default(0.0)
#  user_id     :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ActiveRecord::Base
  belongs_to :user
  belongs_to :category

  attr_accessible :title, :address, :user_id

  validates_presence_of :title, :address
end
