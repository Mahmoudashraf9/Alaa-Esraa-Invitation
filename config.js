/*
 * Wedding invitation configuration
 * -------------------------------
 * Update this file to personalise the entire invitation. No other file needs
 * editing for normal content, image, colour, story, event, or form changes.
 */
const config = {
  // Couple and invitation — names are shown in this order: "brideName & groomName"
  brideName: 'Alaa',
  groomName: 'Esraa',
  monogram: 'A & E',
  weddingDate: 'January 15, 2027',
  weddingDateTime: '2027-01-15T19:00:00',
  city: 'Cairo',
  rsvpBy: 'January 5, 2027',
  heroInvitationLine: 'invite you to celebrate their wedding',
  openingKicker: 'Together forever',

  // Venue and map
  venueName: 'Al Farida Hall',
  address: 'Dar Al Asleha Wal Zakhira — قاعة الفريدة بدار الأسلحة والذخيرة',
  googleMapsLink: 'https://maps.app.goo.gl/SwGWgwvpnM6NvVaz7',
  mapEmbedUrl: 'https://maps.google.com/maps?q=30.0595126,31.2832964&z=17&hl=ar&output=embed',

  // Remote submissions — paste the deployed Google Apps Script URL ending in /exec.
  // Deploy a NEW copy of apps-script/Code.gs for this wedding so RSVPs go to its own sheet.
  submissionEndpoint: 'https://script.google.com/macros/s/AKfycbyA1bP35Bfp5Sn7m8SjL0V8u5PoxT9Xk0JpLvPE-z7wX7mUdzcyw14Yc5TThFFejWjoFA/exec',

  // Images — use hosted URLs or local paths relative to index.html
  cardImage: './src/cardImage.png',
  // Round photo on the envelope card: the point to focus on and how far to zoom in (1 = no zoom)
  cardImagePosition: '56% 0%',
  cardImageZoom: 1.1,
  heroImage: './src/heroImage.png',

  // Background song — put an .mp3 in the src folder and write its name here
  music: './src/music.mp3',
  // Second of the song to start from (it also loops back to this point)
  musicStart: 0,

  // Which part of the hero photo stays in view, e.g. 'center', 'center 70%' (lower), 'center top'
  heroImagePosition: 'center',

  // Theme colours (white & gold wedding palette)
  colors: {
    primaryText: '#2e2b27',
    green: '#8c6f3e',      // script lettering & buttons (antique gold)
    rose: '#d8c39a',       // champagne accents
    butter: '#efe5cf',     // soft champagne
    background: '#ffffff', // pure white
  },

  // Blessing section — the verse shown beside a photo.
  blessing: {
    eyebrow: 'A blessing to begin with',
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
    source: 'سورة الروم · الآية ٢١',
    translation: 'And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy.',
    imageUrl: './src/image2.png',
  },

  // Event details
  events: [
    { title: 'Wedding', time: '7:00 PM', location: 'Al Farida Hall' },
  ],
  dressCode: 'Black Tie Optional',
  note: 'Please arrive 30 minutes early.',

  // Show every guest's wishes to all visitors (false = wishes are sent privately to the couple)
  isGuestbookPublic: true,
  maxGuests: 4,
  closingMessage: 'Your presence will make our wedding day even more special.',
};
