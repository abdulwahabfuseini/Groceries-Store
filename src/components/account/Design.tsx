import Image from "next/image";

const Design = () => {
  return (
    <div className="">
      <Image
        src="/images/baked.png"
        alt="organic"
        width={150}
        height={150}
        className="object-contain -top-14 -left-16 lg:-top-9 lg:-left-12 absolute"
        draggable={false}
      />
      <Image
        src="/images/cabbage.jpg"
        alt="organic"
        width={150}
        height={150}
        className="object-contain hidden sm:block  -bottom-14 -left-14 lg:-bottom-11 lg:-left-12 absolute"
        draggable={false}
      />
      <Image
        src="/images/strawberry.jpeg"
        alt="organic"
        width={150}
        height={150}
        className="object-contain -top-14 -right-14 lg:-top-9 lg:-right-12 absolute"
        draggable={false}
      />
      <Image
        src="/images/tomato.png"
        alt="organic"
        width={150}
        height={150}
        className="object-contain hidden sm:block -bottom-8 -right-11 lg:-bottom-4 lg:-right-12 absolute"
        draggable={false}
      />
    </div>
  );
};

export default Design;
