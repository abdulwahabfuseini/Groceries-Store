import { TestimonialProps } from "@/contexts/Types";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ name, email, message }: TestimonialProps) => {
  return (
    <div className="relative">
      <div className="flex items-start gap-2">
        <Image
          width={50}
          height={50}
          src="/SVG/man.png"
          alt="logo"
          className="object-contain rounded-full"
        />
        <div>
          <h1 className=" font-semibold ">{name}</h1>
          <p className="text-sm text-green-600">{email}</p>
        </div>
      </div>
      <p className="py-2">{message}</p>
      <FaQuoteRight className="absolute top-0 text-3xl text-green-600 right-3" />
    </div>
  );
};

export default TestimonialCard;
