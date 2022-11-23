import React, { useState } from 'react'
import {Icon} from '@iconify/react'
import search from '../../../assets/images/search.svg'
import './SearchInput.css'
import { Input } from '../Input'

interface SearchInputProps{
    placeholder?:string
}

const SearchInput: React.FC<SearchInputProps> = ({placeholder}) => {
    
    const [value, setValue] = useState<string>('')

    return (
        <span className='Search-input'>
           <Input className='search' placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}/>
        </span>
    )
}

export default SearchInput