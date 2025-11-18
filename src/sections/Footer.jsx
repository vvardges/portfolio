const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-3">
        <a className="social-icon" href="https://www.linkedin.com/in/vardges-vardanyan/" target="_blank" rel="noreferrer">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://wakcination.t.me" target="_blank" rel="noreferrer">
          <img src="/assets/telegram.svg" alt="telegram" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://www.instagram.com/vakooo" target="_blank" rel="noreferrer">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© {new Date().getFullYear()} Vardges Vardanyan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
