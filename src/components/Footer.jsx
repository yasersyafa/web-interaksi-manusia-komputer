const Footer = () => {
    return (
      <footer className="bg-[#464447] text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bagian 1 */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              We are a team of passionate developers, creating innovative solutions and sharing knowledge with the community.
            </p>
          </div>
  
          {/* Bagian 2 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#about" className="text-sm hover:underline">About</a></li>
              <li><a href="#services" className="text-sm hover:underline">Products</a></li>
              <li><a href="#contact" className="text-sm hover:underline">Contacts</a></li>
            </ul>
          </div>
  
          {/* Bagian 3 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" className="hover:underline">Twitter</a>
              <a href="https://instagram.com/yasersyafaa" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
  
        <div className="mt-8 text-center text-sm">
          &copy; 2024 yasersyafaa. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  