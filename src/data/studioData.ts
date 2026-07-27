import { ServiceItem, PortfolioItem, PricingPackage, Testimonial, FAQItem } from '../types';

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Wedding Photography',
    category: 'Wedding',
    description: 'Bespoke bridal portraits, traditional Muhurtham rituals, emotional ceremony coverage with master lenses.',
    iconName: 'Camera',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    title: 'Wedding Cinematic Videography',
    category: 'Wedding',
    description: '4K cinema-grade films, slow-motion color graded teasers, 360 audio capture, and emotional wedding trailers.',
    iconName: 'Video',
    popular: true,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    title: 'Candid Photography',
    category: 'Wedding',
    description: 'Unscripted, natural laughter, joyful tears, and intimate storytelling candid frames.',
    iconName: 'Sparkles',
    popular: true,
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    title: 'Traditional Photography',
    category: 'Wedding',
    description: 'Complete ceremony documentation, extended family group portraits, and ritual archival shots.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's5',
    title: 'Traditional Videography',
    category: 'Wedding',
    description: 'Full-length uninterrupted coverage of rituals with dual camera setup and multi-angle audio sync.',
    iconName: 'Film',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's6',
    title: 'Pre-Wedding Shoot',
    category: 'Wedding',
    description: 'Romantic outdoor concept shoots at heritage temples, Mahabalipuram beaches, tea estates in Ooty or Kodaikanal.',
    iconName: 'Heart',
    popular: true,
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's7',
    title: 'Post-Wedding Shoot',
    category: 'Wedding',
    description: 'Relaxed post-ceremony couple portraits, sunset beach sessions, and artistic lifestyle frames.',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's8',
    title: 'Engagement Photography',
    category: 'Wedding',
    description: 'Ring exchange coverage, flower decoration portraits, and family celebration moments.',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's9',
    title: 'Reception Coverage',
    category: 'Wedding',
    description: 'Grand stage entry visuals, guest interaction, live music performance, and lighting effects.',
    iconName: 'Crown',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's10',
    title: 'Maternity Photography',
    category: 'Portrait & Baby',
    description: 'Graceful gown portraits, husband-wife maternity storytelling, indoor studio & sunset lawn shoots.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's11',
    title: 'Newborn Baby Shoot',
    category: 'Portrait & Baby',
    description: 'Safe, sanitized, cozy newborn props, sleeping baby themes, and gentle family cuddle portraits.',
    iconName: 'HeartHandshake',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's12',
    title: 'Baby Shower Photography',
    category: 'Portrait & Baby',
    description: 'Valaikappu / Seemantham traditional ritual coverage, bangle ceremony highlights, and family blessings.',
    iconName: 'Gift',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's13',
    title: 'Birthday Photography',
    category: 'Portrait & Baby',
    description: '1st birthday cake smash, theme decor portraits, balloon drop fun, and kids activity photography.',
    iconName: 'Cake',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's14',
    title: 'Family Portraits',
    category: 'Portrait & Baby',
    description: 'Multi-generational family portraits in traditional Silk Veshti & Saree or modern attire.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's15',
    title: 'Corporate Events',
    category: 'Corporate & Events',
    description: 'Product launch, annual summits, leadership inaugurations, award galas, and professional headshots.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's16',
    title: 'School & College Events',
    category: 'Corporate & Events',
    description: 'Graduation ceremonies, cultural fests, sports day tournaments, and alumni gatherings.',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's17',
    title: 'Product Photography',
    category: 'Corporate & Events',
    description: 'E-commerce studio tabletop lighting, jewelry & saree catalog shoots, and 360 product photography.',
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's18',
    title: 'Drone Photography',
    category: 'Drone & Live',
    description: '4K aerial venue overviews, grand outdoor entries, temple architecture shots, and scenic backdrop angles.',
    iconName: 'Navigation',
    popular: true,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's19',
    title: 'Drone Videography',
    category: 'Drone & Live',
    description: 'Ultra-smooth cinematic aerial sweeps, outdoor procession tracking, and sunset venue videos.',
    iconName: 'Video',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's20',
    title: 'Live Streaming',
    category: 'Drone & Live',
    description: 'Multi-camera 1080p / 4K YouTube & Facebook live broadcasting for relatives overseas.',
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's21',
    title: 'Event Management',
    category: 'Event Management',
    description: 'End-to-end wedding and corporate event planning, venue coordination, timeline management, and guest hospitality.',
    iconName: 'Calendar',
    popular: true,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's22',
    title: 'Stage Decoration',
    category: 'Event Management',
    description: 'Traditional fresh flower Mandapam decor, contemporary crystal backdrops, theme reception stages.',
    iconName: 'Flower2',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's23',
    title: 'LED Wall Setup',
    category: 'Event Management',
    description: 'P2.5 & P3 high-resolution LED screens for live stage relay, photo slideshows, and video visuals.',
    iconName: 'Monitor',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's24',
    title: 'Sound & Lighting',
    category: 'Event Management',
    description: 'JBL concert audio systems, sharp beam intelligent lights, ambient mood wash, and smoke effects.',
    iconName: 'Music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's25',
    title: 'Album Design & Printing',
    category: 'Wedding',
    description: 'Canvera / Italian Leather embossed albums, non-tearable HD silk pages, flush mount binding with lifetime warranty.',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's26',
    title: 'Photo Frames',
    category: 'Wedding',
    description: 'Canvas gallery wraps, acrylic glass frames, metallic LED backlit frame displays for living rooms.',
    iconName: 'Image',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's27',
    title: 'Instant Photo Printing',
    category: 'Event Management',
    description: 'On-site live photo booth station with customized branded magnetic prints for event guests.',
    iconName: 'Printer',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Royal Mahabalipuram Wedding',
    category: 'Weddings',
    location: 'Mahabalipuram Beach Resort, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'A traditional South Indian wedding with floral mandapam facing the Bay of Bengal.'
  },
  {
    id: 'p2',
    title: 'Sacred Muhurtham Moments',
    category: 'Weddings',
    location: 'Le Royal Méridien, Chennai',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'Emotional candid capture during the Thali tying ritual.'
  },
  {
    id: 'p3',
    title: 'Cinematic Teaser - Vikram & Divya',
    category: 'Cinematic Films',
    location: 'Coimbatore Grand Palace',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    description: '4K Cinematic wedding teaser featuring aerial drone shots and original musical score.'
  },
  {
    id: 'p4',
    title: 'Heritage Temple Pre-Wedding',
    category: 'Engagement',
    location: 'Brihadeeswarar Temple Vicinity, Thanjavur',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'Sunset couple portraits in traditional Kanchipuram silk and dhoti.'
  },
  {
    id: 'p5',
    title: 'Grand Reception Gala',
    category: 'Reception',
    location: 'CODISSIA Trade Fair Complex, Coimbatore',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'Luxury LED backdrop stage setup with crystal chandelier lighting.'
  },
  {
    id: 'p6',
    title: 'Newborn Royalty Session',
    category: 'Baby Shoot',
    location: 'Unique Capture Studio, Anna Nagar Chennai',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'Sweet sleeping newborn baby wrapped in soft handwoven cotton props.'
  },
  {
    id: 'p7',
    title: 'Golden Sunset Maternity Bliss',
    category: 'Maternity',
    location: 'Ecr Beach Lawn, Chennai',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'Ethereal pregnancy portraiture capturing maternal warmth and love.'
  },
  {
    id: 'p8',
    title: 'Aerial Mandap Overview',
    category: 'Drone Photography',
    location: 'Madurai Convention Centre',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'High-altitude 4K drone shot of a 5,000 guest outdoor wedding pavilion.'
  },
  {
    id: 'p9',
    title: 'Fashion Couture Silk Shoot',
    category: 'Fashion',
    location: 'Studio Loft, Salem',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'Designer Kanchipuram bridal saree catalog shoot with studio strobe lighting.'
  },
  {
    id: 'p10',
    title: 'Annual Tech Summit 2026',
    category: 'Corporate',
    location: 'ITC Grand Chola, Chennai',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'Full corporate conference coverage, VIP speeches, and live social media uploads.'
  },
  {
    id: 'p11',
    title: 'Festive Cultural Gala',
    category: 'Events',
    location: 'PSG Tech Auditorium, Coimbatore',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    type: 'image',
    description: 'High energy dance performances, stage lighting, and trophy distributions.'
  },
  {
    id: 'p12',
    title: 'Ooty Tea Garden Love Story',
    category: 'Cinematic Films',
    location: 'Ooty Valley, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    description: 'Misty mountain pre-wedding cinematic film with drone sweeping landscape shots.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-basic',
    name: 'Basic Elegance',
    tagline: 'Ideal for intimate weddings, engagements, baby showers, or birthday celebrations.',
    priceEstimate: '₹45,000 - ₹75,000',
    badge: 'Popular for Intimate Events',
    features: [
      '1 Senior Candid Photographer',
      '1 Traditional Photographer & Videographer',
      'Full Day Coverage (8 Hours)',
      '300+ High-Res Color Graded Photos',
      '1 Premium HD Flush-Mount Album (40 Pages)',
      'Full Edited Traditional HD Video',
      'Online Cloud Gallery (1 Year Storage)'
    ],
    includes: ['All Raw Files Provided', 'Free Digital Invitation Poster']
  },
  {
    id: 'pkg-premium',
    name: 'Cinematic Premium',
    tagline: 'Our flagship multi-team coverage for grand South Indian weddings & receptions.',
    priceEstimate: '₹1,25,000 - ₹1,80,000',
    badge: 'Most Popular',
    popular: true,
    features: [
      '2 Lead Candid Photographers',
      '2 Traditional Photographers & Videographers',
      '1 Certified 4K Drone Operator',
      'Full 2-Day Coverage (Engagement + Wedding + Reception)',
      '3-5 Min Cinematic Teaser / Trailer',
      '4K Full Length Wedding Film with Multi-Audio Sync',
      '2 Canvera Velvet Italian Leather Albums (80 Pages total)',
      '1 Mini Parent Album + 1 Acrylic Glass Frame (20x30 inch)'
    ],
    includes: ['4K Live YouTube Streaming', 'Complimentary Pre-Wedding Couple Shoot', 'Raw Data in 1TB Hard Drive']
  },
  {
    id: 'pkg-luxury',
    name: 'Royal Heritage & Event Management',
    tagline: 'Complete luxury experience including photography, videography, stage decor & event coordination.',
    priceEstimate: '₹2,50,000+',
    badge: 'Complete Luxury Suite',
    features: [
      'Master Creative Director + 6 Member Crew',
      'Ultra HD 4K Cinematic Crew & Dual Drone Fleet',
      'Unlimited High-Res Candid & Traditional Frames',
      'Same-Day Teaser Video for Social Media Reels',
      'Fresh Floral Mandap Stage Decor & Sound/Light Management',
      'Live LED Screen Relays on Stage',
      '3 Canvera Italian Leather Albums + Glass Wall Frame Sets',
      'Instant On-Site Photo Printing Station for Guests'
    ],
    includes: ['Dedicated Event Coordinator', 'Unlimited Revisions on Film & Album', 'VIP Hospitality Coordination']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Karthik & Shalini',
    role: 'Bride & Groom',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    event: 'Traditional Wedding & Reception',
    comment: 'Unique Capture Studio turned our wedding into a magical fairytale! The candid shots captured pure emotion during the Muhurtham. The 4K drone video left all our relatives spellbound. Truly the best team in Tamil Nadu!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Dr. Rajesh Sundaram',
    role: 'Parent',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    event: 'Daughter\'s Wedding & Stage Management',
    comment: 'We hired them for both photography and stage decoration. Their team managed the 3,000 guest crowd seamlessly. The album quality is heirloom level! Very polite and professional team.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Deepa & Vignesh',
    role: 'Parents',
    location: 'Madurai, Tamil Nadu',
    rating: 5,
    event: '1st Birthday & Newborn Shoot',
    comment: 'The team was so gentle and patient with our baby during the newborn session! The photos are framed in our living room and everyone who visits compliments them.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't4',
    name: 'Arun Kumar',
    role: 'Event Director',
    location: 'Trichy, Tamil Nadu',
    rating: 5,
    event: 'Annual Corporate Gala',
    comment: 'Prompt delivery, top-class lighting equipment, and crystal clear live stream for our international remote team members. Unique Capture Studio is our go-to media partner!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How early should we book Unique Capture Studio for our event?',
    answer: 'We recommend booking 2 to 6 months in advance, especially during the peak Tamil marriage muhurtham dates (Aani, Aavani, Thai, Panguni months). However, feel free to contact us for last-minute availability!',
    category: 'Booking'
  },
  {
    id: 'f2',
    question: 'What is the advance payment required to confirm a booking?',
    answer: 'We require a 30% advance payment to lock down your event dates, crew members, and equipment. 50% is payable on the event date, and the remaining 20% upon final album draft approval.',
    category: 'Booking'
  },
  {
    id: 'f3',
    question: 'What is the delivery timeline for photos, videos, and printed albums?',
    answer: 'You will receive teaser highlight photos within 48 to 72 hours of the event for social media sharing. Complete edited digital photo sets are delivered within 10 to 14 days, and final printed Canvera albums within 2 to 3 weeks following design selection.',
    category: 'Delivery'
  },
  {
    id: 'f4',
    question: 'Do you provide drone photography & videography across Tamil Nadu?',
    answer: 'Yes! We possess licensed 4K professional drones operated by DGCA-aware pilots. We follow local airspace guidelines and obtain permissions for temple / resort venues.',
    category: 'Services'
  },
  {
    id: 'f5',
    question: 'Are there additional travel charges for events outside Chennai or Coimbatore?',
    answer: 'We operate across all cities in Tamil Nadu (Madurai, Trichy, Salem, Tirunelveli, Erode, Vellore, Thanjavur, Kanyakumari, Ooty) and Pondicherry. Travel & accommodation expenses are transparently calculated at actual cost or bundled into our all-inclusive package.',
    category: 'Travel'
  },
  {
    id: 'f6',
    question: 'Can we customize our album cover material and page finishes?',
    answer: 'Absolutely! We offer Canvera HD Silk finish, Italian Embossed Leather, Velvet Matte, High Gloss Acrylic Covers, and customized wooden presentation keepsake boxes.',
    category: 'Services'
  },
  {
    id: 'f7',
    question: 'What services are included in your Event Management vertical?',
    answer: 'Our Event Management team handles venue booking assistance, custom stage mandap decor (floral & crystal), LED wall installations, professional audio/sound engineering, lighting design, DJ, celebrity entertainment, and instant guest photo booths.',
    category: 'Event Management'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Professional Expert Crew',
    description: '10+ years experienced lead directors, portrait specialists, and award-winning candid storytellers.',
    icon: 'Award'
  },
  {
    title: 'Creative Storytelling',
    description: 'Cinematic color grading, artistic framing, and authentic emotional capturing without artificial posing.',
    icon: 'Sparkles'
  },
  {
    title: 'Latest Cameras & 4K Drones',
    description: 'Sony FX3/A7IV cinema cameras, master prime lenses, DJI Mavic 3 Cine drones, and 3-axis gimbals.',
    icon: 'Camera'
  },
  {
    title: 'Premium Color Grading & Edits',
    description: 'In-house colorists and album designers ensuring skin-tone fidelity and rich vibrant tones.',
    icon: 'Sliders'
  },
  {
    title: 'Affordable Transparent Packages',
    description: 'Clear pricing with zero hidden fees. High value packages crafted for every budget range.',
    icon: 'Tag'
  },
  {
    title: 'Fast Timely Delivery',
    description: 'Quick 48-hour teaser photos and guaranteed album delivery timelines.',
    icon: 'Zap'
  },
  {
    title: 'Heirloom Canvera Albums',
    description: 'Lifetime non-tearable water-resistant silk album pages bound in Italian leather.',
    icon: 'BookOpen'
  },
  {
    title: 'Complete Event Solutions',
    description: 'One-stop partner for photography, videography, stage decor, LED screens, sound, and hospitality.',
    icon: 'Sparkles'
  }
];
