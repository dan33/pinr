# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  has_many :pins
  has_many :categories, :through => :pins

  attr_accessible :name, :email, :password, :password_confirmation

  validates_presence_of :email
  validates_presence_of :name
end
