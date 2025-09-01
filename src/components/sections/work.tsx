

import { useEffect, useState } from 'react';
import { GOOGLE_DRIVE_API_KEY, GOOGLE_DRIVE_FOLDER_ID } from '@/constants/googleDrive';
import { Folder, Star, Hexagon, Diamond, Heart, Library, LibraryBig, Shapes, FileText, Image as ImageIcon, FileVideo, FileArchive, FileAudio, FileSpreadsheet, Presentation, FileCode, File } from 'lucide-react';

// Helper to fetch files from Google Drive
async function fetchDriveFiles() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents+and+trashed=false&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name,thumbnailLink,webViewLink,mimeType,parents,createdTime)`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return data.files || [];
}

export default function WorkSection() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDriveFiles().then(f => {
      setFiles(f);
      setLoading(false);
    });
  }, []);


  // Icon/color helpers
  const folderColors = [
    'from-blue-600 to-indigo-500',
    'from-pink-500 to-fuchsia-500',
    'from-green-600 to-teal-500',
    'from-yellow-500 to-orange-500',
    'from-purple-600 to-violet-500',
    'from-red-600 to-pink-500',
    'from-cyan-600 to-blue-400',
    'from-amber-600 to-yellow-400',
    'from-lime-600 to-green-400',
    'from-rose-600 to-pink-400',
  ];
  // Use a set of unique geometric/3D-like icons for folders
  const folderIcons = [Star, Hexagon, Diamond, Heart, Library, LibraryBig, Shapes, Folder];
  // Unique colors for each folder (vibrant, 3D-like)
  const folderIconColors = [
    'text-blue-400',
    'text-pink-400',
    'text-green-400',
    'text-yellow-400',
    'text-purple-400',
    'text-red-400',
    'text-cyan-400',
    'text-fuchsia-400',
  ];
  const fileIcons: { [key: string]: any } = {
    'image/': ImageIcon,
    'video/': FileVideo,
    'application/pdf': FileText,
    'application/zip': FileArchive,
    'audio/': FileAudio,
    'application/vnd.ms-excel': FileSpreadsheet,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': FileSpreadsheet,
    'application/vnd.ms-powerpoint': Presentation,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': Presentation,
    'text/': FileCode,
  };
  function getFileIcon(mimeType: string): any {
    if (!mimeType) return File;
    for (const key in fileIcons) {
      if (mimeType.startsWith(key)) return fileIcons[key];
    }
    return File;
  }

  const folders = files.filter(f => f.mimeType === 'application/vnd.google-apps.folder');
  const filesOnly = files.filter(f => f.mimeType !== 'application/vnd.google-apps.folder');

  return (
    <section id="work" className="animate-fade-in">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">
          My Work
        </h2>
        {loading ? (
          <div className="text-center text-lg">Loading Google Drive folders...</div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {folders.map((folder, idx) => {
              const Icon = folderIcons[idx % folderIcons.length];
              const iconColor = folderIconColors[idx % folderIconColors.length];
              return (
                <a
                  key={folder.id}
                  href={folder.webViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full max-w-xs bg-card/80 border-primary/20 shadow-lg rounded-xl p-5 flex flex-col items-center hover:scale-105 hover:shadow-accent/20 transition-transform duration-300 focus:outline-none mb-4`}
                >
                  <div className="mb-4 flex items-center justify-center">
                    <Icon className={`w-14 h-14 drop-shadow-2xl ${iconColor}`} style={{filter:'drop-shadow(0 4px 16px rgba(0,0,0,0.25))'}} />
                  </div>
                  <span className="text-xl font-extrabold text-white text-center mb-1 tracking-wider uppercase drop-shadow-lg font-headline">{folder.name}</span>
                  <span className="block text-xs text-accent underline opacity-80 font-semibold">Google Drive Folder</span>
                </a>
              );
            })}
            {filesOnly.map((file, idx) => {
              const Icon = getFileIcon(file.mimeType);
              const colorList = [
                'from-pink-500 to-fuchsia-500',
                'from-green-600 to-teal-500',
                'from-yellow-500 to-orange-500',
                'from-purple-600 to-violet-500',
                'from-red-600 to-pink-500',
                'from-cyan-600 to-blue-400',
                'from-amber-600 to-yellow-400',
                'from-lime-600 to-green-400',
                'from-rose-600 to-pink-400',
                'from-blue-600 to-indigo-500',
              ];
              const Color = colorList[idx % colorList.length];
              return (
                <a
                  key={file.id}
                  href={file.webViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full max-w-xs bg-card/80 border-primary/20 shadow-lg rounded-xl p-5 flex flex-col items-center hover:scale-105 hover:shadow-accent/20 transition-transform duration-300 focus:outline-none mb-4`}
                >
                  <div className="mb-4 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-fuchsia-400 drop-shadow-lg" />
                  </div>
                  <span className="text-xl font-bold text-white text-center mb-1 truncate w-full tracking-wide font-headline" title={file.name}>{file.name}</span>
                  <span className="block text-xs text-fuchsia-400 underline opacity-80 font-semibold">Google Drive File</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
