'use client';

import { Session } from 'next-auth';
import Logged from './Logged';
import Unlogged from './Unlogged';

const Menu = ({
  name,
  email,
  image,
  data,
}: {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  data: Session | null;
}) => {
  if (!data) return <Unlogged />;

  return <Logged name={name} email={email} image={image} />;
};

export default Menu;
