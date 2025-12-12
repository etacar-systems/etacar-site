export interface CaseStudiesItemType {
  title: string;
  image: string;
  paragraphs: string[];
  features: string[];
  results: string;
  tags: string[];
  keyTags: string[];
}

export const caseStudies: CaseStudiesItemType[] = [
  {
    title: 'AI-Driven Innovation Intelligence Platform (Anonymized Case)',
    image: '/images/personalLearningPlan.svg',
    paragraphs: [
      'A global organization needed to track emerging technologies, consolidate scattered research, and turn complex information into clear innovation decisions. Their teams worked with thousands of documents and expert inputs but lacked a system that could transform this volume into reliable, explainable insights.',
      'EtaCar Systems built an AI-native innovation intelligence platform powered by a cognitive orchestration layer. It ingests research materials and signals from multiple sources, normalizes them into a structured knowledge model, and uses AI pipelines to evaluate technologies across impact, maturity, risk, and strategic fit.',
    ],
    features: [
      'Multi-source ingestion of reports, studies, and internal documents',
      'AI-assisted scoring and ranking of technologies and trends',
      'Explainable insights with transparent reasoning and source citations',
      'Configurable evaluation frameworks aligned with the organization’s strategy',
      'Enterprise-grade governance for accuracy, traceability, and safety',
    ],
    results:
      'Manual research cycles that previously took weeks were reduced to hours, decision-making became more consistent and data-backed, and the platform evolved into a central hub for innovation strategy.',
    tags: ['Enterprise AI', 'R&D', 'Cognitive Orchestration', 'Explainable AI', 'Governance'],
    keyTags: ['Enterprise', 'AI', 'Analytics'],
  },
  {
    title: 'AI-Powered B2B Services Marketplace',
    image: '/images/businessMarketplace.svg',
    paragraphs: [
      'A large organization needed a smarter way to match companies that provide professional services with companies that need them. Traditional directories and static listings made it hard to compare vendors objectively, understand real performance, or quickly find the best-fit partner for a specific project.',
      'EtaCar Systems delivered an AI-driven B2B services marketplace that connects clients and suppliers through intelligent matching and evaluation. The platform ingests company profiles, service descriptions, performance history, ratings, and reviews, and projects this data onto dynamic performance evaluation charts.',
    ],
    features: [
      'AI-enhanced search and discovery that understands business needs and context, not just keywords',
      'Intelligent ranking and matching of suppliers based on quality, track record, and service fit',
      'Visual performance dashboards showing strengths, reliability, and risk indicators for each vendor',
      'Continuous learning from new projects, feedback, and outcomes to refine future recommendations',
    ],
    results:
      'Companies can quickly identify the most suitable partners, reduce time spent on vendor selection, and make data-driven, AI-assisted procurement decisions.',
    tags: ['B2B', 'AI Matching', 'Smart Search', 'Performance Analytics'],
    keyTags: ['Web', 'Marketplace', 'AI'],
  },
  {
    title: 'AI-Powered Inventory Management for Food Businesses',
    image: '/images/productStockManagement.svg',
    paragraphs: [
      'A growing food business needed a smarter way to manage stock across products, locations, and suppliers. Manual spreadsheets and basic tools couldn’t keep up with fast-changing demand, shelf-life constraints, and frequent internal transfers between stores and kitchens.',
      'EtaCar Systems delivered an AI-driven inventory management application tailored for food operations. The platform centralizes product stock data and uses intelligent logic to suggest optimal stock levels, highlight anomalies, and support purchasing decisions.',
    ],
    features: [
      'Smart purchase order recommendations based on historical demand, stock levels, and configured rules',
      'AI-assisted stock takes that surface discrepancies and prioritize checks where issues are most likely',
      'Support for internal transfers between locations, guided by utilization patterns and spoilage risk',
      'Powerful, easy-to-use filtering across products, categories, locations, and statuses',
      'Flexible configuration of units, categories, thresholds, and workflows to match each business model',
    ],
    results:
      'Food businesses gain better stock visibility, reduce waste and stockouts, and move from reactive firefighting to proactive, AI-supported inventory control.',
    tags: ['FoodTech', 'Inventory AI', 'Demand Forecasting', 'Anomaly Detection'],
    keyTags: ['Web', 'FoodTech', 'Management'],
  },
  {
    title: 'AI-Orchestrated Same-Day Delivery for Local Retailers',
    image: '/images/deliveryManagementSystem.png',
    paragraphs: [
      'A consumer-focused startup wanted to turn local bottled water purchases into an ultra-convenient, 2–4 hour delivery experience — connecting neighborhood retailers with offices and homes across the city. The challenge was to automate the entire order-to-delivery chain while keeping operations efficient and scalable.',
      'EtaCar Systems built an AI-powered delivery management platform that orchestrates the full lifecycle from order placement to final drop-off. The marketplace lets customers order from familiar local brands in just a few taps, while AI optimizes routing, batching, and courier assignment in the background.',
    ],
    features: [
      'End-to-end automated order flow from purchase to delivery confirmation',
      'AI-driven route and slot optimization to meet 2- or 4-hour delivery windows',
      'Smart courier assignment and load balancing based on location, capacity, and traffic patterns',
      'Real-time status tracking for customers, retailers, and operations teams',
      'Configurable marketplace logic for pricing, availability, and partner onboarding',
    ],
    results:
      'The client launched a frictionless, AI-orchestrated delivery experience that turns local retail shelves into an on-demand water marketplace.',
    tags: ['Logistics', 'Same-Day Delivery', 'Route Optimization', 'Marketplace'],
    keyTags: ['Mobile', 'Logistics', 'AI'],
  },
  {
    title: 'AI-Driven Performance Analytics for Professional Athletes',
    image: '/images/baseballStatisticManagement.webp',
    paragraphs: [
      'A sports-tech company wanted to give professional baseball players more than just raw stats — they needed player-centric, actionable insights to improve performance on the field. Traditional dashboards were overloaded with numbers but lacked contextual recommendations and intuitive exploration.',
      'EtaCar Systems delivered an AI-powered analytics SaaS platform tailored for professional athletes and coaching staff. The system ingests game events, tracking data, and historical performance, then uses advanced analytics and machine learning to surface patterns that matter for each individual player.',
    ],
    features: [
      'AI-generated performance insights highlighting strengths, weaknesses, and trends for each athlete',
      'Play-by-play, real-time data processing to update metrics and evaluations as games unfold',
      'Advanced analytics models for pitch recognition, situational effectiveness, and fatigue indicators',
      'Interactive visualizations — charts, graphs, and comparative views — making complex data intuitive and engaging',
      'Personalized views for players, coaches, and analysts, focused on decision-ready information',
    ],
    results:
      'Teams gain a high-impact, AI-assisted performance layer on top of traditional stats — turning raw data into clear decisions and targeted training actions.',
    tags: ['Sports Analytics', 'Machine Learning', 'Real-time', 'Data Visualization'],
    keyTags: ['Web', 'SportTech', 'AI'],
  },
  {
    title: 'AI-Enhanced Reservations & Pre-Order Platform for Hospitality',
    image: '/images/restarauntReservations.webp',
    paragraphs: [
      'A hospitality operator wanted to go beyond simple table bookings and build a smart reservation experience that boosts revenue and improves guest flow. They needed a mobile-first solution that could handle real-time table selection, pre-orders, and deposits — while giving the business better visibility into demand.',
      'EtaCar Systems delivered an AI-augmented restaurant and bar reservations platform with an interactive floor-plan interface and intelligent demand insights. Guests can see the venue layout, select a specific table, place pre-orders, and pay deposits in a few taps, while AI helps the business optimize seating and service.',
    ],
    features: [
      'Interactive floor-plan booking so guests can choose their exact table in real time',
      'AI-assisted demand forecasting to highlight peak periods and inform staffing and inventory decisions',
      'Smart pre-order and deposit flows that reduce no-shows and smooth kitchen load',
      'Dynamic availability and seating suggestions based on party size, timing, and current reservations',
      'Owner and staff dashboards with operational insights and reservation analytics',
    ],
    results:
      'Venues gain higher table utilization, fewer no-shows, and better guest experiences, powered by AI-driven insights and orchestration.',
    tags: ['Hospitality', 'AI Forecasting', 'Floor-Plan Booking', 'Pre-order'],
    keyTags: ['Mobile', 'FoodTech', 'AI'],
  },
  {
    title: 'AI-Powered Monitoring for Subterranean Operations',
    image: '/images/file.jpg',
    paragraphs: [
      'A critical infrastructure operator needed a way to monitor underground operations in real time, under strict safety and reliability constraints. Traditional monitoring tools struggled to combine environmental data, operational signals, and fast-changing conditions into a clear, actionable picture for teams working below ground.',
      'EtaCar Systems delivered an AI-driven subterranean operations monitoring platform tailored to the unique dynamics of underground sites. The solution fuses sensor data, weather feeds, and operational inputs into a single, secure interface accessible on the move, helping teams anticipate risk instead of reacting to it.',
    ],
    features: [
      'Real-time, integrated operational view across tunnels, shafts, and work zones',
      'AI-based anomaly detection for key environmental and safety indicators',
      'Forecasting of critical conditions (e.g., weather-related and environmental changes) using advanced algorithms',
      'Adaptive alerting and escalation rules tuned to underground operational standards',
      'Mobile-ready access for engineers and supervisors working on site',
    ],
    results:
      'The operator gains higher situational awareness, earlier risk detection, and more resilient underground operations, powered by AI orchestration.',
    tags: ['Industrial IoT', 'Anomaly Detection', 'Safety', 'Real-time Monitoring'],
    keyTags: ['Mobile', 'Enterprise', 'AI'],
  },
];
