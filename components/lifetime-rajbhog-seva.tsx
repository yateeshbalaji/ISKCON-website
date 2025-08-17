import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function LifetimeRajbhogSeva() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Lifetime Jagannath Rajbhog Seva
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An eternal connection with Lord Jagannath through His divine prasadam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/jagannath-mahaprasadam.jpg"
              alt="Lord Jagannath Mahaprasadam"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="pt-6 space-y-6">
              <Badge variant="destructive" className="text-lg px-4 py-1">
                Only 365 Spots Available
              </Badge>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-orange-700">
                  Program Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Rajbhog for your family once a year for lifetime</li>
                  <li>Special darshan privileges during festivals</li>
                  <li>Service opportunity in Lord Jagannath's kitchen</li>
                  <li>Participation in special temple ceremonies</li>
                </ul>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-orange-700 font-semibold">
                    One-time Contribution: ₹51,001/-
                  </p>
                </div>

                <Link href="/lifetime-rajbhog-seva">
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white" 
                    size="lg"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}