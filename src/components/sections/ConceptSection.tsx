import React from 'react';

export const ConceptSection = () => {
  return (
    <div className="">
      <div className="">
        {/* Centered Title */}
        <div className="text-center mb-8">
          <h2 
            className="text-9xl font-bold text-primary"
            style={{ 
              fontFamily: '"Alex Brush", cursive',
              letterSpacing: '0.05em'
            }}
          >
            Concept
          </h2>
        </div>
        
        {/* Centered Image */}
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/905135ba-4c83-4db0-8252-83e3428e943f.png"
            alt="Concept Image"
            className="w-full md:w-5/6 h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] border-2 border-primary/5"
          />
        </div>

        {/* Vision Section */}
        <div className="bg-black/20 border-primary/20 backdrop-blur-sm p-6 rounded-lg mb-8">
          <h3 className="text-2xl text-primary mb-4 font-serif italic">Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            The festival will focus on creating an immersive environment where attendees can freely explore and enjoy workshops, demonstrations, and performances in overlapping worlds. Each town will surround a large empty circle in the middle. The purpose is to provide seating for shows, classes, and demonstrations during the day. This Empty area transforms into a fire circle at night, for everyone to see as they explore. Each town will have its stage on its outer edge for performances and events.
          </p>
        </div>

        {/* Fire/Flow Arts Section */}
        <div className="bg-black/20 border-primary/20 backdrop-blur-sm p-6 rounded-lg mb-8">
          <h3 className="text-2xl text-primary mb-4 font-serif italic">Fire/Flow Arts</h3>
          <p className="text-gray-300 leading-relaxed">
            A mini flow festival featuring classes for pole dancing, aerial, fire bubbles, fire breathing, fire fleshing, and flow arts workshops. At night the workshop area will host a fire jam that offers interactive experiences with fire bubbles and fleshing, including Impromptu Aerial and pole demonstrations.
          </p>
        </div>

        {/* Kink/BDSM Section */}
        <div className="bg-black/20 border-primary/20 backdrop-blur-sm p-6 rounded-lg mb-8">
          <h3 className="text-2xl text-primary mb-4 font-serif italic">Kink/BDSM Area</h3>
          <p className="text-gray-300 leading-relaxed">
            A space dedicated to BDSM education, offering workshops and discussions on shibari, impact play, wax play, and various types of dynamics. The space will feature planned demonstrations at night and a monitored dungeon space for safe practice.
          </p>
        </div>

        {/* Fantasy/Roleplay Section */}
        <div className="bg-black/20 border-primary/20 backdrop-blur-sm p-6 rounded-lg mb-8">
          <h3 className="text-2xl text-primary mb-4 font-serif italic">Fantasy/Roleplay</h3>
          <p className="text-gray-300 leading-relaxed">
            A renfaire-themed area for all types of roleplayers. A Tavern for live music, alcohol (beer, mead, & wine), and revelry. People can form clans to be assigned quests to other sections of the festival for awards. This section will also host short D&D campaigns, LARP sessions, party games & cosplay competitions. The winners of the cosplay competitions receive tickets to the next year to defend their titles.
          </p>
        </div>

        {/* Main Stage/Music Section */}
        <div className="bg-black/20 border-primary/20 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-2xl text-primary mb-4 font-serif italic">Main Stage/Music</h3>
          <p className="text-gray-300 leading-relaxed">
            A music stage houses the art car playing at night with lowered platforms in front for fire spinners and dancers. This stage would also host the festival's official variety show and community events.
          </p>
        </div>
      </div>
    </div>
  );
};