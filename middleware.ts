import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['tr', 'en'];
const defaultLocale = 'tr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, images, etc.
  if (
    pathname.includes('.') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return;
  }

  // Check if pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If the path is exactly /tr or /en, redirect to the default section (adhd)
    if (pathname === '/tr' || pathname === '/tr/') {
      return NextResponse.redirect(new URL('/tr/adhd', request.url));
    }
    if (pathname === '/en' || pathname === '/en/') {
      return NextResponse.redirect(new URL('/en/adhd', request.url));
    }
    return;
  }

  // Language negotiation
  const acceptLanguage = request.headers.get('accept-language');
  let locale = defaultLocale;
  if (acceptLanguage) {
    const preferredLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
    if (locales.includes(preferredLang)) {
      locale = preferredLang;
    }
  }

  // If path is root /, redirect to /[locale]/adhd
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}/adhd`, request.url));
  }

  // Otherwise, redirect to localized URL (e.g. /adhd -> /tr/adhd)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Match all request paths except api, static files, favicon, etc.
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.html).*)',
  ],
};
