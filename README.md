## Story and Background
At first, we were thinking of creating a collectable marketplace where we, as the marketplace, could verify the collectables and issue NFTs as a proof of authenticity, as well as store those physical collectables for our users. This would've created a marketplace that items and ownerships could be easily transferred, traded, bought, or sold without having to constantly ship items across the globe. At the same time, those items could be redeemed at any time and shipped. Additionally, small royalty payments would've been the main costs to help maintain the service.

However, after participating in the Stellar workshop and hearing about and looking into kalepail's Smart NFTs, we were inspired to keep brainstorming and creating new ideas. We knew we wanted to create something that, again, blended the real world with the digital world, but also something that would have a positive impact on the world. After bouncing ideas off of each other for a few hours, we ended up with GeoStellar.

## What is GeoStellar?
GeoStellar is a gamified NFT experience where NFTs are "airdropped" routinely around the world in selected locations. Those selected locations are divided into two categories: monsters and attractions.

Monster locations are those whose NFTs are of social or environmental issues in the vicinity. This is to help educate the world on current issues and bring awareness and solidarity towards tackling them. For example, in San Francisco, we have a housing monster where users band together to learn about the housing crisis in the Bay Area and work towards defeating the monster NFT. Each user would be able to attack the monster NFT once each day, as long as they are within the vicinity of the monster NFT location. Closer proximity meant increased damage. Once the healthbar is depleted, participants receive NFTs with different tiers for different levels of participation.

Attraction locations are simply fun and exciting viewpoints or buildings around the world. This is to encourage users to explore the world and learn a bit about each location. For example, in San Francisco, we placed an attraction location at San Francisco City Hall to educate users about the importance of the building and the importance of civic engagement. Users are able to redeem the NFT once they're within an appropriate distance from the location.

## Technical Overview
We utilized Node and ReactJS as our web framework, despite the fact that we were both new to ReactJS. This is because we wanted to learn ReactJS simultaneously with blockchain and StellarSdk. This was quite a fun experience, despite it forcing half our development timeline to be reading documentation and watching Youtube tutorials.

As for StellarSdk, we prepped a bit beforehand with Stellar Quest, so we had at least some experience with the overall transaction process. To implement the attacking functionality, we simply added a health component for the monster NFT. Each attack was a transaction that subtracted health from the monster NFT depending on the distance between the user and the NFT location. Once the health reached zero, transactions towards the monster NFT is disabled and we reward all participants with NFTs in order of participation and damage levels.

By creating a function that calculated the distance from nearby NFTs' latitude and longitude and the user's latitude and longitude, we were able to create zones of participation, effectively encouraging users to interact with the real-world and explore both issues and their surroundings.

## Challenges we ran into
Since GeoStellar was the first blockchain-focused app for both of us, there were undoubtedly tons of hurdles to jump over. Tackling all the hurdles would have been too tall of a task given the time constraint, so we had to decide what features to focus on and what features to implement in the future. Finding the right balance between learning, coding, debugging, and sleeping was definitely a trying ordeal.

Additionally, keeping the idea simple and focused was another challenge. However, chatting with Anke and kalepail during office hours was definitely helpful for that.

## Accomplishments that we're proud of
We're definitely super proud of ourselves for creating a blockchain app from scratch to working prototype within 48 hours. It was a blast. We definitely learned a lot about ReactJS, git merging (we lost our code the first time we tried to merge haha), StellarSdk, minting, NFT transactions, and so much more.

## Future Goals
Had we had more time to tackle this project, these are some of the features we would have loved to include in the project:

- Integrate with Albedo to allow users to keep their Secret Key a secret
- Leaderboard to increase the game-like aspect
- Friend system to make new friends and chat
- Make it more user-friendly
- Flushing out the current features
- so much more!

## Some pictures of the project
