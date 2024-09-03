const teamMembers = [
  {
    name: 'Agung Perdana',
    role: 'Web Designer',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
    alt: 'Agung Perdana - Web Designer',
  },
  {
    name: 'Viola Resti',
    role: 'Marketing Director',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
    alt: 'Viola Resti - Marketing Director',
  },
  {
    name: 'Rahardiansyah',
    role: 'International Relations',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
    alt: 'Rahardiansyah - International Relations',
  },
  {
    name: 'Andika',
    role: 'Medical Check',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
    alt: 'Andika - Medical Check',
  },
  {
    name: 'Theresa Russell',
    role: 'Doctor Assistant',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
    alt: 'Theresa Russell - Doctor Assistant',
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition duration-300" data-aos="fade-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-volkhov font-bold text-gray-800 dark:text-gray-200">Our Teams</h2>
        <p className="text-gray-600 dark:text-gray-400">Meet the talented individuals behind our success</p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <img src={member.imgSrc} alt={member.alt} className="rounded-lg mb-4 w-48 h-64 object-cover mx-auto shadow-md transition-transform transform hover:scale-110" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
