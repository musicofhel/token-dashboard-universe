import { Twitter, MessageCircle, Send, Github, Rss } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <MessageCircle className="h-5 w-5" />, href: "#", label: "Discord" },
    { icon: <Send className="h-5 w-5" />, href: "#", label: "Telegram" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "Github" },
    { icon: <Rss className="h-5 w-5" />, href: "#", label: "Blog" },
  ];

  return (
    <div className="flex justify-center gap-4 py-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="p-2 text-gray-600 hover:text-primary transition-colors"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;