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
        <input 
          type={'text'}
          placeholder={'Searching is easier'} 
          value={searchValue} 
          onChange={(e) => handleChange(e.target.value)} 
        />
        <button className={'font-alan p-10 border-2 border-amber-700'}>Clear</button>
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

export default App;
