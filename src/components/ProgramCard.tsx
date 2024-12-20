import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProgramProps {
  name: string;
  company: string;
  logo: string;
  bountyRange: string;
  tags: string[];
}

const ProgramCard = ({ name, company, logo, bountyRange, tags }: ProgramProps) => {
  const navigate = useNavigate();

  return (
    <Card className="glass-card p-6 hover:scale-[1.02] transition-transform duration-200">
      <div className="flex items-center gap-4 mb-4">
        <img src={logo} alt={company} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-muted-foreground text-sm">{company}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-muted">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Up to {bountyRange}</span>
          <Button 
            variant="outline" 
            className="hover:bg-primary hover:text-white"
            onClick={() => navigate(`/program/1`)}
          >
            View Program
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProgramCard;