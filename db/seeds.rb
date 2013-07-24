User.destroy_all
Category.destroy_all
Pin.destroy_all

u1 = User.create(:name => 'Andrew', :email => 'andrew@gmail.com', :password => 'a', :password_confirmation => 'a')
u2 = User.create(:name => 'Jack', :email => 'jack@gmail.com', :password => 'a', :password_confirmation => 'a')
u3 = User.create(:name => 'Michael', :email => 'michael@gmail.com', :password => 'a', :password_confirmation => 'a')
u1 = User.create(:name => 'Michael', :email => 'michael@gmail.com', :password => 'a', :password_confirmation => 'a')

p1 = Pin.create(:title => 'Bar Reggio', :address => 'Crown Street, Darlinghurst, New South Wales', :user_id => 1, :category_id => 1)
p2 = Pin.create(:title => 'The Forresters', :address => 'Riley Street, Surry Hills, New South Wales', :user_id => 1, :category_id => 2)
p3 = Pin.create(:title => 'The Rose', :address => 'Cleveland Street, Chippendale, New South Wales', :user_id => 1, :category_id => 3)
p4 = Pin.create(:title => 'Darlo Bar', :address => 'Liverpool Street, Sydney, New South Wales', :user_id => 1, :category_id => 4)
p5 = Pin.create(:title => 'Mad Mex', :address => '2/241 Crown Street', :user_id => 1, :category_id => 5)


