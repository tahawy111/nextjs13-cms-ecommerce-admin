"use client";
import { Suspense } from "react";
import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  image?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  const AvatarFallBack = (
    <>
      <Image fill src={"/images/placeholder-image.jpg"} alt="Avatar" />
    </>
  );

  return (
    <div className="relative">
      <div
        className="
        relative
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
        translate-y-1
        mx-1
        cursor-pointer
      "
      >
        <Suspense fallback={AvatarFallBack}>
          <Image
            fill
            src={image || "/images/placeholder-image.jpg"}
            alt="Avatar"
          />
        </Suspense>
      </div>
      {false && (
        <span
          className="
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
            translate-y-1
          "
        />
      )}
    </div>
  );
};

export default Avatar;
