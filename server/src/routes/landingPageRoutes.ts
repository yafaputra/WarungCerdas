import { Router } from "express";
import { LandingPageController } from "../controllers/landingPageController";

const router = Router();

// Aggregate data
router.get("/landing-page", LandingPageController.getPageData);

// Singletons
router.put("/landing-page/hero", LandingPageController.updateHero);
router.put("/landing-page/solution-section", LandingPageController.updateSolutionSection);
router.put("/landing-page/dashboard-preview", LandingPageController.updateDashboardPreview);
router.put("/landing-page/cta", LandingPageController.updateCtaSection);
router.put("/landing-page/footer", LandingPageController.updateFooterInfo);

// Partners CRUD
router.post("/landing-page/partners", LandingPageController.createPartner);
router.put("/landing-page/partners/:id", LandingPageController.updatePartner);
router.delete("/landing-page/partners/:id", LandingPageController.deletePartner);

// Problems CRUD
router.post("/landing-page/problems", LandingPageController.createProblem);
router.put("/landing-page/problems/:id", LandingPageController.updateProblem);
router.delete("/landing-page/problems/:id", LandingPageController.deleteProblem);

// Solution Points CRUD
router.post("/landing-page/solution-points", LandingPageController.createSolutionPoint);
router.put("/landing-page/solution-points/:id", LandingPageController.updateSolutionPoint);
router.delete("/landing-page/solution-points/:id", LandingPageController.deleteSolutionPoint);

// Features CRUD
router.post("/landing-page/features", LandingPageController.createFeature);
router.put("/landing-page/features/:id", LandingPageController.updateFeature);
router.delete("/landing-page/features/:id", LandingPageController.deleteFeature);

// Advantages CRUD
router.post("/landing-page/advantages", LandingPageController.createAdvantage);
router.put("/landing-page/advantages/:id", LandingPageController.updateAdvantage);
router.delete("/landing-page/advantages/:id", LandingPageController.deleteAdvantage);

// Steps (Cara Kerja) CRUD
router.post("/landing-page/steps", LandingPageController.createStep);
router.put("/landing-page/steps/:id", LandingPageController.updateStep);
router.delete("/landing-page/steps/:id", LandingPageController.deleteStep);

// Stats CRUD
router.post("/landing-page/stats", LandingPageController.createStat);
router.put("/landing-page/stats/:id", LandingPageController.updateStat);
router.delete("/landing-page/stats/:id", LandingPageController.deleteStat);

// Testimonials CRUD
router.post("/landing-page/testimonials", LandingPageController.createTestimonial);
router.put("/landing-page/testimonials/:id", LandingPageController.updateTestimonial);
router.delete("/landing-page/testimonials/:id", LandingPageController.deleteTestimonial);

// Pricing Plans CRUD
router.post("/landing-page/pricing-plans", LandingPageController.createPricingPlan);
router.put("/landing-page/pricing-plans/:id", LandingPageController.updatePricingPlan);
router.delete("/landing-page/pricing-plans/:id", LandingPageController.deletePricingPlan);

// FAQs CRUD
router.post("/landing-page/faqs", LandingPageController.createFaq);
router.put("/landing-page/faqs/:id", LandingPageController.updateFaq);
router.delete("/landing-page/faqs/:id", LandingPageController.deleteFaq);

export default router;
