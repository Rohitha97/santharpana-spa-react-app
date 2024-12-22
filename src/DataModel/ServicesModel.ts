interface Services {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
  timeslot: string;
  price: string;
}

const servicesCard: Services[] = [
  {
    id: 1,
    imgSrc: "images/service/service-1.jpg",
    name: "Full Body Massage",
    timeslot: "60 + 10 Minute Meditation Sessions",
    price: "9000 LKR",
    description:
      "Santharpana Ayurveda Ashram offers a 60-minute full-body massage designed to relieve stress and tension, performed by experienced male therapists trained in deep relaxation techniques. Using high-quality herbal oil or Aloe Vera cream, this massage covers your back, neck, shoulders, arms, legs, and feet, blending Swedish and deep tissue methods for a soothing experience. Our herbal oil nourishes the skin and promotes circulation, while Aloe Vera cream is gentle on sensitive skin.\n\n Our therapists customize the massage to meet your needs and maintain your comfort and privacy throughout. This rejuvenating massage is both luxurious and affordable. Book your appointment today for a relaxing escape at Santharpana Ayurveda Ashram.",
  },
  // {
  //   id: 2,
  //   imgSrc: "images/service/service-2.jpg",
  //   name: "Foot Massage",
  //   timeslot: "45 Minute Sessions",
  //   price: "-",
  //   description:
  //     "Experience relaxation and rejuvenation with a 40-50 minute foot massage at Santharpana Ayurveda Ashram. Our skilled therapists apply pressure to reflex points in your feet to boost circulation, relieve soreness, and promote relaxation. Seated in a comfortable chair, you'll enjoy a combination of Swedish and Shiatsu massage techniques.\n\n Perfect for those who spend a lot of time on their feet or suffer from conditions like plantar fasciitis, this massage helps reduce inflammation and improve flexibility. It also has mental and emotional benefits, lowering stress and anxiety while enhancing sleep quality.\n\n We use only natural oils and lotions to nourish your skin without harmful chemicals. The treatment is affordable and suitable for all ages. Book your foot massage today for a personalized, luxurious experience that will leave you feeling refreshed and revitalized.",
  // },

  {
    id: 5,
    imgSrc: "images/service/service-6.jpg",
    name: "Shirodhara Therapy",
    timeslot: "30 Minute Sessions",
    price: "6000 LKR",
    description:
      "Santharpana Ayurveda Ashram offers Seerodara, a unique Ayurvedic treatment using heated herbal compresses to relieve head tension and promote relaxation. This 10-minute treatment is available only until 12:00 pm, making it a perfect way to start your day.\n\n In Seerodara, a heated herbal oil blend, made from natural herbs, spices, and oils, is applied to the head dot by dot, soothing stress, headaches, and anxiety while improving blood circulation. The gentle warmth and pressure create a calming and rejuvenating experience.\n\n We use high-quality herbs and oils that are free from harmful chemicals. Our experienced therapists ensure you receive a personalized and luxurious Seerodara treatment, guiding you through each step to maximize the benefits.\n\n Book your Seerodara session at Santharpana Ayurveda Ashram today to enjoy a stress-relieving and affordable start to your day, leaving you refreshed and revitalized.",
  },
  {
    id: 3,
    imgSrc: "images/service/service-4.jpg",
    name: "Sauna/Steam bath",
    timeslot: "30 Minute Sessions",
    price: "6000 LKR",
    description:
      "Santharpana Ayurveda Ashram offers a traditional steam bath designed to cleanse and rejuvenate. Our steam bath blends lime leaves, pawatta leaves, Justicia Adhatoda leaves, Kohoba leaves, and cinnamon leaves for their unique therapeutic benefits.\n\n The steam bath opens pores for deeper cleansing, detoxifies, and relaxes muscles. It can improve circulation, reduce stress, and boost immunity. The leaves used provide antioxidants, anti-inflammatory properties, antibacterial effects, analgesic benefits, and improved blood circulation.\n\n Enjoy this experience in a private, peaceful setting with guidance from experienced therapists. Our steam bath is affordable and accessible, ensuring everyone can enjoy relaxation and rejuvenation. Book now to feel refreshed at Santharpana Ayurveda Ashram.",
  },
  // {
  //   id: 4,
  //   imgSrc: "images/service/service-5.jpg",
  //   name: " Head & Shoulder Massage",
  //   timeslot: "45 Minute Sessions",
  //   price: "-",
  //   description:
  //     "Santharpana Ayurveda Ashram offers a rejuvenating Head & Shoulder Massage designed to relieve tension and stress in the neck, shoulders, and head. This 40-50 minute session, performed by experienced therapists, starts with gentle strokes and gradually increases in pressure to release muscle tension.\n\n The massage focuses on key areas to improve blood flow, reduce inflammation, and alleviate headaches, migraines, and neck or shoulder pain. It's also an excellent way to reduce stress and promote relaxation, using calming techniques to ease the mind.\n\n We use high-quality natural oils that are nourishing and free from harmful chemicals, ensuring a safe and luxurious experience. Book your Head & Shoulder Massage at Santharpana Ayurveda Ashram today to enjoy a personalized and soothing treatment that leaves you feeling refreshed and rejuvenated.",
  // },

  {
    id: 6,
    imgSrc: "images/service/service-7.jpg",
    name: "Pinda Massage",
    timeslot: "60 Minute Sessions",
    price: "9000 LKR",
    description:
      "Santharpana Ayurveda Ashram offers the Aromatic Pinda Massage, a luxurious 60-minute full-body treatment combining Ayurvedic and Oriental traditions. The massage uses hand-crafted bags filled with aromatic herbs and essential oils, which are steamed and gently pressed over the body to relieve tension, improve circulation, and detoxify.\n\n The warmth and soothing aromas create a deeply relaxing experience, making it ideal for those with muscle pain, stiffness, or stress. The therapeutic heat and gentle pressure provide relief from soreness while promoting relaxation and reducing anxiety.\n\n Our experienced therapists tailor the treatment to your needs, ensuring a personalized and luxurious massage experience. The herbal bags contain only high-quality natural ingredients, free from harmful chemicals, to offer a holistic and rejuvenating session.\n\n Book your Aromatic Pinda Massage at Santharpana Ayurveda Ashram today for a calming and affordable way to pamper yourself. Experience the ultimate in relaxation and leave feeling refreshed and revitalized.",
  },
  {
    id: 7,
    imgSrc: "images/service/all.jpg",
    name: "Full Body + Shirodhara + Steam bath + Meditation",
    timeslot: "130 Minute Package",
    price: "18,000 LKR",
    description:
      "Santharpana Ayurveda Ashram offers a rejuvenating package that includes a 60-minute Full Body Massage, a 40-minute Seerodara Therapy, and a 20-minute Pinda Massage. This package combines Ayurvedic and traditional treatments to provide a complete relaxation experience, leaving you feeling refreshed and revitalized.\n\n The Full Body Massage relieves stress and muscle tension, while Seerodara Therapy uses heated herbal compresses to promote head relaxation. The Pinda Massage employs hand-crafted bags filled with aromatic and medicinal herbs for a soothing full-body massage.\n\n This package is affordably priced and suitable for those with muscle pain, stiffness, or fatigue. It also helps to reduce stress and anxiety, as the gentle warmth and pressure promote relaxation. Our experienced therapists ensure a personalized and luxurious experience, using only high-quality natural ingredients free from harmful chemicals or additives.\n\n Book your Full Body + Seerodara + Pinda package at Santharpana Ayurveda Ashram today to experience the ultimate in relaxation and rejuvenation. It's a popular and accessible way to pamper yourself and enjoy a holistic, calming experience.",
  },
];

export { servicesCard, type Services };
