import { Linkedin, Twitter, Mail } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvhMAiHV6y1HVvgzw73xPtoTvsg2j-TfoNYF3A3WEVgc1xqH0W9GA4NUBucc9x9t-wDU_dRe8a2Z7nXAU1X1wkv56LxKRousf-Z1lG2oRKIbmMC9JIbTKhzni6x6DTXGlDGaJkTXcLKrxdjXPak-mxntLd5CXtzDNDpqnWari8cqFZnNYGAqaovwUa5ZQhfYnVRQJK8zjaTcZUEWrhVKnNZnlZ6yzo5ckrTvwC5kfxeUfA1WoDRWpUp8-nvLzdMdibFIhak-PNlA",
      socials: ["linkedin", "twitter", "mail"],
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyUswkWyGu-5NXQMzJiP5v8IfMuLqKnjY-LDsMM4BCRlQB__Z5zosWmb4UA2SZcC47fk3HErMzg1TeBHiP1O7TZqPYchGAcUmFL0Dvm-m1mdNv2avIzp6OekT3Ql_VnR5bWEHaFEDFn0i0nIa7LEFXv6LGGcmhhqt_tXca2KOkcMy9SkT9PCNU5KoJF5nUOrlT4JrStNFPQux8aRVyMQzN_Qfd0gi7VwOBGvvGv-rgLNkoMD9nhAJZxbYn7Zx6ritqiKiPxaUOnw",
      socials: ["linkedin", "twitter"],
    },
    {
      name: "Marcus Thompson",
      role: "Operations Manager",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE-XJ5IcQYtdxUowzdr2Aw-H1GGz8ZhC7_JzdEdIYVyxMhK44YqLrs3q_XdhaJGIB46DPXvuHANFbPJbTiI6SCoSFppMobDojqtFoKmNVN_h4vMLpUzeDl3wjS3lM60INjRHLF5FSmF-YYinJuWxGScyosei9w6xwt8VSnFt_J-P8UNKf-29Ot3QdtD1PZNHiglMdWe9uT2j3doukIw_H5pUrzPKOBoU3YuwJwU-LWOViU6sNCqNwzlti8wItsDnOUYRFqxUESTQ",
      socials: ["linkedin", "mail"],
    },
    {
      name: "Jessica Lane",
      role: "Customer Experience",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtOpm5nZcMlQ1jaGh87kGSK0g_vLg_u2e1er_uMWOpuhlPZvmuhZxiprXWdM4P90mWVP_iGXtE56YVVl7DL5pb9Q3kGbTaELayR3Hmw2UHQxSbr9ShWzEcLIxfAo8JBBiUnOV3otQLuipLS8Ahq6vtKCjH2ytgSC5gBQnMw-I4VCglzrtkHvscpi-1YplmBKjxl3U6psI40e-k4AdLyw-GVxsx13SQGjMsCy6bV_FBYAr24wpiP-hhfaVuav7222srU8OGP2dWCw",
      socials: ["linkedin", "twitter", "mail"],
    },
  ];

  const getSocialIcon = (type) => {
    switch (type) {
      case "linkedin":
        return <Linkedin size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "mail":
        return <Mail size={18} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-purple-100 rounded-full opacity-40 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-slate-900">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  {member.socials.map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-white p-3 rounded-full bg-black/30 hover:bg-indigo-600 transition-colors"
                    >
                      {getSocialIcon(s)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h4 className="font-bold text-lg mb-1 text-slate-900">
                  {member.name}
                </h4>
                <p className="text-sm text-slate-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
