const motion = {
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
};

const TwitterIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-twitter"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.3-1.2 1.8-3.3 1.4-5.1-.3-1.6.8-3.2 2.4-3.6 1.6-.4 3.2.3 4.4 1.5 1.4-.2 2.7-.8 3.8-1.6.5 1.7-.1 3.5-1.5 4.7 1.3-.2 2.5-.8 3.5-1.4z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1.5-3.5c2.9-.3 6-1.4 6-6 0-1.7-.6-3.2-1.4-4.2.2-.6.7-2.1-.1-5-1.8 0-3.2 1-4 2.1-.8-.3-1.6-.5-2.5-.5-.9 0-1.7.2-2.5.5-.8-1.1-2.2-2.1-4-2.1-.8 2.9-.3 4.4-.1 5-1 .9-1.5 2.4-1.5 4.2 0 4.6 3 5.7 5.9 6-1 .8-1.3 1.9-1.3 3.1v4" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 8a6 6 0 0 0-6 6v7" />
    <path d="M10 16a6 6 0 0 0 6-6v7" />
    <line x1="8" y1="21" x2="8" y2="10" />
    <circle cx="8" cy="8" r="1" />
  </svg>
);

const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition duration-300 relative group text-sm"
  >
    {children}

    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const FooterSectionTitle = ({ children }) => (
  <h3 className="text-lg font-bold text-white mb-4 border-b border-indigo-400/50 pb-1">
    {children}
  </h3>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press Kit", href: "#press" },
        { name: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "All Apps", href: "#apps" },
        { name: "Trending", href: "#trending" },
        { name: "For Developers", href: "#dev" },
        { name: "Roadmap", href: "#roadmap" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "#contact" },
        { name: "Help Center", href: "#help" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: TwitterIcon, href: "#twitter" },
    { icon: GithubIcon, href: "#github" },
    { icon: LinkedinIcon, href: "#linkedin" },
    { icon: MailIcon, href: "#mail" },
  ];

  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8 border-t border-indigo-800 font-[Inter] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-extrabold flex items-center">
              <span className="text-white">Hero.</span>
              <span className="text-[#7E30E3]">io</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              We craft innovative apps designed to make everyday life simpler,
              smarter, and more exciting. Building the future, one app at a
              time.
            </p>

            <div className="mt-6">
              <p className="text-white font-semibold mb-2">
                Subscribe to our Newsletter
              </p>
              <div className="flex rounded-lg overflow-hidden shadow-xl relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-3 w-full text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7E30E3] transition-all duration-300 bg-white border border-gray-300 focus:border-[#7E30E3] focus:shadow-[0_0_15px_rgba(126,48,227,0.4)]"
                />
                <button className="bg-[#7E30E3] hover:bg-indigo-600 text-white p-3 font-medium transition-all duration-300 active:scale-[0.98] hover:shadow-[0_0_15px_rgba(126,48,227,0.6)]">
                  Join
                </button>
              </div>
            </div>
          </div>

          {navSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <FooterSectionTitle>{section.title}</FooterSectionTitle>
              <ul className="space-y-3 flex flex-col">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-8 border-t border-indigo-800/50"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} Hero.io, LLC. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7E30E3] transition duration-300"
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
