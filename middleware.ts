import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  console.log('middleware', request.nextUrl);

  const redirects = ['/visas', '/tax'];
  if (process.env.VERCEL_ENV === 'production' && redirects.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except static files, api, studio, and public assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico|studio|api|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|mp4|webm|pdf|woff|woff2|ttf|otf)$).*)'],
};
