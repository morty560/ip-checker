/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import SearchHistoryComponent from "./components/SearchHistoryComponent/SearchHistoryComponent"
import { useUserData } from './hooks/useUserData';
import DataDisplayComponent from "./components/DataDisplayComponent/DataDisplayComponent"
import tw from 'twin.macro';
import { H1 } from './components/Typography/Typography';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [recentSearch, setRecentSearch] = useState({})
  const [userHistory, setUserHistory] = useState([])
  const { userData } = useUserData()

  const addRecentSearch = (search) => {
    setRecentSearch(search)
}
  const addSearch = (search) => {
    setUserHistory(oldArr => [...oldArr, search])
  }

  return (
    <div css={[tw`flex flex-col bg-black w-full pb-[5em] pt-[1em]`]}>
      <header css={[tw`text-center`]}>
        <H1>IP checker</H1>
      </header>
      <div css={[tw`flex flex-col xl:flex-row max-w-[1500px]`]}>
        <div css={[tw`w-full flex order-2 xl:order-1 xl:w-[30%]`]}>
          <SearchHistoryComponent 
            data={userHistory}
            setSearch={addRecentSearch}
          />
        </div>
        <div css={[tw`flex flex-col items-center w-full order-1 xl:order-2 xl:w-[70%]`]}>
          <DataDisplayComponent 
            data={userData}
          />
          <InputComponent 
            setRecentSearch={addRecentSearch}
            setUserHistory={addSearch}
          />
          <DataDisplayComponent 
            data={recentSearch}
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
