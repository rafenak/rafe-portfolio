import { profile } from './content.js';
import { GitHub, LinkedIn, XLogo } from '../components/Icons.jsx';

export const socials = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedIn },
  { label: 'GitHub', href: profile.github, Icon: GitHub },
  { label: 'X / Twitter', href: profile.twitter, Icon: XLogo },
];
