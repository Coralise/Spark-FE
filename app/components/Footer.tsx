import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="p-4 border-t flex flex-col h-[300px] mt-12 max-sm:gap-8">
            <section className="flex-1 flex gap-4 max-sm:flex-col">
                <div className="flex-1">
                    <h2 className="text-lg font-bold">About Us</h2>
                    <p className="text-sm text-neutral-500 mt-4">
                        We are a team dedicated to providing the best service possible. Our mission is to help you achieve your goals with our innovative solutions.
                    </p>
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold">Contact Us</h2>
                    <div className="flex gap-2 my-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                            <FaTwitter />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                            <RiInstagramFill />
                        </a>
                    </div>
                    <ul>
                        <li className="text-sm text-neutral-500">Email: contact@example.com</li>
                        <li className="text-sm text-neutral-500">Phone: +1 (123) 456-7890</li>
                    </ul>
                </div>
            </section>
            <section className="flex justify-between items-center w-full">
                <div className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Name
                </div>
                <div className="flex gap-4">
                    <Link href="/privacy" className="text-sm text-neutral-500">Privacy Policy</Link>
                    <Link href="/terms" className="text-sm text-neutral-500">Terms of Service</Link>
                </div>
            </section>
        </footer>
    );
}