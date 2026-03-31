import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import gradient1 from '@public/images/ns-img-493.png';
import Image from 'next/image';

interface FooterLeftGradientProps {
  className?: string;
}

const FooterLeftGradient = ({ className }: FooterLeftGradientProps) => {
  return (
    <RevealAnimation delay={0.4} duration={0.8} direction="left" offset={400}>
      <figure
        className={cn(
          'pointer-events-none absolute bottom-[-33%] left-[-83%] size-[728px] select-none min-[2559px]:!left-[-16%] md:bottom-[-60%] md:left-[-52%] md:size-[870px] lg:left-[-38%] xl:bottom-[-77%] xl:left-[-30%] 2xl:left-[-22%]',
          className,
        )}>
        <Image className="size-full object-bottom" src={gradient1} alt="Decorative gradient background" />
      </figure>
    </RevealAnimation>
  );
};

FooterLeftGradient.displayName = 'FooterLeftGradient';
export default FooterLeftGradient;
