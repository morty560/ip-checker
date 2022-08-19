/** @jsxImportSource @emotion/react */
import React, {useRef} from 'react';
import { patternValidation, removeHttp, removeRestUrl } from '../../utils/helpers';
import { ipApiUrl } from "../../constants/apiUrls";
import tw from "twin.macro"
import { toast } from 'react-toastify';

const InputComponent = ({setRecentSearch, setUserHistory}) => {
    const inputRef = useRef('')
    const notify = (input) => toast.error(input, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    const fetchData = (value) => {
        fetch(`${ipApiUrl}/${value}`)
          .then((response) => response.json())
          .then((result) => {
              if(result.status === 'success'){
                setRecentSearch({value, result})
                setUserHistory({value, result})
                }
                if(result.status === 'fail'){
                    notify('Please check you input data')    
                }
        })
          .catch((error) => {
            notify('An error occurred')
            console.log('An error occurred', error)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const enteredvalue = inputRef.current.value
        const isTested = patternValidation(enteredvalue)
        if(isTested){
            let newValue = removeHttp(enteredvalue)
            let tranformedValue = removeRestUrl(newValue)
            fetchData(tranformedValue)
        }
        if(!isTested){
            notify('Please check you input data')
        }
    }

    return (
        <form onSubmit={handleSubmit} css={[tw`w-full flex justify-center items-center m-[20px 0]`]}>
            <input 
                type="text"
                minLength="3"
                ref={inputRef}
                css={[tw`w-[40%] p-[12px 24px] rounded-[8px]`]}
            />
            <button 
                css={[tw`m-[0 10px] p-[12px 24px] rounded-[8px] bg-purple hover:bg-secondary hover:border-purple cursor-pointer`]} 
                type="submit"
            >
                Check
            </button>
        </form>
    )
}

export default InputComponent