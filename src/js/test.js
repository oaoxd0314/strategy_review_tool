import React from 'react';
function Test() {
  return (
    <div className="Test">
        <figure className="bg-gray-100 rounded-xl p-8">
            <img className="w-32 h-32 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                <p className="text-lg font-semibold">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption>
                <div>
                    Sarah Dayan
                </div>
                <div>
                    Staff Engineer, Algolia
                </div>
                </figcaption>
            </div>
        </figure>
    </div>
  );
}

export default Test;
