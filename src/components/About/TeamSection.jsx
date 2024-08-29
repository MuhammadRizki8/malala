const teamMembers = [
  {
    name: 'Agung Perdana',
    role: 'Web Designer',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Viola Resti',
    role: 'Marketing Director',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Rahardiansyah',
    role: 'International Relations',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Andika',
    role: 'Medical Check',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Theresa Russell',
    role: 'Doctor Assistant',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Teams</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img src={member.imgSrc} alt={member.name} className="rounded-lg mb-4 w-48 h-64 object-cover" />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
