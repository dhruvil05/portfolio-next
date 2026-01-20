import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface CaseStudyCardProps {
    title: string;
    industry: string;
    problem: string;
    outcome: string;
    tags: string[];
}

export default function CaseStudyCard({
    title,
    industry,
    problem,
    outcome,
    tags,
}: CaseStudyCardProps) {
    return (
        <Card hover={true} className="flex flex-col h-full bg-card">
            <div className="mb-6 flex justify-between items-start">
                <Badge variant="secondary" className="mb-2">{industry}</Badge>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>

            <div className="space-y-6 mb-8 flex-grow">
                <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">{problem}</p>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Result</h4>
                    <p className="text-foreground font-medium leading-relaxed">{outcome}</p>
                </div>
            </div>

            <div className="pt-6 border-t border-border mt-auto">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">{tag}</Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
}