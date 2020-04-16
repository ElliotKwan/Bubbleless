const BANNED_NAMES = [
"TRUNG-ANHNGUYEN",
"AMYYOUNG",
"DAVIDLEE",
"LUKEJACKSON",
"MICHAELLOPEZ",
"DAVIDWILSON",
"JONATHANMCLAUGHLIN",
"JOHNMCLAUGHLIN",
"JIMMCLAUGHLIN",
"STUARTPOLK",
"KEITHZEIG",
"MARIANNECAMPBELL",
"BRIANLARKIN",
"MARGIEFILS",
"ROBSCHMIDT",
"ROBERTSCHMIDT",
"CURTISBELOW",
"RICHARDBERNARD",
"LAURACOVARRUBIAS",
"LUCIADELPUPPO",
"LUCIADELPUPPO",
"MIRANDAEVERITT",
"JOHNFAIRBANK",
"JONATHANFAIRBANK",
"SETHGEYER",
"SHERRYLJURISCH",
"VICTORLOUIE",
"LIZMARES-KIM",
"PAULMASLIN",
"RICHARDMAULLIN",
"DAVIDMETZ",
"ESTHERNICHOLS",
"CAPRICEPRIMO",
"ANKUSHRAO",
"RICKSKLARZ",
"RICHARDSKLARZ",
"DAVIDSOKOLOVE",
"ADAMSONENSHEIN",
"AARONSTILLMAN",
"JOHNTRAVALE",
"RENATOVILLACORTE",
"ANDIEMORHOUS",
"ANDREWTHIBAULT",
"BASAKFILIZ",
"BRENDANKARA",
"BRANDONVINES",
"TRAVISBUNNER",
"CHANDLERCORALLO",
"CHELSEASEKTNAN",
"DAVEBEATTIE",
"DAVIDBEATTIE",
"DIONESAY",
"EMILYGOODMAN",
"ERICCAMERON",
"ERICAO'BRIEN",
"ERICAOBRIEN",
"IANSTEWART",
"JAMESBARNETT",
"JAMESMCCLAIN",
"JANERAYBURN",
"JESSICAPOLSKY",
"JILLIANPRUSA",
"JONATHANLEE",
"JORDANDELGUERCIO",
"JORDANDELGUERCIO",
"JOSHUAEMENEGER",
"JULIARUBEN",
"KATHRYNDAVISON",
"KEVINWALL",
"MAGGIERYNER",
"MALLORYTHAYER",
"MAYRACUEVAS",
"MEHANSYMPSON",
"MELISSAASHBAUGH",
"MICHAELRAMIREZ",
"MICHAELMURAWSKI",
"MOLLYO'SHAUGHNESSY",
"MOLLYOSHAUGHNESSY",
"RACHELBEIDLER",
"REBECCAHUGHES",
"RILEYJONES",
"RILEYGALVIN",
"ROBYESWARTZ",
"RUTHBERNSTEIN",
"SARALABATT",
"SHANIMCELROY",
"SIANNAZIEGLER",
"SUSIEMEYER",
"TOMPATRAS",
"THOMASPATRAS",
"TRUNGANHNGUYEN",
"VALENCIAWRIGHT",
"JOHNANZALONE",
"JEFFLISZT",
"JEFFERYLISZT",
"LISAGROVE",
"MATTHOGAN",
"MATTHEWHOGAN",
"ZACMCCRARY",
"ZACHARYMCCRARY",
"MOLLYMURPHY",
"BRIANSTRYKER",
"CASEYFARMER",
"KEVINAKINS",
"PIANARGUNDKAR",
"GEOFFPURYEAR",
"BENLENET",
"BENJAMINLENET",
"HEATHERSTANDIFER",
"SAMANTHAGILBERT",
"SAPORSHARILEY",
"JUSTINANDERSON",
"TORYWATERS",
"DOROTHYMANEVICH",
"ORENSAVIR",
"RAVENSANDERS",
"SAMWILLOUGHBY",
"PAULOSHINSKI",
"GRAHAMWILLARD",
"ANDREASCREWS",
"DIANACANDELARIA",
"DAVIDBINDER",
"WILLIAMGUDELUNAS",
"SEIJICARPENTER",
"SHANANALPER",
"ETHANAXELROD",
"BENMEYERS",
"BENJAMINMEYERS",
"ERINDIXON",
"SPENCERDIXON-WORD",
"SPENCERDIXONWARD",
"CAROLGAILEY",
"SIMONJARRAR",
"JOHNSILLS",
"JONATHANSILLS",
"CELINDALAKE",
"ALYSIASNELL",
"DAVIDMERMIN",
"ROBERTMEADOW",
"DANIELGOTOFF",
"JOSHUAULIBARRI",
"ROBERTHILLMAN",
"ALANROSENBLATT",
"ANDERSONGARDNER",
"JONATHANVOSS",
"CATEGORMLEY",
"DANIELSPICER",
"DANSPICER",
"MERYLO'BRYAN",
"MERYLOBRYAN",
"COREYTETER",
"JESSEKLINE",
"KELSEYBULLIS",
"CHRISTINEFREDERICK",
"SAHILMEHROTRA",
"EMILYCARAMELLI",
"LINDSEYBUTTEL",
"TIMOTHYDIXON",
"BEAUSALANT",
"EMILYGARNER",
"PATRICKRARDIN",
"DEREKBRIZENDINE",
"HENRYCRAWFORD",
"MATTEBERLE",
"MATTHEWEBERLE",
"GRETCHENPFAU",
"SAMMADRIGAL",
"SAMUELMADRIGAL",
"ROBERTHILLMAN",
"BENTULCHIN",
"BENJAMINTULCHIN",
"BENKROMPAK",
"BENJAMINKROMPAK",
"COREYO'NEIL",
"COREYONEIL",
"KIELBRUNNER",
"ASHMCEVOY",
"ASHLEIGHMCEVOY",
"ASHAGUPTA",
"JENNIFERBUNCH",
"JENNYBUNCH",
"MATTGAMMON",
"DANIELNARVAIZ",
"RYANSTEUSLOFF",
"CHRISPERKINS",
"CHRISTOPHERPERKINS",
"JUSTINDURAN",
"JORDANHAGOOD",
"NATELACOMBE",
"NATHANLACOMBE",
"ADAMRAEZLER",
"WILLIAMDAWSON",
"WILLDAWSON",
"CHELSEAGOODALE",
"ADAMPROBOLSKY",
"DESIREEPROBOLSKY",
"LAURAFLORES",
"VICTORIAGRIFFIN",
"GABRIELLABENITEZ",
"GABBYBENITEZ",
"SHALOMVEFFER",
"ELODIEGOODMAN",
"CHRISKEATING",
"CHRISTOPHERKEATING",
"DEANMITCHELL",
"JUSTINWALLIN",
"STEPHENSPIKER",
"MITCHMCCONNELL",
"MITCHELLMCCONNELL",
"TONYFABRIZIO",
"ANTHONYFABRIZIO",
"TRAVISTUNIS",
"JOHNWARD",
"JONATHANWARD",
"ROBERTBLIZZARD",
"GLENBOLGER",
"ELIZABETHHARRINGTON",
"JIMHOBART",
"PATRICKLANNE",
"JARRETTLEWIS",
"NICOLEMCCLESKEY",
"BILLMCINTURFF",
"WILLIAMMCINTURFF",
"ANSLEYMARKWELL",
"GEORGENASSAR",
"NEILNEWHOUSE",
"MICAHROBERTS",
"GENEULM",
"JAREDBEARD",
"KYLECLARK",
"GABEIMBER",
"GABRIELLAIMBER",
"REBECCAKRAMER",
"BECKYKRAMER",
"DANIELLUONGO",
"KAROLINEMCGRAIL",
"TORIMILLER",
"LINDAMONTFORT",
"GORDONPRICE",
"ANDREWSENESAC",
"RYANSPAUDE",
"NASHSTAMSON",
"JAMIEWADOVICK",
"DAVEWILSON",
"CARLIEBUTLER",
"AMENAJANNAT",
"STEFANHANKIN",
"BENNETTLIPSCOMB",
"ANNEHAZLETT",
"SAMANTHANELSON",
"MAHAMEDOMAR",
"SAMUELWILLOUGHBY",
"ELIZABETHCRENSHAW",
"SOPHIEHALE-BROWN",
"SOPHIEHALEBROWN",
"SOPHIEHALEBROWN",
"IGORTSUKER",
"ANHKHOAPHAM",
"JONATHANLEE",
"CHARLESWATERS",
"ANGELICAVILLAFUERTE",
"JOHNWHITTIER",
"JOHNANZALONE",
"JEFFLISZT",
"LISAGROVE",
"MATTHOGAN",
"ZACMCCRARY",
"MOLLYMURPHY",
"BRIANSTRYKER",
"KEVINAKINS",
"JUSTINANDERSON",
"DIANACANDELARIA",
"SEANCHAMPAGNE",
"MAYRACUEVAS",
"CASEYFARMER",
"SAMANTAHGILBERT",
"NOLANJACKSON",
"BRIDGETKILMER",
"BENLENET",
"JOELUMANSOC",
"DOROTHYMANEVICH",
"ANSLEYMARKWELL",
"LUKEMARTIN",
"SAPORSHARILEY",
"RAVENSANDERS",
"ORENSAVIR",
"ANDREASCREWS",
"HEATHERSTANDIFER",
"TORYWATERS",
"GRAHAMWILLARD",
"SAMWILLOUGHBY",
"KELLYMIDDENDORFF",
"KRISTINABRITTON",
"EVANWILSON",
"ERIKIVERSON",
"HANSKAISER",
"BOBMOORE",
"ROBINKREGER",
"BETHGILBERT",
"RORYWEIE",
"DAVEROHMBOCK",
"DAVIDROHMBOCK",
"MICHELLEVALKO",
"AMYDUPRAS",
"BENTULCHIN",
"BENKROMPAK",
"COREYO'NEIL",
"KIELBRUNNER",
"DAVIDBINDER",
"WILLIAMGUDELUNAS",
"WILLGUDELUNAS",
"SEIJICARPENTER",
"SHANANALPER",
"ETHANAXELROD",
"BENMEYERS",
"ERINDIXON",
"SPENCERDIXON-WORD",
"SPENCERDIXON",
"SPENCERWORD",
"CAROLGAILEY",
"AARONKELLEY",
"ALEXBRYAN",
"ALEYNAHUNT",
"ANDIEMORHOUS",
"ANDREWTHIBAULT",
"AYSETOKSOZ",
"BASAKFILIZ",
"BRENDANKARA",
"BRIANVINES",
"C.TRAVISBUNNER",
"TRAVISBUNNER",
"CHANDLERCORALLO",
"CHELSEASEKTNAN",
"COLEMARTINIAK",
"COLEMOOTZ",
"DIONESAY",
"EMILYGOODMAN",
"ERICAO'BRIEN",
"ERINWILBER",
"GRACEKROEGER",
"IANSTEWART",
"JAMESBARNETT",
"JAMESMCCLAIN",
"JANERAYBURN",
"JESSICAPOLSKY",
"JILLIANPRUSA",
"JONATHANLEE",
"JORDANDELGUERCIO",
"JOSHUAEMENEGER",
"JULIANARUBEN",
"KATHRYNDAVISON",
"KEVINWALL",
"KEVINWHITE",
"LILYJONES",
"MAGGIERYNER",
"MALLORYTHAYER",
"MEGANSYMPSON",
"MELISSAASHBAUGH",
"MEREDITHSTONE",
"MICHAELMURAWSKI",
"MOLLYO'SHAUGHNESSY",
"RACHELBEIDLER",
"REBECCAHUGHES",
"RILEYGALVIN",
"RILEYJONES",
"ROBYESWARTZ",
"RUTHBERNSTEIN",
"SARALABATT",
"SHANIMCELROY",
"SIANNAZIEGLER",
"SUSIEMEYER",
"TARAGIRI",
"THOMASSLABAUGH",
"TOMPATRAS",
"THOMASPATRAS",
"VALENCIAWRIGHT",
"CURTISBELOW",
"RICHARDBERNARD",
"LAURACOVARRUBIAS",
"LUCIADELPUPPO",
"MIRANDAEVERITT",
"JOHNFAIRBANK",
"SETHGEYER",
"SHERRYLJURISCH",
"VICTORLOUIE",
"LIZMARES-KIM",
"LIZMARES",
"LIZKIM",
"ELIZABETHMARES-KIM",
"ELIZABETHMARES-KIM",
"ELIZABETHKIM",
"PAULMASLIN",
"RICHARDMAULIN",
"DAVIDMETZ",
"ESTHERNICHOLS",
"CAPRICEPRIMO",
"ANKUSHRAO",
"RICKSKLARZ",
"DAVIDSOKOLOVE",
"ADAMSONENSHEIN",
"AARONSTILLMAN",
"JOHNTRAVALE",
"RENATOVILLACORTE",
"JOHNMCLAUGHLIN",
"JIMMCLAUGHLIN",
"STUARTPOLK",
"KEITHZEIG",
"MARIANNECAMPBELL",
"BRIANLARKIN",
"MARGIEFILS",
"ROBSCHMIDT",
"MITCHMCCONNELL",
"MARCORUBIO",
"RICKSCOTT",
"SCOTTWALKER",
"RANDPAUL",
"JOHNMCCAIN",
"MARSHABLACKBURN",
"ROBPORTMAN",
"BILLCASSIDY",
"CORYGARDNER",
"MATTBEVIN",
"TOMCOTTON",
"JONIERNST",
"ROYBLUNT",
"PATTOOMEY",
"ERICHOLCOMB",
"RONJOHNSON",
"DANSULLIVAN",
"JOSHHAWLEY",
"THOMTILLIS",
"LARRYHOGAN",
"DAVIDPERDUE",
"THADCOCHRAN",
"PATROBERTS",
"TONYFABRIZIO",
"DAVIDLEE",
"TRAVISTUNIS",
"JOHNWARD",
"DONALDTRUMP",
"FELIXGRUCCI",
"TIMPAWLENTY",
"ROBERTBLIZZARD",
"GLENBOLGER",
"ELIZABETHHARRINGTON",
"JIMHOBART",
"PATRICKLANNE",
"JARRETLEWIS",
"NICOLEMCCLESKEY",
"BILLMCLNTURFF",
"GEORGENASSAR",
"NEILNEWHOUSE",
"MICAHROBERTS",
"GENEULM",
"CHRISTOPHERANDREWS",
"CASSIEBAUSERMAN",
"JAREDBEARD",
"TORIEBOLGER",
"BRADEBERSOLE",
"CHASEFOWERS",
"GABEIMBER",
"LUKEJACKSON",
"JULIAHALL",
"BECKYKRAMER",
"DANIELLUONGO",
"KAROLINEMCGRAIL",
"TORIEMILLER",
"KRISTIMILUSKI",
"LINDAMONTFORT",
"GORDONPRICE",
"NOAHRUDNICK",
"ANDREWSENESAC",
"NASHSTAMSON",
"JAMIEWADOVICK",
"DAVEWILSON",
"STEFANHANKIN",
"BENNETTLIPSCOMB",
"ANNEHAZLETT",
"SAMANTHANELSON",
"MAHAMEDOMAR",
"JONZAFF",
"SHAYNAENGLIN",
"MARYMACLEANASBILL",
"TESSVANDENDOLER",
"CHRISPERKINS",
"RYANSTEUSLOFF",
"MATTGAMMON",
"DANIELNARVAIZ",
"WILLDAWSON",
"JOHNVINSON",
"ADAMRAEZLER",
"CHELSEAGOODALE",
"AUSTINORR",
"JORDANPAWLICKI",
"JUSTINDURAN",
"RYANRESNICK",
"DREWDAHLBERG",
"NICKYTRUCIOS",
"CELINDALAKE",
"ALYSIASNELL",
"DAVIDMERMIN",
"ROBERTMEADOW",
"DANIELGOROFF",
"JOSHUAULIBARRI",
"ROBERTHILLMAN",
"ALANROSENBLATT",
"ANDERSONGARDNER",
"JONATHANVOSS",
"CATEGORMLEY",
"DANSPICER",
"MERYLO'BRYAN",
"COREYTETER",
"JESSEKLINE",
"KELSEYBULLS",
"CHRISTINEFREDERICK",
"SAHILMEHROTRA",
"EMILYCARAMELLI",
"LINDSEYBUTTEL",
"TIMOTHYDIXON",
"BEAUSALANT",
"EMILYGARNER",
"PATRICKRARDIN",
"DEREKBRIZENDINE",
"HENRYCRAWFORD",
"MATTEBERIE",
"GRETCHENPFAU",
"ADAMGELLER",
"DANIELLAGIAMBATTISTA",
"SAMANTHABARTHEL",
"DAVEPINE",
"CAROLEGROOM",
"DONHORSLEY",
"WARRENSLOCUM",
"DAVIDCANEPA",
"DAVINAHURT",
"WARRENLIEBERMAN",
"JULIAMATES",
"CHARLESSTONE",
"TOMMCCUNE",
"DIANEPAPAN",
"AMOURENCELEE",
"RICKBONILLA",
"JOEGOETHALS",
"ERICRODRIGUEZ",
"RICOMEDINA",
"IRENEO’CONNELL",
"MARTYMEDINA",
"LAURADAVIS",
"MICHAELSALAZAR",
"IANBAIN",
"DIANEHOWARD",
"ALICIAAGUIRRE",
"JANETBORGENS",
"GISELLEHALE",
"SHELLYMASUR",
"DIANAREDDY",
"RAYMONDBUENAVENTURA",
"GLENNSYLVESTER",
"JUSLYNMANALO",
"PAMELADIGIOVANNI",
"RODDAUS-MAGBUAL",
"KARYLMATSUMOTO",
"RICHGARBARINO",
"MARKADDIEGO",
"MARKNAGALES",
"BUENAFLORNICOLAS",
"REBECCAGREENE",
"DIANEBOWDY",
"MARKGARCEAU",
"LAURAAGOSTO",
"LAURENAMAIO",
"SELMAATTRIDE",
"ROWHANBAPTISTE",
"J.ANDREWBATCHELLER",
"AIDANBARRETT",
"ANDREWBAUMANN",
"FASHARRABRANAGAN",
"MARIOBROSSARD",
"MELISSABELL",
"MORGANBELL",
"ROBERTBIBEL",
"LAURENBIERMAN",
"BENJAMINBILENKI",
"ERINBILLINGS",
"PHILIPBOLTON",
"LAURENBORGHARD",
"MATTHEWBRIGSTOCK",
"DANIELBURKE",
"MATTCANTER",
"CELESTECARSWELL",
"ANGELACERVERAVICENZO",
"WILLISCHEN",
"JOHNCIPRIANI",
"JAMESDARLEY",
"SCOTTDAVIS",
"JAMESDELOREY",
"ANDREWDISANTO",
"GAVANDRISCOLL",
"ANNADURRETT",
"ERICEGAN",
"TAYLOREVANS",
"KERRIFAGAN",
"MAURAFARRELL",
"JOSEPHFERRIS",
"MARYANNEFORSYTHE",
"LACHLANFRANCIS",
"KATHERINEGARRITY",
"AKASHGEJJAGARAGUPPE",
"THERESAGILBERT",
"NICKGOUREVITCH",
"JASONGREEN",
"LARAHELM",
"JOSIAHHERNANDEZ",
"ANDREWHO",
"JULIEHOOTKIN",
"ALEXIVEY",
"NICOLEJACONETTY",
"TIFFANYJEFFREY",
"CARTERJOHNSON",
"ALEXANDERJONES",
"WILLJORDAN",
"JULIEJUNG",
"BENKEENAN",
"LIANAKLIPPEL",
"ANGELAKUEFLER",
"JUSTINLAPATINE",
"NATHANLEE",
"STEPHANIELERCH",
"MARCLITVINOFF",
"HILARYLYONS",
"JACOBMANSER",
"CALESHIAMARSON",
"MARJORIEMCCARTHY",
"TANYAMECK",
"CARLYMEYERSON",
"ROYOCCIOGROSSO",
"MARISSAPADILLA",
"JIMPAPA",
"LUKEPARTRIDGE",
"JEFFREYPLAUT",
"JEFREYPOLLOCK",
"JENNIFERREA",
"VICKYREING",
"ADAMRAPFOGEL",
"STEPHENRIGGS",
"AMYRONG",
"OLIVIAZAYASRYAN",
"JOHNSCHIUMO",
"STEPHENSIGMUND",
"JONSILVAN",
"JOANNATEITELBAUM",
"SHADTURNEY",
"WILLWARREN-O'BRIEN",
"DORISVILLEGAS",
"TJWETMORE",
"EMILYWILLIAMS",
"DREWWILLIAMS",
"MICHELLEWOODRUFF",
"SOPHIEWRIGHT",
"ALYSSAYEAGER",
"DANAYEGANIAN",
"YIYIN",
];