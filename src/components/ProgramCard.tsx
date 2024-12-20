import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MoreVertical, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProgramProps {
  name: string;
  company: string;
  logo: string;
  bountyRange: string;
  tags: string[];
  type?: string;
  metrics?: {
    researchers?: number;
    reports?: number;
    avgBounty?: string;
    responseRate?: string;
  };
}

const ProgramCard = ({ 
  name, 
  company, 
  logo, 
  bountyRange, 
  tags,
  type = "Campaign",
  metrics
}: ProgramProps) => {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt={company} className="w-12 h-12 rounded-lg" />
            <div className="text-left">
              <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                {type}
              </Badge>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-muted-foreground text-sm">{company}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Star className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted/50">
                {tag}
              </Badge>
            ))}
          </div>

          {metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{metrics.researchers}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{metrics.reports} reports</span>
              </div>
              <div className="text-sm text-muted-foreground">
                ~{metrics.avgBounty} avg
              </div>
              <div className="text-sm text-muted-foreground">
                {metrics.responseRate} response
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              <p className="text-lg font-semibold text-primary">Up to {bountyRange}</p>
              <p className="text-sm text-muted-foreground">Bounty Range</p>
            </div>
            <Button 
              variant="outline" 
              className="hover:bg-primary hover:text-white"
              onClick={() => navigate(`/program/1`)}
            >
              See details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProgramCard;