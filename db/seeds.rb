# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'user@gmail.com', password: '123456', profile_attributes: {name: 'standard user'})
User.create(email: 'admin@gmail.com', password: '123456', admin: true, profile_attributes: {name: 'admin user'})


Topic.create(profile: Profile.first, title: 'standard user\'s first topic', description: 'this is an example topic used for testing purposes')
Topic.create(profile: Profile.second, title: 'admin user\'s first topic', description: 'this is an example topic used for testing purposes')

Post.create(profile: Profile.first, topic: Topic.first, title: 'standard user\s first post', subtitle: 'this is an example post used for testing purposes', content: 'From childhood’s hour I have not been 
As others were—I have not seen 
As others saw—I could not bring 
My passions from a common spring— 
From the same source I have not taken 
My sorrow—I could not awaken 
My heart to joy at the same tone— 
And all I lov’d—I lov’d alone— 
Then—in my childhood—in the dawn 
Of a most stormy life—was drawn 
From ev’ry depth of good and ill 
The mystery which binds me still— 
From the torrent, or the fountain— 
From the red cliff of the mountain— 
From the sun that ’round me roll’d 
In its autumn tint of gold— 
From the lightning in the sky 
As it pass’d me flying by— 
From the thunder, and the storm— 
And the cloud that took the form 
(When the rest of Heaven was blue) 
Of a demon in my view—')

Post.create(profile: Profile.second, topic: Topic.second, title: 'admin user\s first post', subtitle: 'this is an example post used for testing purposes', content: 'From childhood’s hour I have not been 
As others were—I have not seen 
As others saw—I could not bring 
My passions from a common spring— 
From the same source I have not taken 
My sorrow—I could not awaken 
My heart to joy at the same tone— 
And all I lov’d—I lov’d alone— 
Then—in my childhood—in the dawn 
Of a most stormy life—was drawn 
From ev’ry depth of good and ill 
The mystery which binds me still— 
From the torrent, or the fountain— 
From the red cliff of the mountain— 
From the sun that ’round me roll’d 
In its autumn tint of gold— 
From the lightning in the sky 
As it pass’d me flying by— 
From the thunder, and the storm— 
And the cloud that took the form 
(When the rest of Heaven was blue) 
Of a demon in my view—')
