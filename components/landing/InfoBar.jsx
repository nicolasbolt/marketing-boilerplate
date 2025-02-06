import { PanelsTopLeft, PanelsLeftBottom, PanelsLeftRight, PanelRightDashed, PanelsTopBottom } from 'lucide-react';
import React from 'react'

// This component displays a list of useful information, could be used for sponsors, company affiliations, etc

const sponsors = [
    {
      icon: <PanelsTopLeft />,
      name: 'Company 1',
    },
    {
      icon: <PanelsLeftBottom />,
      name: 'Company 2',
    },
    {
      icon: <PanelsLeftRight />,
      name: 'Company 3',
    },
    {
      icon: <PanelRightDashed />,
      name: 'Company 4',
    },
    {
      icon: <PanelsTopBottom />,
      name: 'Company 5',
    },
  ];

const MoreInfo = () => {
    return (
        <section id='sponsors' className='container py-20 mx-auto'>
          <h2 className='text-center text-md lg:text-xl font-bold mb-8 text-primary'>
            Sponsors
          </h2>
    
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
            {sponsors.map(({ icon, name }) => (
              <div
                key={name}
                className='flex items-center gap-1 text-muted-foreground/60'
              >
                <span>{icon}</span>
                <h3 className='text-xl  font-bold'>{name}</h3>
              </div>
            ))}
          </div>
        </section>
      );
}

export default MoreInfo
