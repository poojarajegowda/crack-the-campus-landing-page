import {GraduationCap} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-24">

      {/* CTA Section */}
      <Container>
        <div className="rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-14 text-center -translate-y-12 shadow-2xl">
          <h2 className="text-4xl font-bold">
            Ready to Launch Your Career?
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join thousands of students preparing for placements through
            coding practice, aptitude training, mock interviews, and
            industry-focused learning paths.
          </p>

          <Button
  variant="light"
  className="mt-8 group"
>
  🚀 Start Learning Today

  <ArrowRight
    size={18}
    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
  />
</Button>
        </div>
      </Container>

      <Container>
        <div className="grid gap-12 py-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="text-blue-500" />
              <h3 className="text-xl font-bold">
                CrackTheCampus
              </h3>
            </div>

            <p className="mt-4 text-slate-400 leading-7">
              From Campus to Career.
              Everything in One Place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li><a href="#features">Features</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#companies">Companies</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">
              Resources
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Practice Tests</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>support@crackthecampus.com</li>
              <li>+91 98765 43210</li>
              <li>Bengaluru, India</li>
            </ul>

            <div className="flex gap-5 mt-6">
  <FaGithub
    size={22}
    className="cursor-pointer transition hover:text-blue-500"
  />
  <FaLinkedin
    size={22}
    className="cursor-pointer transition hover:text-blue-500"
  />
  <FaTwitter
    size={22}
    className="cursor-pointer transition hover:text-blue-500"
  />
</div>
          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-slate-500">
          © 2026 CrackTheCampus. All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;