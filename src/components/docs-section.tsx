import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import '@cyntler/react-doc-viewer/dist/index.css'

export function DocsSection() {
  const docs = [
    { uri: '../../src/assets/file-demo.docx', fileType: 'docx' }, // Local File
    { uri: 'https://pdfobject.com/pdf/sample.pdf' }, // Remote file
    { uri: '../../src/assets/NKTS-520H0663.pdf' } // Local File
  ]

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
}
