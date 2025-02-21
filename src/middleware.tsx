import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

const Isprotected = createRouteMatcher(['/settings(.*)'])

export default clerkMiddleware((auth,req) => {
    if (Isprotected(req)) auth().protect();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};