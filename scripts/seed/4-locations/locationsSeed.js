module.exports = [
  {
  "locationName": "Start Room",
  "dayDescription": "Looking around, you notice a large mirror hung on the wall next to a large open wardrobe that contains a variety of items and clothing. The large window on the north wall is framed with white curtains but a large tree seems to be blocking any semblance of a view outside. A door sits on the east wall but an attempt to turn the doorknob reveals that it's locked.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "east": "Hallway"
  }
  }, {
  "locationName": "Hallway",
  "dayDescription": "You see a narrow room materialize in front of you. You hear a door latch behind you and a odd hand-painted sign gently sways from a string on the locked knob: `INN AT THE EDGE - REMEMBER YOUR TOWEL - TRY help FOR HELP`. A small window looks out over a beautiful but overgrown garden. The only way out must be the stairway at the end of the hall to the east. The smell of tea and faint sounds of someone moving about down the stairs becons you forward....",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "indoor",
  "NPCs": [
    "Ford",
    "Clerk",
    "Towel"
  ],
  "inventory": [],
  "exits": {
    "east": "Inn Lobby"
  }
}, {
  "locationName": "Inn Lobby",
  "dayDescription": "You enter what appears to be the Inn Lobby. Light streams in through the windows lighting the room with a soft glow. A bored clerk sits behind the counter clearly not paying attention to their work. The smell of cooking food wafts into the room through an open door on the north wall. The front door of the Inn exits to the east. Two more doors exit the room to the south and to the west.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "indoor",
  "NPCs": [
    "Clerk",
    "Ford"
  ],
  "inventory": [
    {
      "name": "pumpkin pie",
      "quantity": 50
    }
  ],
  "exits": {
    "north": "Inn Kitchen",
    "west": "Library",
    "south": "Inn Laundry Room",
    "east": "Front Yard"
  }
}, {
  "locationName": "Inn Laundry Room",
  "dayDescription": "You've entered the Inn Laundry Room. Washers and dryers line the back wall and folding station sits in the corner in front of the window. A door to the east leads outside. There appears to be an oversized mouse hole hidden behind a stack of boxes to the west. A wooden door labeled 'Lobby' sits on the north wall.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Inn Lobby",
    "west": "Library",
    "east": "Front Yard"
  }
}, {
  "locationName": "Front Yard",
  "dayDescription": "This must be the Front Yard of the Inn. The grass seems like it hasn't been cut in ages and yellow wildflowers peek through the tall grass. An old shed sits in the south end of the yard. A path to the north leads back into the Inn and continues east. Another door leads into a different part of the Inn to the west.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Inn Lobby",
    "west": "Inn Laundry Room",
    "south": "Shed",
    "east": "Crossroads"
  }
}, {
  "locationName": "Shed",
  "dayDescription": "The old shed is full of junk and broken yard tools. Everything seems slightly out of place. The door you came through sits on the north wall.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Front yard"
  }
}, {
  "locationName": "Inn Kitchen",
  "dayDescription": "The Inn kitchen smells of freshly baked bread and garlic. A bubbling pot sits on the stove unattended. Two doors lead outside to the north and the east. The swinging door to the Lobby is left slightly cracked open on the south wall.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Inn Garden",
    "south": "Inn Lobby",
    "east": "Backyard"
  }
}, {
  "locationName": "Backyard",
  "dayDescription": "The quaint backyard of the Inn seems a bit unkempt. A path leads to the Inn Garden in the west and the door to the kitchen sits to the south.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Inn Garden",
    "south": "Inn Kitchen"
  }
}, {
  "locationName": "Inn Garden",
  "dayDescription": "The Inn Garden seems slightly overgrown but seems to be thriving nonetheless. The are is scattered with bushes, flowers, and small trees. The shallow pond in the corner seems home to a few wild frogs and a variety of plantlife. The garden gate leads to the west. A gap in the fence to the east take you into the backyard. The door to the Inn Kitchen sits on the south end of the garden.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Path to Pumpkin Patch",
    "south": "Inn Kitchen",
    "east": "Backyard"
  }
}, {
  "locationName": "Library",
  "dayDescription": "You've entered the Inn Library. Rows upon rows of old wooden bookshelves house an innumerable amount of dusty books. A door labeled 'Lobby' sits on the east wall, though it seems that the right book on the south wall might lead elsewhere.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "south": "Inn Laundry Room",
    "east": "Inn Lobby"
  }
}, {
  "locationName": "Path to Pumpkin Patch",
  "dayDescription": "The dirt path you find yourself on continues to a pumpkin patch in the north. To the east the path comes from the Inn Garden.",
  "nightDescription": "NULL",
  "region": "The Inn",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Pumpkin Patch Entrance",
    "east": "Inn Garden"
  }
}, {
  "locationName": "Pumpkin Patch Center",
  "dayDescription": "You are at the heart of a pumpkin patch. Though on the vine, and uncarved, the pumpkins you see out of the corners of your vision seem to be leering evilly at you, like jack-o-lanterns.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Pumpkin Patch North",
    "west": "Pumpkin Patch West",
    "south": "Pumpkin Patch South",
    "east": "Pumpkin Patch East"
  }
}, {
  "locationName": "Pumpkin Patch North",
  "dayDescription": "The pumpkin patch stretches to the east, west and south of you. A large, dark hole sits carved into the ground to the north. The pumpkins surrounding you are craggy and crooked, and the longer you look at them, the creepier they seem.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Rabbit Hole",
    "west": "Pumpkin Patch Northwest",
    "south": "Pumpkin Patch Center",
    "east": "Pumpkin Patch Northeast"
  }
}, {
  "locationName": "Pumpkin Patch East",
  "dayDescription": "The pumpkin patch stretches to the north, west, and south of you. The pumpkins around you a unnervingly creepy. Uncarverd pumpkins shouldn't be creepy, should they?",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Pumpkin Patch Northeast",
    "west": "Pumpkin Patch Center",
    "south": "Pumpkin Patch Southeast"
  }
}, {
  "locationName": "Pumpkin Patch South",
  "dayDescription": "The pumpkin patch stretches to the east, west, and north of you. The patch seems dark somehow even in the day. Shadows seem to take the shape of creatures watching you.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Pumpkin Patch Center",
    "west": "Pumpkin Patch Southwest",
    "east": "Pumpkin Patch Entrance"
  }
}, {
  "locationName": "Pumpkin Patch West",
  "dayDescription": "The pumpkin patch stretches to the north, east, and south of you. The pumpkins clustered around you seem to be pressing closer, making what should be an open field feel alarmingly claustrophobic.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Pumpkin Patch Northwest",
    "south": "Pumpkin Patch Southwest",
    "east": "Pumpkin Patch Center"
  }
}, {
  "locationName": "Pumpkin Patch Northeast",
  "dayDescription": "The pumpkin patch surrounds you to the west and south. The pumpkins here give of an ineffible feeling of sadness, and you feel tears prick the corners of your eyes.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Pumpkin Patch North",
    "south": "Pumpkin Patch East"
  }
}, {
  "locationName": "Pumpkin Patch Northwest",
  "dayDescription": "The pumpkin patch surrounds you to the east and south, and the path to the Haunted Forest beckons toward the north. The pumpkin patch radiates a sinister feeling, and the path north feels equally foreboding. You feel trapped.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Path to Haunted Forest",
    "south": "Pumpkin Patch West",
    "east": "Pumpkin Patch North"
  }
}, {
  "locationName": "Pumpkin Patch Southwest",
  "dayDescription": "The pumpkin patch surrounds you to the north and east, leaving you corned against a tall fence backed by dark and impenetrable forest. The patch seems darker than you think the day should be, and what should be ordinary pumpkins are radiating ominous threat. Your pulse starts to quicken as your instincts pick up on predatory intent.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Pumpkin Patch West",
    "east": "Pumpkin Path South"
  }
}, {
  "locationName": "Pumpkin Patch Entrance",
  "dayDescription": "The pumpkin patch surrounds you to the north and west. and you can see the inn to the south. The pumpkins closest to the inn look plump and cheery, but as the patch grows more dense to the northwest, it seems to emanate menace and warning.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Pumpkin Patch East",
    "west": "Pumpkin Patch South",
    "south": "Inn Garden"
  }
}, {
  "locationName": "Rabbit Hole",
  "dayDescription": "The dark rabbit hole smells like wet earth as the sunlight from above leaves a spotlight on the ground below you. The tunnel continues to the east.",
  "nightDescription": "NULL",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "south": "Pumpkin Patch North",
    "east": "South Tunnel"
  }
}, {
  "locationName": "South Tunnel",
  "dayDescription": "The tunnel stretches to the north and west. To the north, the damp earth of the tunnel gives way to solid gray stone.",
  "nightDescription": "The tunnel stretches to the north and west. To the north, the damp earth of the tunnel gives way to solid gray stone.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "East Tunnel",
    "west": "Rabbit Hole"
  }
}, {
  "locationName": "Path to Haunted Forest",
  "dayDescription": "The Pumpkin Patch to the south gives way to a long dark tree tunnel to the north.",
  "nightDescription": "The Pumpkin Patch to the south gives way to a long dark tree tunnel to the north.",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "1123",
    "south": "Pumpkin Patch Northwest"
  }
}, {
  "locationName": "West Tunnel",
  "dayDescription": "The tunnel continues to the west. To the south, the ruins of an ancient cavetown lay scattered on the cave floor.",
  "nightDescription": "The tunnel continues to the west. To the south, the ruins of an ancient cavetown lay scattered on the cave floor.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Crystal Cavern",
    "south": "Cavetown Ruins",
    "east": "West Tunnel"
  }
}, {
  "locationName": "Cavetown Ruins",
  "dayDescription": "The ruins of old wood and stone buildings sit crumbling on the cave floor.",
  "nightDescription": "The ruins of old wood and stone buildings sit crumbling on the cave floor.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "West Tunnel"
  }
}, {
  "locationName": "Crystal Cavern",
  "dayDescription": "The Cavern is littered with glowing crystals of various colors that illuminate the cavern walls. The tunnel continues to the north and to the east. To the north you can hear flowing water.",
  "nightDescription": "The Cavern is littered with glowing crystals of various colors that illuminate the cavern walls. The tunnel continues to the north and to the east. To the north you can hear flowing water.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Raging River",
    "east": "West Tunnel"
  }
}, {
  "locationName": "Raging River",
  "dayDescription": "A raging river rushes past you filling the cave with the deafening roar of water. The tunnel continues to the east and to the south, though the slippery rock surrounding the river could lead elsewhere.",
  "nightDescription": "A raging river rushes past you filling the cave with the deafening roar of water. The tunnel continues to the east and to the south, though the slippery rock surrounding the river could lead elsewhere.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Murky Pond",
    "south": "Crystal Cavern",
    "east": "Cavern Lake"
  }
}, {
  "locationName": "Cavern Lake",
  "dayDescription": "A large, still pool of water glows an eerie shade of blue, the light reflecting off the cavern walls making the ceiling sparkle like the night sky. The tunnel continues to the east and to the west, while along the south wall you see rough entrance to something.",
  "nightDescription": "A large, still pool of water glows an eerie shade of blue, the light reflecting off the cavern walls making the ceiling sparkle like the night sky. The tunnel continues to the east and to the west, while along the south wall you see rough entrance to something.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Raging River",
    "east": "Surface Elevator"
  }
}, {
  "locationName": "Surface Elevator",
  "dayDescription": "A rickety wooden elevator sits along the north wall seemlingly abandoned, begging someone to start it back up. The tunnel continues to the west and the south.",
  "nightDescription": "A rickety wooden elevator sits along the north wall seemlingly abandoned, begging someone to start it back up. The tunnel continues to the west and the south.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Haunted Shack",
    "west": "Cavern Lake",
    "south": "East Tunnel"
  }
}, {
  "locationName": "Murky Pond",
  "dayDescription": "You've found yourself on the shore of a murky green pond of which no source of water can be seen. Dark trees line the far side of the pond. A path of dirt expands to the south.",
  "nightDescription": "You've found yourself on the shore of a murky green pond of which no source of water can be seen. Dark trees line the far side of the pond. A path of dirt expands to the south.",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "south": "The Seven Stones"
  }
}, {
  "locationName": "The Seven Stones",
  "dayDescription": "The small clearing you've entered is littered with small pebbles. Seven large stones surround you in a neat circle covered in stranger marks and symbols. To path you are on continues to the north and to the west.",
  "nightDescription": "The small clearing you've entered is littered with small pebbles. Seven large stones surround you in a neat circle covered in stranger marks and symbols. To path you are on continues to the north and to the west.",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Murky Pond",
    "west": "Large Clearing"
  }
}, {
  "locationName": "Large Clearing",
  "dayDescription": "The large clearing you've entered is interrupted by the dark treeline at its perimeter. The path splits four ways, leading north, south, east, and west.",
  "nightDescription": "The large clearing you've entered is interrupted by the dark treeline at its perimeter. The path splits four ways, leading north, south, east, and west.",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "The Elder Trees",
    "west": "Crazy Cat Lady's Shack",
    "south": "Tree Tunnel North",
    "east": "The Seven Stones"
  }
}, {
  "locationName": "Tree Tunnel North",
  "dayDescription": "The tunnel of trees you find yourself in is lined with dark trees. There seems to be a clearing in the trees up ahead to the north. The tunnel of trees continues to the south.",
  "nightDescription": "The tunnel of trees you find yourself in is lined with dark trees. There seems to be a clearing in the trees up ahead to the north. The tunnel of trees continues to the south.",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Large Clearing",
    "south": "Tree Tunnel South"
  }
}, {
  "locationName": "Tree Tunnel South",
  "dayDescription": "A tunnel of looming, dark trees surrounds you. Rustlings bushes and snapping twigs can be heard out of sight just beyond the treeline. The path continues to the west",
  "nightDescription": "A tunnel of looming, dark trees surrounds you. Rustlings bushes and snapping twigs can be heard out of sight just beyond the treeline. The path continues to the west",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Tree Tunnel North",
    "south": "Path to Haunted Forest"
  }
}, {
  "locationName": "The Elder Trees",
  "dayDescription": "The grove of trees surrounding you is full of large, ancient trees that loom over you. They seem to be keeping you under a watchful eye. The path continues to the west and to the south.",
  "nightDescription": "The grove of trees surrounding you is full of large, ancient trees that loom over you. They seem to be keeping you under a watchful eye. The path continues to the west and to the south.",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "south": "Large Clearing",
    "east": "The Great Tree"
  }
}, {
  "locationName": "The Great Tree",
  "dayDescription": "The thick dark fog shrouding your environment slowly parts to reveal an impossibly large tree leering above you. The mist in the air seems to whisper about the impossible age of the great tree for the tree will outlive us all. Upon its wide trunk, you can makeup an ancient face that seems eerily familiar...",
  "nightDescription": "The thick dark fog shrouding your environment slowly parts to reveal an impossibly large tree leering above you. The mist in the air seems to whisper about the impossible age of the great tree for the tree will outlive us all. Upon its wide trunk, you can makeup an ancient face that seems eerily familiar...",
  "region": "Halloween",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "The Elder Trees"
  }
}, {
  "locationName": "Crazy Cat Lady's Shack",
  "dayDescription": "Although worn on the outside, the inside of the shack you've entered is finely decorated and well-kept, though quite flashy and a bit out-dated. In the corner next to the crackling fireplace you notice a slightly-grizzled looking cat-like person rocking their chair back and forth.",
  "nightDescription": "Although worn on the outside, the inside of the shack you've entered is finely decorated and well-kept, though quite flashy and a bit out-dated. In the corner next to the crackling fireplace you notice a slightly-grizzled looking cat-like person rocking their chair back and forth.",
  "region": "Halloween",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "east": "Large Clearing"
  }
}, {
  "locationName": "East Tunnel",
  "dayDescription": "The tunnel splits, stretching to the north, south, and west.",
  "nightDescription": "The tunnel splits, stretching to the north, south, and west.",
  "region": "Halloween",
  "indoorOutdoor": "cave",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Surface Elevator",
    "west": "West Tunnel",
    "south": "South Tunnel"
  }
}, {
  "locationName": "Crossroads",
  "dayDescription": "You've encountered a fork in the brick road. To the west, a dirt path trails away from the main road through a meadow of flowers and small trees. A wooden sign ahead of you says 'North -> Country Town   South -> Sky Cannon   West -> The Inn'",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "North Country Lane",
    "west": "Front Yard",
    "south": "South Country Lane",
    "east": "Meadow Path"
  }
}, {
  "locationName": "South Country Lane",
  "dayDescription": "A wooden fence is the only thing separating the Country Lane from the woods that lie beyond. The brick road continues to the north and south.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Crossroads",
    "south": "Sky Cannon"
  }
}, {
  "locationName": "North Country Lane",
  "dayDescription": "On the side of the road you see a hooded merchant with a plastic folding table on which the hooded figure displays their wares. The brick road continues to the north and south.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Town Southwest",
    "south": "Crossroads"
  }
}, {
  "locationName": "Meadow Path",
  "dayDescription": "The sweet scent of wildflowers fills the air as you scan your area. Small trees and wildgrasses cover the meadow in varying shades of green. To the east you can see a bridge crossing a bumbling creek. The dirt path meets a brick road to the west.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Crossroads",
    "east": "Creek Bridge"
  }
}, {
  "locationName": "Creek Bridge",
  "dayDescription": "The wooden bridge creaks underneath your feet as the water below flows past. The rusting metal railings on either side of the bridge are the only thing stopping one from tumbling over the edge. To the south, you can see where the creek comes to a halt. A steep hike into the mountains continues to the east. The meadow path leads away to the west.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Meadow Path",
    "south": "Pond's Edge",
    "east": "Steep Hike West"
  }
}, {
  "locationName": "Pond's Edge",
  "dayDescription": "The creek flows into a deep pond of which is teeming with aquatic plant life and seems deep enough to fish out of. The path you're on curves to the east and continues up gentle slope into the mountains. A quick trip north would take you to the creek bridge.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Creek Bridge",
    "east": "Gentle Slope West"
  }
}, {
  "locationName": "Sky Cannon",
  "dayDescription": "You come upon a large metal cannon with a sign that says 'Sky Cannon'... it seems to be aiming east but no one can be sure where it leads. The road you stand on takes you north.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "South Country Lane",
    "east": "Ships Hold"
  }
}, {
  "locationName": "Town Southwest",
  "dayDescription": "A small town of brick and mortar buildings surrounds you. The town road continues north and east and leads away from the town to the south.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Town West",
    "south": "North Country Lane",
    "east": "Town Southeast"
  }
}, {
  "locationName": "Town Southeast",
  "dayDescription": "The town road curves past the bumbling creek and around the back of a small fenced garden, though a stacked stone wall keeps you from accessing the water. The town road continues to the north and west.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Town East",
    "west": "Town Southwest"
  }
}, {
  "locationName": "Item Store",
  "dayDescription": "You've entered a brightly lit Item Store with a multitude of tools, trinkets, and clothing for sale filling the shelves around the room. A smiling clerk stands proudly behind a counter seemingly waiting for you to approach.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Town West",
    "east": "Garden"
  }
}, {
  "locationName": "Town East",
  "dayDescription": "Small, tough weeds peek through the small cracks in the road surface. A gap in the fence on the west side leads you into a neat garden. The town road continues to the north and south.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Town Northeast",
    "west": "Garden",
    "south": "Town Southeast"
  }
}, {
  "locationName": "Garden",
  "dayDescription": "It could be said that no better-maintained garden than the one you find yourself could be found. Beautiful flowers and perfectly trimmed hedges fill the garden with a gentle atmosphere. A door on the west side of the garden leads into the brick and mortar building standing next to the garden. You should be able to fit through the gap in the fence on the east side of the garden.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Item Store",
    "east": "Town East"
  }
}, {
  "locationName": "Town Northwest",
  "dayDescription": "You find yourself completely surrounded by the brick and mortar buildings that make up the town. The brick road makes a sharp turn to the east and south. The building on the west side of the road has an iron front door, though it seems to be locked.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Special Item Store",
    "south": "Town West",
    "east": "Town Northeast"
  }
}, {
  "locationName": "Town Northeast",
  "dayDescription": "The brick road you're standing on seems to be the only barrier between the town and the nature beyond. The road splits three ways, leading you north, south, and west. A small wooden boardwalk to the east takes you to the river's edge",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Town North",
    "west": "Town Northwest",
    "south": "Town East",
    "east": "River's Edge"
  }
}, {
  "locationName": "River's Edge",
  "dayDescription": "You come to the edge of the gently flowing river. The water seems deep and ample for fishing. The boardwalk takes you west back to the main road.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Town Northeast"
  }
}, {
  "locationName": "Special Item Store",
  "dayDescription": "The iron door you've unlocked leads into an item store filled with rare and powerful items. There is no store clerk in sight but a small sign posted near the door reads 'Honor Code: Take what you need and leave payment'",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "east": "Town West"
  }
}, {
  "locationName": "Town North",
  "dayDescription": "You've come to a sharp turn in the road wrapping around a seemingly abandoned building. The road continues west and south.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Wishing Well",
    "south": "Town Northeast"
  }
}, {
  "locationName": "Haunted Shack",
  "dayDescription": "You've come upon a strange shack from which you can hear the rattling of chains and low moans. Enter the door to the west if you dare... or move back to the wishing well to the east.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Surface Elevator",
    "east": "Wishing Well"
  }
}, {
  "locationName": "Wishing Well",
  "dayDescription": "The brick road wraps around a stone wishing well. It sits dauntingly before you, daring anyone to toss in their valubles. A dirt path behind the well takes you west into the woods and the brick road continues east.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Haunted Shack",
    "east": "Town North"
  }
}, {
  "locationName": "Town West",
  "dayDescription": "The brick road beneath your feet seems worn but sturdy and one can almost imagine how busy this town once was. A brick building stands to your east with a sign atop the door that reads 'Generic Item Store'. The brick road continues to the north and south.",
  "nightDescription": "NULL",
  "region": "Country and Town",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Town Northwest",
    "south": "Town Southwest",
    "east": "Item Store"
  }
}, {
  "locationName": "Steep Hike West",
  "dayDescription": "The dirt path from the west gives way to a steep stone path to the east on which, if one is not careful, it can be quite easy to slip and fall back down the mountain.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Creek Bridge",
    "east": "Steep Hike East"
  }
}, {
  "locationName": "Gentle Slope West",
  "dayDescription": "The dirt path from the west gives way to a gently inclining stone path to the east that leads up into the mountains. The rocky surface of the mountain is littered with what looks like pumice.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Pond's Edge",
    "east": "Gentle Slope East"
  }
}, {
  "locationName": "Steep Hike East",
  "dayDescription": "The steep sloping path to the west seems mildly dangerous, though the view of the meadow below takes your breath away. A fork in the hike leads south from which you can hear the sound of a roaring waterfall. The main hike continues east and west.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Steep Hike West",
    "south": "Waterfall",
    "east": "Mountain Trail Noth"
  }
}, {
  "locationName": "Mountain Trail North",
  "dayDescription": "A sharp turn in the hiking trail goes east and south. On the northern end of the trail there appears to be a rather small and oddly placed castle-style building with a sign on the door that says 'Girl's Bathroom'.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Girl's Bathroom",
    "west": "Steep Hike East",
    "south": "Mountain Trail Center"
  }
}, {
  "locationName": "Girl's Bathroom",
  "dayDescription": "Stepping into the girl's bathroom is almost like stepping into a medieval castle, though it seems to be in quite a state of disrepair. The wall is lined with shattered porcelain sinks and snapped pipes that are flooding the tile with water. Half of the wooden stalls are completely demolished though, in the further stall, you can see the head of a large cave troll sticking up above the stall divider.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "south": "Mountain Trail North"
  }
}, {
  "locationName": "Waterfall",
  "dayDescription": "An incredibly tall waterfall pours from atop the cliffs above into a pool at the end of the path. The air is filled with a thick mist that instantly soaks you to the bone. No one seems to be able to determine where the water is draining... the stone path leads to the north.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Steep Hike East"
  }
}, {
  "locationName": "Mountain Trail Center",
  "dayDescription": "The stone beneath you seems to be getting quite warm at this stretch of the hike. The source of the heat seems to come from the east. The path splits to the north, east, and south.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Mountain Trail North",
    "south": "Mountain Trail South",
    "east": "Crater's Rim"
  }
}, {
  "locationName": "Crater's Rim",
  "dayDescription": "You find yourself at the edge of a deep volcano crater which seems to be boiling the air around. You can feel your hair being singed as you gaze upon the lake of lava below. The stone path leads away from the crater to the west.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Mountain Trail Center"
  }
}, {
  "locationName": "Mountain Trail South",
  "dayDescription": "The stone path you're walking on gently curves to the north and east, though a smaller path splits off from the main trail, leading toward a cliff.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Mountain Trail Center",
    "west": "Gentle Slope East",
    "south": "Cliff's Edge"
  }
}, {
  "locationName": "Cliff's Edge",
  "dayDescription": "You find yourself at the end of the Mountain Trail standing on the edge of a sheer south-facing cliff. The unnerving distance from here to the valley floor below seems terrifying, but one can't help but be beckoned to leap off the cliff into the clouds below. The moutain trail leads away to the north.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Mountain Trail South",
    "south": "Ships Hold"
  }
}, {
  "locationName": "Gentle Slope East",
  "dayDescription": "The gently sloping hike through the mountains is very forgiving to those who are prone to tripping. The path continues to the east and west.",
  "nightDescription": "NULL",
  "region": "Mountain",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Gentle Slope West",
    "east": "Mountain Trail South"
  }
}, {
  "locationName": "Ships Hold",
  "dayDescription": "At the moment you entered the atmosphere you instantly regretted your desicion. Your life flashed before your eyes and ... there was a beep and a flash. Something happened but before you have time to remember a wave of nausea washes over you... worse than any hangover you have ever had. The dimly lit room spins around you slowly coming into focus. Just as you get your wits about you a hulking Vogon enters the hold and sees you. Shouting in a booming voice that rattles your bones… you’re suddenly surrounded by 4 Vogons and hauld to the nearest airlock… this does not bode well for you. You scream as they toss you in the airlock and you feel the cold void of space surround you as your vision narrows and goes dark.",
  "nightDescription": "NULL",
  "region": "Vogon Space Ship",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "south": "Inn Lobby"
  }
}, {
  "locationName": "Captain's Quarters",
  "dayDescription": "You may regret everything about this journey to the Sky. Ford did try to warn you afterall. A large yellow skinned creature with a nose on it's forehad stares at you and shouts loudly. You did talk to the fish first, right? To the east you hear the sounds of voices cheering.",
  "nightDescription": "NULL",
  "region": "Vogon Spaceship",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Cafe",
    "east": "Ships Hold"
  }
}, {
  "locationName": "Cafe",
  "dayDescription": "A utilitarian ship's mess lies before you. Metal tables and chairs encircle a single microphone hung from the ceiling. The room is packed with Vogons. At the mic is a Vogon reciting poetry. You want to quickly exit but something in the awful words being hurled at you becons you toward the Vogon Poet",
  "nightDescription": "NULL",
  "region": "Vogon Spaceship",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "east": "Captain's Quarters"
  }
}, {
  "locationName": "Sky Poppy Field",
  "dayDescription": "NULL",
  "nightDescription": "NULL",
  "region": "Cloud City",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "south": "Mystery Button"
  }
}, {
  "locationName": "Mystery Button",
  "dayDescription": "NULL",
  "nightDescription": "NULL",
  "region": "Cloud City",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "north": "Sky Poppy Field",
    "east": "Sky Fishing Hole"
  }
}, {
  "locationName": "Sky Fishing Hole",
  "dayDescription": "The sky is blue. The fishing hole is blue. Are there fish in the sky? Perhaps you should find out.",
  "nightDescription": "NULL",
  "region": "Cloud City",
  "indoorOutdoor": "outdoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Mystery Button",
    "east": "Fairy Godfather's Sky Hut"
  }
}, {
  "locationName": "Fairy Godfather's Sky Hut",
  "dayDescription": "NULL",
  "nightDescription": "NULL",
  "region": "Cloud City",
  "indoorOutdoor": "indoor",
  "NPCs": [],
  "inventory": [],
  "exits": {
    "west": "Sky Fishing Hole"
  }
}, {
  "inventory": [],
  "locationName": "New New New",
  "dayDescription": "sadf",
  "nightDescription": "dfsdf",
  "region": "newland",
  "NPCs": "",
  "indoorOutdoor": "indoor",
  "exits": {}
}, {
  "inventory": [],
  "locationName": "Still More New",
  "dayDescription": "sadfg",
  "nightDescription": "gdfgdsfd",
  "region": "newland",
  "NPCs": "",
  "indoorOutdoor": "indoor",
  "exits": {}
}, {
  "inventory": [],
  "locationName": "Stuff",
  "dayDescription": "asdfsa",
  "nightDescription": "asdfsdaf",
  "region": "newland",
  "NPCs": "",
  "indoorOutdoor": "indoor",
  "exits": {}
}, {
  "inventory": [],
  "locationName": "Again",
  "dayDescription": "asdfdsaf",
  "nightDescription": "asdfdsaf",
  "region": "newland",
  "NPCs": "",
  "indoorOutdoor": "indoor",
  "exits": {}
}, {
  "inventory": [],
  "locationName": "Mostly New",
  "dayDescription": "lakisdfj",
  "nightDescription": "aoikusdfksadjfh",
  "region": "newland",
  "NPCs": "",
  "indoorOutdoor": "indoor",
  "exits": {}
}]