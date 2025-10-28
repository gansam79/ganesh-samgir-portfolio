import { RequestHandler } from "express";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

export const handleContact: RequestHandler = (req, res) => {
  try {
    const { name, email, message } = req.body as ContactRequest;

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        message: "Please fill in all fields",
      } as ContactResponse);
      return;
    }

    console.log(`Contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    res.json({
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    } as ContactResponse);
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      success: false,
      message: "Error processing your message",
    } as ContactResponse);
  }
};
