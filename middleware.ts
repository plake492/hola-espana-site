import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set to true to redirect all pages to preview, false to show main site
const PREVIEW_MODE = process.env.NODE_ENV !== 'development';
const BYPASS_KEY = 'hola';

export function middleware(request: NextRequest) {
  if (!PREVIEW_MODE) {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  // Allow bypass with ?key=hola
  if (searchParams.get('key') === BYPASS_KEY) {
    return NextResponse.next();
  }

  // Don't redirect if already on preview page
  if (pathname === '/preview') {
    return NextResponse.next();
  }

  // Redirect all other pages to preview
  return NextResponse.redirect(new URL('/preview', request.url));
}

export const config = {
  // Match all paths except static files, api, studio, and public assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico|studio|api|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|mp4|webm|pdf|woff|woff2|ttf|otf)$).*)'],
};
