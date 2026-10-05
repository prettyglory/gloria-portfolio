import profilePhoto from "@/assets/images/profile/profile.jpg";
import codingPhoto from "@/assets/images/profile/coding.jpg";
import pcbPhoto from "@/assets/images/training/pcb-creation.jpg";
import wildlifeSafariImg from "@/assets/images/projects/wildlife-safari-assistant.jpg";
import liftSystemImg from "@/assets/images/projects/lift-system.jpg";
import waterTankImg from "@/assets/images/projects/water-tank-iot.jpg";
import ditSmartImg from "@/assets/images/projects/dit-smart-assistant.png";

export type ProjectCategory = "Software" | "AI/ML" | "IoT" | "Mobile" | "Embedded Systems";

export const photos = {
  profile: profilePhoto,
  coding: codingPhoto,
  pcb: pcbPhoto,
};

export const profile = {
  name: "Gloria Beneth Mbilinyi",
  title: "Computer Engineering Student | Software Developer | AI & IoT Enthusiast",
  shortTitle: "Software Developer · AI & IoT Enthusiast",
  github: "https://github.com/prettyglory",
  githubLabel: "github.com/prettyglory",
};

export const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Certifications", "Contact"];

export const skillGroups = [
  { title: "Programming", items: ["Java", "Python", "JavaScript", "Dart", "SQL", "C/C++"] },
  { title: "Backend", items: ["Spring Boot", "REST APIs", "JWT", "Maven"] },
  { title: "Frontend", items: ["React", "Vite", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Mobile", items: ["Flutter", "Dart"] },
  { title: "AI & Data", items: ["Machine Learning", "CNN", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "RAG", "Embeddings", "ChromaDB"] },
  { title: "Databases", items: ["PostgreSQL", "SQLite"] },
  { title: "IoT & Embedded", items: ["Arduino", "ESP32", "ESP8266", "ESP-01", "Sensors", "Servo Motors", "Relays", "LCD", "ThingSpeak"] },
  { title: "Networking", items: ["VLAN", "DHCP", "NAT", "ACL", "OSPF", "QoS"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", "Postman", "Figma"] },
];

export const projects = [
  { title: "Smart Clinic Management System", category: "Software" as const, description: "A full-stack healthcare management platform supporting ADMIN, DOCTOR, and PATIENT roles, appointment management, authentication, and medical records.", technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "React", "Vite"], github: "https://github.com/prettyglory/smart-clinic", secondaryGithub: "https://github.com/prettyglory/smart-clinic-frontend", imageLabel: "Project Screenshot", featured: true },
  { title: "DIT Smart Assistant", category: "AI/ML" as const, description: "A Retrieval-Augmented Generation chatbot designed to answer questions related to Dar es Salaam Institute of Technology using institutional information.", technologies: ["Python", "RAG", "ChromaDB", "Embeddings", "Streamlit"], github: "https://github.com/prettyglory/dit-smart-assistant", imageLabel: "Project Screenshot", image: ditSmartImg, featured: true },
  { title: "Wild Animal Detection and Classification System", category: "AI/ML" as const, description: "A machine learning image classification system capable of recognizing nine wild animal species, from lion and zebra to crocodile and leopard.", technologies: ["Python", "TensorFlow", "CNN", "Machine Learning"], imageLabel: "Project Screenshot", image: wildlifeSafariImg, featured: true },
  { title: "LiftSystem – Accessible Elevator Control", category: "Embedded Systems" as const, description: "An Arduino elevator prototype with floor controls, LCD, servo motor, ultrasonic sensing, emergency controls, buzzer, and audio notifications.", technologies: ["Arduino", "Embedded C/C++", "Servo", "Ultrasonic Sensor", "LCD"], github: "https://github.com/prettyglory/liftSystem", imageLabel: "IoT Project Photo", image: liftSystemImg, featured: true },
  { title: "Smart Water Tank Level Monitoring", category: "IoT" as const, description: "An IoT monitoring system for checking water level and environmental conditions using ultrasonic, water-level, and temperature sensors.", technologies: ["Arduino", "HC-SR04", "DHT11", "LCD", "Sensors"], imageLabel: "IoT Project Photo", image: waterTankImg },
  { title: "Wireless Sensor Network", category: "IoT" as const, description: "A wireless sensor network prototype using Arduino sensor nodes and ESP-01 communication for environmental monitoring and gateway connectivity.", technologies: ["Arduino", "ESP-01", "DHT11", "Wireless Communication"], imageLabel: "IoT Project Photo" },
  { title: "Gee Player", category: "Mobile" as const, description: "A modern Flutter-based media player designed for video and music playback with subtitle support in English and Kiswahili.", technologies: ["Flutter", "Dart", "media_kit", "Dio", "SQLite"], github: "https://github.com/prettyglory/GeePlayer", imageLabel: "Project Screenshot" },
  { title: "Animal Detector", category: "AI/ML" as const, description: "A TensorFlow-powered image classification application packaged and deployed through Streamlit.", technologies: ["Python", "TensorFlow", "CNN", "Streamlit"], github: "https://github.com/prettyglory/animal_detector", imageLabel: "Project Screenshot" },
];

export const education = [
  { period: "2024 – Present", title: "Bachelor of Engineering in Computer Engineering", place: "Dar es Salaam Institute of Technology · Main Campus", note: "Current" },
  { period: "2021 – 2024", title: "Diploma in Leather Product Technology", place: "Dar es Salaam Institute of Technology · Mwanza Campus", note: "GPA 4.6" },
  { period: "2017 – 2020", title: "Secondary Education", place: "Mukilima Secondary School", note: "Division One" },
  { period: "Completed 2016", title: "Primary Education", place: "Mwembetogwa B Primary School", note: "" },
];

export const experiences = [
  { type: "Applied Engineering", title: "Independent Technical Project Development", description: "Designed and built multidisciplinary projects spanning full-stack software, machine learning, IoT, embedded control, and networking.", status: "Ongoing" },
  { type: "Academic Training", title: "Computer Engineering Practice", description: "Hands-on development with electronics, microcontrollers, communication networks, software systems, and data-driven applications.", status: "DIT · 2024–Present" },
  { type: "Future Entry", title: "Technical training, internship or bootcamp", description: "This reusable entry is ready for verified organization, role, dates, outcomes, and credential details.", status: "Details to add", placeholder: true },
];

export const certifications = [
  { name: "Professional certification", organization: "Organization to add", year: "Year", link: "", placeholder: true },
  { name: "Technical training certificate", organization: "Organization to add", year: "Year", link: "", placeholder: true },
  { name: "Bootcamp or hackathon credential", organization: "Organization to add", year: "Year", link: "", placeholder: true },
];
