
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceTopping from "./pages/ServiceTopping";
import ServicePolished from "./pages/ServicePolished";
import ServicePolymer from "./pages/ServicePolymer";
import ServicePaint from "./pages/ServicePaint";
import ArticleWarehouse from "./pages/ArticleWarehouse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service/topping" element={<ServiceTopping />} />
          <Route path="/service/polished" element={<ServicePolished />} />
          <Route path="/service/polymer" element={<ServicePolymer />} />
          <Route path="/service/paint" element={<ServicePaint />} />
          <Route path="/blog/warehouse-floor-guide" element={<ArticleWarehouse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;