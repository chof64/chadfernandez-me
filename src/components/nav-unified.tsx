'use client';

import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '~/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { cn } from '~/lib/utils';

export default function NavUnified({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  const items = [
    { href: '/', label: 'Home' },
    { href: '/engagements', label: 'Engagements' },
    { href: '/projects', label: 'Projects' },
    { href: '/post', label: 'All Posts' },
  ] as const;

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'extend-touch-target !p-0 h-8 touch-manipulation items-center justify-start gap-2.5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent',
            className
          )}
          variant="ghost"
        >
          <div className="relative flex h-8 w-4 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  'absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100',
                  open ? '-rotate-45 top-[0.4rem]' : 'top-1'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100',
                  open ? 'top-[0.4rem] rotate-45' : 'top-2.5'
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
          <span className="flex h-8 items-center font-medium text-lg leading-none">
            Menu
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        alignOffset={-16}
        className="no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur duration-100"
        side="bottom"
        sideOffset={14}
      >
        <div className="container flex max-w-xl flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="font-medium text-muted-foreground text-sm">
              Menu
            </div>
            <div className="flex flex-col">
              {items.map((item, index) => (
                <MobileLink
                  href={item.href}
                  key={`${item.href}-${index}`}
                  onOpenChange={setOpen}
                >
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  return (
    <Link
      className={cn(
        'border-b pt-3 font-medium text-2xl transition-colors delay-75 duration-150 ease-in-out hover:border-foreground/60 hover:bg-muted/50',
        className
      )}
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
