import { Request, Response } from "express";
import { LandingPageService } from "../services/landingPageService";

export class LandingPageController {
  // Aggregate page data
  static async getPageData(req: Request, res: Response) {
    try {
      const data = await LandingPageService.getLandingPageData();
      return res.status(200).json({ success: true, data });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  // Update singletons
  static async updateHero(req: Request, res: Response) {
    try {
      const result = await LandingPageService.updateHero(req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateSolutionSection(req: Request, res: Response) {
    try {
      const result = await LandingPageService.updateSolutionSection(req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateDashboardPreview(req: Request, res: Response) {
    try {
      const result = await LandingPageService.updateDashboardPreview(req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateCtaSection(req: Request, res: Response) {
    try {
      const result = await LandingPageService.updateCtaSection(req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateFooterInfo(req: Request, res: Response) {
    try {
      const result = await LandingPageService.updateFooterInfo(req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Helper macro for creating lists CRUD
  private static parseId(req: Request): number {
    return parseInt(req.params.id, 10);
  }

  // Partner handlers
  static async createPartner(req: Request, res: Response) {
    try {
      const result = await LandingPageService.createPartner(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updatePartner(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const result = await LandingPageService.updatePartner(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deletePartner(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deletePartner(id);
      return res.status(200).json({ success: true, message: "Partner deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Problem handlers
  static async createProblem(req: Request, res: Response) {
    try {
      const result = await LandingPageService.createProblem(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateProblem(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const result = await LandingPageService.updateProblem(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteProblem(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteProblem(id);
      return res.status(200).json({ success: true, message: "Problem deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // SolutionPoint handlers
  static async createSolutionPoint(req: Request, res: Response) {
    try {
      const result = await LandingPageService.createSolutionPoint(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateSolutionPoint(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const result = await LandingPageService.updateSolutionPoint(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteSolutionPoint(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteSolutionPoint(id);
      return res.status(200).json({ success: true, message: "Solution point deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Feature handlers
  static async createFeature(req: Request, res: Response) {
    try {
      const result = await LandingPageService.createFeature(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateFeature(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const result = await LandingPageService.updateFeature(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteFeature(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteFeature(id);
      return res.status(200).json({ success: true, message: "Feature deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Advantage handlers
  static async createAdvantage(req: Request, res: Response) {
    try {
      const result = await LandingPageService.createAdvantage(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateAdvantage(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const result = await LandingPageService.updateAdvantage(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteAdvantage(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteAdvantage(id);
      return res.status(200).json({ success: true, message: "Advantage deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Step handlers
  static async createStep(req: Request, res: Response) {
    try {
      const result = await LandingPageService.createStep(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateStep(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const result = await LandingPageService.updateStep(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteStep(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteStep(id);
      return res.status(200).json({ success: true, message: "Step deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Stat handlers
  static async createStat(req: Request, res: Response) {
    try {
      const data = { ...req.body };
      if (data.value !== undefined) data.value = parseFloat(data.value);
      const result = await LandingPageService.createStat(data);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateStat(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const data = { ...req.body };
      if (data.value !== undefined) data.value = parseFloat(data.value);
      const result = await LandingPageService.updateStat(id, data);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteStat(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteStat(id);
      return res.status(200).json({ success: true, message: "Stat deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Testimonial handlers
  static async createTestimonial(req: Request, res: Response) {
    try {
      const data = { ...req.body };
      if (data.rating !== undefined) data.rating = parseInt(data.rating, 10);
      const result = await LandingPageService.createTestimonial(data);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateTestimonial(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const data = { ...req.body };
      if (data.rating !== undefined) data.rating = parseInt(data.rating, 10);
      const result = await LandingPageService.updateTestimonial(id, data);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteTestimonial(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteTestimonial(id);
      return res.status(200).json({ success: true, message: "Testimonial deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // PricingPlan handlers
  static async createPricingPlan(req: Request, res: Response) {
    try {
      const data = { ...req.body };
      if (data.price !== undefined) data.price = parseInt(data.price, 10);
      const result = await LandingPageService.createPricingPlan(data);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updatePricingPlan(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const data = { ...req.body };
      if (data.price !== undefined) data.price = parseInt(data.price, 10);
      const result = await LandingPageService.updatePricingPlan(id, data);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deletePricingPlan(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deletePricingPlan(id);
      return res.status(200).json({ success: true, message: "Pricing plan deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // FAQ handlers
  static async createFaq(req: Request, res: Response) {
    try {
      const result = await LandingPageService.createFaq(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateFaq(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      const result = await LandingPageService.updateFaq(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteFaq(req: Request, res: Response) {
    try {
      const id = LandingPageController.parseId(req);
      await LandingPageService.deleteFaq(id);
      return res.status(200).json({ success: true, message: "FAQ deleted" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}
