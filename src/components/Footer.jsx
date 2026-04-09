export default function Footer() {
  const currentYear = new Date().getFullYear();

  const ecosystem = [
    { name: "Windy Word", url: "https://windyword.com", desc: "Voice → Text" },
    { name: "Windy Clone", url: "https://windyclone.com", desc: "Digital Twin" },
    { name: "Windy Chat", url: "https://windychat.com", desc: "Encrypted Chat" },
    { name: "Windy Traveler", url: "https://windytraveler.com", desc: "Travel Companion" },
    { name: "Windy Translate", url: "https://windytranslate.com", desc: "Translation Engine" },
    { name: "Windy Mail", url: "https://windymail.ai", desc: "Email for AI" },
    { name: "Windy Fly", url: "https://windyfly.ai", desc: "AI Agent" },
    { name: "Windy Code", url: "https://windycode.ai", desc: "Code Editor" },
    { name: "Windy Cloud", url: "https://windycloud.com", desc: "Storage & Sync" },
  ];

  const product = [
    { name: "Features", url: "#features" },
    { name: "How It Works", url: "#how-it-works" },
    { name: "Pricing", url: "#pricing" },
    { name: "Registry", url: "https://eternitas.ai/registry" },
    { name: "Documentation", url: "https://eternitas.ai/docs" },
    { name: "Developer Tools", url: "https://eternitas.ai/docs" },
  ];

  const legal = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
    { name: "Security", url: "/security" },
  ];

  return (
    <footer className="bg-windy-darker border-t border-windy-silver/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">🛡️</span>
              <span className="text-2xl font-bold gradient-text">Eternitas</span>
            </div>
            <p className="text-gray-500 text-sm mb-2 leading-relaxed">
              The independent passport office for AI agents. Verified identity, trust scores, and accountability for the AI-powered internet.
            </p>
            <p className="text-gray-600 text-xs mb-5">Independent foundation. Founding recognizer: Windy.</p>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Ecosystem</h3>
            <ul className="space-y-2.5">
              {ecosystem.map((app, index) => (
                <li key={index}>
                  <a
                    href={app.url}
                    className="group flex items-center gap-2 text-gray-500 hover:text-windy-silver transition-colors duration-200 text-sm"
                  >
                    <span>{app.name}</span>
                    <span className="text-gray-700 text-xs">— {app.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-2.5">
              {product.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-gray-500 hover:text-windy-silver transition-colors duration-200 text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-gray-500 hover:text-windy-silver transition-colors duration-200 text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-windy-silver/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Eternitas Foundation. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            The permanent record of intelligent existence — biological and digital.
          </p>
        </div>
      </div>
    </footer>
  );
}
