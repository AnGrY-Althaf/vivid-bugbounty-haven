import { Trophy, Award, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

const Leaderboard = () => {
  const topHackers = [
    { rank: 1, name: "CyberNinja", points: "25,430", icon: Trophy },
    { rank: 2, name: "BugHunter", points: "23,150", icon: Award },
    { rank: 3, name: "SecureScope", points: "21,890", icon: Medal },
  ];

  return (
    <div className="glass-card p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Top Hunters</h2>
      <div className="space-y-4">
        {topHackers.map((hacker) => (
          <Card key={hacker.rank} className="p-4 bg-muted/50 border-none">
            <div className="flex items-center gap-4">
              <hacker.icon className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold">{hacker.name}</h3>
                <p className="text-sm text-muted-foreground">{hacker.points} points</p>
              </div>
              <span className="text-2xl font-bold text-primary">#{hacker.rank}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;