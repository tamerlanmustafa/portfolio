import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Tamerlan Mustafa</p>
    </footer>
  );
}

export default Footer;