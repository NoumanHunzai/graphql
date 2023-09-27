import Image from "next/image";

interface AvatarProps {
  src: any;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <Image src={src} alt={alt} width={64} height={64} objectFit="cover" />
    </div>
  );
};

export default Avatar;
