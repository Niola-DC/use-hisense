import React from 'react';
import { Typography } from '../core/Typography';
import Button  from '../core/Button';
import FeatureIcon from '../composite/FeaturesIcom';
import { featureData } from '../../data/benefits';

function Card({ feature }) {
  return (
    //   <figure className="to-primary mx-auto w-fit rounded-2xl bg-gradient-to-br from-purple-500 p-3 lg:inline-block">
    //     <item.icon className="size-10 text-white" />
    //   </figure>
    //   <Paragraph>{feature.text}</Paragraph>
    // </div>

    <div
      className="rounded-xl p-6 text-center transition-all"
    >
      <FeatureIcon name={feature.icon} />
      <Typography variant="h6" className="mt-4 mb-2">
        {feature.title}
      </Typography>
      {/* <Typography variant="bodySmall" className="text-purple-200">
        {feature.description}
      </Typography> */}
    </div>
  );
}

const BenefitsRow = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
            Your Education is our Priority
          </Typography>
          <Typography variant="body" className="text-lg text-purple-100 max-w-2xl mx-auto">
            We provide affordable education loans with transparent management that helps
            to empower students achieve their dreams without financial stress.
          </Typography>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {featureData.map((feature, index) => (
            <Card key={index} feature={feature} />

          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsRow;