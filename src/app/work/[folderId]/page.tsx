import { useParams } from 'next/navigation';

export default function WorkFolderPage() {
  const params = useParams();
  const { folderId } = params as { folderId: string };
  const embedUrl = `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Work Folder</h1>
      <iframe
        src={embedUrl}
        style={{ width: '100%', height: '80vh', border: 'none' }}
        title="Google Drive Folder"
      />
    </div>
  );
}
