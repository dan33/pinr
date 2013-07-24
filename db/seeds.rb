User.destroy_all
Category.destroy_all
Pin.destroy_all

u1 = User.create(:name => 'Andrew', :email => 'andrew@gmail.com', :password => 'a', :password_confirmation => 'a')
u2 = User.create(:name => 'Jack', :email => 'jack@gmail.com', :password => 'a', :password_confirmation => 'a')
u3 = User.create(:name => 'Dan', :email => 'dan@gmail.com', :password => 'a', :password_confirmation => 'a')
u4 = User.create(:name => 'Michael', :email => 'michael@gmail.com', :password => 'a', :password_confirmation => 'a')

p1 = Pin.create(:title => 'Bar Reggio', :address => 'Crown Street, Darlinghurst, New South Wales')
p2 = Pin.create(:title => 'The Forresters', :address => 'Riley Street, Surry Hills, New South Wales')
p3 = Pin.create(:title => 'The Rose', :address => 'Cleveland Street, Chippendale, New South Wales')
p4 = Pin.create(:title => 'Darlo Bar', :address => 'Liverpool Street, Sydney, New South Wales')
p5 = Pin.create(:title => 'Mad Mex', :address => '2/241 Crown Street')

c1 = Category.create(:name => 'Outdoors')
c2 = Category.create(:name => 'Nightlife')
c3 = Category.create(:name => 'Work')
c4 = Category.create(:name => 'Dining')
c5 = Category.create(:name => 'Interesting')

u1.pins << p1 << p2 << p3 << p4 << p5

c1.pins << p1
c2.pins << p2
c3.pins << p2
c4.pins << p4
c5.pins << p5

