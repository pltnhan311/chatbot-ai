import { useState } from 'react'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import '@cyntler/react-doc-viewer/dist/index.css'

export const DocViewerWithInputApp = () => {
  const [selectedDocs, setSelectedDocs] = useState<File[]>([])

  const supportedFileTypes = ['pdf', 'png', 'docx']

  const getFileType = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    return supportedFileTypes.includes(extension!) ? extension : 'default'
  }

  return (
    <>
      <input
        type='file'
        accept='.pdf'
        multiple
        onChange={(el) => el.target.files?.length && setSelectedDocs(Array.from(el.target.files))}
      />
      <DocViewer
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
          fileType: getFileType(file.name)
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </>
  )
}
