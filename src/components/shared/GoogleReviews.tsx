import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface GoogleReviewsProps {
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
}

const defaultReviews: Review[] = [
  {
    name: "Arjun S.",
    rating: 5,
    text: "Excellent hands-on training! The instructors really know their stuff.",
    date: "2 weeks ago",
  },
  {
    name: "Priya M.",
    rating: 5,
    text: "Best cybersecurity course I've taken. Very practical and industry-focused.",
    date: "1 month ago",
  },
  {
    name: "Rahul K.",
    rating: 4,
    text: "Great curriculum and support. Helped me land my first security job!",
    date: "3 weeks ago",
  },
];

export default function GoogleReviews({
  reviews = defaultReviews,
  averageRating = 4.9,
  totalReviews = 127,
}: GoogleReviewsProps) {
  return (
    <div className="mt-8">
      {/* Overall Rating */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-6 object-contain"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">
            {averageRating}
          </span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(averageRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">
            ({totalReviews} reviews)
          </span>
        </div>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <Card key={index} variant="glass" className="hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
