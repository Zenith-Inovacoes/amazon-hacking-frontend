'use client';

import { Button, Link } from '@/components/atoms';
import NextLink from 'next/link';
import Menu from '../Menu';
import LoginButton from '../Menu/Unlogged/LoginButton';
import HeaderLogic from './components/HeaderLogic';
import { usePathname } from 'next/navigation';
import { locales } from '@/services/utils/locale.utils';
import { useState } from 'react';
import { scrollTo } from '@/services/utils/scrollTo';
import { cn } from '@/services/utils/className.utils';
import { useSession } from 'next-auth/react';
import DesktopMenu from './components/DesktopMenu';

const Header = () => {
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>(
    locales.find((locale) => pathname?.includes(locale.locale))?.locale || 'en'
  );

  const { data } = useSession();

  return (
    <HeaderLogic>
      <div className="lg:hidden">
        <Menu
          email={data?.user?.email}
          image={data?.user?.image}
          name={data?.user?.name}
          data={data}
        />
      </div>

      <div className="hidden lg:flex w-fit h-fit items-center justify-between flex-1 max-w-[570px] mx-2 gap-2">
        <Link
          onClick={() => scrollTo('about')}
          className="text-base *:tracking-[0.192px]"
        >
          {locale === 'en' ? 'THE PROGRAM' : 'O PROGRAMA'}
        </Link>
        <Link
          onClick={() => scrollTo('editions')}
          className="text-base *:tracking-[0.192px]"
        >
          {locale === 'en' ? 'EDITIONS' : 'EDIÇÕES'}
        </Link>
        <Link
          onClick={() => scrollTo('winners')}
          className="text-base *:tracking-[0.192px]"
        >
          {locale === 'en' ? 'WINNERS' : 'VENCEDORES'}
        </Link>
        <Link
          onClick={() => scrollTo('partners')}
          className="text-base *:tracking-[0.192px]"
        >
          {locale === 'en' ? 'PARTNERS' : 'PATROCINADORES'}
        </Link>
      </div>

      <div
        className={cn(
          'hidden lg:flex w-full h-fit items-center justify-between mr-[62px] max-w-[min(24.88vw,293.6px)] relative',
          data && 'max-w-[215px] xl:max-w-[380px]'
        )}
      >
        <Button asChild variant="primary">
          <NextLink href="solutions">
            {locale === 'en' ? 'See Solutions' : 'Ver Soluções'}
          </NextLink>
        </Button>
        {!data ? (
          <LoginButton />
        ) : (
          <DesktopMenu
            name={data.user?.name}
            email={data.user?.email}
            image={data.user?.image}
          />
        )}
      </div>
    </HeaderLogic>
  );
};

export default Header;
