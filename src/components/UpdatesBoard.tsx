import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const updates = [
  {
    title: "Coming Soon",
    items: [
      "Guild Challenge System Development",
      "Stage Design Planning",
      "Performative D&D Format",
      "Consent System Implementation",
      "GOGO Cages On Stage Design"
    ]
  }
];

export const UpdatesBoard = () => {
  return (
    <div className="w-full">
      <div className="grid gap-6 md:grid-cols-1">
        {updates.map((column, index) => (
          <Card key={index} className="rounded-xl border border-primary/5 shadow-lg 
            transform transition-all duration-500 hover:scale-105 hover:bg-black/30">
            <CardHeader className="flex justify-center text-center">
              <CardTitle className="text-4xl font-serif italic font-bold mb-8 text-primary">{column.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ul className="space-y-4 w-full max-w-full md:max-w-md">
                {column.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="rounded-xl border border-primary/5 p-4 shadow-lg text-gray-300 
                      hover:bg-black/30 transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};