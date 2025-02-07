import p1 from "./portrait/p1.JPG";
import p2 from "./portrait/p2.JPG";
import p3 from "./portrait/p3.JPG";
import p4 from "./portrait/p4.JPG";
import p5 from "./portrait/p5.JPG";
import p6p from "./portrait/p6p.JPG";
import p7p from "./portrait/p7p.JPG";
import p8p from "./portrait/p8p.JPG";
import p9p from "./portrait/p9p.JPG";
import p10p from "./portrait/p10p.JPG";
import p11p from "./portrait/p11p.JPG";
import p12p from "./portrait/p12p.JPG";
import p13p from "./portrait/p13p.JPG";
import p14p from "./portrait/p14p.JPG";
import p18p from "./portrait/p18p.JPG";
import p19p from "./portrait/p19p.JPG";
import p20p from "./portrait/p20p.JPG";
import us1 from "./urban and street/us1.JPG";
import us2 from "./urban and street/us2.JPG";
import us3 from "./urban and street/us3.jpg";
import us4 from "./urban and street/us4.JPG";
import us5 from "./urban and street/us5.JPG";
import us6 from "./urban and street/us6.JPG";
import n1 from "./nature/n1.JPG";
import n2 from "./nature/n2.JPG";
import n3 from "./nature/n3.JPG";
import n4l from "./nature/n4l.JPG";
import n5l from "./nature/n5l.JPG";
import n7p from "./nature/n7p.JPG";
import n8p from "./nature/n8p.JPG";
import a1p from "./architecture/a1p.JPG";
import a2p from "./architecture/a2p.JPG";
import a3p from "./architecture/a3p.JPG";
import m1p from "./murals/m1p.JPG";
import m2p from "./murals/m2p.JPG";
import m3p from "./murals/m3p.JPG";
import m4p from "./murals/m4p.JPG";
import m5p from "./murals/m5p.JPG";
import m6p from "./murals/m6p.JPG";
import m7p from "./murals/m7p.JPG";
import m8p from "./murals/m8p.JPG";
import m9p from "./murals/m9p.JPG";
import l1p from "./lifestyle/l1p.JPG";
import l2p from "./lifestyle/l2p.JPG";
import l3p from "./lifestyle/l3p.JPG";
import l4p from "./lifestyle/l4p.JPG";
import l5p from "./lifestyle/l5p.JPG";
import l7p from "./lifestyle/l7p.JPG";

interface Image {
  url: string;
  orientation: "portrait" | "landscape";
}

interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: Image[];
}

interface GalleryData {
  categories: Category[];
}

export const galleryData: GalleryData = {
  categories: [
    {
      id: "Lifestyle",
      title: "Lifestyle",
      description: "Breathtaking views of nature's most beautiful landscapes",
      coverImage: l7p,
      images: [
        {
          url: l1p,
          orientation: "portrait",
        },
        {
          url: l2p,
          orientation: "portrait",
        },
        {
          url: l3p,
          orientation: "portrait",
        },
        {
          url: l4p,
          orientation: "portrait",
        },
        {
          url: l5p,
          orientation: "portrait",
        },
        {
          url: l7p,
          orientation: "portrait",
        },
      ],
    },
    {
      id: "portrait",
      title: "Portrait",
      description: "Capturing the essence of human expression",
      coverImage: p18p,
      images: [
        {
          url: p1,
          orientation: "portrait",
        },
        {
          url: p3,
          orientation: "portrait",
        },
        {
          url: p4,
          orientation: "portrait",
        },
        {
          url: p5,
          orientation: "portrait",
        },
        {
          url: p6p,
          orientation: "portrait",
        },
        {
          url: p7p,
          orientation: "portrait",
        },
        {
          url: p9p,
          orientation: "portrait",
        },
        {
          url: p10p,
          orientation: "portrait",
        },
        {
          url: p11p,
          orientation: "portrait",
        },
        {
          url: p12p,
          orientation: "portrait",
        },
      ],
    },
    {
      id: "nature",
      title: "Nature",
      description: "The beauty of flora and fauna in their natural habitat",
      coverImage: n2,
      images: [
        {
          url: n5l,
          orientation: "landscape",
        },
        {
          url: n2,
          orientation: "landscape",
        },
        {
          url: n3,
          orientation: "landscape",
        },
        {
          url: n4l,
          title: "Winter Forest",
          description: "Snow-covered pine forest",
          orientation: "portrait",
        },
        {
          url: n7p,
          orientation: "portrait",
        },
        {
          url: n8p,
          orientation: "portrait",
        },
      ],
    },
    {
      id: "urban",
      title: "Urban",
      description: "City life and architecture through the lens",
      coverImage: us1,
      images: [
        {
          url: us1,
          orientation: "landscape",
        },
        {
          url: us2,
          orientation: "landscape",
        },
        {
          url: us3,
          orientation: "landscape",
        },
        {
          url: us4,
          orientation: "portrait",
        },
        {
          url: us5,
          orientation: "portrait",
        },
        {
          url: us6,
          orientation: "portrait",
        },
      ],
    },
    {
      id: "Murals",
      title: "Murals",
      description: "",
      coverImage: m8p,
      images: [
        {
          url: m1p,
          orientation: "portrait",
        },
        {
          url: m2p,
          orientation: "portrait",
        },
        {
          url: m3p,
          orientation: "portrait",
        },
        {
          url: m6p,
          orientation: "portrait",
        },
        {
          url: m8p,
          orientation: "portrait",
        },
        {
          url: m9p,
          orientation: "portrait",
        },
      ],
    },
    {
      id: "architecture",
      title: "Architecture",
      description: "The art of building design and structure",
      coverImage: a1p,
      images: [
        {
          url: a1p,
          orientation: "portrait",
        },
        {
          url: a2p,
          orientation: "portrait",
        },
        {
          url: a3p,
          orientation: "portrait",
        },
      ],
    },
  ],
};
