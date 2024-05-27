'use client';

import { Session } from 'next-auth';
import Logged from './Logged';
import Unlogged from './Unlogged';

const Menu = () => {
  return <Unlogged />
};

export default Menu;
