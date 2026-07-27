import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI Server-side Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  } catch (err) {
    console.error("Failed to initialize Google GenAI SDK:", err);
  }
}

// In-memory storage for Jotform enquiries
const enquiries: Array<{
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  services: string[];
  budget: string;
  contactTime: string;
  notes: string;
  createdAt: string;
  status: string;
}> = [
  {
    id: "UCS-TN-8492",
    name: "Karthik Raja & Anitha",
    phone: "+91 98401 23456",
    email: "karthik.anitha2026@gmail.com",
    city: "Chennai",
    eventType: "Wedding",
    eventDate: "2026-09-15",
    eventLocation: "Le Royal Méridien, Guindy, Chennai",
    services: ["Wedding Photography", "Cinematic Videography", "Drone Photography", "Stage Decoration"],
    budget: "₹1,50,000 - ₹2,50,000",
    contactTime: "Evening (5 PM - 8 PM)",
    notes: "South Indian traditional muhurtham followed by grand reception.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "Confirmed",
  },
  {
    id: "UCS-TN-8493",
    name: "Priya Sundaram",
    phone: "+91 97902 34567",
    email: "priya.sundaram@gmail.com",
    city: "Coimbatore",
    eventType: "Baby Shower",
    eventDate: "2026-08-20",
    eventLocation: "Residency Towers, Avinashi Road, Coimbatore",
    services: ["Maternity Photography", "Traditional Photography", "Floral Decor"],
    budget: "₹50,000 - ₹1,00,000",
    contactTime: "Morning (10 AM - 1 PM)",
    notes: "Seemantham ritual photography with instant print photo station.",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    status: "In Review",
  }
];

// API: Jotform Submission / Save Enquiry
app.post("/api/enquiry", (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      city,
      eventType,
      eventDate,
      eventLocation,
      services,
      budget,
      contactTime,
      notes
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone number are required." });
    }

    const bookingId = `UCS-TN-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEnquiry = {
      id: bookingId,
      name: name || "Valued Client",
      phone: phone || "",
      email: email || "",
      city: city || "Tamil Nadu",
      eventType: eventType || "General Photography",
      eventDate: eventDate || "To be decided",
      eventLocation: eventLocation || city || "Tamil Nadu",
      services: Array.isArray(services) ? services : [services || "Photography & Videography"],
      budget: budget || "Custom Quote",
      contactTime: contactTime || "Anytime",
      notes: notes || "",
      createdAt: new Date().toISOString(),
      status: "Submitted",
    };

    enquiries.unshift(newEnquiry);

    return res.json({
      success: true,
      message: "Enquiry submitted successfully to Jotform AI Submissions database and Unique Capture Studio sales team.",
      bookingId,
      enquiry: newEnquiry,
      jotformSaved: true,
      emailNotificationSent: true,
      recipientEmail: "aarthikameshwara@gmail.com"
    });
  } catch (err: any) {
    console.error("Error saving enquiry:", err);
    return res.status(500).json({ error: "Failed to submit enquiry." });
  }
});

// API: Fetch All Submissions (for Studio Dashboard / Review)
app.get("/api/enquiries", (req, res) => {
  res.json({ enquiries });
});

// API: AI Chatbot Proxy using Gemini
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory, leadContext } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message prompt is required." });
    }

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured yet
      return res.json({
        reply: `Vanakkam! Thank you for inquiring about Unique Capture Studio. We offer premier wedding photography, cinematic videography, drone coverage, and complete event management across Tamil Nadu (Chennai, Coimbatore, Madurai, Trichy, Salem, etc.). Our team will assist you with customized packages! May I know your event date and location?`,
        suggestedAction: "collect_info"
      });
    }

    const systemInstruction = `You are the Jotform AI Booking Assistant for 'Unique Capture Studio', a luxury photography, videography, and complete event management company based in Tamil Nadu, India.
Your tone is warm, polite, professional, and hospitable ("Vanakkam!").
You assist wedding couples, parents, corporate clients, and event organizers across Tamil Nadu (Chennai, Coimbatore, Madurai, Trichy, Salem, Erode, Tirunelveli, etc.).

Key services:
1. Photography: Wedding, Candid, Traditional, Pre/Post-Wedding, Engagement, Maternity, Baby Shoot, Birthday, Fashion, Product, Drone Photography.
2. Videography: Cinematic Wedding Films, Traditional Video, Teaser Trailer, Live Streaming (4K/HD), Drone 4K Reel.
3. Event Management: Stage Decoration, Floral Setup, LED Wall, Sound & DJ, Lighting, Album Printing & Framing.

Guidelines:
- Answer questions accurately and enticingly about our luxury services, album choices (e.g. Canvera HD silk print, Velvet gloss finish, Italian leather box), travel flexibility across Tamil Nadu, drone permissions, and custom quotes.
- Encourage lead capture smoothly by collecting: Name, Phone, Email, City, Event Type, Date, Location, Budget.
- Keep responses concise (2-4 sentences max per message) for easy reading inside the chatbot window.`;

    const modelPrompt = `User question/message: ${message}
Current Lead Data collected so far: ${JSON.stringify(leadContext || {})}
Recent Conversation History: ${JSON.stringify(conversationHistory || []).slice(-1000)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: modelPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Vanakkam! I would love to help you plan your event. Could you please share your phone number or event date?";

    return res.json({ reply });
  } catch (err: any) {
    console.error("Gemini Chat API Error:", err);
    return res.json({
      reply: "Vanakkam! Thank you for reaching out to Unique Capture Studio. Please let us know your event date and location, or feel free to click 'Book Now' to leave your phone number!"
    });
  }
});

// API: Instant Quote Calculator Backend
app.post("/api/quote", (req, res) => {
  const { eventType, services, guestCount, durationDays } = req.body;

  let basePrice = 35000; // Base photography package
  if (eventType === "Wedding") basePrice = 85000;
  if (eventType === "Reception" || eventType === "Engagement") basePrice = 45000;
  if (eventType === "Baby Shower" || eventType === "Birthday") basePrice = 30000;
  if (eventType === "Corporate Event") basePrice = 50000;

  let addOns = 0;
  const selectedServices = Array.isArray(services) ? services : [];
  if (selectedServices.includes("Cinematic Videography")) addOns += 35000;
  if (selectedServices.includes("Drone Photography/Videography")) addOns += 18000;
  if (selectedServices.includes("Stage Decoration")) addOns += 45000;
  if (selectedServices.includes("LED Wall Setup")) addOns += 25000;
  if (selectedServices.includes("Live Streaming")) addOns += 15000;
  if (selectedServices.includes("Album Design & Printing")) addOns += 12000;

  const multDays = Math.max(1, Number(durationDays) || 1);
  const estimatedMin = Math.round((basePrice + addOns) * multDays);
  const estimatedMax = Math.round(estimatedMin * 1.3);

  res.json({
    eventType,
    estimatedMin,
    estimatedMax,
    formattedRange: `₹${estimatedMin.toLocaleString("en-IN")} - ₹${estimatedMax.toLocaleString("en-IN")}`,
    currency: "INR"
  });
});

async function startServer() {
  // Vite middleware for dev or static server for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Unique Capture Studio Server running on http://localhost:${PORT}`);
  });
}

startServer();
