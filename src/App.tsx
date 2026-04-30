import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { ShieldAlert, Compass, ChevronDown, Wrench, Menu, X, ArrowRight, Activity, Map, Disc } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-brand-dark min-h-screen text-[#E0E0E0] selection:bg-brand-orange selection:text-brand-dark pb-32 border-x-4 border-b-4 border-brand-border-dark relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(var(--color-brand-border) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Hero scrollYProgress={scrollYProgress} />
      <Foundation />
      <GearLab />
      <SurvivalGuide />
      <Journal />
      <Footer />
    </div>
  );
}

function Navigation({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 bg-brand-gray border-b border-brand-border z-50 py-4 border-r-4 border-l-4 border-t-4 border-brand-border-dark">
        <div className="font-display font-black text-xl tracking-widest uppercase flex items-center gap-4 text-white italic">
          <div className="w-10 h-10 bg-brand-orange flex items-center justify-center font-bold text-black skew-x-[-12deg]">
            <Activity className="w-5 h-5 text-black" />
          </div>
          <div>
            <span>Shuffle</span>
            <p className="text-[10px] font-mono text-brand-cyan opacity-70 not-italic tracking-normal">ASSET ID: URBAN-EXPL-702</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-8 text-[11px] font-mono tracking-tighter text-brand-light-gray">
          <div><span className="block opacity-40">LATITUDE</span>40.7128° N</div>
          <div><span className="block opacity-40">LONGITUDE</span>74.0060° W</div>
          <div><span className="block opacity-40">ELEVATION</span>12M</div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-orange transition-colors lg:ml-8">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center font-display text-4xl uppercase font-bold tracking-tighter">
              {['Foundation', 'Gear Lab', 'Survival Guide', 'Journal'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange transition-colors block py-2" onClick={() => setIsOpen(false)}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 border-b border-brand-border bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/40 to-brand-dark z-10" />
        <img
          src="/hero-bg.jpg"
          alt="Schwinn Shuffle Kick Scooter on Trail"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 flex items-center gap-3 border border-brand-border bg-brand-gray p-2 px-4 font-mono text-[10px] text-brand-cyan uppercase tracking-[0.4em]"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          STATUS: MISSION READY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-white relative z-20"
        >
          <div className="w-96 h-40 border border-brand-cyan/50 bg-brand-cyan/5 rounded-full blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          Beyond The <br />
          <span className="text-brand-orange">Cruise.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-brand-light-gray max-w-2xl font-sans"
        >
          The Schwinn Adult Shuffle Kick Scooter is a blank canvas. Discover how to transform it from a neighborhood cruiser into a long-distance urban exploration kickboard.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-light-gray font-mono text-xs uppercase"
      >
        <span>Initialize Protocol</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-brand-orange" />
      </motion.div>
    </section>
  );
}

function Foundation() {
  return (
    <section id="foundation" className="py-32 px-6 lg:px-20 relative border-t border-brand-border bg-brand-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden group border-2 border-dashed border-brand-border p-2 bg-[#f8f9fa]">
           <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
             <img 
                src="https://images-na.ssl-images-amazon.com/images/P/B0183T0IRE.01.MAIN._SCRM_.jpg"
                alt="Schwinn Shuffle Adult Kick Scooter"
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 mix-blend-multiply opacity-100 p-8"
             />
             <div className="absolute inset-0 bg-brand-dark/5 mix-blend-multiply pointer-events-none" />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent pointer-events-none">
                <div className="flex justify-between items-end font-mono text-[10px] uppercase text-white tracking-widest">
                   <div>
                      <span className="text-brand-orange block mb-1">Frame</span>
                      <span>Hi-Ten Steel Structure</span>
                   </div>
                   <div className="text-right">
                      <span className="text-brand-orange block mb-1">Stock Wheels</span>
                      <span>26" Front / 20" Rear</span>
                   </div>
                </div>
             </div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-brand-cyan" />
            <span className="font-mono text-brand-cyan text-[10px] uppercase tracking-[0.2em]">01 / The Foundation</span>
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl font-black italic uppercase tracking-tighter mb-8 text-white">
            The Perfect <br /> Blank Canvas
          </h2>
          
          <div className="space-y-6 text-brand-light-gray text-lg font-sans leading-relaxed">
             <p>
               Out of the box, the Schwinn Shuffle is built for leisurely boardwalk rolls. But look closer. The geometry is relaxed but stable. It accepts standard bicycle components. It has V-brake mounts.
             </p>
             <p>
               This isn't just a toy. It's a platform. With the right strategy, you can reconstruct this kick scooter into an endurance kickboard capable of 20+ mile urban expeditions.
             </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 font-mono text-[10px] uppercase tracking-wider">
             <div className="border border-brand-border p-6 bg-brand-gray relative">
                <div className="absolute top-0 right-0 p-2 text-brand-orange">LOG: 01A</div>
                <ShieldAlert className="w-6 h-6 text-brand-orange mb-4" />
                <h3 className="text-white mb-2 font-black">Stock Limitation</h3>
                <p className="text-brand-light-gray opacity-70">High rolling resistance tires, basic bearings, harsh ride over urban debris.</p>
             </div>
             <div className="border border-brand-border p-6 bg-brand-gray relative">
                <div className="absolute top-0 right-0 p-2 text-brand-cyan">LOG: 01B</div>
                <Wrench className="w-6 h-6 text-brand-cyan mb-4" />
                <h3 className="text-white mb-2 font-black">Lab Potential</h3>
                <p className="text-brand-light-gray opacity-70">Endurance tires, precision bearings, ergonomic cockpit overhauls.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GearLab() {
  const upgrades = [
    {
       title: "The Contact Patch",
       subtitle: "Tires & Tubes",
       desc: "Ditch the knobby cruisers. Upgrade to Schwalbe Big Apples (26x2.0 Front, 20x2.0 Rear). They offer 'Balloonbike' suspension effect while drastically reducing rolling resistance. Pair with thorn-resistant tubes for urban invincibility.",
       stat: "-40% Rolling Resistance"
    },
    {
       title: "Friction Reduction",
       subtitle: "Bearings & Hubs",
       desc: "The stock bearings bleed your kicking energy. Repacking the hubs with high-grade synthetic grease and Grade 25 loose ball bearings, or upgrading the entire wheelset to sealed cartridge hubs, extends your glide distance exponentially.",
       stat: "+35% Glide Duration"
    },
    {
       title: "The Cockpit",
       subtitle: "Grips & Ergonomics",
       desc: "Long distances punish your hands. Install Ergon GP3 or GP5 grips. The wide palm platform prevents ulnar nerve compression, while the integrated bar ends give you multiple hand positions for crushing headwinds.",
       stat: "Zero Hand Numbness"
    },
    {
       title: "Kinetic Control",
       subtitle: "Braking Strategy",
       desc: "The stock V-brakes are adequate, but replacing the pads with Kool-Stop Dual Compounds transforms the stopping power. Learn to drag the rear brake slightly during tight maneuvers for hyper-stable cornering.",
       stat: "All-Weather Stopping"
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="gear-lab" className="py-32 px-6 lg:px-20 relative bg-[#050505] border-y border-brand-border border-dashed overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(var(--color-brand-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-brand-cyan" />
                <span className="font-mono text-brand-cyan text-[10px] uppercase tracking-[0.2em]">02 / Gear Lab</span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-black italic uppercase tracking-tighter text-white">
                Component <br /> <span className="text-brand-cyan">Overhaul</span>
              </h2>
            </div>
            <p className="max-w-md text-brand-light-gray font-mono text-[10px] uppercase tracking-wider border-l border-brand-cyan pl-6 py-2">
              Replacing key stress points multiplies efficiency. Select a component subsystem to view tactical upgrade specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              {upgrades.map((up, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-6 font-mono border transition-all duration-300 relative overflow-hidden group ${
                    active === i 
                      ? 'bg-brand-gray border-brand-orange' 
                      : 'bg-[#0F1116] border-brand-border hover:border-brand-orange/50'
                  }`}
                >
                  {active === i && (
                     <motion.div layoutId="lab-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" />
                  )}
                  <div className="flex items-center justify-between">
                     <div>
                        <span className={`block text-[10px] mb-2 uppercase ${active === i ? 'text-brand-orange' : 'text-brand-cyan'}`}>{up.subtitle}</span>
                        <h3 className={`font-sans text-sm tracking-widest uppercase font-bold ${active === i ? 'text-white' : 'text-brand-light-gray group-hover:text-white'}`}>
                          {up.title}
                        </h3>
                     </div>
                     <ArrowRight className={`w-4 h-4 transition-transform ${active === i ? 'text-brand-orange rotate-0' : 'text-brand-border -rotate-45 group-hover:text-brand-cyan'}`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 relative bg-[#0F1116] border border-brand-border p-8 lg:p-12 min-h-[400px] flex flex-col justify-center">
               <div className="absolute top-4 right-4 text-brand-cyan/20">
                  <Disc className="w-32 h-32 animate-[spin_10s_linear_infinite]" />
               </div>
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={active}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                   className="relative z-10"
                 >
                    <div className="inline-block px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-[10px] mb-6 uppercase tracking-widest">
                       SPEC ID: {Math.random().toString(36).substring(7).toUpperCase()}
                    </div>
                    <h4 className="font-display text-4xl text-white italic uppercase font-black mb-6">
                      {upgrades[active].title}
                    </h4>
                    <p className="font-serif text-lg text-brand-light-gray leading-relaxed mb-10 italic">
                      "{upgrades[active].desc}"
                    </p>
                    <div className="flex border-t border-brand-border pt-6 mt-auto">
                       <div className="font-mono">
                          <span className="block text-brand-light-gray opacity-50 text-[10px] uppercase mb-1">Lab Metric</span>
                          <span className="text-xl font-bold text-white tracking-widest">{upgrades[active].stat}</span>
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
            </div>

          </div>
        </div>
    </section>
  );
}

function SurvivalGuide() {
  const principles = [
    {
      title: "Tactical Loading",
      text: "Never wear a heavy backpack. The beauty of the Shuffle's large front wheel is that it handles weight beautifully. Mount a Wald 137 basket or a robust front rack to carry your gear. Your upper body needs to remain loose and fluid for the kicking stroke."
    },
    {
      title: "The Kicking Cadence",
      text: "Don't push hard; push often. Keep your kicks short, fast, and light, similar to a high cadence on a bicycle. And crucial to survival: learn to switch kicking legs seamlessly every 5-10 kicks without breaking stride."
    },
    {
      title: "Field Repair Kit",
      text: "Urban glass is inevitable. Carry a compact saddlebag (mounted to the handlebars or frame) containing: 15mm wrench (for wheel nuts), patch kit, spare tube, tire levers, and a CO2 inflator or compact high-volume pump."
    }
  ];

  return (
    <section id="survival-guide" className="py-32 px-6 lg:px-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
           <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-brand-orange" />
                <span className="font-mono text-brand-orange text-[10px] uppercase tracking-[0.2em]">03 / Field Ops</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-white mb-6">
                Survival <br /> Guide
              </h2>
              <p className="text-brand-light-gray font-sans text-lg mb-8">
                Specs and parts only get you so far. When you cover double-digit mileage, technique and preparation become your primary dampeners against fatigue.
              </p>
              <Compass className="w-16 h-16 text-brand-border" />
           </div>
        </div>

        <div className="lg:w-2/3 space-y-8">
           {principles.map((item, idx) => (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: idx * 0.2 }}
               key={idx} 
               className="p-8 border-l-4 border-y border-r border-[#1A1C20] border-l-brand-orange bg-[#0F1116] hover:bg-[#15171D] transition-colors relative"
             >
                <div className="absolute top-0 right-0 p-2 text-brand-cyan font-mono text-[10px]">T-{idx + 1}</div>
                <div className="flex items-center gap-6 mb-6">
                   <h3 className="font-sans text-lg uppercase tracking-widest font-bold text-white">
                      {item.title}
                   </h3>
                </div>
                <p className="text-brand-light-gray font-sans text-lg leading-relaxed">
                   {item.text}
                </p>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}

function Journal() {
  return (
    <section id="journal" className="py-32 px-6 lg:px-20 bg-brand-gray border-t border-brand-border">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="w-12 h-[2px] bg-brand-cyan" />
          <span className="font-mono text-brand-cyan text-[10px] uppercase tracking-[0.2em]">04 / The Journal</span>
          <div className="w-12 h-[2px] bg-brand-cyan" />
        </div>

        <figure className="mb-16 relative aspect-video overflow-hidden border border-brand-border bg-white rounded-3xl p-8">
           <img 
              src="https://images-na.ssl-images-amazon.com/images/P/B018NXOSLC.01.MAIN._SCRM_.jpg" 
              alt="Schwinn Shuffle Kick Scooter"
              className="w-full h-full object-contain"
           />
        </figure>

        <article className="max-w-3xl mx-auto focus:outline-none text-xl">
           <h2 className="font-serif text-4xl md:text-6xl text-center mb-4 text-white leading-tight font-normal italic">
             The 22-Mile Post-Industrial Loop
           </h2>
           <p className="text-center font-mono text-brand-cyan opacity-80 text-[10px] uppercase mb-16 tracking-[0.2em]">
             Entry 04 • Date: Oct 14 • Avg Speed: 11mph
           </p>


           <div className="font-serif text-brand-light-gray leading-loose space-y-8">
             <p>
               The concrete was still a bit damp from the morning mist when I dropped the Shuffle down from the apartment. I had re-greased the front hub the night before, and the spin was glassy, almost silent. 
             </p>
             <p>
               I locked into the rhythm early. <em>Kick, kick, kick, glide. Switch. Kick, kick, kick, glide.</em> Once you break past the 5-mile mark, the motion stops feeling like exercise and transforms into a weirdly meditative state. You aren't just riding a scooter; you are walking with superpowers. Your stride lengthens into a low-altitude flight.
             </p>
             
             <blockquote className="border-l border-brand-orange pl-8 py-6 my-12 text-white font-sans uppercase tracking-[0.2em] text-sm font-bold bg-[#15171D] relative">
                <div className="absolute top-0 left-0 p-2 font-mono text-[9px] text-brand-orange">QUOTE REC</div>
                "The kick scooter sits strictly between the speed of a bicycle and the intimacy of running. You see every crack in the pavement, but you blur past the pedestrians."
             </blockquote>

             <p>
               Around mile 15, tracking along the rusted rail yards near the river, the upgrades proved their worth. I hit a stretch of brutally scarred asphalt, the kind that would shatter your teeth on small urethane wheels. The 2-inch wide Big Apples swallowed the chatter whole at 40 PSI. 
             </p>
             <p>
               I unclipped my bottle from the stem bag, drank while coasting, and let the momentum carry me onto the bridge back toward the city center. No chain to snap. No gears to tune. Just pure, kinetic flow.
             </p>
           </div>
        </article>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="h-16 border-t border-brand-border bg-[#07080A] px-8 flex items-center justify-between text-[9px] font-mono text-[#4A4D55] z-50 relative border-x-4 border-b-4 border-brand-border-dark">
       <div className="flex items-center gap-4">
         <Activity className="w-4 h-4 text-brand-orange" />
         <p className="uppercase tracking-widest">©2024 SCHWINN URBAN LABS // DIVISION-02</p>
       </div>
       <div className="flex gap-6 uppercase hidden md:flex">
         <span>Weather: Clear</span>
         <span>Temp: 18°C</span>
         <span>Visibility: High</span>
       </div>
    </footer>
  );
}
