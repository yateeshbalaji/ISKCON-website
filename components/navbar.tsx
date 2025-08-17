'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import TempleTimeStatus from './temple-time-status';
import Image from 'next/image';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@/components/ui/menubar';
import TranslateIcon from './icons/translate-icon';
import IskconAsansolLogoIcon from './icons/iskcon-asansol-logo';

const Navbar = () => {
  return (
    <nav className='w-full sticky top-0 shadow-md bg-white/80 backdrop-blur-sm z-20 py-2'>
      <div className='container mx-auto md:px-auto flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <Link href='/'>
            <IskconAsansolLogoIcon className='w-12 h-12 text-red-600 block' />
          </Link>
        </div>

        <div className='flex gap-4'>
          <div className='hidden lg:block'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Iskcon</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='md:w-[200px]'>
                      <li>
                        <Link href='/iskcon/history' legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            History
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href='/iskcon/philosophy' legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Philosophy
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href='/iskcon/founder' legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Founder
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className=''>
                        <Link
                          href='/iskcon/vaishnava-calendar'
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Vaishnava Calendar
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href='/donation' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Donation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href='/activities' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Activities
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href='/festivals' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Festivals
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='https://members.iskconproject.com' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Members
                    </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className='hidden'>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <TranslateIcon />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>English</MenubarItem>
                  <MenubarItem>Bengali</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
