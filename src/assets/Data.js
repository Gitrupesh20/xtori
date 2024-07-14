const content = `In the quaint town of Crumville, life was anything but ordinary. Nestled between rolling hills and dense forests, Crumville was known for its annual Cookie Festival, where the finest bakers competed to create the most delicious and innovative cookies.

This year, the festival promised to be extra special. The renowned baker, Ms. Henrietta Crumble, had announced her secret recipe would be revealed. Her cookies were legendary, with whispers that a single bite could make a grown man weep with joy.

However, not everyone was thrilled about the festival. Two bumbling thieves, Dirk and Tiny, saw this as the perfect opportunity for their next heist. Dirk, the self-proclaimed mastermind, had a plan to steal Ms. Crumble's secret recipe and sell it to the highest bidder.

"Alright, Tiny," Dirk said, rubbing his hands together. "Tonight's the night. We'll sneak into Ms. Crumble's bakery and swipe that recipe."

Tiny, a giant of a man with the brain of a goldfish, nodded eagerly. "But, Dirk, what if we get caught?`
const Post = [
    {
        id: 1,
        user : {
            username: "Rupesh Sharma",
            userID : "@rupesh",
        },
        Time : "2h",
        Likes: {
            count: 10,
            isLiked: false,
          },
          contributes: {
            count: 50,
          },
          bookmark: {
            count: 50,
            isMark: false,
          },
          share: {
            count: 100,
          },
          story : content.substring(5, 100),
    },
    {
      id: 2,
        user : {
            username: "Alice Johnson",
            userID : "@alicej",
        },
        Time : "3h",
        Likes: {
            count: 25,
            isLiked: true,
          },
          contributes: {
            count: 30,
          },
          bookmark: {
            count: 40,
            isMark: true,
          },
          share: {
            count: 80,
          },
          story : content,
    },
    {
      id: 4,
        user : {
            username: "Michael Brown",
            userID : "@mikeb",
        },
        Time : "1h",
        Likes: {
            count: 15,
            isLiked: false,
          },
          contributes: {
            count: 60,
          },
          bookmark: {
            count: 20,
            isMark: false,
          },
          share: {
            count: 50,
          },
          story : content + `This year, the festival promised to be extra special. The renowned baker, Ms. Henrietta Crumble, had announced her secret recipe would be revealed. Her cookies were legendary, with whispers that a single bite could make a grown man weep with joy.

However, not everyone was thrilled about the festival. Two bumbling thieves, Dirk and Tiny, saw this as the perfect opportunity for their next heist. Dirk, the self-proclaimed mastermind, had a plan to steal Ms. Crumble's secret recipe and sell it to the highest bidder.

"Alright, Tiny," Dirk said, rubbing his hands together. "Tonight's the night. We'll sneak into Ms. Crumble's bakery and swipe that recipe."

Tiny, a giant of a man with the brain of a goldfish, nodded eagerly. "But, Dirk, what if we get caught?`,
    },
    {id: 5,
        user : {
            username: "Sara Lee",
            userID : "@saralee",
        },
        Time : "4h",
        Likes: {
            count: 40,
            isLiked: true,
          },
          contributes: {
            count: 70,
          },
          bookmark: {
            count: 90,
            isMark: true,
          },
          share: {
            count: 120,
          },
          story : content,
    },
    {
        id: 13,
        user : {
            username: "David Kim",
            userID : "@davidk",
        },
        Time : "5h",
        Likes: {
            count: 5,
            isLiked: false,
          },
          contributes: {
            count: 10,
          },
          bookmark: {
            count: 15,
            isMark: false,
          },
          share: {
            count: 25,
          },
          story : content,
    },
];
const storyCollection = [
  {
      title: "Ghost Story",
      totalStories: 155000
  },
  {
      title: "Haunted Tales",
      totalStories: 78000
  },
  {
      title: "Spooky Legends",
      totalStories: 94000
  },
  {
      title: "Phantom Chronicles",
      totalStories: 120000
  },
  {
      title: "Eerie Encounters",
      totalStories: 50000
  },
  {
      title: "Mystic Myths",
      totalStories: 63000
  },
  {
      title: "Haunting Whispers",
      totalStories: 88000
  },
  {
      title: "Spectral Stories",
      totalStories: 103000
  },
  {
      title: "Shadowy Figures",
      totalStories: 47000
  },
  {
      title: "Ghostly Apparitions",
      totalStories: 112000
  },
  {
      title: "Paranormal Phenomena",
      totalStories: 99000
  },
  {
      title: "Supernatural Sightings",
      totalStories: 58000
  },
  {
      title: "Chilling Narratives",
      totalStories: 76000
  },
  {
      title: "Wraith's Tales",
      totalStories: 52000
  },
  {
      title: "Unseen Spirits",
      totalStories: 93000
  }
];

export   {Post, storyCollection };