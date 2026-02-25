import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.next();
}

export const config = {
  // Match all paths except static files, api, studio, and public assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico|studio|api|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|mp4|webm|pdf|woff|woff2|ttf|otf)$).*)'],
};
