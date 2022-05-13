const listData = [
  {
  id: 1,
  created_at: "2022-05-10T10:26:02.000Z",
  updated_at: "2022-05-13T02:22:49.484Z",
  user_id: 1,
  name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  location: "Eum non autem quod.",
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  condition: "Acceptable",
  available: true,
  latitude: "43.6972935947595",
  longitude: "-79.4040332094641",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
  id: 2,
  created_at: "2022-05-11T03:07:53.000Z",
  updated_at: "2022-05-13T02:22:49.499Z",
  user_id: 5,
  name: "Mens Casual Premium Slim Fit T-Shirts ",
  location: "Minima sed iusto id.",
  description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  condition: "Like New",
  available: true,
  latitude: "43.8216392059258",
  longitude: "-79.403363505488",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
  id: 3,
  created_at: "2022-05-11T19:32:33.000Z",
  updated_at: "2022-05-13T02:22:49.506Z",
  user_id: 5,
  name: "Mens Cotton Jacket",
  location: "Ratione consequatur enim velit.",
  description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  condition: "Good",
  available: true,
  latitude: "43.7385730507078",
  longitude: "-79.5391381627974",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
  id: 4,
  created_at: "2022-05-11T05:16:44.000Z",
  updated_at: "2022-05-13T02:22:49.512Z",
  user_id: 5,
  name: "Mens Casual Slim Fit",
  location: "Et vitae tempora consequatur.",
  description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  condition: "Good",
  available: true,
  latitude: "43.6803116183058",
  longitude: "-79.4441037658981",
  image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
  id: 5,
  created_at: "2022-05-11T18:43:42.000Z",
  updated_at: "2022-05-13T02:22:49.518Z",
  user_id: 5,
  name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  location: "Laudantium ex laborum minima.",
  description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  condition: "Good",
  available: true,
  latitude: "43.8129125923266",
  longitude: "-79.5589065665164",
  image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
  id: 6,
  created_at: "2022-05-11T20:13:25.000Z",
  updated_at: "2022-05-13T02:22:49.525Z",
  user_id: 2,
  name: "Solid Gold Petite Micropave ",
  location: "Voluptatibus soluta eos et.",
  description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  condition: "Broken",
  available: true,
  latitude: "43.7485844665038",
  longitude: "-79.5765208569574",
  image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  },
  {
  id: 7,
  created_at: "2022-05-12T05:13:44.000Z",
  updated_at: "2022-05-13T02:22:49.530Z",
  user_id: 4,
  name: "White Gold Plated Princess",
  location: "Magnam eaque nam quibusdam.",
  description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  condition: "Acceptable",
  available: true,
  latitude: "43.7174915816279",
  longitude: "-79.5247451014684",
  image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
  },
  {
  id: 8,
  created_at: "2022-05-11T19:44:38.000Z",
  updated_at: "2022-05-13T02:22:49.536Z",
  user_id: 4,
  name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
  location: "Molestiae dolorem ea molestias.",
  description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  condition: "Like New",
  available: true,
  latitude: "43.7426600934968",
  longitude: "-79.3903975760332",
  image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
  },
  {
  id: 9,
  created_at: "2022-05-10T18:38:38.000Z",
  updated_at: "2022-05-13T02:22:49.542Z",
  user_id: 1,
  name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  location: "Rerum veniam totam voluptas.",
  description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  condition: "Broken",
  available: true,
  latitude: "43.7646598010834",
  longitude: "-79.4094604592663",
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
  },
  {
  id: 10,
  created_at: "2022-05-10T10:02:50.000Z",
  updated_at: "2022-05-13T02:22:49.548Z",
  user_id: 2,
  name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  location: "Iusto cumque voluptatem eos.",
  description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
  condition: "Good",
  available: true,
  latitude: "43.6981639376094",
  longitude: "-79.483323357332",
  image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
  },
  {
  id: 11,
  created_at: "2022-05-10T20:20:09.000Z",
  updated_at: "2022-05-13T02:22:49.554Z",
  user_id: 3,
  name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  location: "Incidunt modi nostrum sint.",
  description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  condition: "Broken",
  available: true,
  latitude: "43.6798433772715",
  longitude: "-79.3931747747642",
  image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
  },
  {
  id: 12,
  created_at: "2022-05-11T02:15:58.000Z",
  updated_at: "2022-05-13T02:22:49.565Z",
  user_id: 2,
  name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  location: "Qui ipsum excepturi inventore.",
  description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  condition: "Good",
  available: true,
  latitude: "43.719277943919",
  longitude: "-79.3949070663982",
  image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
  },
  {
  id: 13,
  created_at: "2022-05-12T02:28:05.000Z",
  updated_at: "2022-05-13T02:22:49.570Z",
  user_id: 3,
  name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  location: "Possimus nulla neque eos.",
  description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  condition: "Broken",
  available: true,
  latitude: "43.7442094635377",
  longitude: "-79.6008527797103",
  image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
  },
  {
  id: 14,
  created_at: "2022-05-11T04:32:29.000Z",
  updated_at: "2022-05-13T02:22:49.576Z",
  user_id: 1,
  name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  location: "Provident distinctio natus non.",
  description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
  condition: "Broken",
  available: true,
  latitude: "43.6897488136524",
  longitude: "-79.4855777720984",
  image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  },
  {
  id: 15,
  created_at: "2022-05-11T11:32:56.000Z",
  updated_at: "2022-05-13T02:22:49.581Z",
  user_id: 2,
  name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  location: "Eos tenetur veritatis debitis.",
  description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  condition: "Like New",
  available: true,
  latitude: "43.6964058808263",
  longitude: "-79.3928766853546",
  image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
  },
  {
  id: 16,
  created_at: "2022-05-10T06:49:00.000Z",
  updated_at: "2022-05-13T02:22:49.587Z",
  user_id: 4,
  name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  location: "Error sint facere eaque.",
  description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
  condition: "Acceptable",
  available: true,
  latitude: "43.6655811138454",
  longitude: "-79.5495118448792",
  image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
  },
  {
  id: 17,
  created_at: "2022-05-11T16:33:01.000Z",
  updated_at: "2022-05-13T02:22:49.592Z",
  user_id: 5,
  name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  location: "Aut dolor cupiditate et.",
  description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  condition: "Like New",
  available: true,
  latitude: "43.6560940761385",
  longitude: "-79.4199900535814",
  image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
  },
  {
  id: 18,
  created_at: "2022-05-11T05:37:52.000Z",
  updated_at: "2022-05-13T02:22:49.597Z",
  user_id: 4,
  name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
  location: "Ut possimus ut nihil.",
  description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  condition: "Good",
  available: true,
  latitude: "43.7838122340262",
  longitude: "-79.537730279659",
  image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
  },
  {
  id: 19,
  created_at: "2022-05-10T23:34:50.000Z",
  updated_at: "2022-05-13T02:22:49.602Z",
  user_id: 1,
  name: "Opna Women's Short Sleeve Moisture",
  location: "Aperiam tempora porro laborum.",
  description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
  condition: "Broken",
  available: true,
  latitude: "43.6754745770314",
  longitude: "-79.3906805710383",
  image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
  },
  {
  id: 20,
  created_at: "2022-05-10T21:40:07.000Z",
  updated_at: "2022-05-13T02:22:49.607Z",
  user_id: 1,
  name: "DANVOUY Womens T Shirt Casual Cotton Short",
  location: "Repudiandae voluptate et nihil.",
  description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  condition: "Like New",
  available: true,
  latitude: "43.7852633051948",
  longitude: "-79.4505259743981",
  image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
  }
  ]

  export default listData;