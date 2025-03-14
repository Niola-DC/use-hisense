import React from 'react';
import { Typography } from '../core/Typography';
import Button  from '../core/Button';
import FeatureIcon from '../composite/FeaturesIcom';
import { featureData } from '../../data/benefits';

function Card({ feature }) {
  return (
  
//     <div className="space-y-3 rounded-2xl border border-stone-100 bg-white px-8 py-10">
//   <figure className="mx-auto w-fit rounded-2xl bg-gradient-to-br from-purple-500 p-3 lg:inline-block">
//     <feature.icon className="size-10 text-primary" />
//   </figure>
//   <Typography variant="h6">{feature.text}</Typography>
// </div>


    <div className="space-y-3 rounded-2xl px-6 py-3 h-full">
      <figure className="to-purple-200 mx-auto w-fit rounded-full bg-gradient-to-br from-purple-200 p-3">
        <feature.icon className="size-8 text-secondary" />
      </figure>
      <Typography variant='priority' className='text-center'>{feature.title}</Typography>
    </div>

    // <div
    //   className="rounded-xl p-6 text-center transition-all"
    // >
    //   <FeatureIcon name={feature.icon} />
    //   <Typography variant="h6" className="mt-4 mb-2">
    //     {feature.title}
    //   </Typography>
    //   {/* <Typography variant="bodySmall" className="text-purple-200">
    //     {feature.description}
    //   </Typography> */}
    // </div>
  );
}

const BenefitsRow = () => {
  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
            Your Education is our Priority
          </Typography>
          <Typography variant="body" className="text-lg text-purple-100 max-w-2xl mx-auto">
            We provide affordable education loans with transparent management that helps
            to empower students achieve their dreams without financial stress.
          </Typography>
        </div>

        {/* <div className="grid md:grid-cols-4 gap-6 mb-8">
          {featureData.map((feature, index) => (
            <Card key={index} feature={feature} />

          ))}
        </div> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 mb-8"> */}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
          {featureData.map((feature, index) => (
            <Card key={index} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsRow;