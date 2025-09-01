import React from 'react';

const MY_WORK_DRIVE_LINK = 'https://drive.google.com/drive/folders/1OVI7zq7xDJU9VSMW0WNQsO-OAj7bVyJJ'; // Replace with your actual Drive folder link

const MyWorkSection = () => {
  return (
    <section id="work" className="animate-fade-in">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">
          My Work
        </h2>
        <div className="flex flex-col items-center justify-center">
          <a
            href={MY_WORK_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-500 hover:from-blue-800 hover:to-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 text-xl mb-8"
          >
            View My Google Drive Projects
          </a>
          <p className="text-lg text-center text-foreground/80 max-w-2xl">
            Explore my project files, designs, and resources directly on Google Drive. Click the button above to see the full collection!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
