import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Hey there, I&apos;m Austin</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Who am I?</h2>
        <p>
          I am a senior aerospace engineering student at Mississippi State University. In my time at the university, I have gained over a year of professional engineering work experience through the co-operative education program and have been a contributing member on the Mississippi State Formula SAE racing team for the last 4 years.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <p>
          I spent 4 rotations co-oping with Gulfstream Aerospace in Savannah, GA. While there, I gained wide reaching and invaluable experience in the design, production, and certification of new aircraft while working in the flight simulation, acoustics, applied aerodynamics, and flight testing departments.
        </p>
        <Link href="/work-experience" className="text-blue-600 hover:underline">
          Learn More
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Formula SAE</h2>
        <p>
          The Mississippi State Bulldog Motorsports racing team is a fully student lead organization that designs and fabricates a purpose built racecar to compete at the annual Formula SAE competition in Michigan.
        </p>
        <Link href="/fsae" className="text-blue-600 hover:underline">
          Learn More
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Senior Capstone Project</h2>
        <p>
          For my senior capstone project, we are exploring the aerodynamic effects of SLD Icing on high-lift devices in landing conditions. This project was inspired by the release of Appendix O to 14 CFR 25 which outlines SLD icing conditions that new transport category aircraft must certify to. For our project, we are simulating a transport category aircraft accreting SLD ice while maintaining a holding pattern before deploying its high-lift devices and coming in for a landing.
        </p>
        <a href="https://sites.google.com/view/sld-icing-msu/home" className="text-blue-600 hover:underline">
          Learn More
        </a>
      </section>
    </div>
  );
}
