import React, { useState, useEffect } from 'react'
import HeaderChat from '~/components/header-chat'
import { InputMessage } from '~/components/input-message'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import DemoMessage from '~/components/demo'
// import { DocsSection } from '~/components/docs-section';
// import { DocViewerWithInputApp } from '~/components/docs-input';

const ChatLayout = () => {
  const [models, setModels] = useState()
  const [iframeSrc, setIframeSrc] = useState(
    'https://onedrive.live.com/embed?resid=CAF0B1F78D203FDC%21176402&authkey=!AKB37HTCLvgEm78&em=2'
  )

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://qna-server.netlify.app/.netlify/functions/app/categories')
      const json = await res.json()
      setModels(json)
      console.log(json)
    }

    fetchData()
  }, [])

  console.log(models)

  const handleIframeSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIframeSrc(e.target.value)
  }

  return (
    <div className='flex w-screen h-screen p-4'>
      <PanelGroup direction='horizontal'>
        <Panel defaultSize={50} minSize={20}>
          <div className='h-screen flex-1 overflow-auto'>
            <input
              type='text'
              value={iframeSrc}
              onChange={handleIframeSrcChange}
              className='w-full p-2'
              placeholder='Enter iframe URL'
            />
            <iframe src={iframeSrc} width='100%' height='100%'></iframe>
          </div>
        </Panel>
        <PanelResizeHandle />

        <Panel defaultSize={50} minSize={20}>
          <div className='flex flex-1 flex-col justify-between h-full overflow-auto'>
            <HeaderChat />

            <div className='mb-8 overflow-auto'>
              <DemoMessage />
            </div>

            <div className='p-2'>
              <InputMessage />
              {/* <BasicAutocomplete /> */}
            </div>
          </div>
        </Panel>
        <PanelResizeHandle />
      </PanelGroup>
    </div>
  )
}

export default ChatLayout
