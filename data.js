/* ====== SITE CONTENT (source of truth = user's text + resume) ====== */
window.SITE = {
  profile: {
    name: "Elva Wang",
    headline: "I design learning experiences, research-driven strategies, and data-informed products.",
    summary: "I'm a learning designer and product strategist finishing an M.Ed. in Learning Design & Innovation Technology at Harvard. I work across three modes — designing learning experiences, building research-driven strategy, and turning data into decisions — for universities, museums, conferences, and early-stage products.",
    email: "wangjx1206@gmail.com",
    phone: "(339) 545-6597",
    linkedin: "https://www.linkedin.com/", // replace with your profile URL
    resume: "assets/Elva_Wang_Resume.docx"
  },

  categories: {
    learning:  { key:"learning",  name:"Learning Design",            blurb:"Turning research into learning experiences and curriculum strategy." },
    marketing: { key:"marketing", name:"Marketing & Event Strategy", blurb:"Positioning, programming, and operations for conferences and growth." },
    data:      { key:"data",      name:"Data-Driven Insights",       blurb:"Evaluation, econometrics, and machine learning that inform decisions." }
  },

  // "How I Work" — a real sequence, so the numbering carries meaning
  process: [
    { label:"Research",   text:"Interviews, surveys, observations, and source synthesis to ground the problem." },
    { label:"Synthesis",  text:"Pattern-finding across qualitative and quantitative data into clear insights." },
    { label:"Strategy",   text:"Framing the decision and shaping a coordinated plan, not a list of options." },
    { label:"Design",     text:"Building the artifact — curriculum, product, program, or model." },
    { label:"Evaluation", text:"Testing against real outcomes and refining what ships." }
  ],

  // homepage featured row (ids)
  featured: ["yousan","ham","amcham","istanbul","quant","camlab"],

  projects: [
    /* ============================ LEARNING DESIGN ============================ */
    {
      id:"istanbul", cat:"learning",
      title:"Preparing Istanbul Aydın University for the Future of Work",
      tag:"A university-wide AI & digital literacy transformation strategy",
      role:"Learning Design Consultant",
      org:"Istanbul Aydın University · Harvard GSE", period:"Jan – May 2026",
      hero:{ img:"assets/istanbul_coverpage.png" },
      card:{
        desc:"A coordinated AI & digital-literacy strategy for a 40,000+ student university, grounded in a 222-faculty needs assessment.",
        thumb:"assets/istanbul_coverpage.png",
        methods:["Needs Assessment","Curriculum Strategy","Survey Analysis","Implementation Roadmapping"]
      },
      problem:"AI was reshaping workforce expectations, but IAU had no coordinated structure for AI literacy, data literacy, or responsible technology use. Faculty capability varied widely by department, and students' digital readiness depended too heavily on their program of study.",
      body:[
        { t:"process", items:[
          { label:"Research & Benchmarking", points:[
            "Synthesized 15+ sources on workforce readiness, AI literacy, and higher-education transformation.",
            "Reviewed peer institutions on faculty development, student digital preparation, and university-wide AI adoption."
          ]},
          { label:"Needs Assessment", points:[
            "Analyzed survey responses from 222 faculty across departments to map gaps in AI training, student readiness, and institutional guidance.",
            "Found that 82% of faculty had received no formal AI training, while 72% wanted clearer institutional AI guidance."
          ], figs:[
            { src:"assets/istanbul_facultysurvey1.png", cap:"Faculty survey snapshot (n=222): formal AI training, confidence detecting AI misuse, and AI integration." },
            { src:"assets/istanbul_facultysurvey3.png", cap:"Faculty rated student digital skills below \u201cadequate\u201d on every dimension — data interpretation and critical online evaluation lowest." },
            { src:"assets/istanbul_facultysurvey2.png", cap:"72% of faculty wanted proactive guidance, clear rules, or full integration; only 5% favored restrictions or bans." }
          ]},
          { label:"Strategy Design", points:[
            "Developed a three-pillar strategy across faculty development, student preparation, and university-wide AI policy.",
            "Structured the recommendations as one coordinated initiative rather than separate interventions."
          ], figs:[
            { src:"assets/istanbul_3pillar.png", cap:"Three interdependent pillars designed to move together as a single initiative." }
          ]},
          { label:"Implementation Planning", points:[
            "Built a phased roadmap covering pilot launch, faculty training, student rollout, and policy adoption.",
            "Designed the rollout to scale from selected pilot faculties to institution-wide integration over time."
          ], figs:[
            { src:"assets/istanbul_roadmap.png", cap:"Phased roadmap from pilot faculties (Months 0–3) to institutional governance (Year 1+)." }
          ]}
        ]},
        { t:"metrics", items:[
          {v:"222", l:"faculty surveyed"},
          {v:"40,000+", l:"students in scope"},
          {v:"3,000+", l:"academic staff"},
          {v:"4", l:"roadmap phases"}
        ]},
        { t:"recs", title:"Final deliverables", items:[
          { h:"Transformation strategy", p:"An AI & Digital Literacy Transformation Strategy for a university serving 40,000+ students and 3,000+ academic staff." },
          { h:"Three-pillar framework", p:"An institutional framework spanning faculty training, student learning, and responsible AI governance." },
          { h:"Phased roadmap", p:"An implementation plan across 0–3, 3–6, 6–12 months, and year 1+." },
          { h:"Success framework", p:"Metrics tied to faculty capability, student readiness, and institutional adoption." }
        ]}
      ],
      skills:["Learning Design","Curriculum Strategy","Workforce Research","AI Literacy","Data Literacy","Higher-Ed Strategy","Faculty Development","Needs Assessment","Survey Analysis","Stakeholder Analysis","Change Management","Implementation Roadmapping","Evaluation Design","Miro","Excel"]
    },

    {
      id:"ai-platform", cat:"learning",
      title:"AI-Powered Course & Career Planning Platform",
      tag:"Helping students connect course choices to long-term goals",
      role:"Learning Product Designer",
      org:"Harvard University · MIT", period:"Sept – Dec 2025",
      hero:{ img:"assets/ai_impact.png" },
      card:{
        desc:"An AI course-recommendation platform that links academic pathways to career goals — validated through 20+ interviews and a semantic-mapping recommendation framework.",
        thumb:"assets/ai_impact.png",
        methods:["UX Research","Product Discovery","AI Recommendation Design","Go-to-Market"]
      },
      problem:"Students often pick courses without seeing how those choices connect to future goals. Registration systems handle scheduling but offer little guidance for goal-oriented academic and career decisions.",
      body:[
        { t:"process", items:[
          { label:"User Research", points:[
            "Conducted 20+ student and faculty interviews, surveys, and usability tests on course selection and career planning.",
            "Identified pain points around unclear career goals, course relevance, and academic decision-making."
          ]},
          { label:"Product Definition", points:[
            "Translated research findings into product requirements, user stories, and MVP feature priorities."
          ]},
          { label:"AI Recommendation Design", points:[
            "Designed an AI recommendation framework connecting academic pathways, skills, and career interests.",
            "Used semantic mapping and career-interest lexicons with LLM-assisted prototyping to surface relevant pathways."
          ]}
        ]},
        { t:"video", src:"assets/ai.mov", cap:"Prototype walkthrough of the recommendation flow." },
        { t:"metrics", items:[
          {v:"+13%", l:"students' ability to articulate interests & pathways"},
          {v:"20+", l:"interviews & usability sessions"},
          {v:"$1M", l:"pre-seed / seed target"},
          {v:"20+", l:"target university partners"}
        ]},
        { t:"recs", title:"Final deliverables", items:[
          { h:"Recommendation framework", p:"An AI-driven framework linking academic pathways with workforce outcomes." },
          { h:"Measured learning gain", p:"Improved students' ability to articulate career interests and course pathways by 13%." },
          { h:"Product roadmap", p:"A scalable roadmap for future feature development and platform growth." },
          { h:"Funding strategy", p:"A B2B funding and partnership strategy targeting university adoption." }
        ]}
      ],
      skills:["Product Management","Learning Experience Design","User Research","Product Discovery","User Stories","MVP Prioritization","AI Product Strategy","LLM Prototyping","Recommendation Systems","Go-to-Market Strategy","SaaS Strategy","Figma","Miro","Notion"]
    },

    {
      id:"yousan", cat:"learning",
      title:"YouSan \u5098",
      tag:"An umbrella that remembers those who walked beside you",
      role:"Learning Experience Designer & Product Manager",
      org:"MIT Media Lab — Tangible Interface", period:"Sept – Dec 2025",
      hero:{ img:"assets/yousan_coverpage.png" },
      card:{
        desc:"An AI-integrated interactive umbrella that turns rain, touch, and movement into shared sensory stories — making telepresence tangible through a functional Arduino prototype.",
        thumb:"assets/yousan_coverpage.png",
        methods:["LX Design","HCI Research","Rapid Prototyping","Hardware–Software"]
      },
      problem:"Telepresence stays abstract for most people. Communication tools enable connection but rarely create a felt sense of presence and shared experience.",
      body:[
        { t:"process", items:[
          { label:"Product Vision & Learning Goals", points:[
            "Defined product vision and learning objectives through 30+ research papers on telepresence, memory, and embodied learning."
          ], figs:[
            { src:"assets/yousan_usersenario.png", cap:"Two interaction modes — present and absent — translate a companion's heat, sound, and touch into the umbrella's interior surface." }
          ]},
          { label:"Product Requirements", points:[
            "Translated research insights into product requirements and coordinated development across hardware, software, and interaction design."
          ], figs:[
            { src:"assets/yousan_hardware_workflow.png", cap:"Hardware pipeline: thermal sensor and touch input through an ESP32-S3 controller to fisheye projection on the umbrella interior." },
            { src:"assets/yousan_software_workflow.png", cap:"Software: a sensor-to-projector data flow and a state machine driving record / replay interactions, with a custom debugging UI." }
          ]},
          { label:"Prototype & Testing", points:[
            "Ran user research and iterative testing to refine usability and engagement, improving concept understanding by 36%."
          ]},
          { label:"Experience Design", points:[
            "Delivered interaction scenarios translating environmental inputs into shared sensory experiences."
          ], figs:[
            { src:"assets/yousan_hero_prototype_photo.png", cap:"Functional prototype: projector base, copper-tape touch bands, and the responsive umbrella canopy." }
          ]}
        ]},
        { t:"metrics", items:[
          {v:"+36%", l:"concept understanding"},
          {v:"4", l:"interaction experiences"},
          {v:"30+", l:"studies synthesized"},
          {v:"5–6 wk", l:"build cycle"}
        ]},
        { t:"recs", title:"Final deliverables", items:[
          { h:"Functional prototype", p:"Integrated Arduino sensors, PCB systems, and interactive feedback mechanisms into a working umbrella." },
          { h:"Four interactions", p:"Transformed rain, touch, and movement into shared sensory stories." },
          { h:"Proof of concept", p:"Showed tangible interfaces can make telepresence more understandable and emotionally engaging." },
          { h:"Design principles", p:"Generated principles for turning abstract concepts into memorable learning experiences." }
        ]}
      ],
      skills:["Learning Experience Design","Product Strategy","Product Management","Human-Computer Interaction","UX Research","User Testing","Interaction Design","Embodied Learning","Telepresence Design","Rapid Prototyping","Hardware–Software Coordination","Arduino","PCB Systems","Sensor Design","Figma","Miro"]
    },

    {
      id:"atrium", cat:"learning", status:"In progress",
      title:"Atrium",
      tag:"Strategy & learning design for a nonprofit's next five years",
      role:"Strategy & Learning Design Consultant",
      org:"Atrium, Cambridge MA", period:"Jan 2026 – present",
      card:{
        desc:"Building a FY2027–FY2031 strategic planning framework and station-based learning workshops for nonprofit financial stewardship.",
        methods:["Strategic Planning","SWOT","Learning Design","Workshop Design"]
      }
      /* upcoming — no detail page */
    },

    /* ====================== MARKETING & EVENT STRATEGY ====================== */
    {
      id:"camlab", cat:"marketing",
      title:"Harvard CAMLab — HCI Conference Launch Strategy",
      tag:"A 0-to-1 launch strategy for a new Human–Computer Interaction conference",
      role:"Program Strategy & Operations Manager",
      org:"Harvard FAS CAMLab", period:"May – Sept 2024",
      hero:{ img:"assets/camlab_coverpage.png" },
      card:{
        desc:"Launch strategy for a new HCI conference — market research across 150+ programs, positioning, nine theme tracks, outreach systems, and two-year budget scenarios.",
        thumb:"assets/camlab_coverpage.png",
        methods:["Market Research","Positioning","Stakeholder Outreach","Budget Modeling"]
      },
      audience:["Academic researchers & institutions (HCI, AI, Digital Humanities)","Industry practitioners & sponsors","Graduate students & emerging researchers"],
      problem:"Position a brand-new conference at the intersection of HCI, AI, and public engagement — bridging academic research and real-world application — and build the operational backbone to launch it.",
      body:[
        { t:"process", items:[
          { label:"Roadmap", points:[
            "Constructed a 9–12 month conference roadmap covering research, program design, outreach, operations, marketing, and financial planning."
          ], figs:[
            { src:"assets/camlab_roadmap.png", cap:"High-level approach: an open call feeding a hybrid academic-industry conference, then exhibition outcomes." }
          ]},
          { label:"Market Research", points:[
            "Analyzed 150+ HCI, AI, and interdisciplinary conferences, labs, and programs to identify positioning opportunities.",
            "Conducted stakeholder interviews to assess audience needs, speaker interests, and partnership opportunities."
          ]},
          { label:"Program Design", points:[
            "Evaluated and prioritized 9 conference themes and speaker tracks by audience relevance and institutional goals."
          ], figs:[
            { src:"assets/camlab_paneltopics.png", cap:"Theme conception mapped across Self / Other / World and Past / Present / Future to balance the program." },
            { src:"assets/camlab_operation2.png", cap:"Operational structure for the conference phase: format, scale, and session types." }
          ]},
          { label:"Outreach & Operations", points:[
            "Designed outreach workflows and communication tracking for speakers, sponsors, and partners.",
            "Developed operational plans for logistics, budgeting, launch milestones, and post-conference engagement."
          ], figs:[
            { src:"assets/camlab_marketingstructure.png", cap:"Marketing strategy across content, media relations, partner ecosystem, and participant experience." }
          ]}
        ]},
        { t:"metrics", items:[
          {v:"150+", l:"programs analyzed"},
          {v:"+28%", l:"outreach effectiveness"},
          {v:"9", l:"theme tracks"},
          {v:"30–40", l:"target speakers"}
        ]},
        { t:"recs", title:"Results", items:[
          { h:"Strategic positioning", p:"Defined the conference's positioning, theme selection, and target audience." },
          { h:"Outreach lift", p:"Improved outreach effectiveness by 28% through structured communication workflows." },
          { h:"Repeatable framework", p:"Established a reusable framework for conference planning, stakeholder management, and future events." },
          { h:"Implementation plans", p:"Produced plans across programming, operations, marketing, and budget scenarios." }
        ]}
      ],
      skills:["Program Strategy","Market Research","STP / Positioning","Stakeholder Management","Outreach Workflow Design","Budget Scenario Modeling","Event Operations","Financial Modeling","Figma","Excel"]
    },

    {
      id:"amcham", cat:"marketing",
      title:"AmCham China — 2022 Technology & Innovation Summit",
      tag:"Research and operations for a full-day tech & policy summit",
      role:"Research & Event Operations Intern",
      org:"American Chamber of Commerce in China · Hilton Beijing", period:"2022",
      hero:{ img:"assets/amcham_site.jpg" },
      card:{
        desc:"Research, panel content, and on-site operations for a 300-attendee summit on AI, energy, NEVs, and healthcare tech — five keynotes and four panels.",
        thumb:"assets/amcham_site.jpg",
        methods:["Policy & Industry Research","Panel Development","Event Operations","Bilingual Comms"]
      },
      problem:"Help member companies understand how emerging technologies, policy shifts, and cross-sector innovation were reshaping business opportunity and risk in China.",
      body:[
        { t:"process", items:[
          { label:"Research", points:[
            "Researched AI, semiconductors, the CHIPS Act, new energy vehicles, healthcare technology, data governance, and digital transformation to support topic development."
          ]},
          { label:"Speaker & Panel Prep", points:[
            "Built speaker research notes from backgrounds, past talks, company expertise, and policy relevance.",
            "Drafted panel topics, moderator questions, and speaker briefing points for internal review."
          ]},
          { label:"Bilingual Campaigns & Tracking", points:[
            "Prepared and translated bilingual (EN/CN) promotion and participant materials.",
            "Managed participant and accounting trackers for registration, payments, reconciliation, and follow-up."
          ]},
          { label:"Event-Day Execution", points:[
            "Ran check-in, badges, room setup, timekeeping, speaker logistics, vendor coordination, and troubleshooting."
          ], figs:[
            { src:"assets/amcham_site2.jpg", cap:"Panel: Future of AI and Digital Transformation in China.", grid:true },
            { src:"assets/amcham_site3.jpg", cap:"Panel: Sustainable Technology in the Energy Industry.", grid:true },
            { src:"assets/amcham_site4.jpg", cap:"Panel: Exploring Innovation in the Automotive Industry — New Energy Vehicles.", grid:true },
            { src:"assets/amcham_site5.jpg", cap:"Panel: Digital Technology — Shaping the Future of Healthcare.", grid:true }
          ]}
        ]},
        { t:"metrics", items:[
          {v:"300", l:"attendees"},
          {v:"5", l:"keynotes"},
          {v:"4", l:"panel discussions"},
          {v:"4", l:"summit themes"}
        ]},
        { t:"recs", title:"Results", items:[
          { h:"Full-day summit", p:"Supported a 300-attendee summit with 5 keynotes and 4 panels." },
          { h:"Research & briefings", p:"Contributed across AI, energy, automotive innovation, and healthcare technology." },
          { h:"Speaker preparation", p:"Prepped executives from CSIS, Merck, SIA, Meta, Zhong Lun, LinkedIn, Zoom, Honeywell, ExxonMobil, Audi, Microsoft, and Abbott." },
          { h:"End-to-end ownership", p:"Maintained trackers and supported the full cycle from research to on-site execution and closeout." }
        ]}
      ],
      skills:["Policy Research","Industry Research","Speaker Research","Panel Question Development","Event Operations","Bilingual Communication","Campaign Translation","Participant Tracking","Accounting Reconciliation","Vendor Coordination","Excel","GlueUp CRM","WeChat","Email Marketing"]
    },

    {
      id:"hccf", cat:"marketing",
      title:"Harvard China Education Forum — Heritage & Youth Learning",
      tag:"Strategy, planning, and reporting for a cultural-learning forum",
      role:"Team Leader & Program Strategy Lead",
      org:"Harvard China Education Forum", period:"Special Event",
      hero:{ img:"assets/hccf.png", wide:true },
      card:{
        desc:"Led strategy and delivery of a 90-minute forum connecting intangible cultural heritage, project-based learning, and youth identity — three keynotes and a roundtable.",
        thumb:"assets/hccf.png",
        methods:["Program Strategy","Agenda Design","Guest Strategy","Team Leadership"]
      },
      problem:"Create a learning-centered forum showing how intangible cultural heritage can support youth identity, cultural confidence, and project-based learning in contemporary education.",
      body:[
        { t:"process", items:[
          { label:"Program Logic", points:[
            "Led the team in developing the event proposal, theme narrative, speaker structure, agenda, and final report.",
            "Built the program logic connecting intangible cultural heritage, PBL, cultural confidence, and youth meaning-making."
          ]},
          { label:"Agenda Design", points:[
            "Designed a 90-minute agenda with keynote talks, speaker transitions, roundtable discussion, audience Q&A, and closing reflection."
          ]},
          { label:"Guest Strategy", points:[
            "Coordinated guests across academics, cultural practitioners, education innovators, and media voices."
          ]},
          { label:"Team & Execution", points:[
            "Managed workflow across publicity, guest communication, rehearsal, hosting scripts, audience engagement, and post-event documentation."
          ]}
        ]},
        { t:"metrics", items:[
          {v:"90 min", l:"forum runtime"},
          {v:"3", l:"keynote sessions"},
          {v:"7", l:"discussion questions"},
          {v:"5", l:"promotion posts"}
        ]},
        { t:"recs", title:"Results", items:[
          { h:"Cultural learning forum", p:"Delivered a 90-minute forum with 3 keynote sessions and a 30-minute roundtable / Q&A." },
          { h:"Multi-perspective lineup", p:"Built a guest structure across heritage research, public art/design, nonprofit education, and new media." },
          { h:"Discussion design", p:"Developed 7 questions connecting heritage with PBL, youth identity, AI/digital media, and cultural confidence." },
          { h:"Reusable assets", p:"Produced a proposal, rundown, host script, deck, interaction copy, recap, and final report." }
        ]}
      ],
      skills:["Program Strategy","Agenda Design","Guest Curation","Team Leadership","Bilingual Communication","Event Operations","Audience Engagement","Final Report Writing"]
    },

    /* ========================= DATA-DRIVEN INSIGHTS ========================= */
    {
      id:"ham", cat:"data",
      title:"Harvard Art Museums — Evaluating Visitor Learning",
      tag:"A formative evaluation of the Art + Science Initiative",
      role:"Program Evaluator (team of 4)",
      org:"Harvard Art Museums · Harvard GSE", period:"Jan – May 2026",
      hero:{ img:"assets/ham_coverpage.png" },
      card:{
        desc:"A mixed-methods evaluation of how the Art + Science Initiative helps visitors engage with art conservation — 180 observations, 35 exit surveys, 13 interviews.",
        thumb:"assets/ham_coverpage.png",
        methods:["Formative Evaluation","Mixed-Methods","Observation Protocols","Thematic Coding"]
      },
      problem:"How effectively does the Art + Science Initiative help museum visitors notice, engage with, and understand art conservation?",
      problemLabel:"Research question",
      body:[
        { t:"framework", title:"Evaluation framework", steps:["Awareness & Engagement","Learning & Understanding","Appreciation & Future Intentions"] },
        { t:"process", items:[
          { label:"Data & Methods", points:[
            "Structured observations of 180 museum visitors across gallery labels and the Lightbox Gallery.",
            "Exit surveys from 35 visitors, follow-up interviews with 13, and gallery-talk surveys from 14.",
            "A mixed-method formative evaluation using observation, survey, interview, and thematic analysis."
          ], figs:[
            { src:"assets/ham_instruments.png", cap:"Instruments mapped to each component and learning outcome." }
          ]},
          { label:"Analysis", points:[
            "Built a logic model connecting Art + Science components to engagement, learning outcomes, and museum-level impact.",
            "Coded visitor behavior (passive, brief, active, extended, social) and analyzed by visitor type, channel, familiarity, and future interest.",
            "Triangulated observation, survey, interview, and gallery-talk data to compare reach, depth, and learning."
          ], figs:[
            { src:"assets/ham_logicmap.png", cap:"Logic model linking inputs and activities to visitor- and museum-level outcomes." }
          ]}
        ]},
        { t:"findings", title:"Key findings", items:[
          {v:"54.3%", l:"noticed gallery labels with conservation images — the strongest entry point."},
          {v:"66.7%", l:"walked past labels with no meaningful engagement; only 4.4% engaged at length."},
          {v:"77.8%", l:"of QR-code users reported improved understanding (though only 25.7% used them)."},
          {v:"1 / 35", l:"surveyed visitors reported visiting the underused Lightbox Gallery."},
          {v:"64.3%", l:"of gallery-talk attendees reported a positive shift in how they think about conservation."},
          {v:"85.7%", l:"of gallery-talk attendees wanted similar programming (62.9% of general visitors)."}
        ]},
        { t:"recs", title:"Recommendations", items:[
          { h:"Lead with labels", p:"Use gallery labels as the primary entry point, with stronger visual cues and clearer calls to action." },
          { h:"Make the Lightbox visible", p:"Add signage near stairs, elevators, and entrances to surface the Lightbox Gallery." },
          { h:"Anchor the initiative", p:"Position the Lightbox as the anchor via maps, guides, or scavenger-hunt pathways." },
          { h:"Fix the Lightbox video", p:"Improve the experience with sound or headphone support." },
          { h:"Extend gallery talks", p:"Connect talks with H/AM at Night to reach beyond repeat visitors." },
          { h:"Grow preferred formats", p:"Expand short videos and in-person talks — the formats visitors chose for the future." }
        ]}
      ],
      skills:["Formative Evaluation","Visitor Research","Learning Analytics","Mixed-Methods Research","Survey Design","Observation Protocols","Follow-Up Interviews","Thematic Coding","Cross-Tab Analysis","Logic Model Development","Data Triangulation","Excel","Python","Qualtrics"]
    },

    {
      id:"ev", cat:"data",
      title:"Global Tensions in the Electric Vehicle Market",
      tag:"Trade policy, critical minerals, and EV competitiveness",
      role:"Senior Thesis — Econometric & Policy Analysis",
      org:"Tufts University", period:"Sept 2024 – May 2025",
      hero:{ img:"assets/ev_researchframework.png", contain:true },
      card:{
        desc:"An econometric and policy analysis of how tariffs, subsidies, and lithium dependence shape EV competitiveness across 31 economies — including an Areeda-Turner predatory-pricing test.",
        thumb:"assets/ev_researchframework.png",
        methods:["Econometric Modeling","Cross-Country Regression","Scenario Analysis","Areeda-Turner Test"]
      },
      problem:"How do tariffs, subsidies, and critical-mineral dependencies shape EV competitiveness and global trade tensions?",
      problemLabel:"Research question",
      body:[
        { t:"process", items:[
          { label:"Data & Methods", points:[
            "Integrated UN Comtrade BEV exports, IEA EV/battery data, USGS lithium and critical-mineral data, and WTO tariff data.",
            "Ran cross-country regression across 31 major economies, scenario analysis, and an Areeda-Turner predatory-pricing test."
          ], figs:[
            { src:"assets/ev_method.png", cap:"Four integrated data sources feeding a comparative model across 31 economies.", contain:true }
          ]},
          { label:"Analysis Process", points:[
            "Examined whether EV tariffs act as legitimate antidumping measures or protectionist barriers, using China as a case study (export price vs. average variable cost vs. subsidies).",
            "Built a regression model testing how lithium independence, BEV market size, patent activity, and tariff exposure relate to export performance.",
            "Translated findings into policy recommendations for trade enforcement and critical-mineral strategy."
          ], figs:[
            { src:"assets/ev_analysis.png", cap:"Two analytical tracks: tariff legitimacy and long-term competitiveness.", contain:true }
          ]}
        ]},
        { t:"figure", src:"assets/ev_findings.png", contain:true, cap:"Key findings: tariff limits weighed against the structural advantage of critical-mineral and supply-chain control." },
        { t:"metrics", items:[
          {v:"31", l:"economies modeled"},
          {v:"4", l:"integrated datasets"},
          {v:"20", l:"trade relationships (scenarios)"},
          {v:"2", l:"strategic priorities"}
        ]},
        { t:"figure", src:"assets/ev_recommendations.png", contain:true, cap:"Five coordinated recommendations balancing fair competition, resilient supply chains, and EV adoption." }
      ],
      skills:["Trade Policy Analysis","Econometric Modeling","Cross-Country Analysis","Scenario Modeling","Critical Minerals Research","Tariff & Subsidy Analysis","Antidumping Policy","Areeda-Turner Test","Supply-Chain Risk","Regression Analysis","Data Cleaning","Excel","R"]
    },

    {
      id:"quant", cat:"data",
      title:"Quantitative Trading Prediction",
      tag:"A machine-learning strategy for equity trading",
      role:"ML Modeling — MIT 15.071 Analytics Edge",
      org:"MIT Sloan", period:"2025",
      hero:{ img:"assets/quant_coverpage.png", contain:true },
      card:{
        desc:"Random Forest trading signals on 100 S&P 500 stocks (1998–2025) with 60+ engineered indicators — back-tested net of costs against SPY and GLD.",
        thumb:"assets/quant_coverpage.png",
        methods:["Random Forest","Feature Engineering","Time-Series CV","Backtesting"]
      },
      problem:"Can Random Forest models generate trading signals that outperform passive SPY and GLD strategies after transaction costs?",
      problemLabel:"Research question",
      body:[
        { t:"process", items:[
          { label:"Data & Features", points:[
            "Daily OHLCV data for 100 S&P 500 stocks (1998–2025), with CBOE VIX merged to capture market risk.",
            "Engineered 60+ technical indicators across momentum, trend, volatility, volume, and cross-asset risk."
          ]},
          { label:"Modeling", points:[
            "Built a binary label for whether a stock's 3-day forward return exceeds 2%, trained with chronological splits and time-series cross-validation.",
            "Swept probability thresholds 0.30–0.45 (chose 0.37) and tested two strategies — Ensemble vs. Stock-Specific.",
            "Applied 2% take-profit, -0.5% stop-loss, and 2% vs. 5% allocation rules, back-tested net of transaction costs against SPY and GLD."
          ]}
        ]},
        { t:"findings", title:"Key findings", items:[
          {v:"$762K", l:"Stock-Specific RF grew $100K to $762K at 5% allocation — the strongest result."},
          {v:"39.4%", l:"CAGR over 6.1 years (~662% total return) for the stock-specific 5% strategy."},
          {v:"$287K", l:"the 2% allocation grew $100K to $287K (187% return, 18.8% CAGR)."},
          {v:"Beat both", l:"both RF strategies outperformed SPY and GLD buy-and-hold over the test period."}
        ]},
        { t:"gallery", items:[
          { src:"assets/quant_result1.png", cap:"Stock-Specific RF portfolio vs. SPY and GLD benchmarks, net of costs.", contain:true },
          { src:"assets/quant_result2.png", cap:"Stock-Specific equity curve: 5% vs. 2% allocation.", contain:true },
          { src:"assets/quant_result3.png", cap:"Ensemble portfolio vs. benchmarks — smoother curve, lower returns.", contain:true }
        ]},
        { t:"recs", title:"Recommendations", items:[
          { h:"Higher-risk profile", p:"Use the Stock-Specific strategy for investors seeking stronger return potential." },
          { h:"Conservative profile", p:"Use the Ensemble strategy for smoother drawdowns and lower trading frequency." },
          { h:"Decision support", p:"Treat model signals as decision support, not fully automated trading." },
          { h:"Risk controls", p:"Pair signals with stop-loss, take-profit, allocation limits, and transaction-cost modeling." }
        ]}
      ],
      skills:["Machine Learning","Random Forest","Quantitative Finance","Algorithmic Trading","Feature Engineering","Time-Series Cross-Validation","Backtesting","Portfolio Analytics","Threshold Optimization","Risk Management","Transaction-Cost Modeling","Data Cleaning","R","Excel"]
    },

    {
      id:"tgtg", cat:"data",
      title:"Too Good To Go — Student Growth Strategy",
      tag:"Turning surprise-bag uncertainty into student adoption",
      role:"Marketing Strategy — MIT Marketing Innovation",
      org:"MIT Sloan", period:"Jan – May 2026",
      hero:{ img:"assets/tgtg_position.png", contain:true },
      card:{
        desc:"A student growth plan built on a 30-student survey and conjoint analysis — reframing the core barrier from awareness to purchase uncertainty.",
        thumb:"assets/tgtg_position.png",
        methods:["STP","Conjoint Analysis","4P Strategy","Funnel Analytics"]
      },
      problem:"Students liked the concept but hesitated — the surprise bag felt risky. The real growth barrier wasn't awareness; it was uncertainty around portion size, food quality, taste, and pickup convenience.",
      body:[
        { t:"figure", src:"assets/tgtg_3c.png", contain:true, cap:"3C framing: students want filling, reliable meals; TGTG turns surplus into discounted meals; existing options each solve only part of the problem." },
        { t:"process", items:[
          { label:"Segmentation & Positioning", points:[
            "Segmented students and positioned Too Good To Go as a convenient, affordable, waste-reducing meal from nearby restaurants."
          ]},
          { label:"Customer Research", points:[
            "Ran a survey and conjoint analysis with 30 college students to identify adoption barriers and purchase drivers.",
            "Used conjoint to compare preferences across food type, price, vendor familiarity, and pickup convenience."
          ], figs:[
            { src:"assets/tgtg_conjointanalysis.png", cap:"Conjoint ranking: value for money and food quality far outranked restaurant familiarity and reducing food waste.", contain:true }
          ]},
          { label:"4P Strategy", points:[
            "Designed a 4P strategy: clearer product labels, campus-based pickup distance, first-purchase discounts, peer-ambassador campaigns, and student-friendly pricing."
          ], figs:[
            { src:"assets/tgtg_4p.png", cap:"Product & place: make the surprise bag feel like dinner nearby.", grid:true, contain:true },
            { src:"assets/tgtg_4p2.png", cap:"Promotion: make the first purchase feel peer-approved, not risky.", grid:true, contain:true },
            { src:"assets/tgtg_4p3.png", cap:"Price: a two-tier model balancing adoption and platform profit.", grid:true, contain:true }
          ]},
          { label:"Funnel Analysis", points:[
            "Built a funnel to find the largest value leak between interest and purchase."
          ], figs:[
            { src:"assets/tgtg_funnel.png", cap:"The drop happens at \u201cconfident enough to try\u201d — realized value lands near $60 per 100-student cohort.", contain:true }
          ]}
        ]},
        { t:"metrics", items:[
          {v:"~$60", l:"realized value / 100-student cohort"},
          {v:"30", l:"students surveyed"},
          {v:"4", l:"conjoint attributes"},
          {v:"2", l:"pricing tiers proposed"}
        ]},
        { t:"recs", title:"Recommendations", items:[
          { h:"Reduce uncertainty", p:"Add clearer meal tags, portion expectations, and review-backed trust signals." },
          { h:"Show proximity", p:"Surface campus-based distance estimates to make pickup feel convenient." },
          { h:"Two-tier pricing", p:"Offer a low-barrier trial tier and a full-meal tier to balance adoption and profit." },
          { h:"Lead with value", p:"Emphasize complete meals and low price — what students ranked highest." }
        ]}
      ],
      skills:["Marketing Strategy","STP Analysis","4P Strategy","Customer Research","Conjoint Analysis","Survey Design","Funnel Analytics","Pricing Strategy","Consumer Behavior","Positioning Map","Sawtooth","Excel","Canva"]
    }
  ],

  /* ================================ CV ================================ */
  cv:{
    education:[
      { school:"Harvard University", loc:"Cambridge, MA", date:"May 2026",
        deg:"M.Ed. in Learning Design & Innovation Technology",
        notes:["Coursework: Formative Evaluation for Education Product Development, Strategic Finance for Nonprofit, Leadership in Higher-Ed, Future of Work, Culture & Art Education Policy, Impact by Design","MIT cross-registration: Tangible Interface (Media Lab), The Analytics Edge, Marketing Innovation"] },
      { school:"Tufts University", loc:"Medford, MA", date:"Sept 2020 – May 2025",
        deg:"B.A. International Economics · B.F.A. Digital Design",
        notes:["Focus: Energy Economy, International Trade, Econometrics"] }
    ],
    experience:[
      { org:"Artrium", loc:"Cambridge, MA", role:"Strategy & Learning Design Consultant", date:"Jan 2026 – present", bullets:[
        "Built a FY2027–FY2031 strategic planning framework guiding fundraising, governance, and growth by diagnosing misalignment between proposed nonprofit identity and operating model through SWOT and the Strategic Triangle.",
        "Designed a 3-hour interactive onboarding workshop on accounting controls, converting nonprofit financial systems into five station-based learning activities."
      ]},
      { org:"Harvard FAS CAMLab", loc:"Cambridge, MA", role:"Program Manager (part-time)", date:"May – Sept 2024", bullets:[
        "Built a 0-to-1 Figma operational roadmap for a 9–12-month inaugural HCI conference, coordinating open-call workflows, logistics, 30–40 speakers, and post-conference planning.",
        "Improved outreach sequencing by 28% for 30+ funders, speakers, and partners via a digital outreach strategy and Excel scheduling tracker.",
        "Directed STP market strategy informing 9 conference themes by synthesizing HCI and AI research from 150+ scholars and programs.",
        "Built 2-year budget scenarios in Excel covering venue, speaker, technology, staffing, and marketing costs."
      ]},
      { org:"American Chamber of Commerce in China", loc:"Beijing, China", role:"Membership & Marketing Intern", date:"Sept 2022 – May 2023", bullets:[
        "Managed end-to-end execution for 5 in-person conferences (500+ attendees) and 100+ roundtables and virtual programs.",
        "Drove a 10% increase in event registration by designing bilingual (EN/CN) invitations, newsletters, and social posts across Email and WeChat.",
        "Improved outreach efficiency by 12% across 500+ corporate contacts by optimizing GlueUp CRM workflows.",
        "Drafted the annual Healthcare White Paper Report with a senior policy advisor, applying data cleaning in R."
      ]},
      { org:"Alesian Investment Group", loc:"Los Angeles, CA", role:"Strategy & Business Development Associate (part-time)", date:"May 2024 – Jan 2025", bullets:[
        "Boosted client interest by 35% by researching scholarly references for 100+ artworks and shaping client-facing narratives.",
        "Drove a 15% increase in inbound pitch requests through buyer segmentation across institutional, private, and corporate clients.",
        "Built an HTML-based internal catalog used weekly by cross-functional teams."
      ]},
      { org:"TikTok", loc:"Shanghai, China", role:"Talent Acquisition Intern", date:"June – Sept 2022", bullets:[
        "Hired 60+ people bi-monthly across 15 customer-service teams in London, Singapore, and Malaysia.",
        "Improved conversion outcomes by 35% by maintaining hiring trackers and surfacing funnel friction points."
      ]}
    ],
    projects:[
      { org:"Harvard Art Museums", role:"Program Evaluator — Formative Evaluation", date:"Jan – May 2026", bullets:[
        "Led a team of 4 to structure an end-to-end evaluation plan for the Art + Science Initiative.",
        "Executed mixed-method data collection across 4+ sessions and 200+ data points; surfaced 15 friction points and 6 design recommendations using Excel and Python."
      ]},
      { org:"Istanbul Aydın University", role:"Learning Design Consultant", date:"Jan – May 2026", bullets:[
        "Synthesized 15+ data sources and 300+ survey responses to diagnose workforce-readiness gaps.",
        "Designed a three-pillar digital literacy strategy reaching 5,000 faculty with phased 12-month roadmaps."
      ]},
      { org:"Harvard University", role:"AI-Integrated Registration System", date:"Sept – Dec 2025", bullets:[
        "Translated 20+ interviews into product requirements and user stories; improved students' ability to articulate interests by 13%.",
        "Proposed a B2B go-to-market strategy targeting $1M pre-seed/seed across 20+ universities."
      ]},
      { org:"MIT Sloan", role:"Too Good To Go Marketing Plan", date:"Jan – May 2026", bullets:[
        "Surfaced 3 top consumer needs via a 30-student survey and perceptual mapping; designed a conjoint analysis in Sawtooth across 4 attributes.",
        "Increased purchase intent by 18% via A/B testing; identified the consideration stage as the conversion bottleneck."
      ]},
      { org:"MIT Tangible Interface", role:"PM & UX Researcher — YouSan", date:"Sept – Dec 2025", bullets:[
        "Aligned a hardware/software team on 4 use cases and reduced concept ambiguity by 36% by synthesizing 30+ HCI studies.",
        "Delivered a functional prototype across Arduino sensors, PCB, and control logic over 5–6 weeks."
      ]},
      { org:"MIT Sloan", role:"Quantitative Trade ML-Modeling", date:"Sept – Dec 2025", bullets:[
        "Delivered ~39% CAGR ($100K → $762K), outperforming SPY/GLD over 5 years with a Random Forest equity strategy and 60+ engineered indicators."
      ]},
      { org:"MIT Sloan", role:"Customer Churn ML-Modeling", date:"Sept – Dec 2025", bullets:[
        "Achieved 77.9% accuracy and 0.844 AUC; flagged 745 at-risk accounts with a logistic regression model on 7,032 telecom records."
      ]},
      { org:"Tufts University", role:"Senior Thesis — EV Trade Policy", date:"Sept 2024 – May 2025", bullets:[
        "Quantified relationships among lithium independence, BEV export performance, and tariff exposure across 31 economies.",
        "Assessed predatory pricing via the Areeda-Turner test and built scenario analyses across 20 trade relationships."
      ]}
    ],
    skills:[
      { group:"Languages", items:["English (fluent)","Mandarin (native)","Spanish (conversational)","French (conversational)"] },
      { group:"Programming & Data", items:["R","Python","SQL","LaTeX","Excel"] },
      { group:"Analytics & ML", items:["Linear & logistic regression","CART","Random Forest","Boosting","Clustering","Text Analytics","Optimization","A/B testing","Data visualization"] },
      { group:"Research Methods", items:["Surveys","Semi-structured interviews","Focus groups","On-site observations","Usability testing","Conjoint analysis","Mixed-method triangulation","Formative evaluation","Pilot testing"] },
      { group:"Marketing & Strategy", items:["Market analysis","4P","STP","Go-to-market","Funnel analytics","Competitive intelligence","SWOT"] },
      { group:"Strategy & Operations", items:["Strategic planning","Stakeholder management","Logic model","Budget planning","Financial modeling","Scenario analysis"] },
      { group:"Product & Design", items:["Figma","Miro","Adobe Creative Suite","Unity","Blender","Arduino","VR/AR prototyping","3D fabrication","User stories","MVP validation","Rapid prototyping"] },
      { group:"Tools & Platforms", items:["Qualtrics","Sawtooth","Notion","Slack","PowerPoint","GlueUp CRM"] }
    ],
    cert:"CITI Program — Social and Behavioral Research Investigators"
  }
};
