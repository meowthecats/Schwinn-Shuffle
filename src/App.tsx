import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import React, { useEffect, useState, useMemo } from 'react';
import { ShieldAlert, Compass, ChevronDown, Wrench, Menu, X, ArrowRight, Activity, Map, Disc, Image as ImageIcon, Video, Plus, Upload, Heart, Filter, ArrowDownUp, Scale, Check, Share2, Link } from 'lucide-react';

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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-dark/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <ul className="flex flex-col gap-6 w-full max-w-sm text-center font-display text-4xl uppercase font-bold tracking-tighter">
              {['Foundation', 'Gear Lab', 'Survival Guide', 'Journal'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.1, duration: 0.3, ease: 'easeOut' }}
                  className="w-full"
                >
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange hover:bg-brand-gray/50 rounded-xl transition-all block py-6 px-8 w-full" onClick={() => setIsOpen(false)}>
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
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 opacity-100 p-8"
             />
             <div className="absolute inset-0 bg-brand-dark/5 mix-blend-multiply pointer-events-none" />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
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
             {/* Hover Caption */}
             <div className="absolute inset-0 bg-brand-dark/95 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center pointer-events-none">
                <h4 className="text-brand-cyan font-mono text-[12px] uppercase tracking-[0.2em] mb-4">Base Configuration</h4>
                <p className="text-white/90 font-sans text-sm leading-relaxed max-w-xs">
                  The Schwinn Shuffle adult scooter in its stock light blue colorway. Features a durable high-tensile steel frame, front and rear linear pull brakes, and alloy rims designed for neighborhood commuting and recreational rides.
                </p>
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
  const upgrades = useMemo(() => [
    {
       id: "tires",
       title: "The Contact Patch",
       subtitle: "Tires & Tubes",
       category: "Performance",
       cost: 45,
       rating: 4.8,
       availability: "Amazon, eBay (Search 'Schwalbe Big Apple')",
       difficulty: "Beginner",
       toolsNeeded: "Tire Levers, Floor Pump",
       timeToInstall: "20 minutes",
       desc: "The stock knobby tires are energy vampires on pavement. Upgrading to Schwalbe Big Apples (26x2.0 Front, 20x2.0 Rear) is the most impactful change you can make. They offer a 'Balloonbike' air suspension effect at 35-40 PSI while drastically reducing rolling resistance. You can often find used or open-box pairs on eBay for under $50. Pair with basic thorn-resistant tubes from any local bike shop (LBS) or Walmart to avoid mid-commute flats. This single upgrade transforms the scooter from a neighborhood toy into a long-distance commuter.",
       stat: "-40% Rolling Resistance",
       modelId: "165727f212dd46cca6f0f6c1db1b3c71"
    },
    {
       id: "bearings",
       title: "Friction Reduction",
       subtitle: "Bearings & Hubs",
       category: "Performance",
       cost: 8,
       rating: 4.6,
       availability: "Hardware Store, Amazon",
       difficulty: "Intermediate",
       toolsNeeded: "Cone Wrenches, Grease, Rags",
       timeToInstall: "45 minutes",
       desc: "The stock unsealed bearings bleed your kicking energy. You don't need expensive new wheels. Simply buying a $5 bag of Grade 25 loose ball bearings (1/4\" size for rear, 3/16\" for front) and repacking the existing hubs with high-grade synthetic marine or automotive grease will extend your glide distance exponentially. The process involves removing the axle nuts, cleaning out the old factory sludge, inserting the new shiny bearings, and carefully tightening the cones until play is eliminated but the wheel spins freely for minutes.",
       stat: "+35% Glide Duration",
       modelId: "151e092935414ea1b500732dbe26c94b"
    },
    {
       id: "grips",
       title: "The Cockpit",
       subtitle: "Grips & Ergonomics",
       category: "Comfort",
       cost: 15,
       rating: 4.9,
       availability: "AliExpress, Amazon",
       difficulty: "Beginner",
       toolsNeeded: "Allen Key Set",
       timeToInstall: "5 minutes",
       desc: "Long distances punish your hands with round stock grips. You don't need name-brand Ergon grips; generic 'Ergonomic Lock-on Grips with Bar Ends' from Amazon or AliExpress cost around $15 and deliver 95% of the benefit. The wide palm platform prevents ulnar nerve compression (hand numbness), while the integrated bar ends give you multiple hand positions for crushing headwinds. Just slip them on and tighten the hex bolt.",
       stat: "Zero Hand Numbness",
       modelId: "e7249628de344edaa9f364486b8de1c3"
    },
    {
       id: "brakes",
       title: "Kinetic Control",
       subtitle: "Braking Strategy",
       category: "Safety",
       cost: 12,
       rating: 4.7,
       availability: "Amazon, Local Bike Shop",
       difficulty: "Beginner",
       toolsNeeded: "5mm Allen Key",
       timeToInstall: "15 minutes",
       desc: "The stock V-brakes on the Shuffle are perfectly adequate metal arms—the weakness is the cheap rubber pads. Replacing just the pads with Kool-Stop Dual Compounds or generic salmon/black compound equivalents ($10-$15 online) transforms the stopping power from spongy to immediate. They bolt right on. Learn to drag the rear brake slightly during tight maneuvers for hyper-stable cornering in rainy city conditions.",
       stat: "All-Weather Stopping",
       modelId: "c1a3633d2e274d369c0e3c4711957a17"
    },
    {
       id: "paint",
       title: "Frame Restoration",
       subtitle: "Paint & Touch-ups",
       category: "Aesthetic",
       cost: 6,
       rating: 4.3,
       availability: "AutoZone, Walmart",
       difficulty: "Beginner",
       toolsNeeded: "Sandpaper, Tape, Prep Wipe",
       timeToInstall: "60 minutes",
       desc: "Urban riding inevitably invites scratches. For cheap, precise touch-ups on the metallic blue frame, snag automotive touch-up pens from an auto parts store. Need a full overhaul or color change? A $6 can of Rust-Oleum 2X Painter's Touch (Primer + Paint) provides a durable, weather-resistant coat. Lightly sand the frame with 400-grit paper, wipe with rubbing alcohol, tape off the brake mounts, and spray light, even coats.",
       stat: "Rust Prevention",
       modelId: "7b44a71676d841c9a8eb777b2ee55096"
    },
    {
       id: "fenders",
       title: "Weather Protection",
       subtitle: "Custom Fenders",
       category: "Comfort",
       cost: 45,
       rating: 4.8,
       availability: "Amazon (Search 'TAGVO', 'SKS Velo', 'ROCKBROS Fenders')",
       difficulty: "Intermediate",
       toolsNeeded: "Zip Ties, Screwdriver, Hex Keys, P-clamps",
       timeToInstall: "15 - 60 minutes",
       desc: `Keep the grit off your back and out of your headset. Custom 26/20 inch fender sets are rare, but adapting MTB mudguards gives reliable all-season domination.

ROCKBROS Vintage Minimalist Quick Release Fenders (Front & Rear):
1. These minimalistic mudguards are incredibly easy to install, requiring almost no tools, and offer a sleek look.
2. For the front (26" wheel), secure the quick-release clamp or strap onto the front fork crown or steerer tube, adjusting the angle to sit comfortably above the tire.
3. For the rear (20" wheel), attach the quick-release clamp directly to the frame tube bridging the rear wheel, or the seat post base depending on clearance.
4. Use the adjustable pivots to fine-tune the fender's arc over the wheels. They are perfect for quick removal when the weather clears up.

SKS Veloflexx 65 or Velo 65 MTB Fenders (Rear 20"):
1. The SKS Veloflexx 65 is ideal as it doesn't require a frame bridge or eyelets. It attaches directly to the lower seat stays and seat tube area using heavy-duty rubber straps.
2. Position the rear fender over the 20" wheel and secure the top strap to the frame securely.
3. Attach the Veloflexx support stays to the lower chainstays using the provided rubber-coated Velcro or zip-ties.
4. Adjust the bracket angle to dial in the tire clearance (about 10-15mm above the tire) and tighten all hex bolts.

TAGVO Universal Mudguard Set (Front 26" Adaptation):
1. The TAGVO front mudguard mounts via an expansion plug into the bottom of the front fork's steerer tube.
2. Select the correct expansion collet size (usually 20-24mm) and insert it upward into the fork crown hole.
3. Tighten the hex bolt under the fender until the collet expands and grips the inside of the fork steerer tightly.
4. The flexible plastic design will drape over the 26" front wheel nicely. Add heavy-duty zip-ties around the lower fork legs for extra stability during aggressive riding.`,
       stat: "All-Weather Readiness",
       modelId: "cdeab899fb0c4d30a3cc3f0080505513"
    }
  ], []);

  const [activeId, setActiveId] = useState(upgrades[0].id);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Default");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);
  const [compareList, setCompareList] = useState<string[]>([]);
  
  const displayedUpgrades = useMemo(() => {
    let result = [...upgrades];
    if (filter !== "All") {
      if (filter === "Wishlist") {
        result = result.filter(u => wishlist.includes(u.id));
      } else {
        result = result.filter(u => u.category === filter);
      }
    }
    
    if (sort === "Cost: Low to High") {
      result.sort((a, b) => a.cost - b.cost);
    } else if (sort === "Cost: High to Low") {
      result.sort((a, b) => b.cost - a.cost);
    } else if (sort === "Rating: High to Low") {
      result.sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [upgrades, filter, sort, wishlist]);

  const activeUpgrade = upgrades.find(u => u.id === activeId) || upgrades[0];

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
            
            <div className="lg:col-span-12 flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-center justify-between bg-brand-dark p-4 shrink-0 overflow-x-auto w-full border border-brand-border rounded-xl">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-brand-cyan hidden sm:block shrink-0" />
                {["All", "Performance", "Comfort", "Safety", "Aesthetic", "Wishlist"].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`font-mono text-[10px] whitespace-nowrap uppercase tracking-widest px-3 py-1.5 rounded transition-colors ${filter === cat ? 'bg-brand-orange text-black' : 'text-brand-light-gray hover:bg-brand-gray border border-transparent'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCompareMode(!compareMode)}
                  className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border transition-colors ${compareMode ? 'bg-brand-orange text-black border-brand-orange' : 'text-brand-light-gray border-brand-border hover:border-brand-orange hover:text-white'}`}
                >
                  <Scale className="w-4 h-4 shrink-0" />
                  Compare
                </button>
                <ArrowDownUp className="w-4 h-4 text-brand-cyan shrink-0" />
                <select 
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-brand-gray font-mono text-[10px] uppercase tracking-widest text-brand-light-gray border border-brand-border px-3 py-1.5 focus:outline-none focus:border-brand-orange rounded"
                >
                  <option value="Default">Sort: Default</option>
                  <option value="Cost: Low to High">Cost: Low to High</option>
                  <option value="Cost: High to Low">Cost: High to Low</option>
                  <option value="Rating: High to Low">Rating: High to Low</option>
                </select>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              {displayedUpgrades.map((up) => {
                const isSelected = compareMode ? compareList.includes(up.id) : activeId === up.id;
                return (
                <button
                  key={up.id}
                  onClick={() => {
                    if (compareMode) {
                      setCompareList(prev => 
                        prev.includes(up.id) 
                          ? prev.filter(id => id !== up.id) 
                          : prev.length < 3 ? [...prev, up.id] : prev
                      );
                    } else {
                      setActiveId(up.id);
                    }
                  }}
                  className={`text-left p-6 font-mono border transition-all duration-300 relative overflow-hidden group ${
                    isSelected 
                      ? 'bg-brand-gray border-brand-orange' 
                      : 'bg-[#0F1116] border-brand-border hover:border-brand-orange/50'
                  }`}
                >
                  {isSelected && (
                     <motion.div layoutId="lab-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" />
                  )}
                  <div className="flex items-center justify-between mb-2">
                     <span className={`block text-[10px] uppercase ${isSelected ? 'text-brand-orange' : 'text-brand-cyan'}`}>{up.subtitle}</span>
                     <div className="flex items-center gap-2 text-[10px] text-brand-light-gray">
                        <span className="bg-brand-dark px-1.5 py-0.5 rounded border border-brand-border">${up.cost}</span>
                        <span className="bg-brand-dark px-1.5 py-0.5 rounded border border-brand-border">★ {up.rating}</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-between">
                     <h3 className={`font-sans text-sm tracking-widest uppercase font-bold ${isSelected ? 'text-white' : 'text-brand-light-gray group-hover:text-white'}`}>
                       {up.title}
                     </h3>
                     {compareMode ? (
                        <div className={`w-4 h-4 border flex items-center justify-center rounded-sm transition-colors ${isSelected ? 'bg-brand-orange border-brand-orange text-black' : 'border-brand-border'}`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                     ) : (
                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-brand-orange rotate-0' : 'text-brand-border -rotate-45 group-hover:text-brand-cyan'}`} />
                     )}
                  </div>
                </button>
              )})}
              {displayedUpgrades.length === 0 && (
                <div className="p-8 text-center border border-dashed border-brand-border text-brand-light-gray font-mono text-[10px] uppercase">
                  No components found.
                </div>
              )}
            </div>

            <div className="lg:col-span-7 relative bg-[#0F1116] border border-brand-border p-8 lg:p-12 min-h-[500px] flex flex-col justify-center overflow-hidden">
               <div className="absolute top-4 right-4 text-brand-cyan/20 z-0">
                  <Disc className="w-32 h-32 animate-[spin_10s_linear_infinite]" />
               </div>
               
               <AnimatePresence mode="wait">
                 {compareMode ? (
                   <motion.div
                     key="compare-view"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className="relative z-10 flex flex-col h-full w-full"
                   >
                      <h4 className="font-display text-2xl text-white italic uppercase font-black mb-6">
                        System Comparison
                      </h4>
                      {compareList.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center border border-dashed border-brand-border rounded-xl text-brand-light-gray font-mono text-xs uppercase text-center p-8">
                          Select up to 3 components from the roster<br />to compare side-by-side.
                        </div>
                      ) : (
                        <div className={`grid gap-4 flex-1 ${compareList.length === 1 ? 'grid-cols-1' : compareList.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                          {compareList.map(id => {
                            const comp = upgrades.find(u => u.id === id);
                            if (!comp) return null;
                            return (
                              <div key={id} className="flex flex-col border border-brand-border bg-brand-dark rounded relative">
                                <div className="p-3 border-b border-brand-border bg-[#050505] flex items-center justify-between">
                                  <h5 className="font-sans text-xs uppercase font-bold text-white truncate pr-2">{comp.title}</h5>
                                  <button onClick={() => setCompareList(prev => prev.filter(c => c !== id))} className="text-brand-light-gray hover:text-white shrink-0">
                                    <X className="w-3 h-3" />
                                  </button>
                                </div>
                                <div className="p-4 flex-1 flex flex-col gap-4 font-mono text-[10px] uppercase">
                                  <div>
                                    <span className="block text-brand-light-gray opacity-50 mb-1">Cost / Rating</span>
                                    <span className="text-brand-orange font-bold text-sm leading-none">${comp.cost} <span className="text-brand-light-gray font-normal text-[10px]">|</span> ★ {comp.rating}</span>
                                  </div>
                                  <div>
                                    <span className="block text-brand-light-gray opacity-50 mb-1">Metric</span>
                                    <span className="text-brand-cyan">{comp.stat}</span>
                                  </div>
                                  <div>
                                    <span className="block text-brand-light-gray opacity-50 mb-1">Difficulty</span>
                                    <span className="text-white">{comp.difficulty} ({comp.timeToInstall})</span>
                                  </div>
                                  <div className="mt-auto pt-4 flex gap-2">
                                    <button 
                                      onClick={() => { setCompareMode(false); setActiveId(comp.id); }}
                                      className="flex-1 py-2 border border-brand-border hover:border-brand-orange text-brand-light-gray hover:text-brand-orange transition-colors rounded text-center"
                                    >
                                      View Setup
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                   </motion.div>
                 ) : (
                   <motion.div
                     key={`single-${activeId}`}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="relative z-10 flex flex-col h-full"
                   >
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-block self-start px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-[10px] uppercase tracking-widest">
                         SPEC ID: {Math.random().toString(36).substring(7).toUpperCase()}
                      </div>
                      <button 
                        onClick={() => setWishlist(prev => prev.includes(activeUpgrade.id) ? prev.filter(id => id !== activeUpgrade.id) : [...prev, activeUpgrade.id])}
                        className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors px-3 py-1 border rounded ${wishlist.includes(activeUpgrade.id) ? 'bg-brand-orange/10 text-brand-orange border-brand-orange' : 'text-brand-light-gray border-brand-border hover:border-white hover:text-white'}`}
                      >
                        <Heart className={`w-3 h-3 ${wishlist.includes(activeUpgrade.id) ? 'fill-brand-orange text-brand-orange' : ''}`} />
                        {wishlist.includes(activeUpgrade.id) ? 'Wishlisted' : 'Add to Wishlist'}
                      </button>
                    </div>
                    
                    <h4 className="font-display text-4xl text-white italic uppercase font-black mb-6">
                      {activeUpgrade.title}
                    </h4>

                    {/* 3D Model Viewer */}
                    <div className="w-full flex-1 min-h-[300px] bg-brand-dark/50 border border-brand-border rounded-xl overflow-hidden mb-8 relative group">
                       <span className="absolute top-4 left-4 z-10 font-mono text-[10px] text-brand-orange uppercase tracking-[0.2em] bg-[#050505]/80 px-3 py-1 backdrop-blur-sm border border-brand-border rounded">Interactive 3D Scan</span>
                       <iframe 
                         title={activeUpgrade.title}
                         width="100%" 
                         height="100%" 
                         className="absolute inset-0"
                         src={`https://sketchfab.com/models/${activeUpgrade.modelId}/embed?autostart=1&ui_controls=1&ui_infos=0&ui_watermark=0&ui_theme=dark&transparent=1`} 
                         frameBorder="0" 
                         allow="autoplay; fullscreen; vr" 
                         allowFullScreen>
                       </iframe>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 border border-brand-border p-4 bg-brand-dark rounded">
                       <div>
                          <span className="block text-brand-light-gray opacity-50 text-[10px] uppercase mb-1">Get It From</span>
                          <span className="text-xs font-mono text-brand-cyan">{activeUpgrade.availability}</span>
                       </div>
                       <div>
                          <span className="block text-brand-light-gray opacity-50 text-[10px] uppercase mb-1">Difficulty</span>
                          <span className="text-xs font-mono text-white">{activeUpgrade.difficulty}</span>
                       </div>
                       <div>
                          <span className="block text-brand-light-gray opacity-50 text-[10px] uppercase mb-1">Install Time</span>
                          <span className="text-xs font-mono text-white">{activeUpgrade.timeToInstall}</span>
                       </div>
                       <div>
                          <span className="block text-brand-light-gray opacity-50 text-[10px] uppercase mb-1">Tools Needed</span>
                          <span className="text-xs font-mono text-white">{activeUpgrade.toolsNeeded}</span>
                       </div>
                    </div>

                    <p className="font-serif text-lg text-brand-light-gray leading-relaxed mb-6 italic whitespace-pre-wrap">
                      {activeUpgrade.desc}
                    </p>
                    <div className="flex border-t border-brand-border pt-6 mt-auto flex-col sm:flex-row gap-4 justify-between sm:items-center">
                       <div className="font-mono">
                          <span className="block text-brand-light-gray opacity-50 text-[10px] uppercase mb-1">Lab Metric</span>
                          <span className="text-xl font-bold text-white tracking-widest">{activeUpgrade.stat}</span>
                       </div>
                       <div className="font-mono text-[11px] text-brand-light-gray flex items-center gap-4 uppercase self-start sm:self-auto">
                          <span>Est. Cost: <span className="text-white">${activeUpgrade.cost}</span></span>
                          <span>Rating: <span className="text-white">★ {activeUpgrade.rating}</span></span>
                       </div>
                    </div>
                 </motion.div>
                 )}
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
  const [entries, setEntries] = useState<any[]>([
    {
      id: "04",
      title: "The 22-Mile Post-Industrial Loop",
      date: "Oct 14",
      speed: "11mph",
      content: (
        <>
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
        </>
      ),
      media: [
        { type: "image", url: "https://images-na.ssl-images-amazon.com/images/P/B018NXOSLC.01.MAIN._SCRM_.jpg" }
      ]
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newMedia, setNewMedia] = useState<{type: "image" | "video", url: string}[]>([]);
  const [previewError, setPreviewError] = useState("");

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file: File) => ({
        type: file.type.startsWith('video/') ? 'video' : 'image',
        url: URL.createObjectURL(file)
      }));
      setNewMedia(prev => [...prev, ...newFiles as {type: 'video' | 'image', url: string}[]]);
    }
  };

  const addEntry = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      setPreviewError("Title and content are required.");
      return;
    }
    const newEntry = {
      id: String(entries.length + 4).padStart(2, '0'),
      title: newTitle,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      speed: "N/A",
      content: <p>{newContent}</p>,
      media: newMedia
    };
    setEntries([newEntry, ...entries]);
    setIsAdding(false);
    setNewTitle("");
    setNewContent("");
    setNewMedia([]);
    setPreviewError("");
  };

  const handleShare = async (entry: any) => {
    const shareData = {
      title: entry.title,
      text: `Check out this expedition log: ${entry.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} \n${shareData.url}`);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <section id="journal" className="py-32 px-6 lg:px-20 bg-brand-gray border-t border-brand-border">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-brand-cyan" />
            <span className="font-mono text-brand-cyan text-[10px] uppercase tracking-[0.2em]">04 / The Journal</span>
          </div>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-brand-orange hover:text-white transition-colors"
          >
            {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {isAdding ? 'Cancel Entry' : 'Log New Expedition'}
          </button>
        </div>

        <AnimatePresence>
          {isAdding && (
            <motion.div 
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mb-24 bg-brand-dark p-8 border border-brand-border relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />
              <h3 className="font-display text-2xl font-black italic uppercase text-white mb-6">Log Expedition</h3>
              
              <div className="space-y-6 text-brand-light-gray font-sans">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-brand-cyan mb-2 tracking-widest">Route Title</label>
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-brand-gray border border-brand-border p-4 text-white focus:outline-none focus:border-brand-orange transition-colors font-serif italic"
                    placeholder="e.g. Midnight Bridge Run"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-[10px] uppercase text-brand-cyan mb-2 tracking-widest">Field Notes</label>
                  <textarea 
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full bg-brand-gray border border-brand-border p-4 text-white focus:outline-none focus:border-brand-orange transition-colors min-h-[150px] font-sans leading-relaxed"
                    placeholder="Conditions, gear performance, strange encounters..."
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase text-brand-cyan mb-2 tracking-widest">Media Evidence</label>
                  <div className="flex gap-4 items-start flex-wrap">
                    <label className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-brand-border hover:border-brand-orange cursor-pointer transition-colors bg-brand-gray group">
                      <div className="flex flex-col items-center opacity-50 group-hover:opacity-100 transition-opacity">
                        <Upload className="w-6 h-6 mb-2 text-white" />
                        <span className="font-mono text-[8px] uppercase tracking-widest">Upload</span>
                      </div>
                      <input 
                        type="file" 
                        multiple
                        accept="image/*,video/*" 
                        onChange={handleMediaUpload}
                        className="hidden" 
                      />
                    </label>
                    {newMedia.map((m, i) => (
                      <div key={i} className="relative w-24 h-24 border border-brand-border bg-black overflow-hidden group">
                        {m.type === 'video' ? (
                          <video src={m.url} className="w-full h-full object-cover opacity-70" />
                        ) : (
                          <img src={m.url} alt="upload preview" className="w-full h-full object-cover opacity-70" />
                        )}
                        <div className="absolute top-1 right-1 bg-brand-dark p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => setNewMedia(newMedia.filter((_, idx) => idx !== i))}>
                          <X className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {previewError && <p className="text-red-500 font-mono text-[10px]">{previewError}</p>}

                <div className="flex justify-end pt-6 border-t border-brand-border mt-8">
                  <button 
                    onClick={addEntry}
                    className="flex items-center gap-2 bg-brand-orange text-black px-6 py-3 font-mono text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors"
                  >
                    Save Log
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-32">
          {entries.map((entry, index) => (
            <div key={index} className="relative border-b border-brand-border/50 pb-32 last:border-0 last:pb-0">
              {entry.media && entry.media.length > 0 && (
                <div className={`mb-16 grid gap-4 ${entry.media.length === 1 ? 'grid-cols-1' : entry.media.length === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                  {entry.media.map((m: any, i: number) => (
                    <figure key={i} className={`relative overflow-hidden border border-brand-border bg-white rounded-3xl p-4 sm:p-8 group ${entry.media.length === 1 && m.type !== 'video' ? 'aspect-video' : 'aspect-square sm:aspect-video'}`}>
                      {m.type === 'video' ? (
                        <video src={m.url} controls className="w-full h-full object-contain md:object-cover max-h-[600px] rounded-2xl" />
                      ) : (
                        <img 
                          src={m.url} 
                          alt="Entry Media"
                          className={`w-full h-full ${entry.media.length === 1 ? 'object-contain' : 'object-cover'} transition-transform duration-1000 group-hover:scale-105`}
                        />
                      )}
                      
                      {m.type === 'image' && index === entries.length - 1 && i === 0 && entry.media.length === 1 && (
                        <div className="absolute inset-0 bg-brand-dark/95 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center pointer-events-none">
                           <h4 className="text-brand-orange font-mono text-[12px] uppercase tracking-[0.2em] mb-4">Scooter Profile</h4>
                           <p className="text-white/90 font-sans text-sm sm:text-base leading-relaxed max-w-lg">
                             Notice the lowered deck geometry which reduces knee strain during longer rides. The wooden deck adds a classic touch while absorbing minor road vibrations over long-distance urban trails.
                           </p>
                        </div>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              <article className="max-w-3xl mx-auto focus:outline-none text-xl">
                 <h2 className="font-serif text-4xl md:text-6xl text-center mb-4 text-white leading-tight font-normal italic">
                   {entry.title}
                 </h2>
                 <p className="text-center font-mono text-brand-cyan opacity-80 text-[10px] uppercase mb-16 tracking-[0.2em]">
                   Entry {entry.id} • Date: {entry.date} • Avg Speed: {entry.speed}
                 </p>

                 <div className="font-serif text-brand-light-gray leading-loose space-y-8 break-words whitespace-pre-wrap mb-10">
                   {entry.content}
                 </div>

                 <div className="flex justify-center border-t border-brand-border/50 pt-8">
                   <button
                     onClick={() => handleShare(entry)}
                     className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-light-gray hover:text-white transition-colors border border-brand-border hover:border-brand-orange px-6 py-3 rounded-full hover:bg-brand-orange/10"
                   >
                     <Share2 className="w-4 h-4" />
                     Share Log
                   </button>
                 </div>
              </article>
            </div>
          ))}
        </div>
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
