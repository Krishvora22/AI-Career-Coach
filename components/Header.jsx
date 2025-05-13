import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


const Header = () => {
    return (
        <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto px-4 h-16 flex itms-center justify-between'>
                <Link href="/">
                    <Image className="h-12 py-1 w-auto object-contain" src="/logo.png" alt="Logo" width={50} height={50} />
                </Link>

                <div className='flex items-center space-x-2 md:space-x-4'>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button variant="outline" >
                                <LayoutDashboard className=" h-4 w-4" />
                                <span className="hidden md:block"> Industry Insights
                                </span>
                            </Button>
                        </Link>

                        <DropdownMenu>


                            <DropdownMenuTrigger asChild>
                                <Button asChild>
                                    <span className="flex items-center gap-2">
                                        <StarIcon className="h-4 w-4" />
                                        <span className="hidden md:block">Growth Tools</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href="/resume" className='flex items-center gap-2'>
                                        <FileText className=" h-4 w-4" />
                                        <span > Build Resume </span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/ai-cover-latter" className='flex items-center gap-2'>
                                        <PenBox className=" h-4 w-4" />
                                        <span > Cover Letter </span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/interview" className='flex items-center gap-2'>
                                        <GraduationCap className=" h-4 w-4" />
                                        <span > Interview Prep </span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline" > Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={
                                {
                                    elements: {
                                        avatarBox: "h-10 w-10",
                                        userButtonPopoverCard: "shadow-xl",
                                        userPreviewMainIdentifier: "hidden", 
                                    }
                                }
                            }
                            afterSignOutUrl='/'
                        />
                    </SignedIn>
                </div>
            </nav>

        </header>


    );
};

export default Header;