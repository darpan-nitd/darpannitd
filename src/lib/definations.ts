export type MemberInfo = {
  id: number;
  name: string;
  post: string;
  pic_url: string;
  pass_year: number;
  facebook_id: string;
  instagram_id: string;
  linkedin_id: string;
  x_id: string;
};

export type EventImages = {
  id: number;
  is_active: boolean;
  is_poster: boolean;
  event_id: string;
  year: number;
  url: string;
};

export const EventIDtoName: { [key: string]: { [key: string]: string } } = {
  1: {
    en: "Jhankar",
    hi: "झंकार",
  },
  2: {
    en: "Goonj",
    hi: "गूंज",
  },
  3: {
    en: "Chai Pe Charcha",
    hi: "चाय पे चर्चा",
  },
  4: {
    en: "Prahelika",
    hi: "प्रहेलिका",
  },
  5: {
    en: "Arz Kiya Hai",
    hi: "अर्ज किया है",
  },
  6: {
    en: "Independence Day",
    hi: "स्वतंत्रता दिवस",
  },
};
