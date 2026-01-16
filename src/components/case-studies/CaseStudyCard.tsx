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
        <Card>
            <div className="mb-4">
                <Badge variant="secondary">{industry}</Badge>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

            <div className="space-y-4 mb-6">
                <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Challenge</h4>
                    <p className="text-gray-600">{problem}</p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Result</h4>
                    <p className="text-gray-600">{outcome}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <Badge key={idx} variant="primary">{tag}</Badge>
                ))}
            </div>
        </Card>
    );
}