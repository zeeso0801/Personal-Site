export default function FSAE() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Formula SAE</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">My Role</h2>
        <p>
          As the Chassis Section Lead for the &apos;24-25 season, I am in charge of designing and building the tubular space-frame chassis that every other team section mounts their components to. In previous years, I was a contributing member to the Powertrain section in charge of engine development.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Chassis Design</h2>
        <p>
          The main driving factors in the design of an FSAE chassis are rules requirements, stiffness, and weight. Using these constraints, I designed a minimum viable product that met stringent safety requirements and iterated the design with other sections to increase stiffness and reduce weight by optimizing tube layout for more efficient component mounting.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Performance Muffler</h2>
        <p>
          To meet strict noise limits without sacrificing performance, I designed a custom titanium muffler that provides very little restriction to exhaust flow while meeting competition requirements. The resonator placement also aids exhaust scavenging for improved engine output.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Engine Vibration Dampening</h2>
        <p>
          Our single-cylinder engine imparts excess vibrations into the chassis. I designed custom rubber dampers for the engine mounts to reduce driver fatigue and prevent vibrational failures of other components.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Engine Intake Optimization</h2>
        <p>
          FSAE rules require a 20&nbsp;mm intake restrictor which severely limits power. By optimizing restrictor geometry, plenum volume, and designing custom intake runners with billet bell mouths, as well as a future ram air intake, we have recovered the lost performance and even surpassed the stock configuration.
        </p>
      </section>
    </div>
  );
}
