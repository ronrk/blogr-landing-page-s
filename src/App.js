import React, { useState } from "react";
import Header from "./components/Header";
import BigSection from "./components/BigSection";
import SmallSection from "./components/SmallSection";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

import img1 from "./assets/images/illustration-editor-desktop.svg";
import img2 from "./assets/images/illustration-laptop-desktop.svg";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <BigSection
          title="Designed for the future"
          img={img1}
          data={[
            {
              title: "Introducing an extensible editor",
              text: `Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.`,
            },
            {
              title: "Robust content management",
              text: `Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`,
            },
          ]}
        />
        <SmallSection />
        <BigSection
          img={img2}
          data={[
            {
              title: "Free, open, simple",
              text: `Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.`,
            },
            {
              title: "Powerful tooling",
              text: `Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.`,
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
