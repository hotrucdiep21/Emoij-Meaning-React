const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
  {
    id: 4,
    emoji: "😀",
    name: "Grinning Face",
    meaning:
      "A face with a big open (grinning) mouth, showing teeth. Represents a good mood or cheerfulness.",
  },
  {
    id: 5,
    emoji: "😅",
    name: "Grinning Face with Sweat",
    meaning:
      "A grinning face with a bead of sweat, indicating nerves or stress but still smiling.",
  },
  {
    id: 6,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A cool and relaxed face with sunglasses. Often used to convey that someone is cool or carefree.",
  },
  {
    id: 7,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A face with big, puppy-dog eyes, representing begging or pleading. Often used to evoke sympathy.",
  },
  {
    id: 8,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A face with a tear rolling down its cheek. Represents sadness or disappointment.",
  },
  {
    id: 9,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "A face with tears of joy streaming from its eyes. Used to show something is extremely funny or amusing.",
  },
  {
    id: 10,
    emoji: "❤️",
    name: "Red Heart",
    meaning: "A classic red heart, representing love and romance.",
  },
  {
    id: 11,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A face with a halo above it, indicating innocence or goodness. Often used humorously.",
  },
  {
    id: 12,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face with a hand on its chin, indicating thinking or deep thought.",
  },
  {
    id: 13,
    emoji: "🙈",
    name: "See-No-Evil Monkey",
    meaning:
      "A monkey covering its eyes. Often used to convey that someone does not want to see something.",
  },
  {
    id: 14,
    emoji: "🙉",
    name: "Hear-No-Evil Monkey",
    meaning:
      "A monkey covering its ears. Often used to convey that someone does not want to hear something.",
  },
  {
    id: 15,
    emoji: "🙊",
    name: "Speak-No-Evil Monkey",
    meaning:
      "A monkey covering its mouth. Often used to convey that someone does not want to speak or is keeping a secret.",
  },
  {
    id: 16,
    emoji: "😋",
    name: "Face Savoring Food",
    meaning:
      "A face with a tongue sticking out, savoring food. Represents enjoying a delicious meal.",
  },
  {
    id: 17,
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning:
      "A winking face with a tongue sticking out. Often used to convey a playful or joking tone.",
  },
  {
    id: 18,
    emoji: "😝",
    name: "Squinting Face with Tongue",
    meaning:
      "A squinting face with a tongue sticking out. Often used to convey a playful or joking tone.",
  },
  {
    id: 19,
    emoji: "😛",
    name: "Face with Tongue",
    meaning:
      "A face with a tongue sticking out. Often used to convey a playful or teasing tone.",
  },
  {
    id: 20,
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning:
      "A face with dollar signs for eyes and a mouth. Represents making money or being rich.",
  },
  {
    id: 21,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A smiling face with open hands, offering a hug. Represents affection and support.",
  },
  {
    id: 22,
    emoji: "🤩",
    name: "Star-Struck",
    meaning:
      "A face with star-shaped eyes, indicating excitement or admiration.",
  },
  {
    id: 23,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face with a hand on its chin, indicating thinking or deep thought.",
  },
  {
    id: 24,
    emoji: "🤫",
    name: "Shushing Face",
    meaning:
      "A face with a finger over the mouth, indicating silence or secrecy.",
  },
  {
    id: 25,
    emoji: "🤭",
    name: "Face with Hand Over Mouth",
    meaning:
      "A face with a hand covering the mouth, indicating surprise or embarrassment.",
  },
  {
    id: 26,
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    meaning:
      "A face with a zipper for a mouth, indicating silence or that someone is keeping a secret.",
  },
  {
    id: 27,
    emoji: "🤨",
    name: "Face with Raised Eyebrow",
    meaning:
      "A face with one eyebrow raised, indicating skepticism or curiosity.",
  },
  {
    id: 28,
    emoji: "😐",
    name: "Neutral Face",
    meaning:
      "A face with a neutral expression. Represents indifference or a lack of emotion.",
  },
  {
    id: 29,
    emoji: "😑",
    name: "Expressionless Face",
    meaning:
      "A face with a straight mouth and closed eyes. Represents lack of expression.",
  },
  {
    id: 30,
    emoji: "😶",
    name: "Face Without Mouth",
    meaning:
      "A face without a mouth. Represents silence or that someone has nothing to say.",
  },
  {
    id: 31,
    emoji: "😏",
    name: "Smirking Face",
    meaning:
      "A face with a sly or smug expression. Often used to convey flirtation or sarcasm.",
  },
  {
    id: 32,
    emoji: "😒",
    name: "Unamused Face",
    meaning:
      "A face with a downturned mouth and eyes. Represents dissatisfaction or disapproval.",
  },
  {
    id: 33,
    emoji: "🙄",
    name: "Face with Rolling Eyes",
    meaning: "A face with eyes rolled upward. Represents disdain or disbelief.",
  },
  {
    id: 34,
    emoji: "😬",
    name: "Grimacing Face",
    meaning: "A face with a grimace. Represents discomfort or awkwardness.",
  },
  {
    id: 35,
    emoji: "🤥",
    name: "Lying Face",
    meaning:
      "A face with a long nose, like Pinocchio. Represents lying or deceit.",
  },
  {
    id: 36,
    emoji: "😌",
    name: "Relieved Face",
    meaning:
      "A face with closed eyes and a slight smile. Represents relief or contentment.",
  },
  {
    id: 37,
    emoji: "😔",
    name: "Pensive Face",
    meaning:
      "A face with closed eyes and a downturned mouth. Represents sadness or deep thought.",
  },
  {
    id: 38,
    emoji: "😪",
    name: "Sleepy Face",
    meaning:
      "A face with closed eyes and a tear. Represents sleepiness or exhaustion.",
  },
  {
    id: 39,
    emoji: "🤤",
    name: "Drooling Face",
    meaning:
      "A face with a small stream of drool. Represents desire or sleepiness.",
  },
  {
    id: 40,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and a Z. Represents sleeping or dreaming.",
  },
  {
    id: 41,
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning:
      "A face with a medical mask. Represents illness or protecting oneself from sickness.",
  },
  {
    id: 42,
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning:
      "A face with a thermometer in its mouth. Represents being sick or having a fever.",
  },
  {
    id: 43,
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning: "A face with a head-bandage. Represents injury or pain.",
  },
  {
    id: 44,
    emoji: "🤢",
    name: "Nauseated Face",
    meaning:
      "A face with a nauseated expression. Represents feeling sick or disgusted.",
  },
  {
    id: 45,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning: "A face vomiting. Represents extreme sickness or disgust.",
  },
  {
    id: 46,
    emoji: "🤧",
    name: "Sneezing Face",
    meaning:
      "A face with closed eyes and a tissue. Represents sneezing or having a cold.",
  },
  {
    id: 47,
    emoji: "🥵",
    name: "Hot Face",
    meaning:
      "A face with a red, sweaty expression. Represents feeling hot or overheated.",
  },
  {
    id: 48,
    emoji: "🥶",
    name: "Cold Face",
    meaning:
      "A face with a blue, frozen expression. Represents feeling cold or freezing.",
  },
  {
    id: 49,
    emoji: "🥴",
    name: "Woozy Face",
    meaning:
      "A face with a dizzy expression. Represents feeling woozy or disoriented.",
  },
  {
    id: 50,
    emoji: "😵",
    name: "Dizzy Face",
    meaning:
      "A face with crossed eyes and a dizzy expression. Represents feeling dizzy or disoriented.",
  },
  {
    id: 51,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A face with an exploding head. Represents mind-blowing or shocking.",
  },
  {
    id: 52,
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning:
      "A face with a cowboy hat. Represents a sense of adventure or a carefree attitude.",
  },
  {
    id: 53,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat and a blower. Represents celebration or a festive occasion.",
  },
  {
    id: 54,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning: "A face with sunglasses. Represents a cool or relaxed attitude.",
  },
  {
    id: 55,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "A face with glasses and buck teeth. Represents intelligence or a love for learning.",
  },
  {
    id: 56,
    emoji: "🧐",
    name: "Face with Monocle",
    meaning: "A face with a monocle. Represents scrutiny or curiosity.",
  },
  {
    id: 57,
    emoji: "😕",
    name: "Confused Face",
    meaning:
      "A face with a confused expression. Represents confusion or uncertainty.",
  },
  {
    id: 58,
    emoji: "😟",
    name: "Worried Face",
    meaning: "A face with a worried expression. Represents anxiety or concern.",
  },
  {
    id: 59,
    emoji: "🙁",
    name: "Slightly Frowning Face",
    meaning:
      "A face with a slight frown. Represents mild sadness or disapproval.",
  },
  {
    id: 60,
    emoji: "☹️",
    name: "Frowning Face",
    meaning: "A face with a deep frown. Represents sadness or disapproval.",
  },
  {
    id: 61,
    emoji: "😮",
    name: "Face with Open Mouth",
    meaning: "A face with an open mouth. Represents surprise or shock.",
  },
  {
    id: 62,
    emoji: "😯",
    name: "Hushed Face",
    meaning:
      "A face with wide eyes and a small mouth. Represents surprise or shock.",
  },
  {
    id: 63,
    emoji: "😲",
    name: "Astonished Face",
    meaning:
      "A face with wide eyes and an open mouth. Represents astonishment or amazement.",
  },
  {
    id: 64,
    emoji: "😳",
    name: "Flushed Face",
    meaning:
      "A face with wide eyes and blushing cheeks. Represents embarrassment or surprise.",
  },
  {
    id: 65,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A face with large, puppy-dog eyes. Represents pleading or begging.",
  },
  {
    id: 66,
    emoji: "😦",
    name: "Frowning Face with Open Mouth",
    meaning:
      "A face with a frown and an open mouth. Represents disappointment or shock.",
  },
  {
    id: 67,
    emoji: "😧",
    name: "Anguished Face",
    meaning: "A face with a frown and wide eyes. Represents anguish or pain.",
  },
  {
    id: 68,
    emoji: "😨",
    name: "Fearful Face",
    meaning:
      "A face with wide eyes and an open mouth. Represents fear or anxiety.",
  },
  {
    id: 69,
    emoji: "😰",
    name: "Anxious Face with Sweat",
    meaning:
      "A face with wide eyes and a bead of sweat. Represents anxiety or stress.",
  },
  {
    id: 70,
    emoji: "😥",
    name: "Sad but Relieved Face",
    meaning:
      "A face with a tear and a relieved expression. Represents sadness mixed with relief.",
  },
  {
    id: 71,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A face with a tear rolling down its cheek. Represents sadness or disappointment.",
  },
  {
    id: 72,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A face with tears streaming down its cheeks. Represents intense sadness or grief.",
  },
  {
    id: 73,
    emoji: "😱",
    name: "Face Screaming in Fear",
    meaning:
      "A face with wide eyes and an open mouth. Represents screaming in fear or shock.",
  },
  {
    id: 74,
    emoji: "😖",
    name: "Confounded Face",
    meaning:
      "A face with a furrowed brow and a frown. Represents frustration or confusion.",
  },
  {
    id: 75,
    emoji: "😣",
    name: "Persevering Face",
    meaning:
      "A face with a furrowed brow and closed eyes. Represents perseverance or determination.",
  },
  {
    id: 76,
    emoji: "😞",
    name: "Disappointed Face",
    meaning:
      "A face with a frown and closed eyes. Represents disappointment or sadness.",
  },
  {
    id: 77,
    emoji: "😓",
    name: "Downcast Face with Sweat",
    meaning:
      "A face with a frown and a bead of sweat. Represents sadness or disappointment mixed with stress.",
  },
  {
    id: 78,
    emoji: "😩",
    name: "Weary Face",
    meaning:
      "A face with a frown and closed eyes. Represents exhaustion or frustration.",
  },
  {
    id: 79,
    emoji: "😫",
    name: "Tired Face",
    meaning:
      "A face with a frown and closed eyes. Represents tiredness or frustration.",
  },
  {
    id: 80,
    emoji: "🥱",
    name: "Yawning Face",
    meaning:
      "A face with a hand covering its mouth, yawning. Represents tiredness or boredom.",
  },
  {
    id: 81,
    emoji: "😤",
    name: "Face with Steam From Nose",
    meaning:
      "A face with closed eyes and steam coming from its nose. Represents frustration or anger.",
  },
  {
    id: 82,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A face with a deep frown and closed eyes. Represents anger or frustration.",
  },
  {
    id: 83,
    emoji: "😠",
    name: "Angry Face",
    meaning:
      "A face with a frown and closed eyes. Represents anger or frustration.",
  },
  {
    id: 84,
    emoji: "🤬",
    name: "Face with Symbols on Mouth",
    meaning:
      "A face with a frown and symbols covering the mouth. Represents cursing or intense anger.",
  },
  {
    id: 85,
    emoji: "😈",
    name: "Smiling Face with Horns",
    meaning:
      "A face with a mischievous smile and horns. Represents mischief or devilish behavior.",
  },
  {
    id: 86,
    emoji: "👿",
    name: "Angry Face with Horns",
    meaning:
      "A face with an angry expression and horns. Represents evil or devilish behavior.",
  },
  {
    id: 87,
    emoji: "💀",
    name: "Skull",
    meaning: "A skull. Represents death or danger.",
  },
  {
    id: 88,
    emoji: "☠️",
    name: "Skull and Crossbones",
    meaning: "A skull and crossbones. Represents danger or poison.",
  },
  {
    id: 89,
    emoji: "💩",
    name: "Pile of Poo",
    meaning: "A smiling pile of poo. Represents something bad or unpleasant.",
  },
  {
    id: 90,
    emoji: "🤡",
    name: "Clown Face",
    meaning: "A clown face. Represents something funny or silly.",
  },
  {
    id: 91,
    emoji: "👹",
    name: "Ogre",
    meaning: "An ogre face. Represents something scary or monstrous.",
  },
  {
    id: 92,
    emoji: "👺",
    name: "Goblin",
    meaning: "A goblin face. Represents something scary or monstrous.",
  },
  {
    id: 93,
    emoji: "👻",
    name: "Ghost",
    meaning: "A ghost. Represents something spooky or supernatural.",
  },
  {
    id: 94,
    emoji: "👽",
    name: "Alien",
    meaning: "An alien face. Represents something extraterrestrial or strange.",
  },
  {
    id: 95,
    emoji: "👾",
    name: "Alien Monster",
    meaning:
      "An alien monster. Represents something extraterrestrial or strange.",
  },
  {
    id: 96,
    emoji: "🤖",
    name: "Robot",
    meaning: "A robot face. Represents technology or artificial intelligence.",
  },
  {
    id: 97,
    emoji: "😺",
    name: "Grinning Cat",
    meaning:
      "A cat face with a big open (grinning) mouth. Represents a good mood or cheerfulness.",
  },
  {
    id: 98,
    emoji: "😸",
    name: "Grinning Cat with Smiling Eyes",
    meaning:
      "A cat face with a big open (grinning) mouth and smiling eyes. Represents a good mood or cheerfulness.",
  },
  {
    id: 99,
    emoji: "😹",
    name: "Cat with Tears of Joy",
    meaning:
      "A cat face with tears of joy streaming from its eyes. Represents something extremely funny or amusing.",
  },
  {
    id: 100,
    emoji: "😻",
    name: "Smiling Cat with Heart-Eyes",
    meaning: "A cat face with heart-shaped eyes. Represents love or adoration.",
  },
];

export default emojipedia;
