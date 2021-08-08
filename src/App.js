import React, { useState } from "react";
import Header from "./components/03-Header";
import Nav from "./components/04-Nav";
import Website from "./components/01-Website";
import Footer from "./components/10-Footer";

function App() {
  const [pages] = useState([
    {
      name: "About"
    },
    { name: "Portfolio" },
    { name: "Contact" },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Website currentPage={currentPage}></Website>
      </main>
      <Footer />
    </div>
  );
}

export default App;