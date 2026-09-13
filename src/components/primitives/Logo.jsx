import Link from "next/link";
import Image from "next/image";

/**
 * The brand signature.
 *
 * Two colourways exist as separate files rather than one `currentColor` file,
 * because an <img> cannot inherit colour from the page. `variant` picks the
 * file; `height` is passed through the --logo-h custom property so the header
 * can shrink it on scroll without a second component.
 *
 * Approved artwork only (brand guidelines, p.3–4). Never recolour it in CSS.
 */
const SOURCES = {
  navy: "/brand/logo-navy.svg",
  white: "/brand/logo-white.svg",
  colour: "/brand/logo-color.svg",
};

export default function Logo({ variant = "navy", height, href = "/", className = "" }) {
  const style = height ? { "--logo-h": height } : undefined;

  return (
    <Link className={`logo ${className}`.trim()} href={href} style={style} aria-label={`Caspian Sea Line — home`}>
      <Image
        className="logo__mark"
        src={SOURCES[variant]}
        alt="Caspian Sea Line"
        width={296}
        height={103}
        priority
      />
    </Link>
  );
}
