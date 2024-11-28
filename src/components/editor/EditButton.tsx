import React from 'react';
import { Edit } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { useAuth } from '../../auth/useAuth';

export default function EditButton() {
  const { setEditing } = useEditorStore();
  const { isAuthenticated, canEdit } = useAuth();

  if (!isAuthenticated || !canEdit()) {
    return null;
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
      aria-label="Edit page"
    >
      <Edit className="h-5 w-5" />
    </button>
  );
}