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
    price: "-",
    description:
      "Santharpana Ayurveda Ashram offers a 60-minute full-body massage designed to relieve stress and tension, performed by experienced therapists trained in deep relaxation techniques. Using high-quality herbal oil or Aloe Vera cream, this massage covers your back, neck, shoulders, arms, legs, and feet, blending uique Ayurveda and deep tissue methods for a soothing experience. Our herbal oil nourishes the skin and promotes circulation, while Aloe Vera cream is gentle on sensitive skin.\n\n Our therapists customize the massage to meet your needs and maintain your comfort and privacy throughout. This rejuvenating massage is both luxurious and affordable. Book your appointment today for a relaxing escape at Santharpana Ayurveda Ashram.",
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
    price: "-",
    description:
      "Santharpana Ayurveda Ashram offers Shirodhara, a unique Ayurvedic treatment using heated herbal compresses to relieve head tension and promote relaxation. \n\n In Shirodhara, a heated herbal oil blend, made from natural herbs, spices, and oils, is applied to the head dot by dot, soothing stress, headaches, and anxiety while improving blood circulation. The gentle warmth and pressure create a calming and rejuvenating experience.\n\n We use high-quality herbs and oils that are free from harmful chemicals. Our experienced therapists ensure you receive a personalized and luxurious Shirodhara treatment, guiding you through each step to maximize the benefits.\n\n Book your Shirodhara session at Santharpana Ayurveda Ashram today to enjoy a stress-relieving and affordable start to your day, leaving you refreshed and revitalized.",
  },
  {
    id: 3,
    imgSrc: "images/service/service-4.jpg",
    name: "Sauna/Steam bath",
    timeslot: "30 Minute Sessions",
    price: "-",
    description:
      "Santharpana Ayurveda Ashram offers a traditional steam bath designed to cleanse and rejuvenate the body and mind.\n\n The steam bath opens pores for deeper cleansing, detoxifies the body, and relaxes muscles. It improves circulation, reduces stress, and boosts immunity. Additionally, it provides antioxidant, anti-inflammatory, antibacterial, and analgesic benefits, while promoting better blood circulation.\n\n Enjoy this revitalizing experience in a private and peaceful setting, guided by our experienced therapists. Our steam bath is both affordable and accessible, ensuring that everyone can experience the relaxation and rejuvenation they deserve.\n\n Book your session now and feel refreshed at Santharpana Ayurveda Ashram!",
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
    price: "-",
    description:
      "Santharpana Ayurveda Ashram offers the Aromatic Pinda Massage, a luxurious 60-minute full-body treatment combining Ayurvedic and Oriental traditions. The massage uses hand-crafted bags filled with aromatic herbs and essential oils, which are steamed and gently pressed over the body to relieve tension, improve circulation, and detoxify.\n\n The warmth and soothing aromas create a deeply relaxing experience, making it ideal for those with muscle pain, stiffness, or stress. The therapeutic heat and gentle pressure provide relief from soreness while promoting relaxation and reducing anxiety.\n\n Our experienced therapists tailor the treatment to your needs, ensuring a personalized and luxurious massage experience. The herbal bags contain only high-quality natural ingredients, free from harmful chemicals, to offer a holistic and rejuvenating session.\n\n Book your Aromatic Pinda Massage at Santharpana Ayurveda Ashram today for a calming and affordable way to pamper yourself. Experience the ultimate in relaxation and leave feeling refreshed and revitalized.",
  },
  {
    id: 7,
    imgSrc: "images/service/all.webp",
    name: "Full Body Massage + Shirodhara + Steam Bath + Meditation",
    timeslot: "130 Minute Package",
    price: "-",
    description:
      "Santharpana Ayurveda Ashram invites you to experience a rejuvenating package that includes a Full Body Massage, Shirodhara Therapy, a Steam Bath, and Meditation. This thoughtfully curated package blends Ayurvedic and traditional treatments, providing a comprehensive relaxation experience that leaves you feeling refreshed and revitalized.\n\n- Full Body Massage: Relieves stress, eases muscle tension, and promotes overall relaxation.\n- Shirodhara Therapy: A calming treatment where warm herbal oils are gently poured over the forehead, soothing the mind and encouraging mental clarity.\n- Steam Bath: Helps detoxify the body and enhances the benefits of the massage.\n- Meditation: Completes the experience by centering your mind and fostering inner peace.\n\nThis affordable package is ideal for those dealing with muscle pain, stiffness, or fatigue. It also helps alleviate stress and anxiety as the gentle warmth and pressure create a deeply relaxing effect.\n\nAt Santharpana Ayurveda Ashram, our skilled therapists use only high-quality, natural ingredients free from harmful chemicals or additives. Each treatment is tailored to your specific needs, ensuring a luxurious and personalized experience.\n\nBook your Full Body Massage + Shirodhara + Steam Bath + Meditation package today and discover the ultimate way to pamper yourself. Treat your body and mind to this holistic journey of relaxation and rejuvenation.",
  },
];

export { servicesCard, type Services };
