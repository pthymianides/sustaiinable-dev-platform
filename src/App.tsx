import React, { useEffect } from 'react';
import { Puck } from '@measured/puck';
import Hero from './components/home/Hero';
import ImpactMetrics from './components/home/ImpactMetrics';
import ProjectsGrid from './components/projects/ProjectsGrid';
import Header from './components/layout/Header';
import EditButton from './components/editor/EditButton';
import { config } from './puck/config';
import { useEditorStore } from './store/editorStore';
import { useAuth } from './auth/useAuth';
import { AuthProvider } from './auth/AuthProvider';
import { contentSchema } from './validation/contentSchema';

function AppContent() {
  const { isEditing, content, setEditing, setContent, loadContent, saveContent } = useEditorStore();
  const { isAuthenticated, getAccessTokenSilently, canEdit } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        loadContent(token);
      });
    }
  }, [isAuthenticated, getAccessTokenSilently, loadContent]);

  if (isEditing && canEdit()) {
    return (
      <Puck
        config={config}
        data={content}
        onPublish={async (data) => {
          try {
            const validatedContent = contentSchema.parse(data);
            const token = await getAccessTokenSilently();
            await saveContent(validatedContent, token);
            setContent(validatedContent);
            setEditing(false);
          } catch (error) {
            console.error('Validation or save failed:', error);
          }
        }}
        onPreview={() => {
          setEditing(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ImpactMetrics />
        <ProjectsGrid />
      </main>
      <EditButton />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}