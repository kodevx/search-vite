import type { FC } from 'react';
import './App.css';
import useApp from './customHook/App/useApp';

const App: FC = () => {

  const { 
    searchValue,
    handleChange,
    isOpenSearchResults
  } = useApp();
  
  return (
    <div>
      <div>
        <input type='text' placeholder={'Searching is easier'} value={searchValue} onChange={handleChange} />
        <button>Clear</button>
      </div>
      <div>
        {isOpenSearchResults && (
          // <TabsContent />
          'tabs'
        )}
      </div>
    </div>
  )
}

export default App
