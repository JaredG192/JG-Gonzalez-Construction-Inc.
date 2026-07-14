import { company } from '../data/company';

function Footer() {
  return <footer>© {new Date().getFullYear()} {company.name} All rights reserved.</footer>;
}

export default Footer;