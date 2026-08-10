export interface ProjectItem {
  id: string;
  title: { en: string; vi: string };
  category: { en: string; vi: string };
  description: { en: string; vi: string };
  image: string;
  url?: string;
  isVideo?: boolean;
  tags: string[];
}

export interface SkillGroup {
  title: { en: string; vi: string };
  iconName: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: { en: string; vi: string };
  period: string;
  location: { en: string; vi: string };
  description: { en: string[]; vi: string[] };
  tags: string[];
  image?: string;
  gallery?: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ngô Minh Anh",
    displayName: "Minh Anh Ngo",
    nickname: "MiAn",
    title: {
      en: "Marketing Executive & Digital Content Specialist",
      vi: "Chuyên Viên Marketing & Sáng Tạo Nội Dung Digital"
    },
    tagline: {
      en: "Accelerating brand growth through performance marketing, Shopify e-commerce setups, SEO content strategy, and creative media production.",
      vi: "Thúc đẩy tăng trưởng thương hiệu qua E-Commerce Marketing, tối ưu hóa Meta Ads, nội dung chuẩn SEO và truyền thông sáng tạo."
    },
    email: "mianngo.workspace@gmail.com",
    phone: "0824 585838",
    cvPath: "./cv/MinhAnhNgo_Resume.pdf",
    location: {
      en: "Thu Duc City, Ho Chi Minh City, Vietnam",
      vi: "TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam"
    },
    avatar: "./images/totnghiep.jpg",
    stats: [
      { label: { en: "Years Experience", vi: "Năm Kinh Nghiệm" }, value: "3+" },
      { label: { en: "Thesis Defense GPA", vi: "Điểm Khóa Luận" }, value: "4.0 / 4.0" },
      { label: { en: "IELTS Certification", vi: "Chứng Chỉ IELTS" }, value: "6.5" },
      { label: { en: "Projects Completed", vi: "Dự Án Hoàn Thành" }, value: "15+" }
    ],
    social: {
      email: "mailto:mianngo.workspace@gmail.com",
      phone: "tel:0824585838",
      facebook: "https://www.facebook.com/share/r/1EyTTnFww6/?mibextid=wwXIfr",
      linkedin: "#",
      github: "#"
    }
  },
  bio: {
    en: "I am an empathetic, fast-adapting marketer passionate about digital strategy and business impact. Combining digital campaign optimization, Meta Pixel tracking, Shopify storefront customization, SEO copywriting, and engaging video media creation, I focus on driving real ROI and brand engagement.",
    vi: "Là người biết lắng nghe, đồng cảm, nhanh chóng thích nghi với các tình huống mới, không ngại thử thách và nhiệt tình trong việc giải quyết vấn đề. Với tinh thần ham học hỏi mạnh mẽ, tôi không ngừng tìm cách nâng cao các kỹ năng và kiến thức của mình, luôn sẵn sàng đón nhận những thách thức mới để phát triển bản thân và đóng góp giá trị cho tổ chức."
  },
  goals: {
    shortTerm: {
      title: { en: "Short-Term Goal", vi: "Mục Tiêu Ngắn Hạn" },
      desc: {
        en: "Apply marketing & e-commerce theories into real-world business scenarios, optimizing Meta ads & Shopify conversion flows to transition into a core full-time contributor.",
        vi: "Tìm kiếm cơ hội việc làm để áp dụng kiến thức lý thuyết vào bối cảnh kinh doanh thực tế. Mục tiêu là tận dụng kinh nghiệm này để có thể chuyển tiếp thành nhân viên chính thức trong công ty."
      }
    },
    longTerm: {
      title: { en: "Long-Term Goal", vi: "Mục Tiêu Dài Hạn" },
      desc: {
        en: "Consistently maintain high performance and gain hands-on expertise across performance marketing & media management, advancing to Senior Marketing Leadership within 3-5 years.",
        vi: "Liên tục duy trì hiệu suất làm việc cao và tích lũy kinh nghiệm thực tế, với nguyện vọng thăng tiến lên vị trí cao hơn trong vòng 3-5 năm tới."
      }
    }
  },
  skills: [
    {
      title: { en: "E-Commerce & Digital Marketing", vi: "Marketing E-Commerce & Digital" },
      iconName: "ShoppingBag",
      skills: [
        { name: "Shopify Web Customization", highlight: true },
        { name: "Meta Pixel & Business Setup", highlight: true },
        { name: "Email Marketing Automations", highlight: true },
        { name: "Campaign Metrics & ROI Scaling" },
        { name: "AI Landing Page Design", highlight: true }
      ]
    },
    {
      title: { en: "SEO & Content Strategy", vi: "Nội Dung SEO & Chiến Lược" },
      iconName: "FileText",
      skills: [
        { name: "SEO Keyword Strategy & Articles", highlight: true },
        { name: "Real Estate Project Analysis", highlight: true },
        { name: "Social Copywriting & Ad Scripts" },
        { name: "Content Planning & Strategy" }
      ]
    },
    {
      title: { en: "Media & Creative Content", vi: "Truyền Thông & Sáng Tạo Nội Dung" },
      iconName: "Video",
      skills: [
        { name: "Social Reel Scripting & Acting", highlight: true },
        { name: "Video Jockey (VJ) Hosting Task" },
        { name: "CapCut Video Editing", highlight: true },
        { name: "Canva Design & Graphic Assets" }
      ]
    },
    {
      title: { en: "Event Operations & Client Relations", vi: "Quản Lý Sự Kiện & Đối Tác" },
      iconName: "Calendar",
      skills: [
        { name: "Corporate MICE Event Planning", highlight: true },
        { name: "Google Developers Event Support", highlight: true },
        { name: "L'Oréal E-Commerce Tour Management" },
        { name: "Kick-off Event Coordination" }
      ]
    },
    {
      title: { en: "Languages & Soft Skills", vi: "Ngoại Ngữ & Kỹ Năng Mềm" },
      iconName: "Sparkles",
      skills: [
        { name: "IELTS 6.5 (English Proficiency)", highlight: true },
        { name: "Communication & Adaptability", highlight: true },
        { name: "Teamwork & Collaboration" },
        { name: "Creative Problem Solving" }
      ]
    }
  ] as SkillGroup[],
  experiences: [
    {
      id: "exp-psa",
      company: "PSA",
      role: {
        en: "Marketing Executive",
        vi: "Chuyên Viên Marketing"
      },
      period: "10/2025 - Present",
      location: {
        en: "Ho Chi Minh City",
        vi: "TP. Hồ Chí Minh"
      },
      description: {
        en: [
          "Researched, planned, and executed A/B tested content email marketing campaigns to optimize customer retention.",
          "Configured automated email flows, monitored campaign metrics, scaled ad budget allocations, and optimized overall marketing ROI.",
          "Set up Meta Business accounts, integrated Meta Pixel conversion tracking, and managed Meta E-commerce catalogs.",
          "Customized Shopify storefront layouts (Homepage & Product Pages) and designed high-converting AI-driven landing pages."
        ],
        vi: [
          "Nghiên cứu, lập kế hoạch và thử nghiệm các chiến dịch Email Marketing tăng tỷ lệ chuyển đổi.",
          "Theo dõi chỉ số chiến dịch, thiết lập Email Flow tự động, mở rộng ngân sách quảng cáo (scale ad) và tối ưu ROI.",
          "Cấu hình tài khoản Meta Business, cài đặt Meta Pixel theo dõi hành vi người dùng và chuẩn hóa danh mục E-commerce.",
          "Tùy chỉnh giao diện cửa hàng Shopify (Homepage, Product Page) và thiết kế Landing Page sản phẩm ứng dụng AI."
        ]
      },
      tags: ["Shopify Custom", "Meta Pixel", "Email Flows", "Meta Business", "AI Landing Page", "Ad Scaling"],
      image: "./images/meta_ads_email.png",
      gallery: ["./images/meta_ads_email.png", "./images/shopify_ai_store.png", "./images/googledeveloper2.jpg", "./images/totnghiep.jpg"]
    },
    {
      id: "exp-tpi",
      company: "TPI LAND",
      role: {
        en: "Content Creator",
        vi: "Sáng Tạo Nội Dung"
      },
      period: "08/2024 - 04/2025",
      location: {
        en: "Ho Chi Minh City",
        vi: "TP. Hồ Chí Minh"
      },
      description: {
        en: [
          "Authored and published high-ranking SEO articles for major real estate developments (Ixora 2 Ho Tram, Lancaster Legacy).",
          "Produced multi-channel video content: scripted concept plans, designed graphics, and acted as Video Jockey (VJ) for promotional ad reels.",
          "Created diverse advertising print/digital assets and organized various real estate project kick-off events."
        ],
        vi: [
          "Phát triển và xuất bản các bài viết chuẩn SEO xếp hạng cao trên tìm kiếm (Dự án Ixora 2 Hồ Tràm, Tập đoàn Trung Thủy - Lancaster Legacy).",
          "Sản xuất video truyền thông: lập kế hoạch nội dung, thiết kế đồ họa và đảm nhiệm vai trò VJ cho các video quảng cáo Reels.",
          "Tạo ra nhiều ấn phẩm truyền thông quảng cáo và đồng tổ chức các sự kiện Kick-off bất động sản lớn."
        ]
      },
      tags: ["SEO Articles", "Content Strategy", "Reels Video", "VJ Task", "Real Estate Marketing", "Event Logistics"],
      image: "./images/ixora_resort.png",
      gallery: ["./images/ixora_resort.png", "./images/lancaster_legacy.png", "./images/vj_reels_production.png", "./images/totnghiep.jpg"]
    },
    {
      id: "exp-alexiana",
      company: "Alexiana Travel",
      role: {
        en: "Sales Executive & Operator",
        vi: "Nhân Viên Kinh Doanh & Điều Hành"
      },
      period: "04/2022 - 01/2023",
      location: {
        en: "Ho Chi Minh City",
        vi: "TP. Hồ Chí Minh"
      },
      description: {
        en: [
          "Managed client interactions, consultations, reservations, and customer support for individual and group travel clients.",
          "Managed official communication and correspondence with international travel company partners.",
          "Supported planning and operational logistics for corporate MICE events, including Google Developers MICE event.",
          "Assisted in designing and managing customized tours for L'Oréal's E-commerce Department."
        ],
        vi: [
          "Quản lý tương tác, tư vấn dịch vụ và đặt chỗ cho khách hàng cá nhân & doanh nghiệp đồng thời hỗ trợ CSKH.",
          "Quản lý giao tiếp, đàm phán hợp đồng và thư từ với các đối tác thương mại của công ty.",
          "Hỗ trợ lập kế hoạch và điều hành sản xuất sự kiện MICE cho Google Developers.",
          "Thiết kế và quản lý vận hành tour riêng cho Bộ phận Thương mại điện tử của L'Oréal."
        ]
      },
      tags: ["Google Developers MICE", "L'Oréal E-Commerce", "Event Operations", "Partner Relations", "Client Consulting"],
      image: "./images/googledeveloper3.jpg",
      gallery: ["./images/googledeveloper3.jpg", "./images/googledeveloper.jpg", "./images/googledeveloper2.jpg", "./images/totnghiep.jpg"]
    }
  ] as ExperienceItem[],
  projects: [
    {
      id: "proj-1",
      title: {
        en: "Ixora 2 Ho Tram by Fusion — In-Depth SEO Analysis",
        vi: "Phân Tích Dự Án Ixora 2 Hồ Tràm By Fusion — Bài Viết Chuẩn SEO"
      },
      category: { en: "SEO Article & Real Estate", vi: "Bài Viết SEO Bất Động Sản" },
      description: {
        en: "In-depth analytical article evaluating investment potential, developer credentials, and luxury resort highlights for Ixora 2 Ho Tram by Fusion.",
        vi: "Bài phân tích chuyên sâu chuẩn SEO đánh giá tiềm năng đầu tư, uy tín nhà phát triển và điểm sáng nghỉ dưỡng dự án Ixora 2 Hồ Tràm."
      },
      image: "./images/ixora_resort.png",
      url: "https://tpiland.com/phan-tich-du-an-ixora-2-ho-tram-by-fusion/",
      tags: ["SEO Content", "TPI Land", "Real Estate", "Analytical Writing"]
    },
    {
      id: "proj-2",
      title: {
        en: "Trung Thuy Group — Lancaster Legacy Developer Profile",
        vi: "Tập Đoàn Trung Thủy — Chủ Đầu Tư Dự Án Lancaster Legacy"
      },
      category: { en: "SEO Article & Corporate Profile", vi: "Bài Viết SEO Doanh Nghiệp" },
      description: {
        en: "Comprehensive SEO article highlighting Trung Thuy Group's heritage, financial strength, and the flagship Lancaster Legacy complex.",
        vi: "Bài tổng hợp chuẩn SEO về lịch sử phát triển, năng lực tài chính của Tập đoàn Trung Thủy và dự án phức hợp căn hộ hạng sang Lancaster Legacy."
      },
      image: "./images/lancaster_legacy.png",
      url: "https://tpiland.com/tap-doan-trung-thuy-chu-dau-tu-du-an-lancaster-legacy/",
      tags: ["SEO Keyword #1", "Lancaster Legacy", "TPI Land", "Brand Profile"]
    },
    {
      id: "proj-3",
      title: {
        en: "Facebook Reel Ad — Property Tour & Media Campaign #1",
        vi: "Video Reel Quảng Cáo Facebook — Trải Nghiệm Dự Án #1"
      },
      category: { en: "Reels & Video Media", vi: "Video Reel Sáng Tạo" },
      description: {
        en: "Engaging social video reel starring MiAn as VJ, showcasing property highlights with energetic storytelling and high engagement.",
        vi: "Video Reel quảng cáo ngắn đóng vai trò VJ trực tiếp trải nghiệm và truyền tải thông điệp dự án ấn tượng trên Facebook."
      },
      image: "./images/vj_reels_production.png",
      url: "https://www.facebook.com/share/r/1EyTTnFww6/?mibextid=wwXIfr",
      isVideo: true,
      tags: ["VJ Scripting", "Facebook Reel", "CapCut", "Video Ad"]
    },
    {
      id: "proj-4",
      title: {
        en: "Facebook Reel Ad — Property Showcase Campaign #2",
        vi: "Video Reel Quảng Cáo Facebook — Trải Nghiệm Dự Án #2"
      },
      category: { en: "Reels & Short Video", vi: "Video Reel Sáng Tạo" },
      description: {
        en: "High-performing viral Facebook Reel created for TPI Land, capturing viewers with dynamic hosting and clean visuals.",
        vi: "Video Reel thu hút hàng ngàn lượt xem trên Facebook với phong cách VJ trẻ trung, tự nhiên và âm thanh sắc nét."
      },
      image: "./images/totnghiep.jpg",
      url: "https://www.facebook.com/share/r/1DGVrU5v1R/?mibextid=wwXIfr",
      isVideo: true,
      tags: ["Video Content", "Social Media", "CapCut", "Reels"]
    },
    {
      id: "proj-5",
      title: {
        en: "Google Developers Corporate MICE Event",
        vi: "Sự Kiện MICE Doanh Nghiệp Google Developers"
      },
      category: { en: "Event Operations", vi: "Tổ Chức Sự Kiện" },
      description: {
        en: "Co-planned and executed corporate MICE event logistics and team building experience for Google Developers & partners.",
        vi: "Hỗ trợ lập kế hoạch và điều hành sản xuất sự kiện MICE cấp cao cùng hoạt động teambuilding cho Google Developers."
      },
      image: "./images/googledeveloper.jpg",
      tags: ["Google Developers", "MICE Event", "Alexiana Travel", "Logistics"]
    },
    {
      id: "proj-6",
      title: {
        en: "Shopify Customization & AI Landing Page (PSA)",
        vi: "Tùy Biến Shopify & Landing Page Sản Phẩm Bằng AI"
      },
      category: { en: "E-Commerce & Digital", vi: "E-Commerce & Digital" },
      description: {
        en: "Customized Shopify store layouts, set up Meta Pixel tracking, and designed AI product showcase pages to maximize conversion rate.",
        vi: "Thiết kế giao diện tùy biến Shopify, tích hợp mã Meta Pixel và sử dụng AI sáng tạo Landing Page giới thiệu sản phẩm tối ưu chuyển đổi."
      },
      image: "./images/shopify_ai_store.png",
      tags: ["Shopify", "Meta Pixel", "AI Landing Page", "Conversion Rate"]
    }
  ] as ProjectItem[],
  education: {
    university: {
      en: "Hoa Sen University",
      vi: "Đại học Hoa Sen"
    },
    period: "2021 - 2025",
    major: {
      en: "Bachelor of Marketing",
      vi: "Cử Nhân Marketing"
    },
    thesis: {
      en: "Graduation Thesis defended in English — Perfect Score 4.0 / 4.0",
      vi: "Bảo vệ khóa luận tốt nghiệp bằng Tiếng Anh — Đạt điểm tuyệt đối 4.0 / 4.0"
    },
    ielts: {
      score: "IELTS 6.5",
      desc: {
        en: "Certified English proficiency for professional international communication and marketing work.",
        vi: "Chứng chỉ tiếng Anh giao tiếp và làm việc chuyên nghiệp."
      }
    }
  }
};

