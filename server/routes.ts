import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { getGooglePlaceReviews } from "./google-reviews";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }
      
      const message = await storage.createContactMessage(result.data);
      
      return res.status(201).json({ 
        success: true, 
        message: "Contact request saved successfully.",
        id: message.id
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/google-reviews", async (_req, res) => {
    try {
      const reviews = await getGooglePlaceReviews();
      return res.json(reviews);
    } catch (error) {
      console.error("Error fetching Google reviews:", error);
      return res.status(500).json({
        enabled: false,
        placeName: "Stash Laundry and Cleaning Services",
        reviews: [],
        error: "Unable to fetch Google reviews right now.",
      });
    }
  });

  return httpServer;
}
