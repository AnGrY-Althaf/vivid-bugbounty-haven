import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ProgramView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Programs
      </Button>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          {/* Program Header */}
          <Card className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/placeholder.svg"
                alt="Program Logo"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">Security Bug Bounty Program</h1>
                <p className="text-muted-foreground">TechCorp</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-muted">Web</Badge>
              <Badge variant="secondary" className="bg-muted">API</Badge>
              <Badge variant="secondary" className="bg-muted">Mobile</Badge>
            </div>
            <p className="text-muted-foreground">
              Help us secure our platform by finding and reporting security vulnerabilities.
            </p>
          </Card>

          {/* Program Details Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="scope" className="glass-card border-none">
              <AccordionTrigger className="px-6">Scope</AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">In Scope</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>*.techcorp.com</li>
                      <li>TechCorp Mobile App (iOS & Android)</li>
                      <li>api.techcorp.com</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Out of Scope</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Social engineering attacks</li>
                      <li>DOS/DDOS attacks</li>
                      <li>Physical security attacks</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="terms" className="glass-card border-none">
              <AccordionTrigger className="px-6">Terms & Conditions</AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By participating in this bug bounty program, you agree to the following terms:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Do not disclose any vulnerabilities publicly before they are fixed</li>
                    <li>Only test against in-scope targets</li>
                    <li>Do not use automated scanning tools without permission</li>
                    <li>Report vulnerabilities within 24 hours of discovery</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rewards" className="glass-card border-none">
              <AccordionTrigger className="px-6">Rewards</AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">Critical</h4>
                      <p className="text-primary">$10,000 - $50,000</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">High</h4>
                      <p className="text-secondary">$5,000 - $10,000</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">Medium</h4>
                      <p className="text-accent">$1,000 - $5,000</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Average Response</span>
                <span className="font-medium">24 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Reports Resolved</span>
                <span className="font-medium">245</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Paid</span>
                <span className="font-medium">$180,000</span>
              </div>
            </div>
          </Card>

          <Button className="w-full" size="lg">
            Submit Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramView;