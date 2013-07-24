module ApplicationHelper
	def resource_name
		:pin
	end

	def resource
		@resource ||= Pin.new
	end

end
