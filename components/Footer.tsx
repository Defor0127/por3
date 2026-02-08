"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="footerLink" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        top of page
      </a>
      <p className="copyright">Copyright © creative : NOVA. All rights Reserved.</p>
      <a href="#" className="footerLink" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); }}>
        bottom of page
      </a>
    </footer>
  );
}
