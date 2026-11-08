export type Product = {
  slug: string;
  name: string;
  category: string;
  images: string[];
  sizes?: { label: string; value: string }[];
  uses: string[];
};

export const PRODUCT_CATEGORIES: { key: string; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "vblocks", label: "V-Blocks & Angle Plates" },
  { key: "measuring", label: "Measuring & Marking" },
  { key: "lathe", label: "Lathe & Machine Accessories" },
  { key: "hand", label: "Hand & Maintenance Tools" },
  { key: "magnets", label: "Magnetic Holding" },
];

const P = (p: Product) => p;
const img = (...names: string[]) => names.map((n) => `/assets/products/${n}.jpg`);

export const PRODUCTS: Product[] = [
  // ---- V-Blocks & Angle Plates -------------------------------------------
  P({
    slug: "ci-v-blocks",
    name: "C.I. V-Blocks (Cast Iron V-Blocks with Clamps)",
    category: "vblocks",
    images: img("ci-v-blocks"),
    uses: [
      "Hold and support cylindrical or round workpieces firmly during machining.",
      "Marking, drilling, measuring and inspection of round jobs.",
    ],
  }),
  P({
    slug: "hardened-ground-v-blocks",
    name: "Hardened & Ground V-Blocks (Precision V-Blocks)",
    category: "vblocks",
    images: img("hardened-ground-v-blocks"),
    uses: [
      "Hold cylindrical and round workpieces accurately during marking and machining.",
      "Precision inspection, measuring and checking the alignment of round objects.",
    ],
  }),
  P({
    slug: "steel-v-block-with-clamps",
    name: "Steel V-Block with Clamps (Hardened & Ground)",
    category: "vblocks",
    images: img("steel-v-block-1", "steel-v-block-2"),
    sizes: [{ label: "Size range", value: "50 × 30 × 30 mm to 150 × 100 × 100 mm" }],
    uses: [
      "Hold and clamp cylindrical or round workpieces securely during machining.",
      "V-support for accurate marking, drilling, grinding and inspection.",
    ],
  }),
  P({
    slug: "magnetic-vee-blocks",
    name: "Magnetic Vee Blocks",
    category: "vblocks",
    images: img("magnetic-vee-blocks"),
    sizes: [{ label: "Size range", value: "65 × 60 × 50 mm to 200 × 150 × 100 mm" }],
    uses: [
      "Hold cylindrical and round workpieces securely during machining.",
      "Support workpieces for accurate marking, drilling and inspection.",
    ],
  }),
  P({
    slug: "ci-angle-plate-plain",
    name: "C.I. Angle Plate (Plain)",
    category: "vblocks",
    images: img("ci-angle-plate-plain"),
    sizes: [{ label: "Size range", value: "100 × 100 × 100 mm to 300 × 300 × 300 mm" }],
    uses: [
      "Hold and support workpieces at 90° during marking, drilling and machining.",
      "Accurate right-angle support for inspection, layout and squareness checks.",
    ],
  }),
  P({
    slug: "ci-angle-plate-slotted-open",
    name: "C.I. Angle Plate (Slotted Open End)",
    category: "vblocks",
    images: img("ci-angle-plate-slotted-open"),
    sizes: [{ label: "Size range", value: "88 × 75 × 63 mm to 300 × 225 × 200 mm" }],
    uses: [
      "Hold and support workpieces at 90° during machining operations.",
      "Flexible, adjustable clamping and accurate positioning using the slots.",
    ],
  }),
  P({
    slug: "ci-angle-plate-slotted-webbed",
    name: "C.I. Angle Plate (Slotted Webbed End)",
    category: "vblocks",
    images: img("ci-angle-plate-slotted-webbed"),
    sizes: [{ label: "Size range", value: "88 × 75 × 63 mm to 300 × 225 × 200 mm" }],
    uses: [
      "Hold and support heavy workpieces at 90° during machining.",
      "Extra strength and rigidity for accurate clamping, positioning and alignment.",
    ],
  }),

  // ---- Measuring & Marking ----------------------------------------------
  P({
    slug: "sine-bars",
    name: "Sine Bars",
    category: "measuring",
    images: img("sine-bars-1", "sine-bars-2"),
    sizes: [{ label: "Size range", value: "4 in (100 mm) to 12 in (300 mm)" }],
    uses: [
      "Measure and set precise angles using slip gauges.",
      "Precision inspection, layout and accurate angular settings in machining.",
    ],
  }),
  P({
    slug: "graduated-try-square",
    name: "Graduated Try Square (One Side Graduated)",
    category: "measuring",
    images: img("graduated-try-square"),
    sizes: [{ label: "Size range", value: "4 in to 24 in" }],
    uses: [
      "Check and mark 90° (right angle).",
      "Ensure squareness of workpieces.",
    ],
  }),
  P({
    slug: "engineers-try-squares",
    name: "Engineer's Try Squares (Workshop Grade)",
    category: "measuring",
    images: img("engineers-try-squares"),
    sizes: [
      { label: "Size range", value: "2 in to 80 in" },
      { label: "Metric", value: "50 mm to 2000 mm" },
    ],
    uses: [
      "Check and maintain accurate 90° (right) angles.",
      "Precise layout, marking and inspection of workpieces.",
    ],
  }),
  P({
    slug: "engineers-try-square-ungraduated",
    name: "Engineer's Try Square (Ungraduated)",
    category: "measuring",
    images: img("engineers-try-square-ungraduated"),
    uses: [
      "Check and maintain accurate 90° (right) angles.",
      "Layout, marking and squareness inspection of workpieces.",
    ],
  }),
  P({
    slug: "depth-gauges",
    name: "Depth Gauges",
    category: "measuring",
    images: img("depth-gauges"),
    sizes: [{ label: "Available sizes", value: '6 in and 12 in' }],
    uses: [
      "Measure the depth of holes, slots and recesses.",
      "Ensure accurate depth measurement in machining operations.",
    ],
  }),
  P({
    slug: "wire-gauges",
    name: "Wire Gauges (SWG Gauges)",
    category: "measuring",
    images: img("wire-gauges"),
    sizes: [{ label: "Type", value: "Round and Rectangular" }],
    uses: [
      "Measure the diameter (thickness) of wires.",
      "Check and select the correct wire size to SWG standards.",
    ],
  }),
  P({
    slug: "screw-pitch-gauges",
    name: "Screw Pitch Gauges",
    category: "measuring",
    images: img("screw-pitch-gauges"),
    sizes: [{ label: "Type", value: "Inches · Metric · Combined" }],
    uses: [
      "Determine the pitch (thread spacing) of screws and bolts.",
      "Identify and match the correct thread size during manufacturing and repair.",
    ],
  }),
  P({
    slug: "wing-compass",
    name: "Wing Compass",
    category: "measuring",
    images: img("wing-compass"),
    sizes: [{ label: "Available sizes", value: '6", 8", 10", 12"' }],
    uses: [
      "Draw accurate arcs and circles of the required radius.",
      "Transfer and set measurements on a workpiece.",
    ],
  }),
  P({
    slug: "engineers-steel-scribers",
    name: "Engineer's Steel Scribers",
    category: "measuring",
    images: img("engineers-steel-scribers"),
    sizes: [
      { label: "Size range", value: "4½ in to 10 in" },
      { label: "Metric", value: "112 mm to 250 mm" },
    ],
    uses: [
      "Make fine and accurate marking lines on metal surfaces.",
      "Mark layouts and locate machining or drilling points.",
    ],
  }),

  // ---- Lathe & Machine Accessories ---------------------------------------
  P({
    slug: "revolving-live-centres",
    name: "Revolving (Live) Centres",
    category: "lathe",
    images: img("revolving-live-centres"),
    sizes: [{ label: "Size range", value: "MT No. 1 to MT No. 6" }],
    uses: [
      "Support the free end of a workpiece during lathe operations.",
      "Allow smooth rotation of the workpiece with minimum friction.",
    ],
  }),
  P({
    slug: "dead-centre",
    name: "Dead Centre",
    category: "lathe",
    images: img("dead-centre"),
    sizes: [{ label: "Size range", value: "MT No. 1 to MT No. 6" }],
    uses: [
      "Support and locate the workpiece during lathe operations.",
      "Provide a fixed centre for accurate workpiece rotation.",
    ],
  }),
  P({
    slug: "revolving-tube-centres",
    name: "Revolving Tube (Pipe) Centres",
    category: "lathe",
    images: img("revolving-tube-centres"),
    sizes: [
      { label: "Size range", value: "1¼ in to 6 in (25 mm to 150 mm)" },
      { label: "Taper size", value: "MT No. 3 to MT No. 6" },
    ],
    uses: [
      "Support and rotate hollow workpieces such as pipes and tubes.",
      "Hold and machine large-diameter tubes during lathe operations.",
    ],
  }),
  P({
    slug: "morse-taper-drill-sleeves",
    name: "Morse Taper Drill Sleeves",
    category: "lathe",
    images: img("morse-taper-drill-sleeves"),
    sizes: [
      { label: "Size range", value: "MT 0–1 to MT 4–6" },
      { label: "Types", value: "W/S Grade and A-Grade (H&G)" },
    ],
    uses: [
      "Adapt a larger Morse taper hole to a smaller Morse taper shank.",
      "Hold drills and reamers securely in machine spindles.",
    ],
  }),
  P({
    slug: "boring-bars",
    name: "Boring Bars",
    category: "lathe",
    images: img("boring-bars"),
    sizes: [{ label: "Size range", value: "1/8 in to 1 in" }],
    uses: [
      "Enlarge and finish internal holes (boring operations).",
      "Achieve accurate and smooth internal diameters in metal workpieces.",
    ],
  }),
  P({
    slug: "lathe-chuck-keys",
    name: "Lathe Chuck Keys",
    category: "lathe",
    images: img("lathe-chuck-keys"),
    sizes: [{ label: "Size range", value: "1/4 in to 3/4 in" }],
    uses: [
      "Tighten or loosen the jaws of a lathe chuck.",
      "Clamp and release workpieces securely in the chuck.",
    ],
  }),
  P({
    slug: "screw-on-extension-pilots",
    name: "Screw On Extension Pilots",
    category: "lathe",
    images: img("screw-on-extension-pilots"),
    sizes: [{ label: "Size range", value: "1/4 in to 2 7/32 in" }],
    uses: [
      "Extend the reach of drills and piloted cutting tools.",
      "Provide accurate guidance while machining deep holes.",
    ],
  }),

  // ---- Hand & Maintenance Tools ------------------------------------------
  P({
    slug: "adjustable-tap-wrenches",
    name: "Adjustable Tap Wrenches",
    category: "hand",
    images: img("adjustable-tap-wrenches"),
    sizes: [{ label: "Size range", value: "1/4 in to 2½ in" }],
    uses: [
      "Hold and rotate taps for cutting internal threads.",
      "Grip and adjust different sizes of taps securely.",
    ],
  }),
  P({
    slug: "ratchet-t-tap-wrench",
    name: "Ratchet Type T-Tap Wrench",
    category: "hand",
    images: img("ratchet-t-tap-wrench"),
    uses: [
      "Hold and rotate taps for cutting internal threads in holes.",
      "Ratchet mechanism allows easy, continuous tapping in confined spaces.",
    ],
  }),
  P({
    slug: "toolmakers-parallel-clamps",
    name: "Tool Maker's (Parallel) Clamps",
    category: "hand",
    images: img("toolmakers-clamps-1", "toolmakers-clamps-2"),
    sizes: [{ label: "Size range", value: "2 in (50 mm) to 8 in (200 mm)" }],
    uses: [
      "Hold and clamp small or precision workpieces securely during filing, drilling and machining.",
      "Keep workpieces parallel during marking, grinding and tool-making work.",
    ],
  }),
  P({
    slug: "adjustable-hand-reamers",
    name: "Adjustable Hand Reamers Sets",
    category: "hand",
    images: img("adjustable-hand-reamers"),
    sizes: [{ label: "Size range", value: "H-V to H-16" }],
    uses: [
      "Enlarge and finish drilled holes to accurate sizes.",
      "Achieve smooth finishing and precise hole dimensions.",
    ],
  }),
  P({
    slug: "master-pin-vice",
    name: "Master Pin Vice",
    category: "hand",
    images: img("master-pin-vice"),
    sizes: [{ label: "Size", value: "No. 125" }],
    uses: [
      "Hold small drills, pins and wires firmly.",
      "Precision drilling and fine work in watchmaking and model making.",
    ],
  }),
  P({
    slug: "pin-chuck-set",
    name: "Pin Chuck Set",
    category: "hand",
    images: img("pin-chuck-set"),
    sizes: [{ label: "Size range", value: "0 to 3/32 in" }],
    uses: [
      "Hold small drills and pins firmly.",
      "Precision drilling and fine mechanical work.",
    ],
  }),
  P({
    slug: "bearing-scrapers",
    name: "Bearing Scrapers (Flat, Half Round & Triangular)",
    category: "hand",
    images: img("bearing-scrapers"),
    sizes: [{ label: "Size range", value: "4 in to 12 in (100 mm to 300 mm)" }],
    uses: [
      "Remove burrs and unwanted material from bearing surfaces.",
      "Clean, smooth and finish metal surfaces.",
    ],
  }),
  P({
    slug: "emery-wheel-dresser",
    name: "Emery Wheel Dresser & Cutter (Huntington Type)",
    category: "hand",
    images: img("emery-wheel-dresser"),
    sizes: [{ label: "Size range", value: "No. 0 to No. 2" }],
    uses: [
      "Dress, clean and restore the shape of emery grinding wheels.",
      "Remove glazing and maintain the sharp cutting surface of grinding wheels.",
    ],
  }),
  P({
    slug: "prick-punches",
    name: "Prick Punches",
    category: "hand",
    images: img("prick-punches"),
    sizes: [{ label: "Tip diameter", value: "5/64 in to 1/4 in" }],
    uses: [
      "Make small marks or indentations on metal surfaces.",
      "Mark the centre point before drilling.",
    ],
  }),
  P({
    slug: "pin-punches-parallel",
    name: "Pin Punches (Parallel)",
    category: "hand",
    images: img("pin-punches-parallel"),
    sizes: [{ label: "Size range", value: "1/16 in to 1/2 in" }],
    uses: [
      "Remove pins and dowels from holes.",
      "Drive out metal pins during assembly and repair work.",
    ],
  }),
  P({
    slug: "pin-punches-inserted",
    name: "Pin Punches (Inserted)",
    category: "hand",
    images: img("pin-punches-inserted"),
    sizes: [{ label: "Size range", value: "1/16 in to 1/2 in" }],
    uses: [
      "Drive out pins, dowels and rivets.",
      "Remove or align small pins during assembly.",
    ],
  }),
  P({
    slug: "steel-dot-punch",
    name: "Steel Dot Punch",
    category: "hand",
    images: img("steel-dot-punch"),
    uses: [
      "Make small indentations on metal surfaces for marking.",
      "Create a starting point for drilling and prevent drill-bit slipping.",
    ],
  }),

  // ---- Magnetic Holding ---------------------------------------------------
  P({
    slug: "pot-magnets",
    name: "Pot Magnets",
    category: "magnets",
    images: img("pot-magnets"),
    uses: [
      "Hold and fix metal objects firmly on magnetic surfaces.",
      "Temporary magnetic clamping in workshops, fixtures and tool setups.",
    ],
  }),
  P({
    slug: "bar-magnets",
    name: "Bar Magnets",
    category: "magnets",
    images: img("bar-magnets"),
    uses: [
      "Attract and hold ferromagnetic materials such as iron and steel.",
      "Workshop use and educational demonstration of magnetic properties.",
    ],
  }),
];

export const categoryLabel = (key: string) =>
  PRODUCT_CATEGORIES.find((c) => c.key === key)?.label ?? key;

export const productBySlug = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);
